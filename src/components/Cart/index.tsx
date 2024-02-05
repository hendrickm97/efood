import {
  ButtonGroup,
  CartButtom,
  CartContainer,
  CartItem,
  InputDiv,
  InputGroup,
  Overlay,
  Prices,
  Sidebar
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { clear, close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../../utils'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { usePurchaseMutation } from '../../services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { isOpen, pratos } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const [cart, setCart] = useState(true)
  const [purchaseData, setPurchaseData] = useState(false)
  const [paymentData, setPaymentData] = useState(false)
  const [checkout, setCheckout] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const clearCart = () => {
    dispatch(clear())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return pratos.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(8, 'o campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatório'),
      address: Yup.string()
        .min(8, 'o campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatório'),
      city: Yup.string()
        .min(4, 'o campo precisa ter pelo menos 4 caracteres')
        .required('Campo obrigatório'),
      zipCode: Yup.string()
        .min(9, 'o campo precisa ter pelo menos 9 caracteres')
        .required('Campo obrigatório'),
      number: Yup.number()
        .min(2, 'o campo precisa ter pelo menos 2 caracteres')
        .required('Campo obrigatório'),
      cardName: Yup.string()
        .min(8, 'o campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'o campo precisa ter pelo menos 16 caracteres')
        .required('Campo obrigatório'),
      cardCode: Yup.string()
        .min(3, 'o campo precisa ter pelo menos 3 caracteres')
        .required('Campo obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'o campo precisa ter pelo menos 2 caracteres')
        .required('Campo obrigatório'),
      expiresYear: Yup.string()
        .min(4, 'o campo precisa ter pelo menos 4 caracteres')
        .required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },

        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 0
          }
        ]
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const goToPurchase = () => {
    setCart(false)
    setPurchaseData(true)
  }

  const backToCart = () => {
    setCart(true)
    setPurchaseData(false)
  }

  const goToPayment = () => {
    if (
      !form.errors.fullName &&
      !form.errors.address &&
      !form.errors.city &&
      !form.errors.zipCode &&
      !form.errors.number
    ) {
      setPurchaseData(false)
      setPaymentData(true)
    }
  }

  const backToPurchase = () => {
    setPurchaseData(true)
    setPaymentData(false)
  }

  const goToCheckout = () => {
    if (isSuccess) {
      setPaymentData(false)
      setCheckout(true)
      dispatch(clear())
    }
  }

  const finishPurchase = () => {
    setCart(true)
    setCheckout(false)
    closeCart()
    clearCart()
    navigate('/')
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar className={cart ? '' : 'is-closed'}>
        {pratos.length > 0 ? (
          <>
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
            <CartButtom onClick={goToPurchase}>
              Continuar com a entrega
            </CartButtom>
          </>
        ) : (
          <div>
            <h3>
              O seu carrinho está vazio! <br />
              adicione um item para prosseguir com a compra
            </h3>
          </div>
        )}
      </Sidebar>
      <Sidebar className={purchaseData ? '' : 'is-closed'}>
        <h3>Entrega</h3>
        <form onSubmit={form.handleSubmit}>
          <div>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              type="text"
              name="fullName"
              value={form.values.fullName}
              id="fullName"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''}
            />
          </div>
          <div>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              name="address"
              id="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('address') ? 'error' : ''}
            />
          </div>
          <div>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              name="city"
              id="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('city') ? 'error' : ''}
            />
          </div>
          <InputGroup>
            <div>
              <label htmlFor="zipCode">CEP</label>
              <InputMask
                type="text"
                name="zipCode"
                id="zipCode"
                value={form.values.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('zipCode') ? 'error' : ''}
                mask="99999-999"
              />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input
                type="text"
                name="number"
                id="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('number') ? 'error' : ''}
              />
            </div>
          </InputGroup>
          <div>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              type="text"
              name="complement"
              id="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('complement') ? 'error' : ''}
            />
          </div>
        </form>
        <ButtonGroup>
          {form.dirty ? (
            <CartButtom type="submit" onClick={goToPayment}>
              Continuar com pagamento
            </CartButtom>
          ) : (
            <CartButtom type="submit">Continuar com pagamento</CartButtom>
          )}
          <CartButtom onClick={backToCart}>Voltar para carrinho</CartButtom>
        </ButtonGroup>
      </Sidebar>

      <Sidebar className={paymentData ? '' : 'is-closed'}>
        <h3>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</h3>
        <form onSubmit={form.handleSubmit}>
          <div>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              type="text"
              name="cardName"
              id="cardName"
              value={form.values.cardName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cardName') ? 'error' : ''}
            />
          </div>
          <InputGroup>
            <InputDiv maxWidth="228px">
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputMask
                type="text"
                name="cardNumber"
                id="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardNumber') ? 'error' : ''}
                mask="9999 9999 9999 9999"
              />
            </InputDiv>
            <InputDiv maxWidth="87px">
              <label htmlFor="cardCode">CVV</label>
              <InputMask
                type="text"
                name="cardCode"
                id="cardCode"
                value={form.values.cardCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardCode') ? 'error' : ''}
                mask="999"
              />
            </InputDiv>
          </InputGroup>
          <InputGroup>
            <div>
              <label htmlFor="expiresMonth">Mês do vencimento</label>
              <InputMask
                type="text"
                name="expiresMonth"
                id="expiresMonth"
                value={form.values.expiresMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('expiresMonth') ? 'error' : ''}
                mask="99"
              />
            </div>
            <div>
              <label htmlFor="expiresYear">Ano do vencimento</label>
              <InputMask
                type="text"
                name="expiresYear"
                id="expiresYear"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('expiresYear') ? 'error' : ''}
                mask="9999"
              />
            </div>
          </InputGroup>
          <ButtonGroup>
            <CartButtom type="submit" onClick={goToCheckout}>
              Finalizar pagamento
            </CartButtom>
            <CartButtom onClick={backToPurchase}>
              Voltar para edição de endereço
            </CartButtom>
          </ButtonGroup>
        </form>
      </Sidebar>
      {isSuccess && data ? (
        <Sidebar className={checkout ? '' : 'is-closed'}>
          <h3>Pedido realizado - {data.orderId}</h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <CartButtom onClick={finishPurchase}>Concluir</CartButtom>
        </Sidebar>
      ) : (
        <Sidebar className={checkout ? '' : 'is-closed'}>
          <h3>Erro na transação</h3>
        </Sidebar>
      )}
    </CartContainer>
  )
}

export default Cart
