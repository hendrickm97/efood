import { useParams } from 'react-router-dom'
import HeaderRestaurante from '../../components/HeaderRestaurante'

import ListaPratos from '../../components/ListaPratos'
import { useGetRestaurateByIdQuery } from '../../services/api'

import Cart from '../../components/Cart'
import Loader from '../../components/Loader'

type RestauranteParams = {
  id: string
}

const Restaurantes = () => {
  const { id } = useParams() as RestauranteParams
  const { data: pratos } = useGetRestaurateByIdQuery(id)

  if (pratos) {
    return (
      <>
        <HeaderRestaurante
          url={pratos.capa}
          tipo={pratos.tipo}
          titulo={pratos.titulo}
        />
        <ListaPratos />
        <Cart />
      </>
    )
  }
  return <Loader />
}

export default Restaurantes
