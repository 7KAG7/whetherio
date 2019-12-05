import React, { useState, useEffect }  from "react"

const LegsTile = props => {
  const [currentBodyWeather, setCurrentBodyWeather] = useState ([])
  const [user, setUser] = useState (null)

  useEffect(() => {
    fetch('api/v1/weathers')
    .then(response => {
      return response.json()
    })
    .then(body => {
      if (body.user) {
        setUser(body.user.gender)
      }
      setCurrentBodyWeather(body.weather.currently)
    })
  }, [])

  let legs
    if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Rain")) {
      (legs =  <div>

                </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Drizzle")) {
      (legs =  <div>

                </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Clear")) {
      (legs = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Cloudy")) {
      (legs = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Overcast")) {
      (legs = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Clear")) {
      (legs = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Cloudy")) {
      (legs = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Overcast")) {
      (legs = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Rain")) {
      (legs = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Drizzle")) {
      (legs = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59  && currentBodyWeather.summary.includes("Overcast")) {
      (legs = <div>
                <a href="https://www.amazon.com/Carhartt-Washed-Twill-Dungaree-Relaxed/dp/B00870NC9G/ref=as_li_ss_il?dchild=1&keywords=mens+pants&psc=1&qid=1572979819&s=apparel&sr=1-45&linkCode=li1&tag=whetherio-20&linkId=fcd3d79801060578f30bc3c6466cde00&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00870NC9G&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary === ("Rain")) {
      (legs = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary === ("Drizzle")) {
      (legs = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Clear")) {
      (legs = <div>
                <a href="https://www.amazon.com/Carhartt-Washed-Twill-Dungaree-Relaxed/dp/B00870NC9G/ref=as_li_ss_il?dchild=1&keywords=mens+pants&psc=1&qid=1572979819&s=apparel&sr=1-45&linkCode=li1&tag=whetherio-20&linkId=fcd3d79801060578f30bc3c6466cde00&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00870NC9G&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Cloudy")) {
      (legs = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Overcast")) {
      (legs = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Clear")) {
      (legs = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Cloudy")) {
      (legs = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Overcast")) {
      (legs = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Snow")) {
      (legs = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>

                   </div>)
        }
      }
    }

  return (
    <div>
      {legs}
    </div>
  )
}

export default LegsTile
