import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import entradaImg from '../../assets/Entradas.svg';
import saidaImg from '../../assets/Saídas.svg';
import closeImg from '../../assets/Botão - Fechar.svg';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransaction(props: NewTransactionProps) {
    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        await createTransaction({
            title,
            amount,
            category,
            type,
        });
        
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        props.onRequestClose();
    }
    return(
        <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
            <button type="button" onClick={props.onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar Modal"/>
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    placeholder="Valor"
                    type="number"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))} 
                />

                <TransactionTypeContainer>
                    <RadioBox type="button" onClick={() => {setType('deposit')}} isActive={type === 'deposit'} activecolor="green">
                        <img src={entradaImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox type="button" onClick={() => {setType('withdraw')}} isActive={type === 'withdraw'} activecolor="red">
                        <img src={saidaImg} alt="Saída"/>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                
                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
      </Modal>
    );
}