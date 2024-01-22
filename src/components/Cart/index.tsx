import {
  CartButtom,
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Sidebar
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ListaPratos'

const Cart = () => {
  const { isOpen, pratos } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return pratos.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {pratos.map((prato) => (
            <CartItem key={prato.id}>
              <img src={prato.foto} />
              <div>
                <h3>{prato.nome}</h3>
                <span>{formataPreco(prato.preco)}</span>
              </div>
              <button onClick={() => removeItem(prato.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor total:</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </Prices>
        <CartButtom>Continuar com a entrega</CartButtom>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
