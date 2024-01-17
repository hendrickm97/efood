import { useParams } from 'react-router-dom'
import HeaderRestaurante from '../../components/HeaderRestaurante'
import { Restaurante } from '../Home'

import ListaPratos from '../../components/ListaPratos'
import { useEffect, useState } from 'react'

const Restaurantes = () => {
  const { id } = useParams()

  const [pratos, setPratos] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [id])

  if (!pratos) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderRestaurante
        url={pratos.capa}
        tipo={pratos.tipo}
        titulo={pratos.titulo}
      />
      <ListaPratos />
    </>
  )
}

export default Restaurantes
