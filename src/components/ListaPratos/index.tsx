import Pratos from '../../models/Pratos'
import CardPrato from '../CardPrato'
import { List } from './styles'

type Props = {
  pratos: Pratos[]
}

const ListaPratos = ({ pratos }: Props) => (
  <section className="container">
    <List>
      {pratos.map((pratos) => (
        <CardPrato
          key={pratos.id}
          title={pratos.title}
          description={pratos.description}
          image={pratos.image}
        />
      ))}
    </List>
  </section>
)

export default ListaPratos
