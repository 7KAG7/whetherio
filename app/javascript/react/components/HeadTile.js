import React, { useState, useEffect }  from "react"

const HeadTile = props => {
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

  let headwear

    if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Rain" || "Drizzle")) {
      headwear =  <div>
                    <a target="_blank"  href="https://www.amazon.com/gp/product/B06WV7411J/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06WV7411J&linkCode=as2&tag=whetherio-20&linkId=e2d484e3a7a7e1feb55e704cd068b726">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B06WV7411J&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=whetherio-20" />
                    </a>
                  </div>
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Clear" || "Cloudy" || "Overcast")) {
      headwear = <div>
                  <a href="https://www.amazon.com/TOREGE-Polarized-Sunglasses-Interchangeable-Baseball/dp/B01HRJIG3Y/ref=as_li_ss_il?crid=1MCGIQT76RE17&dchild=1&keywords=sunglasses+for+men&psr=EY17&qid=1575488825&s=cyber-monday&smid=A43SSV15NPECY&sprefix=sung,cyber-monday,147&sr=1-1&linkCode=li1&tag=whetherio-20&linkId=6a4c666b3a3b8cffe68d33d70e2708df&language=en_US" target="_blank">
                  <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01HRJIG3Y&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                  </a>

                  </div>
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.includes(("Rain" || "Drizzle"))) {
      headwear = <div>womans hat</div>
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Clear" || "Cloudy" || "Overcast")) {
      headwear = <div>regular hat</div>
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Rain" || "Drizzle")) {
      headwear = <div>umbrella</div>
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79  && currentBodyWeather.summary.includes("Clear" || "Cloudy" || "Overcast")) {
      headwear = <div>regular hat || headband</div>
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Rain" || "Drizzle")) {
      headwear = <div>umbrella</div>
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59  && currentBodyWeather.summary.includes("Overcast")) {
      (headwear = <div>
                  <a target="_blank"  href="https://www.amazon.com/gp/product/B06WV7411J/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06WV7411J&linkCode=as2&tag=whetherio-20&linkId=e2d484e3a7a7e1feb55e704cd068b726">
                  <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B06WV7411J&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=whetherio-20" />
                  </a>
                  <img src="//ir-na.amazon-adsystem.com/e/ir?t=whetherio-20&l=am2&o=1&a=B06WV7411J" width="1" height="1" border="0" alt="" />
                 </div>)
      if (user) {
        if (user === "female") {
          headwear = <div>change to womans headwear</div>
        }
      }
    } else if (currentBodyWeather.temperature > 30 && 59 < currentBodyWeather.temperature && currentBodyWeather.summary === ("Rain" || "Drizzle")) {
      headwear = <div><p>umbrella</p></div>
    } else if (currentBodyWeather.temperature > 30 && 59 < currentBodyWeather.temperature && currentBodyWeather.summary.includes("Clear" || "Cloudy" || "Overcast")) {
      headwear = <div>knit hat</div>
    } else if (currentBodyWeather.temperature > 30 && 59 < currentBodyWeather.temperature && currentBodyWeather.summary === ("Rain" || "Drizzle")) {
      headwear = <div>womans purse umbrella</div>
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Clear" || "Cloudy" || "Overcast")) {
      headwear = <div>heavy knit hat</div>
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary === ("Snow")) {
      headwear = <div>waterproof insulated hat</div>
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Clear" || "Cloudy" || "Overcast")) {
      headwear = <div>heavy knit hat</div>
    }

  return (
    <div>
      {headwear}
    </div>
  )
}

export default HeadTile
