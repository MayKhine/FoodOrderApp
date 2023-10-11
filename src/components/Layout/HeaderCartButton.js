import classes from "./HeaderCartButton.module.css"
import { CartIcon } from "../Cart/CartIcon"

export const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> 4</span>
    </button>
  )
}
