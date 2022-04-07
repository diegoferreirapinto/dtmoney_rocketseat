import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import depositImg from "../../assets/entradas.svg";
import withdrawImg from "../../assets/saidas.svg";
import closeImg from "../../assets/close.svg";
import { FormEvent, useState } from 'react';
import { api } from '../../services/app';
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');


  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault(); // previne recarregamento da página Veritifcar tipagem do parametro no onSubmit, lá ele o diz o tipo esperado
    const data = {
      title,
      amount,
      category,
      type
    }

    api.post('/transactions', data)
  }

  return (


    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close">

        <img
          src={closeImg}
          alt="Fechar modal"
        />

      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>New Transaction</h2>


        <input
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Value"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />


        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={depositImg} alt="Deposit" />
            <span>Deposit</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={withdrawImg} alt="Withdraw" />
            <span>Withdraw</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Category"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Register
        </button>
      </Container>
    </Modal>

  )
}