import Header from '../../components/Header'
import ListaRestaurantes from '../../components/ListaRestaurantes'
import Loader from '../../components/Loader'

import { useGetRestaurantesQuery } from '../../services/api'

export interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (restaurantes) {
    return (
      <>
        <Header />
        <ListaRestaurantes restaurantes={restaurantes} />
      </>
    )
  }
  return <Loader />
}

export default Home
