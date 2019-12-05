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
    if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Rain")) {
      (headwear =  <div>
                    <a target="_blank"  href="https://www.amazon.com/gp/product/B06WV7411J/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06WV7411J&linkCode=as2&tag=whetherio-20&linkId=e2d484e3a7a7e1feb55e704cd068b726">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B06WV7411J&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=whetherio-20" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                      <a href="https://www.amazon.com/Roxy-Juniors-Finishline-Trucker-Anthracite/dp/B01MTY7NTU/ref=as_li_ss_il?crid=361PJAIJ2TALB&dchild=1&keywords=womens+trucker+hat&qid=1575566598&s=apparel&sprefix=womens+trucke,fashion,157&sr=1-1&linkCode=li1&tag=whetherio-20&linkId=16b99d5e5164c1e5b9c02197c021dfd7&language=en_US" target="_blank">
                      <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MTY7NTU&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                      </a>
                     </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Drizzle")) {
      (headwear =  <div>
                    <a target="_blank"  href="https://www.amazon.com/gp/product/B06WV7411J/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06WV7411J&linkCode=as2&tag=whetherio-20&linkId=e2d484e3a7a7e1feb55e704cd068b726">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B06WV7411J&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=whetherio-20" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                      <a href="https://www.amazon.com/Roxy-Juniors-Finishline-Trucker-Anthracite/dp/B01MTY7NTU/ref=as_li_ss_il?crid=361PJAIJ2TALB&dchild=1&keywords=womens+trucker+hat&qid=1575566598&s=apparel&sprefix=womens+trucke,fashion,157&sr=1-1&linkCode=li1&tag=whetherio-20&linkId=16b99d5e5164c1e5b9c02197c021dfd7&language=en_US" target="_blank">
                      <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MTY7NTU&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                      </a>
                     </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Clear")) {
      (headwear = <div>
                    <a href="https://www.amazon.com/dp/B00290R2PK/ref=as_li_ss_il?aaxitk=kf2eqVKgCzLTGZzz1N07jg&pd_rd_i=B000EYP57K&pf_rd_p=44fc3e0f-4b9e-4ed8-b33b-363a7257163d&hsa_cr_id=2669420320401&sb-ci-n=asinImage&sb-ci-v=https://m.media-amazon.com/images/I/51foQOboGwL.jpg&sb-ci-a=B000EYP57K&th=1&linkCode=li1&tag=whetherio-20&linkId=fe868034472a567ab36c6b4d2d37ffaa&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00290R2PK&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                      <a href="https://www.amazon.com/Michael-Kors-Tortoise-Acetate-Gradient/dp/B01N4LANX6/ref=as_li_ss_il?crid=3JX42BHMM1X54&dchild=1&keywords=womens+sunglasses&qid=1575567035&sprefix=womens+su,aps,133&sr=8-7&linkCode=li1&tag=whetherio-20&linkId=dc9b50905117920894335506884926a4&language=en_US" target="_blank">
                      <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01N4LANX6&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" /></a>
                     </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Cloudy")) {
      (headwear = <div>
                    <a target="_blank"  href="https://www.amazon.com/gp/product/B06WV7411J/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06WV7411J&linkCode=as2&tag=whetherio-20&linkId=e2d484e3a7a7e1feb55e704cd068b726">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B06WV7411J&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=whetherio-20" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                      <a href="https://www.amazon.com/Roxy-Juniors-Finishline-Trucker-Anthracite/dp/B01MTY7NTU/ref=as_li_ss_il?crid=361PJAIJ2TALB&dchild=1&keywords=womens+trucker+hat&qid=1575566598&s=apparel&sprefix=womens+trucke,fashion,157&sr=1-1&linkCode=li1&tag=whetherio-20&linkId=16b99d5e5164c1e5b9c02197c021dfd7&language=en_US" target="_blank">
                      <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MTY7NTU&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                      </a>
                     </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Overcast")) {
      (headwear = <div>
                    <a target="_blank"  href="https://www.amazon.com/gp/product/B06WV7411J/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06WV7411J&linkCode=as2&tag=whetherio-20&linkId=e2d484e3a7a7e1feb55e704cd068b726">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B06WV7411J&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=whetherio-20" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                      <a href="https://www.amazon.com/Roxy-Juniors-Finishline-Trucker-Anthracite/dp/B01MTY7NTU/ref=as_li_ss_il?crid=361PJAIJ2TALB&dchild=1&keywords=womens+trucker+hat&qid=1575566598&s=apparel&sprefix=womens+trucke,fashion,157&sr=1-1&linkCode=li1&tag=whetherio-20&linkId=16b99d5e5164c1e5b9c02197c021dfd7&language=en_US" target="_blank">
                      <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MTY7NTU&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                      </a>
                     </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Clear")) {
      (headwear = <div>

                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>

                      </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Cloudy")) {
      (headwear = <div>

                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>

                      </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Overcast")) {
      (headwear = <div>

                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>

                      </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Rain")) {
      (headwear = <div>

                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>

                      </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Drizzle")) {
      (headwear = <div>

                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>

                      </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59  && currentBodyWeather.summary.includes("Overcast")) {
      (headwear = <div>
                    <a href="https://www.amazon.com/Volcom-Flexfit-Stretch-Charcoal-Heather/dp/B00OWD54FW/ref=as_li_ss_il?dchild=1&keywords=mens+hat&qid=1575569308&sr=8-31&linkCode=li1&tag=whetherio-20&linkId=8c973cb721b400ab107ca64f18f8f74c&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00OWD54FW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                      <a href="https://www.amazon.com/North-Face-Womens-Stitch-Heather/dp/B078WGQ92V/ref=as_li_ss_il?dchild=1&keywords=womens+patagonia+knit+hat&qid=1575569467&sr=8-7&linkCode=li1&tag=whetherio-20&linkId=abb24f19f76724390a5634ed429203b5&language=en_US" target="_blank">
                      <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WGQ92V&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                      </a>
                     </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary === ("Rain")) {
      (headwear = <div>
                    <a href="https://www.amazon.com/Volcom-Flexfit-Stretch-Charcoal-Heather/dp/B00OWD54FW/ref=as_li_ss_il?dchild=1&keywords=mens+hat&qid=1575569308&sr=8-31&linkCode=li1&tag=whetherio-20&linkId=8c973cb721b400ab107ca64f18f8f74c&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00OWD54FW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                      <a href="https://www.amazon.com/North-Face-Womens-Stitch-Heather/dp/B078WGQ92V/ref=as_li_ss_il?dchild=1&keywords=womens+patagonia+knit+hat&qid=1575569467&sr=8-7&linkCode=li1&tag=whetherio-20&linkId=abb24f19f76724390a5634ed429203b5&language=en_US" target="_blank">
                      <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WGQ92V&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                      </a>
                     </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary === ("Drizzle")) {
      (headwear = <div>
                    <a href="https://www.amazon.com/Volcom-Flexfit-Stretch-Charcoal-Heather/dp/B00OWD54FW/ref=as_li_ss_il?dchild=1&keywords=mens+hat&qid=1575569308&sr=8-31&linkCode=li1&tag=whetherio-20&linkId=8c973cb721b400ab107ca64f18f8f74c&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00OWD54FW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                      <a href="https://www.amazon.com/North-Face-Womens-Stitch-Heather/dp/B078WGQ92V/ref=as_li_ss_il?dchild=1&keywords=womens+patagonia+knit+hat&qid=1575569467&sr=8-7&linkCode=li1&tag=whetherio-20&linkId=abb24f19f76724390a5634ed429203b5&language=en_US" target="_blank">
                      <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WGQ92V&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                      </a>
                     </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Clear")) {
      (headwear = <div>
                    <a href="https://www.amazon.com/Volcom-Flexfit-Stretch-Charcoal-Heather/dp/B00OWD54FW/ref=as_li_ss_il?dchild=1&keywords=mens+hat&qid=1575569308&sr=8-31&linkCode=li1&tag=whetherio-20&linkId=8c973cb721b400ab107ca64f18f8f74c&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00OWD54FW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                      <a href="https://www.amazon.com/North-Face-Womens-Stitch-Heather/dp/B078WGQ92V/ref=as_li_ss_il?dchild=1&keywords=womens+patagonia+knit+hat&qid=1575569467&sr=8-7&linkCode=li1&tag=whetherio-20&linkId=abb24f19f76724390a5634ed429203b5&language=en_US" target="_blank">
                      <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WGQ92V&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                      </a>
                     </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Cloudy")) {
      (headwear = <div>
                    <a href="https://www.amazon.com/Volcom-Flexfit-Stretch-Charcoal-Heather/dp/B00OWD54FW/ref=as_li_ss_il?dchild=1&keywords=mens+hat&qid=1575569308&sr=8-31&linkCode=li1&tag=whetherio-20&linkId=8c973cb721b400ab107ca64f18f8f74c&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00OWD54FW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                      <a href="https://www.amazon.com/North-Face-Womens-Stitch-Heather/dp/B078WGQ92V/ref=as_li_ss_il?dchild=1&keywords=womens+patagonia+knit+hat&qid=1575569467&sr=8-7&linkCode=li1&tag=whetherio-20&linkId=abb24f19f76724390a5634ed429203b5&language=en_US" target="_blank">
                      <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WGQ92V&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                      </a>
                     </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 30 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Overcast")) {
      (headwear = <div>
                    <a href="https://www.amazon.com/Volcom-Flexfit-Stretch-Charcoal-Heather/dp/B00OWD54FW/ref=as_li_ss_il?dchild=1&keywords=mens+hat&qid=1575569308&sr=8-31&linkCode=li1&tag=whetherio-20&linkId=8c973cb721b400ab107ca64f18f8f74c&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00OWD54FW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                      <a href="https://www.amazon.com/North-Face-Womens-Stitch-Heather/dp/B078WGQ92V/ref=as_li_ss_il?dchild=1&keywords=womens+patagonia+knit+hat&qid=1575569467&sr=8-7&linkCode=li1&tag=whetherio-20&linkId=abb24f19f76724390a5634ed429203b5&language=en_US" target="_blank">
                      <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WGQ92V&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                      </a>
                     </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Clear")) {
      (headwear = <div>

                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>

                      </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Cloudy")) {
      (headwear = <div>

                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>

                      </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Overcast")) {
      (headwear = <div>

                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>

                      </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 29 && currentBodyWeather.summary.includes("Snow")) {
      (headwear = <div>

                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>

                      </div>)
        }
      }
    }

  return (
    <div>
      {headwear}
    </div>
  )
}

export default HeadTile
