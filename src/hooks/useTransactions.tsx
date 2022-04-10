import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/app";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// interface TransactionInputProps {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

type TransactionInputProps = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInputProps) => void;
}

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(reponse => setTransactions(reponse.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInputProps) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),

    })

    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ]);  // => CONCEITO DE IMUTABILIDADE. Gerar um novo a partir de uma nova informacão, não alterar diretamente

  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}