import { useEffect, useState } from "react"
import { api } from "../../services/app"
import { Container } from "./styles"


interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionTable() {
  /*
  useEffect(() => {
    api.get('transactions')
      .then(data => console.log(data))
  })
  */

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(reponse => setTransactions(reponse.data.transactions))
  }, []);


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td >{transaction.title}</td>
                <td className={transaction.type}>
                  {
                    new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD'
                    }).format(transaction.amount)
                  }
                </td>
                <td>{transaction.category}</td>
                <td>
                  {
                    new Intl.DateTimeFormat('en-US').format(new Date(transaction.createdAt))
                  }
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}