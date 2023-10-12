import { useContext, useEffect, useState } from "react"

import { CartContext } from "../../store/cart-context"
import { CartIcon } from "../Cart/CartIcon"

import classes from "./HeaderCartButton.module.css"
import { CartItem } from "../Cart/CartItem"

export const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)
  const { items } = cartCtx

  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false)

  const numberOfCartItems = items.reduce((cur, item) => {
    return cur + item.amount
  }, 0)
  const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ""}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }

    setBtnIsHighLighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button
      className={btnClasses}
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
