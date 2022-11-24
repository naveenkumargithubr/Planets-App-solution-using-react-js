// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  // these are the external props to the  slider to add more styles
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots',
  }
  const {planetsList} = props
  return (
    <div className="slider-container" testid="planets">
      <h1 className="planet-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} planetDetails={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
