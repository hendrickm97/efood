import { PulseLoader } from 'react-spinners'
import { Container } from './styles'
import { cores } from '../../styles'

const Loader = () => (
  <Container>
    <PulseLoader color={cores.rosa} />
  </Container>
)
export default Loader
