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
      (headwear = <div>
                    <a href="https://www.amazon.com/TOREGE-Polarized-Sunglasses-Interchangeable-Baseball/dp/B01HRJIG3Y/ref=as_li_ss_il?crid=1MCGIQT76RE17&dchild=1&keywords=sunglasses+for+men&psr=EY17&qid=1575488825&s=cyber-monday&smid=A43SSV15NPECY&sprefix=sung,cyber-monday,147&sr=1-1&linkCode=li1&tag=whetherio-20&linkId=6a4c666b3a3b8cffe68d33d70e2708df&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01HRJIG3Y&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          headwear = <div>
                      <a href="https://www.amazon.com/Tough-Headwear-Cable-Knit-Beanie/dp/B01M6ZDYZR/ref=as_li_ss_il?ac_md=1-0-VW5kZXIgJDEw-ac_d_pm&crid=2WHPM7MEPXSMR&keywords=womens+knit+hat&pd_rd_i=B01M6ZDYZR&pd_rd_r=6c40d10d-db28-4662-9190-fbe3d78666c5&pd_rd_w=3FO8T&pd_rd_wg=blu9K&pf_rd_p=24d053a8-30a1-4822-a2ff-4d1ab2b984fc&pf_rd_r=Y5WGCGEBCTZQBS8FWWBW&psc=1&qid=1575495885&sprefix=womens+kni,aps,144&linkCode=li1&tag=whetherio-20&linkId=f6d982ff56d7c184db9470c62fb3e442&language=en_US" target="_blank">
                      <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M6ZDYZR&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                      </a>
                     </div>
        }
      }
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
                    <a href="https://www.amazon.com/dp/B01LZM62LN/ref=as_li_ss_il?aaxitk=Ruc7MK27g9zQNto81IIK2A&pd_rd_i=B01LZM62LN&pf_rd_p=44fc3e0f-4b9e-4ed8-b33b-363a7257163d&hsa_cr_id=1171525580401&sb-ci-n=asinImage&sb-ci-v=https://m.media-amazon.com/images/I/71HhjxGzFOL.jpg&sb-ci-a=B01LZM62LN&linkCode=li1&tag=whetherio-20&linkId=a886ed7f24d23246ec20f6074eb8a2e7&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LZM62LN&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          headwear = <div>
                      <a href="https://www.amazon.com/Tough-Headwear-Cable-Knit-Beanie/dp/B01M6ZDYZR/ref=as_li_ss_il?ac_md=1-0-VW5kZXIgJDEw-ac_d_pm&crid=2WHPM7MEPXSMR&keywords=womens+knit+hat&pd_rd_i=B01M6ZDYZR&pd_rd_r=6c40d10d-db28-4662-9190-fbe3d78666c5&pd_rd_w=3FO8T&pd_rd_wg=blu9K&pf_rd_p=24d053a8-30a1-4822-a2ff-4d1ab2b984fc&pf_rd_r=Y5WGCGEBCTZQBS8FWWBW&psc=1&qid=1575495885&sprefix=womens+kni,aps,144&linkCode=li1&tag=whetherio-20&linkId=f6d982ff56d7c184db9470c62fb3e442&language=en_US" target="_blank">
                      <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M6ZDYZR&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                      </a>
                     </div>
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
