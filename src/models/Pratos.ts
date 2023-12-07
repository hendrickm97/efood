class Pratos {
  description: string
  image: string
  title: string
  id: number

  constructor(id: number, description: string, image: string, title: string) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
  }
}

export default Pratos
