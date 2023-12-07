import insta from '../../assets/images/insta.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import logo from '../../assets/images/logo.svg'
import { Text, Container, TextContainer } from './styles'

const Footer = () => (
  <Container>
    <img src={logo} alt="EFOOD" />
    <ul className="redessociais">
      <li>
        <a href="#">
          <img src={insta} alt="instagram" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
      </li>
    </ul>
    <TextContainer>
      <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Text>
    </TextContainer>
  </Container>
)

export default Footer
