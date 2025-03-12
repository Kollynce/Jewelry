<template>
  <div class="admin-orders min-h-screen bg-gray-50 py-8">
    <div class="container mx-auto px-4">
      <div class="mb-8 flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">Order Management</h1>
          <p class="text-gray-600">View and manage customer orders</p>
        </div>
        <div class="mt-4 md:mt-0">
          <button 
            @click="loadOrders" 
            class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
        </div>
      </div>

      <!-- Filter Section -->
      <div class="bg-white rounded-lg shadow-md p-4 mb-6">
        <div class="flex flex-wrap items-center gap-4">
          <div>
            <label class="text-sm text-gray-600 block mb-1">Filter by Status:</label>
            <select 
              v-model="statusFilter" 
              class="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 focus:border-blue-500"
            >
              <option value="all">All Orders</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div>
            <label class="text-sm text-gray-600 block mb-1">Search:</label>
            <input 
              v-model="searchTerm" 
              type="text" 
              placeholder="Order ID or customer name" 
              class="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 focus:border-blue-500"
            >
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center h-64">
        <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-opacity-75"></div>
      </div>

      <!-- Orders Table -->
      <div v-else-if="filteredOrders.length > 0" class="bg-white rounded-lg shadow-md overflow-hidden">
        <table class="w-full text-left">
          <thead class="bg-gray-50 border-b">
            <tr>
              <th class="px-6 py-3 text-gray-700 font-medium">Order ID</th>
              <th class="px-6 py-3 text-gray-700 font-medium">Date</th>
              <th class="px-6 py-3 text-gray-700 font-medium">Customer</th>
              <th class="px-6 py-3 text-gray-700 font-medium">Total</th>
              <th class="px-6 py-3 text-gray-700 font-medium">Status</th>
              <th class="px-6 py-3 text-gray-700 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in filteredOrders" :key="order.id" class="border-b hover:bg-gray-50">
              <td class="px-6 py-4 font-medium">{{ order.orderNumber || `#${order.id.substring(0, 6)}` }}</td>
              <td class="px-6 py-4">{{ formatDate(order.orderDate) }}</td>
              <td class="px-6 py-4">{{ order.customerName || 'Unknown' }}</td>
              <td class="px-6 py-4">${{ order.total?.toFixed(2) || '0.00' }}</td>
              <td class="px-6 py-4">
                <span 
                  :class="{
                    'bg-yellow-100 text-yellow-800': order.status === 'processing',
                    'bg-blue-100 text-blue-800': order.status === 'shipped',
                    'bg-green-100 text-green-800': order.status === 'delivered',
                    'bg-red-100 text-red-800': order.status === 'cancelled'
                  }"
                  class="px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ capitalizeFirstLetter(order.status) }}
                </span>
              </td>
              <td class="px-6 py-4">
                <button 
                  @click="viewOrderDetails(order)" 
                  class="text-blue-600 hover:text-blue-900 mr-3"
                >
                  View
                </button>
                <button 
                  @click="openUpdateStatus(order)" 
                  class="text-green-600 hover:text-green-900"
                >
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- No Orders Message -->
      <div v-else class="bg-white rounded-lg shadow-md p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h2 class="text-xl font-semibold text-gray-700">No orders found</h2>
        <p class="text-gray-500 mt-1">No orders match your current filters.</p>
      </div>

      <!-- Order Details Modal -->
      <div v-if="showOrderDetailsModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-6 border-b">
            <div class="flex justify-between items-center">
              <h2 class="text-2xl font-bold text-gray-800">Order Details</h2>
              <button @click="showOrderDetailsModal = false" class="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 class="font-medium text-gray-700 mb-2">Order Information</h3>
                <p><span class="text-gray-500">Order ID:</span> {{ selectedOrder?.orderNumber || `#${selectedOrder?.id.substring(0, 6)}` }}</p>
                <p><span class="text-gray-500">Date:</span> {{ formatDate(selectedOrder?.orderDate) }}</p>
                <p>
                  <span class="text-gray-500">Status:</span> 
                  <span 
                    :class="{
                      'bg-yellow-100 text-yellow-800': selectedOrder?.status === 'processing',
                      'bg-blue-100 text-blue-800': selectedOrder?.status === 'shipped',
                      'bg-green-100 text-green-800': selectedOrder?.status === 'delivered',
                      'bg-red-100 text-red-800': selectedOrder?.status === 'cancelled'
                    }"
                    class="px-3 py-1 rounded-full text-sm font-medium ml-1"
                  >
                    {{ capitalizeFirstLetter(selectedOrder?.status) }}
                  </span>
                </p>
                <p><span class="text-gray-500">Total:</span> ${{ selectedOrder?.total?.toFixed(2) || '0.00' }}</p>
              </div>
              <div>
                <h3 class="font-medium text-gray-700 mb-2">Customer Information</h3>
                <p><span class="text-gray-500">Name:</span> {{ selectedOrder?.customerName || 'N/A' }}</p>
                <p><span class="text-gray-500">Email:</span> {{ selectedOrder?.email || 'N/A' }}</p>
                <p><span class="text-gray-500">Phone:</span> {{ selectedOrder?.phone || 'N/A' }}</p>
              </div>
            </div>
            
            <div v-if="selectedOrder?.shippingAddress" class="mb-6">
              <h3 class="font-medium text-gray-700 mb-2">Shipping Address</h3>
              <p>{{ selectedOrder.shippingAddress.street }}, {{ selectedOrder.shippingAddress.city }}</p>
              <p>{{ selectedOrder.shippingAddress.state }}, {{ selectedOrder.shippingAddress.zip }}</p>
              <p>{{ selectedOrder.shippingAddress.country }}</p>
            </div>
            
            <div class="mb-6">
              <h3 class="font-medium text-gray-700 mb-2">Order Items</h3>
              <div class="border rounded-lg overflow-hidden">
                <table class="w-full text-sm">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-2 text-left">Product</th>
                      <th class="px-4 py-2 text-left">Price</th>
                      <th class="px-4 py-2 text-left">Quantity</th>
                      <th class="px-4 py-2 text-right">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in selectedOrder?.items" :key="index" class="border-t">
                      <td class="px-4 py-3">
                        <div class="flex items-center">
                          <img 
                            :src="item.image || 'https://via.placeholder.com/80'" 
                            alt="Product" 
                            class="w-12 h-12 object-cover rounded mr-3"
                          >
                          <span>{{ item.name }}</span>
                        </div>
                      </td>
                      <td class="px-4 py-3">${{ item.price?.toFixed(2) }}</td>
                      <td class="px-4 py-3">{{ item.quantity }}</td>
                      <td class="px-4 py-3 text-right">${{ (item.price * item.quantity).toFixed(2) }}</td>
                    </tr>
                  </tbody>
                  <tfoot class="bg-gray-50">
                    <tr>
                      <td colspan="3" class="px-4 py-2 text-right font-medium">Total:</td>
                      <td class="px-4 py-2 text-right font-bold">${{ selectedOrder?.total?.toFixed(2) }}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            
            <div class="flex justify-end">
              <button
                @click="openUpdateStatus(selectedOrder)"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2"
              >
                Update Status
              </button>
              <button
                @click="showOrderDetailsModal = false"
                class="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Update Status Modal -->
      <div v-if="showStatusModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
          <h2 class="text-xl font-bold mb-4">Update Order Status</h2>
          <div class="mb-4">
            <p class="text-gray-600 mb-2">Order: {{ selectedOrder?.orderNumber || `#${selectedOrder?.id.substring(0, 6)}` }}</p>
            <label class="block text-gray-700 mb-2">Status:</label>
            <select 
              v-model="newStatus" 
              class="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 focus:border-blue-500"
            >
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div class="flex justify-end gap-2">
            <button
              @click="showStatusModal = false"
              class="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              @click="updateOrderStatus"
              class="bg-blue-600 text-white px-4 py-2 rounded-lg"
              :disabled="statusUpdateLoading"
            >
              <span v-if="statusUpdateLoading" class="inline-block animate-spin mr-2">⌛</span>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { firebaseService } from '../services/firebaseService';

// State
const orders = ref([]);
const loading = ref(true);
const statusFilter = ref('all');
const searchTerm = ref('');
const showOrderDetailsModal = ref(false);
const showStatusModal = ref(false);
const selectedOrder = ref(null);
const newStatus = ref('');
const statusUpdateLoading = ref(false);

// Computed
const filteredOrders = computed(() => {
  let result = orders.value;
  
  // Filter by status
  if (statusFilter.value !== 'all') {
    result = result.filter(order => order.status === statusFilter.value);
  }
  
  // Filter by search term
  if (searchTerm.value.trim()) {
    const term = searchTerm.value.toLowerCase();
    result = result.filter(order => {
      const orderId = order.orderNumber?.toLowerCase() || order.id.toLowerCase();
      const customerName = order.customerName?.toLowerCase() || '';
      const email = order.email?.toLowerCase() || '';
      
      return orderId.includes(term) || 
        customerName.includes(term) || 
        email.includes(term);
    });
  }
  
  return result;
});

// Methods
const loadOrders = async () => {
  loading.value = true;
  try {
    const allOrders = await firebaseService.getAllOrders();
    orders.value = allOrders;
  } catch (error) {
    console.error("Error loading orders:", error);
    // You could add error handling UI here if needed
  } finally {
    loading.value = false;
  }
};

const viewOrderDetails = (order) => {
  selectedOrder.value = order;
  showOrderDetailsModal.value = true;
};

const openUpdateStatus = (order) => {
  selectedOrder.value = order;
  newStatus.value = order.status || 'processing';
  showStatusModal.value = true;
};

const updateOrderStatus = async () => {
  if (!selectedOrder.value || !newStatus.value) return;
  
  statusUpdateLoading.value = true;
  try {
    await firebaseService.updateOrderStatus(selectedOrder.value.id, newStatus.value);
    
    // Update the order in the local state
    const index = orders.value.findIndex(o => o.id === selectedOrder.value.id);
    if (index !== -1) {
      orders.value[index].status = newStatus.value;
    }
    
    // Update selected order if the details modal is open
    if (selectedOrder.value) {
      selectedOrder.value.status = newStatus.value;
    }
    
    showStatusModal.value = false;
  } catch (error) {
    console.error("Error updating order status:", error);
    // You could add error handling UI here if needed
  } finally {
    statusUpdateLoading.value = false;
  }
};

const formatDate = (dateValue) => {
  if (!dateValue) return 'N/A';
  
  const date = dateValue.toDate ? dateValue.toDate() : new Date(dateValue);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Lifecycle
onMounted(() => {
  loadOrders();
});
</script>
