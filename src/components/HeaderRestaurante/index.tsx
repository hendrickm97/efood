import { HeaderBar, Imagem, Container, Categoria, Titulo } from './styles'
import logo from '../../assets/images/logo.svg'
import banner from '../../assets/images/banner.png'

const HeaderRestaurante = () => (
  <>
    <HeaderBar>
      <Container>
        <h3>Restaurantes</h3>
        <img src={logo} alt="logo" />
        <a>0 - produto(s) no carrinho</a>
      </Container>
    </HeaderBar>
    <Imagem
      style={{
        backgroundImage: `url(${banner})`
      }}
    >
      <div className="container">
        <Categoria>Italiana</Categoria>
        <div>
          <Titulo>La Dolce Vita Trattoria</Titulo>
        </div>
      </div>
    </Imagem>
  </>
)

export default HeaderRestaurante
