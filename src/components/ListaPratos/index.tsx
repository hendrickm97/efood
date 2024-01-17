import { useState, useEffect } from 'react'
import { CardapioItem, Restaurante } from '../../pages/Home'
import CardPrato, { getDescription } from '../CardPrato'
import { List, Modal, ModalContent } from './styles'
import close from '../../assets/images/close.png'
import { useParams } from 'react-router-dom'

interface ModalState {
  isVisible: boolean
  pratoSelecionado?: Restaurante
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ListaPratos = () => {
  const { id } = useParams()
  const [currentRest, setCurrentRest] = useState<Restaurante>()
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const [pratoSelecionado, setPratoSelecionado] = useState<CardapioItem>()

  const openModal = (prato: CardapioItem) => {
    setPratoSelecionado(prato)
    setModal({
      isVisible: true
    })
  }

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCurrentRest(res))
  }, [id])

  if (!currentRest) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <section className="container">
        <List>
          {currentRest.cardapio?.map((prato) => (
            <li key={prato.id} onClick={() => openModal(prato)}>
              <CardPrato
                title={prato.nome}
                description={getDescription(prato.descricao)}
                image={prato.foto}
              />
            </li>
          ))}
        </List>
      </section>

      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <img
              src={close}
              alt="icone de fechar"
              onClick={() => closeModal()}
            />
          </header>
          <img src={pratoSelecionado?.foto} />
          <div>
            <h3>{pratoSelecionado?.nome}</h3>
            <p>{pratoSelecionado?.descricao}</p>
            <p>{pratoSelecionado?.porcao}</p>
            <button>
              Adicionar ao carrinho - {formataPreco(pratoSelecionado?.preco)}
            </button>
          </div>
        </ModalContent>
        <div onClick={() => closeModal()} className="overlay"></div>
      </Modal>
    </>
  )
}

export default ListaPratos
