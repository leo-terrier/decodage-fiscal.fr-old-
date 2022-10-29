import { Heading } from "@chakra-ui/react"

const style = {
  header: {
    backgroundColor: "#E2E8F0",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin:"0 0 5% 0"
  }
}

export const Header = () => {

  return (
    <header style={style.header}>
      <Heading>Heading</Heading>
    </header>
  )
}
