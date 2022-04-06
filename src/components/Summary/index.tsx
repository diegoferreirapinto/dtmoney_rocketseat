import incomeImg from "../../assets/entradas.svg"
import outcomeImg from "../../assets/saidas.svg"
import totalImg from "../../assets/total.svg"
import { Container } from "./styles"


export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>U$ 5.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- U$ 4000,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>U$ 1.000,00</strong>
      </div>


    </Container>
  )
}