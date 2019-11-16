import React, { useState, useEffect }  from "react"

const HeadTile = props => {
  const [currentBodyWeather, setCurrentBodyWeather] = useState ([])

  useEffect(() => {
    fetch('api/v1/weathers')
    .then(response => {
      return response.json()
    })
    .then(fetchedBodyWeather => {
      setCurrentBodyWeather(fetchedBodyWeather.currently)
    })
  }, [])

  render () {
    const headwear = currentBodyWeather.temperature > 20.00;
    return (
      <div>
        You should wear <b>{headwear ? 'hat' : 'sunglasses'}</b>
      </div>
    )
  }


  //   }
  //   else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Rain" || "Drizzle")) {
  //     return (
  //       <div>
  //         trucker hat
  //       </div>
  //     )
  //   }
  //   if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Clear" || "Cloudy" || "Overcast")) {
  //     return (
  //       <div>
  //       add sunglasses
  //       </div>
  //     )
  //   }
  //   else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains(("Rain" || "Drizzle"))) {
  //     return (
  //       <div>
  //         womans hat
  //       </div>
  //     )
  //   }
  //   else if (currentBodyWeather.temperature > 50 && 79 < currentBodyWeather.temperature && currentBodyWeather.summary.contains("Clear" || "Cloudy" || "Overcast")) {
  //     return (
  //       <div>
  //         regular hat
  //       </div>
  //     )
  //   }
  //   else if (currentBodyWeather.temperature > 50 && 79 < currentBodyWeather.temperature  && currentBodyWeather.summary === ("Rain" || "Drizzle")) {
  //     return (
  //       <div>
  //         umbrella
  //       </div>
  //     )
  //   }
  //   else if (currentBodyWeather.temperature > 50 && 79 < currentBodyWeather.temperature  && currentBodyWeather.summary.contains("Clear" || "Cloudy" || "Overcast")) {
  //     return (
  //       <div>
  //         regular hat || headband
  //       </div>
  //     )
  //   }
  //   else if (currentBodyWeather.temperature > 50 && 79 < currentBodyWeather.temperature  && currentBodyWeather.summary === ("Rain" || "Drizzle")) {
  //     return (
  //       <div>
  //         umbrella
  //       </div>
  //     )
  //   }
  //   else if (currentBodyWeather.temperature > 30 && 59 < currentBodyWeather.temperature  && currentBodyWeather.summary.contains("Clear" || "Cloudy" || "Overcast")) {
  //     return (
  //       <div>
  //         <a target="_blank"  href="https://www.amazon.com/gp/product/B06WV7411J/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06WV7411J&linkCode=as2&tag=whetherio-20&linkId=e2d484e3a7a7e1feb55e704cd068b726">
  //         <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B06WV7411J&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=whetherio-20" />
  //         </a>
  //         <img src="//ir-na.amazon-adsystem.com/e/ir?t=whetherio-20&l=am2&o=1&a=B06WV7411J" width="1" height="1" border="0" alt="" />
  //       </div>
  //     )
  //   }
  //   else if (currentBodyWeather.temperature > 30 && 59 < currentBodyWeather.temperature && currentBodyWeather.summary === ("Rain" || "Drizzle")) {
  //     return (
  //       <div>
  //         umbrella
  //       </div>
  //     )
  //   }
  //   else if (currentBodyWeather.temperature > 30 && 59 < currentBodyWeather.temperature && currentBodyWeather.summary.contains("Clear" || "Cloudy" || "Overcast")) {
  //     return (
  //       <div>
  //         knit hat
  //       </div>
  //     )
  //   }
  //   else if (currentBodyWeather.temperature > 30 && 59 < currentBodyWeather.temperature && currentBodyWeather.summary === ("Rain" || "Drizzle")) {
  //     return (
  //       <div>
  //         womans purse umbrella
  //       </div>
  //     )
  //   }
  //   else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.contains("Clear" || "Cloudy" || "Overcast")) {
  //     return (
  //       <div>
  //         heavy knit hat
  //       </div>
  //     )
  //   }
  //   else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary === ("Snow")) {
  //     return (
  //       <div>
  //         waterproof insulated hat
  //       </div>
  //     )
  //   }
  //   else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.contains("Clear" || "Cloudy" || "Overcast")) {
  //     return (
  //       <div>
  //         heavy knit hat
  //       </div>
  //     )
  //   }
  //   else (props.temperature < 29 && props.summary === ("Snow"))
  //     return (
  //       <div>
  //         waterproof insulated hat
  //       </div>
  //     )
  // })

  return (
    <div>
      {headwear}
    </div>
  )
}

export default HeadTile
