import React from 'react'
import './OutdoorsFeature.css'

function getFeature(str) {
  switch(str) {
    case 'hiking':
      return '🥾'
    case 'boating':
      return '🚤'
    case 'fishing':
      return '🎣'
    case 'camping':
      return '🏕️'
    case 'picnic':
      return '🧺'
    case 'biking':
        return '🚴‍♂️'
    case 'horseback riding':
        return '🐎'
    case 'wildlife':
        return '🦅'
    case 'scenic views':
        return '🌄'
    case 'birdwatching':
        return '🐦'
    case 'native plants':
        return '🌿'
    case 'walking':
        return '🚶‍♂️'
    default:
      return '？'
  }
}

function OutdoorsFeature(props) {
	const emoji = getFeature(props.name)
	return <div className="OutdoorsFeature">{emoji}</div>
}

export default OutdoorsFeature