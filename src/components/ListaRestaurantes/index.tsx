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
          id={restaurante.id}
          title={restaurante.titulo}
          description={restaurante.descricao}
          image={restaurante.capa}
          infos={restaurante.tipo}
          stars={restaurante.avaliacao}
          destacado={restaurante.destacado}
        />
      ))}
    </List>
  </section>
)

export default ListaRestaurantes
