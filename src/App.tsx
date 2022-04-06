/* GENERALS */
import Modal from 'react-modal';
import { useState } from 'react'

/* COMPONENTS */
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard';
import { TransactionTable } from './components/TransactionTable';
import { NewTransactionModal } from './components/NewTransactionModal';

/* Set modal 'child' ?  => Search() */
Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header handleOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}