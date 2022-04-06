import Modal from 'react-modal';
import { Container } from './style';
import depositImg from "../../assets/entradas.svg";
import withdrawImg from "../../assets/saidas.svg";
import closeImg from "../../assets/close.svg";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
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

        <button className="deposit">
          <img src={depositImg} />
          Deposit
        </button>


        <button className="withdraw">
          <img src={withdrawImg} />
          Withdraw
        </button>

        <input
          placeholder="Category"
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>

  )
}