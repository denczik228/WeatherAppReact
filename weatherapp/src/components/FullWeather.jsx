import { Button } from 'primereact/button'
import React from 'react'

function FullWeather() {
  return (
      <div>
          <div className="currentWeather">
              <img className='imgOfW' alt='weather' src='' />
              <div className="degrees">33</div>
              <div className="city">Tel Aviv</div>
          </div>
          <div className="buttonFav">
              <Button label="Favorites" />
          </div>
          <div className="weatherStatus">
              Clouddy
          </div>
          <div className="weatherCards">
              <div className="cardWeather">
                  
              </div>
          </div>
        </div>
  )
}

export default FullWeather