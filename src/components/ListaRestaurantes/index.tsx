import Restaurante from '../../models/Restaurantes'
import CardRestaurante from '../CardRestaurante'
import { List } from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const ListaRestaurantes = ({ restaurantes }: Props) => (
  <section className="container">
    <List>
      {restaurantes.map((restaurante) => (
        <CardRestaurante
          key={restaurante.id}
          title={restaurante.title}
          description={restaurante.description}
          image={restaurante.image}
          infos={restaurante.infos}
          stars={restaurante.rating}
        />
      ))}
    </List>
  </section>
)

export default ListaRestaurantes
