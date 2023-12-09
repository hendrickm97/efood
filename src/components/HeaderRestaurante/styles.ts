import styled from 'styled-components'
import { cores } from '../../styles'
import vetor from '../../assets/images/Vector.svg'

export const HeaderBar = styled.header`
  background-color: ${cores.rosaHeader};
  background-image: url(${vetor});
  height: 186px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: bold;
  img {
    width: 125px;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
  max-width: 100%;

  h3 {
    font-size: 18px;
  }
`
export const Imagem = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  display: block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 56px;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }

  .container {
    z-index: 1;
    position: relative;
  }
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${cores.branco};
  padding-top: 150px;
`

export const Categoria = styled.p`
  font-size: 32px;
  font-weight: 100;
  padding-top: 24px;
  color: ${cores.branco};
`
