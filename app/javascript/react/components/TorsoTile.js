import React, { useState, useEffect }  from "react"


const TorsoTile = props => {
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

  let torso
    if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Rain")) {
      (torso =  <div>

                </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Drizzle")) {
      (torso =  <div>

                </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Clear")) {
      (torso = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Cloudy")) {
      (torso = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Overcast")) {
      (torso = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Clear")) {
      (torso = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Cloudy")) {
      (torso = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Overcast")) {
      (torso = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Rain")) {
      (torso = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Drizzle")) {
      (torso = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59  && currentBodyWeather.summary.includes("Overcast")) {
      (torso = <div>
                <a href="https://www.amazon.com/Patagonia-Down-Sweater-Black-Medium/dp/B01MRQGGWY/ref=as_li_ss_il?crid=23VEY1OVHXGB0&dchild=1&keywords=mens+patagonia+down+sweater+jacket&qid=1575570397&sprefix=mens+patagonia+down+,aps,130&sr=8-3&th=1&linkCode=li1&tag=whetherio-20&linkId=87fafa5564ebb1011eb88bc055dbdebd&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MRQGGWY&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary === ("Rain")) {
      (torso = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary === ("Drizzle")) {
      (torso = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Clear")) {
      (torso = <div>
                <a href="https://www.amazon.com/Patagonia-Down-Sweater-Black-Medium/dp/B01MRQGGWY/ref=as_li_ss_il?crid=23VEY1OVHXGB0&dchild=1&keywords=mens+patagonia+down+sweater+jacket&qid=1575570397&sprefix=mens+patagonia+down+,aps,130&sr=8-3&th=1&linkCode=li1&tag=whetherio-20&linkId=87fafa5564ebb1011eb88bc055dbdebd&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MRQGGWY&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Cloudy")) {
      (torso = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Overcast")) {
      (torso = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Clear")) {
      (torso = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Cloudy")) {
      (torso = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Overcast")) {
      (torso = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Snow")) {
      (torso = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>

                   </div>)
        }
      }
    }

  return (
    <div>
      {torso}
    </div>
  )
}

export default TorsoTile
