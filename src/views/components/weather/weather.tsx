import React from "react"

interface Props {
  temp: number
  icon: string
}

const Weather: React.FC<Props> = ({ temp, icon }) => {
  return (
    <div>
      <div>Temperature: {temp}</div>
      <div>
        <img
          src={icon}
          style={{ height: "100px", width: "100px" }}
        />
      </div>
    </div>
  )
}

// http://api.weatherapi.com/v1/current.json?key=5e428950fa404c2da3830526231203&q=salt lake city&aqi=yes

export default Weather
