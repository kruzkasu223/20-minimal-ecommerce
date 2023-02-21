export type ProductType = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  image: string
}

export type CartProductType = {
  productId: number
  quantity: number
  product: ProductType
}
