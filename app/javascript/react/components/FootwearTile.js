import React, { useState, useEffect }  from "react"

const FootwearTile = props => {
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

  let footwear
    if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Rain")) {
      (footwear =  <div>

                </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Drizzle")) {
      (footwear =  <div>

                </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Clear")) {
      (footwear = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Cloudy")) {
      (footwear = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Overcast")) {
      (footwear = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Clear")) {
      (footwear = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Cloudy")) {
      (footwear = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Overcast")) {
      (footwear = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Rain")) {
      (footwear = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Drizzle")) {
      (footwear = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59  && currentBodyWeather.summary.includes("Overcast")) {
      (footwear = <div>
                <a href="https://www.amazon.com/Carhartt-Washed-Twill-Dungaree-Relaxed/dp/B00870NC9G/ref=as_li_ss_il?dchild=1&keywords=mens+pants&psc=1&qid=1572979819&s=apparel&sr=1-45&linkCode=li1&tag=whetherio-20&linkId=fcd3d79801060578f30bc3c6466cde00&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00870NC9G&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary === ("Rain")) {
      (footwear = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary === ("Drizzle")) {
      (footwear = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Clear")) {
      (footwear = <div>
                <a target="_blank"  href="https://www.amazon.com/gp/product/B005FPU1VS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B005FPU1VS&linkCode=as2&tag=whetherio-20&linkId=e2ae29d5578dc91c0fc7f957bea60c14">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B005FPU1VS&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=whetherio-20" />
                </a>
              </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Cloudy")) {
      (footwear = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Overcast")) {
      (footwear = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Clear")) {
      (footwear = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Cloudy")) {
      (footwear = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Overcast")) {
      (footwear = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Snow")) {
      (footwear = <div>

               </div>)
      if (user) {
        if (user === "female") {
          (footwear = <div>

                   </div>)
        }
      }
    }

  return (
    <div>
      {footwear}
    </div>
  )
}

export default FootwearTile
