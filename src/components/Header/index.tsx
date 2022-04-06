import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';


interface HeaderProps {
  handleOpenTransactionModal: () => void;
}


export function Header({ handleOpenTransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button" onClick={handleOpenTransactionModal}>
          New Transaction
        </button>
      </Content>
    </Container>
  )
}