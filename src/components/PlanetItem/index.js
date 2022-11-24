// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <li className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="title">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default PlanetItem
