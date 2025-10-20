import { useState } from "react"
import styles from './LoginForm.module.css'

export default function LoginForm() {
  const [usernameProvided, setUsernameProvided] = useState(false)


  if (!usernameProvided) {
    return (
      <>
        <form>
          <span>Wprowadź numer klienta</span>
          <input type="text" />
          <button onClick={() => setUsernameProvided(true)}>Dalej</button>
        </form>
      </>
    )
  }
  else {
    return (
      <>
        <form>
          <span>Wprowadź hasło</span>
          <input className={styles["password-input-cell"]} type="password" size={1} maxLength={1} />
          <input className={styles["password-input-cell"]} type="password" size={1} maxLength={1} />
          <input className={styles["password-input-cell"]} type="password" size={1} maxLength={1} />
          <input className={styles["password-input-cell"]} type="password" size={1} maxLength={1} />
          <input className={styles["password-input-cell"]} type="password" size={1} maxLength={1} />
          <input className={styles["password-input-cell"]} type="password" size={1} maxLength={1} />
          <input className={styles["password-input-cell"]} type="password" size={1} maxLength={1} />
          <input className={styles["password-input-cell"]} type="password" size={1} maxLength={1} />
          <input className={styles["password-input-cell"]} type="password" size={1} maxLength={1} />
          <input className={styles["password-input-cell"]} type="password" size={1} maxLength={1} />
          <input className={styles["password-input-cell"]} type="password" size={1} maxLength={1} />
          <input className={styles["password-input-cell"]} type="password" size={1} maxLength={1} />
          <input className={styles["password-input-cell"]} type="password" size={1} maxLength={1} />
          <input className={styles["password-input-cell"]} type="password" size={1} maxLength={1} />
          <input className={styles["password-input-cell"]} type="password" size={1} maxLength={1} />
          <input className={styles["password-input-cell"]} type="password" size={1} maxLength={1} />
          <input className={styles["password-input-cell"]} type="password" size={1} maxLength={1} />
        </form>
      </>
    )
  }

}