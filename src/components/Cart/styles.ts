import styled from 'styled-components'
import { cores } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

type InputDivProps = {
  maxWidth?: string
}

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const InputDiv = styled.div<InputDivProps>`
  max-width: ${(props) => props.maxWidth || 'auto'};
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 344px;
  width: 100%;

  &.is-closed {
    display: none;
  }

  h3 {
    font-size: 16px;
    weight: 700;
    color: ${cores.rosaClaro};
  }

  p {
    color: ${cores.rosaClaro};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 16px;
  }

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
    color: ${cores.rosaClaro};
    margin-top: 8px;
  }

  input {
    width: 100%;
    border: 1px solid ${cores.rosaClaro};
    height: 32px;
    background-color: ${cores.rosaClaro};
    padding: 0 8px;
    font-weight: 700;
    font-size: 14px;

    &.error {
      border: 1px solid red;
    }
  }
`
export const ButtonGroup = styled.div`
  margin-top: 24px;
`
export const InputGroup = styled.div`
  display: flex;
  column-gap: 30px;
  justify-content: space-between;
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px 0 12px 8px;
  position: relative;
  background-color: ${cores.rosaClaro};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${cores.rosa};
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${cores.rosa};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
export const CartButtom = styled.button`
  max-width: 100%;
  width: 344px;
  height: 24px;
  background-color: ${cores.rosaClaro};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: ${cores.rosa};
  padding: 4px 0;
  margin-top: 8px;
  cursor: pointer;
  border: none;
`
export const Prices = styled.div`
  color: ${cores.rosaClaro};
  font-size: 14px;
  font-weight: 700;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`
