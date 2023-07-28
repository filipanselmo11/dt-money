import logoImg from '../../assets/Logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransaction: () => void;
}

export function Header(props: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={props.onOpenNewTransaction}>
                    Nova Transação
                </button>  
            </Content>
        </Container>
    )
}