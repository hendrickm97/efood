class Restaurante {
  rating: number
  description: string
  image: string
  infos: string[]
  title: string
  id: number

  constructor(
    id: number,
    rating: number,
    description: string,
    image: string,
    infos: string[],
    title: string
  ) {
    this.id = id
    this.rating = rating
    this.title = title
    this.description = description
    this.image = image
    this.infos = infos
  }
}

export default Restaurante
