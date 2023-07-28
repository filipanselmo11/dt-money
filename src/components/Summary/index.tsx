import { Container } from "./styles";
import entradas from '../../assets/Entradas.svg';
import saidas from '../../assets/Saídas.svg';
import total from '../../assets/Total.svg';
import { useTransactions } from "../../hooks/useTransactions";
export function Summary (){
    const { transactions } = useTransactions();

    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if(transaction.type === 'deposit') {
    //         return acc + transaction.amount;
    //     }
    //     return acc;
    // }, 0);

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="Entradas"/>
                </header>
                <strong>R$ {summary.deposits}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidas} alt="Saidas"/>
                </header>
                <strong>-R$ {summary.withdraws}</strong>
            </div>
            <div className="high-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total"/>
                </header>
                <strong>R$ {summary.total}</strong>
            </div>
        </Container>
    );
}