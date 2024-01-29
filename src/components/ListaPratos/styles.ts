import styled from 'styled-components'
import { cores } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 88px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;
  display: none;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  width: 1024px;
  height: 344px;
  top: 0;
  left: 0;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  display: flex;

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-top: 32px;
  }

  p {
    max-width: 656px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 16px;
  }

  button {
    width: 218px;
    height: 24px;
    background-color: ${cores.background};
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: ${cores.rosa};
    margin-top: 16px;
    padding: 4px 7px;
    border: none;
  }

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin: 32px 24px 32px 32px;
  }

  header {
    padding: 8px;
    position: absolute;
    right: 0;

    img {
      width: 16px;
      height: 16px;
    }
  }
`
