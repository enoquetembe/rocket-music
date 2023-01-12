import { Container } from './styles'

export function TrackTime() {
  return (
    <Container>
      <div className="track"></div>

      <div className='time'>
        <div>03:20</div>
        <div>00:12</div>
      </div>
    </Container>
  )
}
