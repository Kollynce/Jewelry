import { initializeApp } from 'firebase/app'
import { 
  getFirestore, 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc,
  query,
  where,
  orderBy,
  writeBatch,
  serverTimestamp,
  addDoc
} from 'firebase/firestore'
import { mockDataLoader } from '../utils/mockDataLoader'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const firebaseService = {
  // User profile operations
  async createUserProfile(userId, userData) {
    const userRef = doc(db, 'users', userId)
    await setDoc(userRef, {
      ...userData,
      createdAt: new Date()
    })
  },

  async getUserProfile(userId) {
    const userRef = doc(db, 'users', userId)
    const userSnap = await getDoc(userRef)
    return userSnap.exists() ? userSnap.data() : null
  },

  async updateUserProfile(userId, userData) {
    const userRef = doc(db, 'users', userId)
    await setDoc(userRef, userData, { merge: true })
  },

  // Product operations
  async getProducts() {
    try {
      // If you have actual Firebase implementation, keep it here
      // For now, we'll throw an error to simulate Firebase failure
      throw new Error('Firebase not configured - falling back to mock data')
    } catch (error) {
      console.log('Firebase: falling back to mock data for all products')
      // Instead of throwing error, return mock products
      return mockDataLoader.getProducts()
    }
  },

  async getFeaturedProducts(limit = 4) {
    const productsRef = collection(db, 'products')
    const q = query(
      productsRef,
      where('featured', '==', true),
      orderBy('createdAt', 'desc')
    )
    const productsSnap = await getDocs(q)
    return productsSnap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })).slice(0, limit)
  },

  async getProduct(productId) {
    try {
      // If you have actual Firebase implementation, keep it here
      // For now, we'll throw an error to simulate Firebase failure
      // and let the app fall back to mock data
      throw new Error('Firebase not configured - falling back to mock data')
    } catch (error) {
      console.log(`Firebase: falling back to mock data for product ${productId}`)
      // Instead of throwing error immediately, try to get the product from mock data
      return mockDataLoader.getProductById(productId)
    }
  },

  // Order operations
  async createOrder(orderData) {
    try {
      // Ensure required fields exist
      const timestamp = serverTimestamp();
      
      const completeOrderData = {
        ...orderData,
        createdAt: timestamp,
        orderDate: orderData.orderDate || timestamp,
        status: orderData.status || 'processing',
        items: Array.isArray(orderData.items) ? orderData.items : []
      };
      
      console.log('Creating order with data:', completeOrderData);
      
      const ordersRef = collection(db, 'orders');
      const docRef = await addDoc(ordersRef, completeOrderData);
      return docRef;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  },

  async getUserOrders(userId) {
    try {
      const ordersRef = collection(db, 'orders');
      
      // Use createdAt for consistent sorting (orderDate might be missing or inconsistent)
      // If you haven't created the index yet, temporarily use a simpler query
      let querySnapshot;
      try {
        const q = query(
          ordersRef, 
          where('userId', '==', userId),
          orderBy('createdAt', 'desc')
        );
        querySnapshot = await getDocs(q);
      } catch (indexError) {
        // Fallback to a simpler query if index doesn't exist
        console.warn('Index error, using fallback query:', indexError);
        const q = query(
          ordersRef, 
          where('userId', '==', userId)
        );
        querySnapshot = await getDocs(q);
      }
      
      if (querySnapshot.empty) {
        console.log('No orders found for user:', userId);
        return [];
      }
      
      return querySnapshot.docs.map(doc => {
        const data = doc.data();
        console.log('Order data:', doc.id, data); // Debug what's coming from Firestore
        
        return {
          id: doc.id,
          ...data,
          // Format timestamps properly for display
          orderDate: data.orderDate || data.createdAt || new Date(),
          createdAt: data.createdAt || data.orderDate || new Date(),
          orderNumber: data.orderNumber || `ORD-${doc.id.substring(0, 6)}`,
          status: data.status || 'processing',
          items: data.items || [],
          total: data.total || 0
        };
      });
    } catch (error) {
      console.error('Error getting user orders:', error);
      return []; // Return empty array instead of throwing, better for UI
    }
  }
}

export default app