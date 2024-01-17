import { Link } from 'react-router-dom'
import Tag from '../Tag'
import estrela from '../../assets/images/estrela.svg'
import {
  Descricao,
  Infos,
  Botao,
  Card,
  CardInfos,
  Nota,
  Titulo
} from './styles'

type Props = {
  title: string
  stars: number
  description: string
  infos: string
  image: string
  id: number
  destacado: boolean
}

const CardRestaurante = ({
  title,
  stars,
  description,
  infos,
  image,
  id,
  destacado
}: Props) => (
  <Card>
    <img src={image} />
    <Infos>
      {destacado === true ? <Tag>Destaque da semana</Tag> : ''}
      <Tag key={infos}>{infos}</Tag>
    </Infos>
    <CardInfos>
      <Titulo>{title}</Titulo>
      <Nota>
        <p>{stars}</p>
        <img src={estrela} alt="stars" />
      </Nota>
    </CardInfos>
    <Descricao>{description}</Descricao>
    <Link to={`/restaurantes/${id}`}>
      <Botao>Saiba mais</Botao>
    </Link>
  </Card>
)

export default CardRestaurante
