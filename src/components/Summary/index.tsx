import incomeImg from "../../assets/entradas.svg"
import outcomeImg from "../../assets/saidas.svg"
import totalImg from "../../assets/total.svg"
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles"


export function Summary() {

  const { transactions } = useTransactions();

  const summary = transactions.reduce((total, transaction) => {
    if (transaction.type === 'deposit') {
      total.deposits += transaction.amount;
      total.totals += transaction.amount;
    } else {
      total.withdraws += transaction.amount;
      total.totals -= transaction.amount;
    }
    return total;
  }, {
    deposits: 0,
    withdraws: 0,
    totals: 0,
  })


  return (
    <Container>
      <div>
        <header>
          <p>Incomings</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{
          new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Withdrawals</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>{
          new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{
          new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.totals)}
        </strong>
      </div>


    </Container>
  )
}