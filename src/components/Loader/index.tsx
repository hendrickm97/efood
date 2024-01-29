import { PacmanLoader } from 'react-spinners'
import { Container } from './styles'
import { cores } from '../../styles'

const Loader = () => (
  <Container>
    <PacmanLoader color={cores.rosa} />
  </Container>
)
export default Loader
