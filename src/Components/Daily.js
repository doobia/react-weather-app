import React from 'react'

const Daily = ({location,current}) => {
  return (
    <div>
      <h4 className="text-center mb-3">
        {location?.name}, {location?.country}
      </h4>

      <div className="dailyResults">
        <div className="card-1 pt-1">
          <img width="55px" src={current?.condition?.icon} alt="" />
          <h5>{current?.temp_c} ° C</h5>
          <p className="text-secondary">{current?.condition?.text}</p>
        </div>
        <div className="card-2 pt-3">
          <i className="bi bi-wind daily-icons"></i>
          <h5>{current?.wind_kph} km/hr</h5>
          <p className="text-secondary">Wind</p>
        </div>
        <div className="card-3 pt-3">
          <i className="bi bi-droplet daily-icons"></i>
          <h5>{current?.humidity} %</h5>
          <p className="text-secondary">Humidity</p>
        </div>
        <div className="card-4 pt-3">
          <i className="bi bi-water daily-icons"></i>
          <h5>{current?.pressure_mb} hPa</h5>
          <p className="text-secondary">Pressure</p>
        </div>
      </div>

    </div>
  )
}

export default Daily