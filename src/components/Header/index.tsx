import { Container, Content } from "./style";
import logoImg from '../../assets/preeologo.png'

interface HeaderProps {
    isOpenSurvey: () => void;
}

export function Header({ isOpenSurvey }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Preeo logo"></img>
                <button onClick={isOpenSurvey}>
                    Start Survey
                </button>
            </Content>
        </Container>
    );
}