import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransaction } from "./components/NewTransaction";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);
  function handleOpenNewTransaction() {
    setIsNewTransactionOpen(true);
  }

  function handleCloseNewTransaction() {
    setIsNewTransactionOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransaction={handleOpenNewTransaction} />
      <Dashboard />
      <NewTransaction isOpen={isNewTransactionOpen} onRequestClose={handleCloseNewTransaction} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

