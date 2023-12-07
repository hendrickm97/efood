import logo from '../../assets/images/logo.svg'
import { HeaderContainer, Title, Container } from './styles'

const Header = () => (
  <HeaderContainer>
    <Container>
      <img src={logo} alt="EFOOD" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </Container>
  </HeaderContainer>
)

export default Header
