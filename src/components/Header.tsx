import {NavLink} from "react-router"
import logo from "../assets/bankLogo.png"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/">
          <img src={logo} className={styles.logoImg} />
        </NavLink>
        <NavLink className={({isActive})=>`${styles["nav-link"]} ${isActive && styles.active}`} to="/login">Logowanie</NavLink>
        <NavLink className={({isActive})=>`${styles["nav-link"]} ${isActive && styles.active}`} to="/security">Zasady Bezpieczeństwo</NavLink>
        <NavLink className={({isActive})=>`${styles["nav-link"]} ${isActive && styles.active}`} to="/project">O Projekcie</NavLink>
      </nav>
    </header>
  )
}
