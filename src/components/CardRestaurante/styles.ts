import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  width: 473px;
  max-width: 100%;
  background-color: ${cores.branco};
  border: solid 1px ${cores.rosa};
  position: relative;
  margin-bottom: 48px;

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
  padding-right: 8px;
  img {
    margin-left: 8px;
  }

  p {
    font-size: 18px;
    font-weight: 700;
    color: ${cores.rosa};
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  margin-left: 8px;
  margin-top: 4px;
  font-size: 18px;
  display: block;
  color: ${cores.rosa};
`

export const Descricao = styled.p`
  width: 458px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  margin: 16px auto;
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
  margin: 7px;
  padding: 4px 6px;
  width: 82px;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`
