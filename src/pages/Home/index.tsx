import Header from '../../components/Header'
import ListaRestaurantes from '../../components/ListaRestaurantes'
import Loader from '../../components/Loader'

import { useGetRestaurantesQuery } from '../../services/api'

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
