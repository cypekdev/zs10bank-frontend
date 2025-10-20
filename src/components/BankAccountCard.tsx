import styles from "./BankAccountCard.module.css"

type AccountType = 'personal' | 'saving';

type AccountNumber = `${number} ${number} ${number} ${number} ${number} ${number} ${number}`

interface BankAccountProps {
  accountType: AccountType;
  accountNumber: AccountNumber;
  availableFounds: number,
}

export default function BankAccountCard({ 
  accountType = 'personal',
  accountNumber, 
  availableFounds 
}: BankAccountProps) {
  return (
    <>
      <div className={styles.card}>
        <span className={styles["account-type"]}>{accountType === 'personal' ? 'Konto osobiste' : 'Oszczędności'}</span>
        <span className={styles["label"]}>Dostępne środki</span>
        <span className={styles["available-funds"]}>
          {availableFounds.toFixed(2)} 
          <span className={styles["currency"]}> PLN</span>
        </span>
        <span className={styles["label"]}>Numer konta</span>
        <span className={styles["account-number"]}>{accountNumber}</span>
      </div>
      </>
  )
}
