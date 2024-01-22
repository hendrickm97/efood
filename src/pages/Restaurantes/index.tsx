import { useParams } from 'react-router-dom'
import HeaderRestaurante from '../../components/HeaderRestaurante'

import ListaPratos from '../../components/ListaPratos'
import { useGetRestaurateByIdQuery } from '../../services/api'

import Cart from '../../components/Cart'

const Restaurantes = () => {
  const { id } = useParams()
  const { data: pratos } = useGetRestaurateByIdQuery(id!)

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
  return <h3>Carregando...</h3>
}

export default Restaurantes
