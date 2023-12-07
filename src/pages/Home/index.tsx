import Header from '../../components/Header'
import ListaRestaurantes from '../../components/ListaRestaurantes'
import Restaurante from '../../models/Restaurantes'

import trattoria from '../../assets/images/trattoria.png'
import hioki from '../../assets/images/hiroki.png'

const restaurantes: Restaurante[] = [
  {
    id: 1,
    rating: 4.9,
    title: 'Hioki Sushi',
    infos: ['destaque da semana', 'japonesa'],
    image: hioki,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    rating: 4.6,
    title: 'La Dolce Vitta Trattoria',
    infos: ['italiana'],
    image: trattoria,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    rating: 4.6,
    title: 'La Dolce Vitta Trattoria',
    infos: ['italiana'],
    image: trattoria,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    rating: 4.6,
    title: 'La Dolce Vitta Trattoria',
    infos: ['italiana'],
    image: trattoria,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    rating: 4.6,
    title: 'La Dolce Vitta Trattoria',
    infos: ['italiana'],
    image: trattoria,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    rating: 4.6,
    title: 'La Dolce Vitta Trattoria',
    infos: ['italiana'],
    image: trattoria,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <Header />
    <ListaRestaurantes restaurantes={restaurantes} />
  </>
)

export default Home
