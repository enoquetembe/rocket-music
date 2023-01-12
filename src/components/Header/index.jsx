import Image from "../../assets/image.png"

import { Container } from "./styles"
import { Title } from "../Title"

export function Header() {
  return (
    <Container>
      <img src={Image} alt="Track Image" />
      <Title />
    </Container>
  )
}
