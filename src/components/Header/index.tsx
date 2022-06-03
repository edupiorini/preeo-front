import { Container, Content } from "./style";
import logoImg from '../../assets/preeologo.png'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Preeo logo"></img>
                <button>
                    Start Survey
                </button>
            </Content>
        </Container>
    );
}