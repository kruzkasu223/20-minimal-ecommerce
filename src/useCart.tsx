import { atom, useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { useCallback, useState } from "react"
import type { CartProductType, ProductType } from "./types"

const cartAtom = atomWithStorage<CartProductType[]>("cart", [])
const cartCountAtom = atom((get) => get(cartAtom).length)

export const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom)
  const [cartCount] = useAtom(cartCountAtom)

  const handleAddToCart = useCallback(
    (product: ProductType) => {
      const productInCart = cart.find((item) => item.productId === product.id)
      if (productInCart) {
        setCart((prev) =>
          prev.map((item) =>
            item.productId === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        )
      } else {
        setCart((prev) => [
          ...prev,
          {
            productId: product.id,
            quantity: 1,
            product,
          },
        ])
      }
    },
    [cart, setCart]
  )

  const handleRemoveFromCart = useCallback(
    (productId: number) => {
      setCart((prev) => prev.filter((item) => item.productId !== productId))
    },
    [setCart]
  )

  const handleUpdateQuantity = useCallback(
    (productId: number, type: "inc" | "dec") => {
      setCart((prev) =>
        prev.map((item) =>
          item.productId === productId
            ? {
                ...item,
                quantity:
                  type === "inc" ? item.quantity + 1 : item.quantity - 1,
              }
            : item
        )
      )
    },
    [setCart]
  )

  return {
    cart,
    cartCount,
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateQuantity,
  }
}
