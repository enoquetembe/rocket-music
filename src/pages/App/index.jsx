import { Container } from './styles'

import { Title } from '../../components/Title'
import { Controls } from '../../components/Controls'
import { TrackTime } from '../../components/TrackTime'

import Image from '../../assets/image.png'
import { Header } from '../../components/Header'

export function App() {
  return (
    <Container>
      <main>
        <div className="box" id="box-1">
          <img src={Image} alt="Track Image" />
          <Title />
          <Controls />
          <TrackTime />
        </div>

        <div className="box" id="box-2">
          <Header/>
          <Controls />
          <TrackTime />
        </div>

        <div className="box" id="box-3">
          <Header/>
          <Controls/>
        </div>
      </main>
    </Container>
  )
}

export default App
