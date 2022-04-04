import React from 'react'

const Forecast = ({location}) => {
  return (
    <div>
      <h4 className="text-center mb-3">
        {location?.name}, {location?.country}
      </h4>
    </div>
  )
}

export default Forecast