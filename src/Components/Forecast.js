import React from 'react'
import Template from './Details/Template'
import Dayjs from "dayjs";

const Forecast = ({location, forecast}) => {
  console.log(forecast)
  return (
    <div>
      <h4 className="text-center mb-3">
        {location?.name}, {location?.country}
      </h4>
      {forecast?.map((x,y)=>{
        return <Template weekday={Dayjs(x.date).format('dddd')} date={Dayjs(x.date).format("D MMM, YYYY")} icon={x.day.condition.icon} temp={x.day.avgtemp_c} path={`/forecast/${y}`} key={y} />
      })}
    </div>
  )
}

export default Forecast