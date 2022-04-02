import { Container } from "./styles"

export function TransactionTable() {
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
          <tr>
            <td >Website Development</td>
            <td className="deposit">U$ 4.000,00</td>
            <td>Development</td>
            <td>03/18/2022</td>
          </tr>
          <tr>
            <td>Website Maintenance</td>
            <td className="deposit">U$ 200,00</td>
            <td>Support IT</td>
            <td>10/18/2022</td>
          </tr>
          <tr>
            <td>Website Design</td>
            <td className="withdraw">- U$ 4.000,00</td>
            <td>Web Design</td>
            <td>07/29/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}