import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.rosaClaro};
  margin: 0 auto;
  text-align: center;

  img {
    margin-top: 40px;
  }

  .redessociais {
    width: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;

    img {
      margin-top: 28px;
    }
  }
`
export const TextContainer = styled.div`
  width: 480px;
  max-width: 100%;
  margin: 0 auto;
  padding-bottom: 40px;
`
export const Text = styled.p`
  color: ${cores.rosa};
  font-size: 10px;
  margin-top: 76px;
`
