import { HeaderBar, Imagem, Container, Categoria, Titulo } from './styles'
import logo from '../../assets/images/logo.svg'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  url: string
  tipo: string
  titulo: string
}

const HeaderRestaurante = ({ url, tipo, titulo }: Props) => {
  const { pratos } = useSelector((state: RootReducer) => state.cart)

  return (
    <>
      <HeaderBar>
        <Container>
          <h3>Restaurantes</h3>
          <img src={logo} alt="logo" />
          <a>{pratos.length} - produto(s) no carrinho</a>
        </Container>
      </HeaderBar>
      <Imagem
        style={{
          backgroundImage: `url(${url})`
        }}
      >
        <div className="container">
          <Categoria>{tipo}</Categoria>
          <div>
            <Titulo>{titulo}</Titulo>
          </div>
        </div>
      </Imagem>
    </>
  )
}

export default HeaderRestaurante
