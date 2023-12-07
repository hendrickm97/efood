import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 320px;
  max-width: 100%;
  background-color: ${cores.rosa};
  position: relative;
  margin: 32px auto;

  img {
    padding: 8px;
  }
`

export const Titulo = styled.h2`
  font-weight: bold;
  padding-left: 8px;
  font-size: 16px;
  display: block;
  margin-bottom: 8px;
  color: ${cores.rosaClaro};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding: 0 8px;
  color: ${cores.rosaClaro};
`

export const Botao = styled.button`
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  padding: 4px;
  margin: 8px;
  width: 304px;
  height: 24px;
  border: none;
  font-size: 14px;
  cursor: pointer;
`
