import { useContext } from "react"

import { CartContext } from "../../store/cart-context"
import { CartIcon } from "../Cart/CartIcon"

import classes from "./HeaderCartButton.module.css"

export const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount
  }, 0)
  return (
    <button
      className={classes.button}
      onClick={() => {
        props.onShowCart()
      }}
    >
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}
