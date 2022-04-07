import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import depositImg from "../../assets/entradas.svg";
import withdrawImg from "../../assets/saidas.svg";
import closeImg from "../../assets/close.svg";
import { useState } from 'react';
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const [type, setType] = useState('deposit');


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

      <Container>
        <h2>New Transaction</h2>


        <input
          placeholder="Title"

        />

        <input
          type="number"
          placeholder="Value"
        />


        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}

          >
            <img src={depositImg} alt="Deposit" />
            <span>Deposit</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
          >
            <img src={withdrawImg} alt="Withdraw" />
            <span>Withdraw</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Category"
        />

        <button type="submit">
          Register
        </button>
      </Container>
    </Modal>

  )
}