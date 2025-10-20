import BankAccountCard from "../components/BankAccountCard"
import styles from "./Dashboard.module.css"

export default function Dashboard() {
  return (
    <div className={styles.container}>  
      <h1 className={styles["dashboard-header"]}>Panel użytkownika</h1>

      <section id={styles.accounts}>
        <BankAccountCard 
          accountType="personal" 
          availableFounds={992.04} 
          accountNumber={"99 1234 1234 1234 1234 1234 1234"} />
        <BankAccountCard
          accountType="saving"
          availableFounds={10120}
          accountNumber={"45 1234 3456 5678 6789 6768 2341"} />
      </section>

      <section>
        
      </section>
    </div>
  )

}