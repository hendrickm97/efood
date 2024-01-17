import { Card, Titulo, Descricao, Botao } from './styles'

type Props = {
  title: string
  description: string
  image: string
  onClick?: () => void
}

export const getDescription = (descricao: string) => {
  if (descricao.length > 120) {
    return descricao.slice(0, 127) + '...'
  }

  return descricao
}

const CardPrato = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Botao>Adicionar ao carrinho</Botao>
  </Card>
)

export default CardPrato
