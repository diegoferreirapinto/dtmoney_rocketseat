import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global'
import { TransactionTable } from './components/TransactionTable';


export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}