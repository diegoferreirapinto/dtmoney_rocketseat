import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <header>
      <img src={logoImg} alt="dtmoney" />
      <button type="button">
        Nova Transacão
      </button>
    </header>
  )
}