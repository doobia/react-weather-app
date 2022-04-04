import React from 'react'
import Back from "../Back";
import { useParams } from 'react-router-dom';
import Dayjs from "dayjs";
import Template from './Template';

const Hours = ({forecast}) => {
  let id = useParams()
  let data = forecast?.slice(+id.id, +id.id +1)?.pop()?.hour
  console.log(data)
  return (
    <div>
      <Back />
      <div className="hour">
        {data?.map((x,y)=>{
          return <Template key={y} weekday={Dayjs(x.time).format("HH : mm")} date={Dayjs(x.date).format("D MMM, YYYY")} icon={x.condition.icon} temp={x.temp_c} path/>
        })}
      </div>
    </div>
  )
}

export default Hours