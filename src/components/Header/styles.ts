import styled from 'styled-components'
import { cores } from '../../styles'
import vetor from '../../assets/images/Vector.svg'

export const HeaderContainer = styled.header`
  background-color: ${cores.rosaHeader};
  background-image: url(${vetor});
  height: 384px;
  text-align: center;
  margin-bottom: 80px;

  img {
    margin-top: 64px;
  }
`
export const Container = styled.div`
  width: 540px;
  max-width: 100%;
  margin: 0 auto;
`

export const Title = styled.h2`
  color: ${cores.rosa};
  font-size: 36px;
  font-weight: bold;
  margin-top: 134px;
`
