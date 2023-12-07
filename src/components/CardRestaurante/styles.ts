import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  width: 473px;
  max-width: 100%;
  background-color: ${cores.branco};
  border: solid 1px ${cores.rosa};
  position: relative;
  margin: 48px auto;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const CardInfos = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Nota = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  img {
    margin-left: 6px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  padding: 8px;
  font-size: 18px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  color: ${cores.rosa};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  padding: 8px;
  color: ${cores.rosa};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Botao = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  margin: 8px;
  padding: 4px 6px;
  width: 82px;
  font-size: 14px;
  cursor: pointer;
`
