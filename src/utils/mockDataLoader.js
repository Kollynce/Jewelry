import productsData from '../data/products.json'

export const mockDataLoader = {
  getProducts() {
    return new Promise((resolve) => {
      // Simulate network delay
      setTimeout(() => {
        resolve(productsData.products)
      }, 500)
    })
  }
}
