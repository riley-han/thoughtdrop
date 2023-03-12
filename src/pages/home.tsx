import React from "react"
import NavbarContainer from "../views/components/navbar/navbar-container"
import Weather from "../views/components/weather/weather"

const Home = () => {
  const [position, setPosition] = React.useState<any>({})
  const getCurrentLocation = () => {
    if (window?.navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position)
          setPosition(position)
          return position
        },
        (error) => {
          console.error(error)
        }
      )
    } else {
      console.error(
        "Geolocation is not supported by this browser."
      )
    }
  }
  const [weather, setWeather] = React.useState<any>(null)

  React.useEffect(() => {
    getCurrentLocation()
  }, [])

  const lat = position?.coords?.latitude || null
  const lon = position?.coords?.longitude || null

  const getCurrentWeather = (lat: string, lon: string) => {
    console.log(lat, lon, "hey")
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=5e428950fa404c2da3830526231203&q=${lat},${lon}&aqi=yes`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data)
      })
      .catch((error) => console.error(error))
  }

  React.useEffect(() => {
    if (!lat || !lon) return
    const currentWeather = getCurrentWeather(lat, lon)
    setWeather(currentWeather)
  }, [lat, lon])

  console.log(weather, "what are you")
  const temp = weather?.current?.temp_f
  const icon = weather?.current?.condition?.icon
  return (
    <div>
      <NavbarContainer icon={icon} />
      {/* <Weather temp={temp} icon={icon} /> */}
    </div>
  )
}
export default Home
