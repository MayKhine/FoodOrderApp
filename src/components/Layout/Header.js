import { Fragment } from "react"
import mealImg from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import { HeaderCartButton } from "./HeaderCartButton"

export const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Yummy React</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="Image desc" />
      </div>
    </Fragment>
  )
}
