import Link from "next/link"
import { useCart } from "~/useCart"

export const Header = () => {
  const { cartCount } = useCart()

  return (
    <div className="navbar bg-accent px-4">
      <div className="flex-1">
        <Link
          href="/"
          className="btn-ghost btn text-xl normal-case text-base-100"
        >
          20/27 - Minimal Ecommerce
        </Link>
      </div>
      <div className="flex-none">
        <Link href="/cart" className="btn-ghost btn text-base-100">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">{cartCount}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
