import type { ProductType } from "~/types"

type ProductCardProps = {
  isCart?: boolean
  quantity?: number
  product: ProductType
  handleAddToCart?: (product: ProductType) => void
  handleRemoveFromCart?: (productId: number) => void
  handleUpdateQuantity?: (productId: number, type: "inc" | "dec") => void
}

export const ProductCard = ({
  product,
  quantity = 0,
  isCart = false,
  handleAddToCart,
  handleRemoveFromCart,
  handleUpdateQuantity,
}: ProductCardProps) => {
  return (
    <div className="card w-96 bg-neutral shadow-xl">
      <figure>
        <img src={product.image} alt={product.title} />
      </figure>
      <div className="card-body items-center text-center">
        <div className="flex w-full flex-wrap justify-center gap-2">
          <div className="badge badge-primary uppercase">{product.brand}</div>
          <div className="badge badge-primary uppercase">
            {product.category}
          </div>
        </div>
        <h2 className="card-title">{product.title}</h2>
        <h2 className="card-title">${product.price}</h2>
        <p className="m-2">{product.description}</p>

        <div className="card-actions">
          {isCart ? (
            <div>
              <div className="flex items-center justify-center">
                <button
                  className="btn-outline btn-accent btn-xs btn"
                  onClick={() => handleUpdateQuantity?.(product.id, "dec")}
                  disabled={quantity === 1}
                >
                  -
                </button>
                <span className="mx-2">{quantity}</span>
                <button
                  className="btn-outline btn-accent btn-xs btn"
                  onClick={() => handleUpdateQuantity?.(product.id, "inc")}
                >
                  +
                </button>
              </div>

              <div className="m-3">
                <span className="font-bold">
                  ${product.price} x {quantity} = ${product.price * quantity}
                </span>
              </div>

              <button
                className="btn-accent btn"
                onClick={() => handleRemoveFromCart?.(product.id)}
              >
                Remove from Cart
              </button>
            </div>
          ) : (
            <button
              className="btn-accent btn"
              onClick={() => handleAddToCart?.(product)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
