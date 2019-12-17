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
    if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.includes("Light Rain")) {
      (legs =  <div>
                <a href="https://www.amazon.com/Hurley-Line-Up-Boardshorts-Hyper/dp/B079326JLM/ref=as_li_ss_il?crid=19PO31ZYC6C4I&dchild=1&keywords=mens+board+shorts&qid=1575942012&s=apparel&sprefix=mens+board,fashion,150&sr=1-11&linkCode=li1&tag=whetherio-20&linkId=263c603364e9d174f9c0cb7743920aea&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B079326JLM&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
                </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Roxy-Womens-Oceanside-Beach-Printed/dp/B07GRS842M/ref=as_li_ss_il?_encoding=UTF8&pd_rd_i=B07GRS842M&pd_rd_r=3daae3e6-912e-4253-bea0-74d46e5d6e94&pd_rd_w=SEmeA&pd_rd_wg=Rn5RR&pf_rd_p=5873ae95-9063-4a23-9b7e-eafa738c2269&pf_rd_r=EKGVXEBH61BS2E3M37ZR&refRID=EKGVXEBH61BS2E3M37ZR&linkCode=li2&tag=whetherio-20&linkId=c53e4f640519ba9f34e82c0d47710064&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07GRS842M&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.includes("Rain")) {
      (legs =  <div>
                <a href="https://www.amazon.com/Hurley-Line-Up-Boardshorts-Hyper/dp/B079326JLM/ref=as_li_ss_il?crid=19PO31ZYC6C4I&dchild=1&keywords=mens+board+shorts&qid=1575942012&s=apparel&sprefix=mens+board,fashion,150&sr=1-11&linkCode=li1&tag=whetherio-20&linkId=263c603364e9d174f9c0cb7743920aea&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B079326JLM&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
                </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Roxy-Womens-Oceanside-Beach-Printed/dp/B07GRS842M/ref=as_li_ss_il?_encoding=UTF8&pd_rd_i=B07GRS842M&pd_rd_r=3daae3e6-912e-4253-bea0-74d46e5d6e94&pd_rd_w=SEmeA&pd_rd_wg=Rn5RR&pf_rd_p=5873ae95-9063-4a23-9b7e-eafa738c2269&pf_rd_r=EKGVXEBH61BS2E3M37ZR&refRID=EKGVXEBH61BS2E3M37ZR&linkCode=li2&tag=whetherio-20&linkId=c53e4f640519ba9f34e82c0d47710064&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07GRS842M&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.includes("Drizzle")) {
      (legs =  <div>
                <a href="https://www.amazon.com/Hurley-Line-Up-Boardshorts-Hyper/dp/B079326JLM/ref=as_li_ss_il?crid=19PO31ZYC6C4I&dchild=1&keywords=mens+board+shorts&qid=1575942012&s=apparel&sprefix=mens+board,fashion,150&sr=1-11&linkCode=li1&tag=whetherio-20&linkId=263c603364e9d174f9c0cb7743920aea&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B079326JLM&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
                </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Roxy-Womens-Oceanside-Beach-Printed/dp/B07GRS842M/ref=as_li_ss_il?_encoding=UTF8&pd_rd_i=B07GRS842M&pd_rd_r=3daae3e6-912e-4253-bea0-74d46e5d6e94&pd_rd_w=SEmeA&pd_rd_wg=Rn5RR&pf_rd_p=5873ae95-9063-4a23-9b7e-eafa738c2269&pf_rd_r=EKGVXEBH61BS2E3M37ZR&refRID=EKGVXEBH61BS2E3M37ZR&linkCode=li2&tag=whetherio-20&linkId=c53e4f640519ba9f34e82c0d47710064&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07GRS842M&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.includes("Clear")) {
      (legs = <div>
                <a href="https://www.amazon.com/Pinkpum-Lightweight-Pocket-Casual-Shorts/dp/B07JJR6BCD/ref=as_li_ss_il?crid=KR3ZKEK2FSE9&dchild=1&keywords=mens+cargo+shorts&qid=1575942598&s=apparel&sprefix=mens+cargo,fashion,150&sr=1-10&linkCode=li1&tag=whetherio-20&linkId=3cb582fb17eba6d137fbf857775a58b6&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07JJR6BCD&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/PHOENISING-Womens-Stretchy-Fabric-Distressed/dp/B0721JRP21/ref=as_li_ss_il?dchild=1&keywords=womens+shorts&qid=1575942548&s=apparel&sr=1-10&linkCode=li1&tag=whetherio-20&linkId=5e7d6d7edb5cf2c8dcec0003620dd424&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0721JRP21&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.includes("Mostly Cloudy")) {
      (legs = <div>
                <a href="https://www.amazon.com/Pinkpum-Lightweight-Pocket-Casual-Shorts/dp/B07JJR6BCD/ref=as_li_ss_il?crid=KR3ZKEK2FSE9&dchild=1&keywords=mens+cargo+shorts&qid=1575942598&s=apparel&sprefix=mens+cargo,fashion,150&sr=1-10&linkCode=li1&tag=whetherio-20&linkId=3cb582fb17eba6d137fbf857775a58b6&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07JJR6BCD&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/PHOENISING-Womens-Stretchy-Fabric-Distressed/dp/B0721JRP21/ref=as_li_ss_il?dchild=1&keywords=womens+shorts&qid=1575942548&s=apparel&sr=1-10&linkCode=li1&tag=whetherio-20&linkId=5e7d6d7edb5cf2c8dcec0003620dd424&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0721JRP21&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.includes("Cloudy")) {
      (legs = <div>
                <a href="https://www.amazon.com/Pinkpum-Lightweight-Pocket-Casual-Shorts/dp/B07JJR6BCD/ref=as_li_ss_il?crid=KR3ZKEK2FSE9&dchild=1&keywords=mens+cargo+shorts&qid=1575942598&s=apparel&sprefix=mens+cargo,fashion,150&sr=1-10&linkCode=li1&tag=whetherio-20&linkId=3cb582fb17eba6d137fbf857775a58b6&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07JJR6BCD&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/PHOENISING-Womens-Stretchy-Fabric-Distressed/dp/B0721JRP21/ref=as_li_ss_il?dchild=1&keywords=womens+shorts&qid=1575942548&s=apparel&sr=1-10&linkCode=li1&tag=whetherio-20&linkId=5e7d6d7edb5cf2c8dcec0003620dd424&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0721JRP21&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.includes("Overcast")) {
      (legs = <div>
                <a href="https://www.amazon.com/Pinkpum-Lightweight-Pocket-Casual-Shorts/dp/B07JJR6BCD/ref=as_li_ss_il?crid=KR3ZKEK2FSE9&dchild=1&keywords=mens+cargo+shorts&qid=1575942598&s=apparel&sprefix=mens+cargo,fashion,150&sr=1-10&linkCode=li1&tag=whetherio-20&linkId=3cb582fb17eba6d137fbf857775a58b6&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07JJR6BCD&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/PHOENISING-Womens-Stretchy-Fabric-Distressed/dp/B0721JRP21/ref=as_li_ss_il?dchild=1&keywords=womens+shorts&qid=1575942548&s=apparel&sr=1-10&linkCode=li1&tag=whetherio-20&linkId=5e7d6d7edb5cf2c8dcec0003620dd424&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0721JRP21&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Light Rain")) {
      (legs = <div>
                <a href="https://www.amazon.com/Kuhl-Mens-Slax-Pants-Raven/dp/B00RSKR1ZW/ref=as_li_ss_il?ref_=ast_bbp_dp&th=1&psc=1&linkCode=li1&tag=whetherio-20&linkId=f0e60a04951b67de8dadea958a42d59f&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RSKR1ZW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Rain")) {
      (legs = <div>
                <a href="https://www.amazon.com/Kuhl-Mens-Slax-Pants-Raven/dp/B00RSKR1ZW/ref=as_li_ss_il?ref_=ast_bbp_dp&th=1&psc=1&linkCode=li1&tag=whetherio-20&linkId=f0e60a04951b67de8dadea958a42d59f&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RSKR1ZW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Drizzle")) {
      (legs = <div>
                <a href="https://www.amazon.com/Kuhl-Mens-Slax-Pants-Raven/dp/B00RSKR1ZW/ref=as_li_ss_il?ref_=ast_bbp_dp&th=1&psc=1&linkCode=li1&tag=whetherio-20&linkId=f0e60a04951b67de8dadea958a42d59f&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RSKR1ZW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Clear")) {
      (legs = <div>
                <a href="https://www.amazon.com/Kuhl-Mens-Slax-Pants-Raven/dp/B00RSKR1ZW/ref=as_li_ss_il?ref_=ast_bbp_dp&th=1&psc=1&linkCode=li1&tag=whetherio-20&linkId=f0e60a04951b67de8dadea958a42d59f&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RSKR1ZW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Mostly Cloudy")) {
      (legs = <div>
                <a href="https://www.amazon.com/Kuhl-Mens-Slax-Pants-Raven/dp/B00RSKR1ZW/ref=as_li_ss_il?ref_=ast_bbp_dp&th=1&psc=1&linkCode=li1&tag=whetherio-20&linkId=f0e60a04951b67de8dadea958a42d59f&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RSKR1ZW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Cloudy")) {
      (legs = <div>
                <a href="https://www.amazon.com/Kuhl-Mens-Slax-Pants-Raven/dp/B00RSKR1ZW/ref=as_li_ss_il?ref_=ast_bbp_dp&th=1&psc=1&linkCode=li1&tag=whetherio-20&linkId=f0e60a04951b67de8dadea958a42d59f&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RSKR1ZW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Overcast")) {
      (legs = <div>
                <a href="https://www.amazon.com/Kuhl-Mens-Slax-Pants-Raven/dp/B00RSKR1ZW/ref=as_li_ss_il?ref_=ast_bbp_dp&th=1&psc=1&linkCode=li1&tag=whetherio-20&linkId=f0e60a04951b67de8dadea958a42d59f&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RSKR1ZW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Foggy")) {
      (legs = <div>
                <a href="https://www.amazon.com/Kuhl-Mens-Slax-Pants-Raven/dp/B00RSKR1ZW/ref=as_li_ss_il?ref_=ast_bbp_dp&th=1&psc=1&linkCode=li1&tag=whetherio-20&linkId=f0e60a04951b67de8dadea958a42d59f&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RSKR1ZW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59  && currentBodyWeather.summary.includes("Flurries")) {
      (legs = <div>
                <a href="https://www.amazon.com/Carhartt-Washed-Twill-Dungaree-Relaxed/dp/B00870NC9G/ref=as_li_ss_il?dchild=1&keywords=mens+pants&psc=1&qid=1572979819&s=apparel&sr=1-45&linkCode=li1&tag=whetherio-20&linkId=fcd3d79801060578f30bc3c6466cde00&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00870NC9G&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59  && currentBodyWeather.summary.includes("Light Snow")) {
      (legs = <div>
                <a href="https://www.amazon.com/Carhartt-Washed-Twill-Dungaree-Relaxed/dp/B00870NC9G/ref=as_li_ss_il?dchild=1&keywords=mens+pants&psc=1&qid=1572979819&s=apparel&sr=1-45&linkCode=li1&tag=whetherio-20&linkId=fcd3d79801060578f30bc3c6466cde00&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00870NC9G&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59  && currentBodyWeather.summary.includes("Snow")) {
      (legs = <div>
                <a href="https://www.amazon.com/Carhartt-Washed-Twill-Dungaree-Relaxed/dp/B00870NC9G/ref=as_li_ss_il?dchild=1&keywords=mens+pants&psc=1&qid=1572979819&s=apparel&sr=1-45&linkCode=li1&tag=whetherio-20&linkId=fcd3d79801060578f30bc3c6466cde00&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00870NC9G&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59  && currentBodyWeather.summary.includes("Light Rain")) {
      (legs = <div>
                <a href="https://www.amazon.com/Carhartt-Washed-Twill-Dungaree-Relaxed/dp/B00870NC9G/ref=as_li_ss_il?dchild=1&keywords=mens+pants&psc=1&qid=1572979819&s=apparel&sr=1-45&linkCode=li1&tag=whetherio-20&linkId=fcd3d79801060578f30bc3c6466cde00&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00870NC9G&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Rain")) {
      (legs = <div>
                <a href="https://www.amazon.com/MAGCOMSEN-Lightweight-Camping-Pockets-Outdoor/dp/B07MNPRKN8/ref=as_li_ss_il?crid=3NNORV84YGHEQ&dchild=1&keywords=kuhl+mens+pants&qid=1575938588&refinements=p_72:2661618011&rnid=2661617011&sprefix=kuhl,aps,158&sr=8-6&linkCode=li1&tag=whetherio-20&linkId=81c1a0f15c994cd250dda5a267ec3677&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07MNPRKN8&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
              </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Drizzle")) {
      (legs = <div>
                <a href="https://www.amazon.com/MAGCOMSEN-Lightweight-Camping-Pockets-Outdoor/dp/B07MNPRKN8/ref=as_li_ss_il?crid=3NNORV84YGHEQ&dchild=1&keywords=kuhl+mens+pants&qid=1575938588&refinements=p_72:2661618011&rnid=2661617011&sprefix=kuhl,aps,158&sr=8-6&linkCode=li1&tag=whetherio-20&linkId=81c1a0f15c994cd250dda5a267ec3677&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07MNPRKN8&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
              </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Clear")) {
      (legs = <div>
                <a href="https://www.amazon.com/Carhartt-Washed-Twill-Dungaree-Relaxed/dp/B00870NC9G/ref=as_li_ss_il?dchild=1&keywords=mens+pants&psc=1&qid=1572979819&s=apparel&sr=1-45&linkCode=li1&tag=whetherio-20&linkId=fcd3d79801060578f30bc3c6466cde00&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00870NC9G&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Mostly Cloudy")) {
      (legs = <div>
                <a href="https://www.amazon.com/Carhartt-Washed-Twill-Dungaree-Relaxed/dp/B00870NC9G/ref=as_li_ss_il?dchild=1&keywords=mens+pants&psc=1&qid=1572979819&s=apparel&sr=1-45&linkCode=li1&tag=whetherio-20&linkId=fcd3d79801060578f30bc3c6466cde00&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00870NC9G&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Cloudy")) {
      (legs = <div>
                <a href="https://www.amazon.com/Carhartt-Washed-Twill-Dungaree-Relaxed/dp/B00870NC9G/ref=as_li_ss_il?dchild=1&keywords=mens+pants&psc=1&qid=1572979819&s=apparel&sr=1-45&linkCode=li1&tag=whetherio-20&linkId=fcd3d79801060578f30bc3c6466cde00&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00870NC9G&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Overcast")) {
      (legs = <div>
                <a href="https://www.amazon.com/Carhartt-Washed-Twill-Dungaree-Relaxed/dp/B00870NC9G/ref=as_li_ss_il?dchild=1&keywords=mens+pants&psc=1&qid=1572979819&s=apparel&sr=1-45&linkCode=li1&tag=whetherio-20&linkId=fcd3d79801060578f30bc3c6466cde00&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00870NC9G&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Foggy")) {
      (legs = <div>
                <a href="https://www.amazon.com/Carhartt-Washed-Twill-Dungaree-Relaxed/dp/B00870NC9G/ref=as_li_ss_il?dchild=1&keywords=mens+pants&psc=1&qid=1572979819&s=apparel&sr=1-45&linkCode=li1&tag=whetherio-20&linkId=fcd3d79801060578f30bc3c6466cde00&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00870NC9G&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Lululemon-High-Times-Pants-Black/dp/B01LWPM0L2/ref=as_li_ss_il?crid=17S01EVQ168YI&dchild=1&keywords=lululemon+leggings&qid=1575942966&s=apparel&sprefix=lulu,fashion,156&sr=1-5&linkCode=li2&tag=whetherio-20&linkId=c8a29782a973d56bb904bcb1905ae96a&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWPM0L2&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Flurries")) {
      (legs = <div>
                <a href="https://www.amazon.com/North-Face-Mens-Seymore-Pant/dp/B078WFY89W/ref=as_li_ss_il?crid=C0ZS52SC2925&dchild=1&keywords=mens+northface+snow+pants&qid=1575943370&s=apparel&sprefix=mens+northface+s,fashion,143&sr=1-4&th=1&linkCode=li1&tag=whetherio-20&linkId=9e2c7c67a1d53ef28932ed0a8b5051bb&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WFY89W&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Volcom-Womens-Swift-Overall-Snowpant/dp/B07N2N3ZHJ/ref=as_li_ss_il?crid=1UVIKZ4MO7D8Q&dchild=1&keywords=womens+snow+pants&qid=1575943238&s=apparel&sprefix=womens+snow+pan,fashion,147&sr=1-11&linkCode=li1&tag=whetherio-20&linkId=be8b15cf767e746f829da12898c73d17&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07N2N3ZHJ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Drizzle")) {
      (legs = <div>
                <a href="https://www.amazon.com/North-Face-Mens-Seymore-Pant/dp/B078WFY89W/ref=as_li_ss_il?crid=C0ZS52SC2925&dchild=1&keywords=mens+northface+snow+pants&qid=1575943370&s=apparel&sprefix=mens+northface+s,fashion,143&sr=1-4&th=1&linkCode=li1&tag=whetherio-20&linkId=9e2c7c67a1d53ef28932ed0a8b5051bb&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WFY89W&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Volcom-Womens-Swift-Overall-Snowpant/dp/B07N2N3ZHJ/ref=as_li_ss_il?crid=1UVIKZ4MO7D8Q&dchild=1&keywords=womens+snow+pants&qid=1575943238&s=apparel&sprefix=womens+snow+pan,fashion,147&sr=1-11&linkCode=li1&tag=whetherio-20&linkId=be8b15cf767e746f829da12898c73d17&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07N2N3ZHJ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Light Rain")) {
      (legs = <div>
                <a href="https://www.amazon.com/North-Face-Mens-Seymore-Pant/dp/B078WFY89W/ref=as_li_ss_il?crid=C0ZS52SC2925&dchild=1&keywords=mens+northface+snow+pants&qid=1575943370&s=apparel&sprefix=mens+northface+s,fashion,143&sr=1-4&th=1&linkCode=li1&tag=whetherio-20&linkId=9e2c7c67a1d53ef28932ed0a8b5051bb&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WFY89W&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Volcom-Womens-Swift-Overall-Snowpant/dp/B07N2N3ZHJ/ref=as_li_ss_il?crid=1UVIKZ4MO7D8Q&dchild=1&keywords=womens+snow+pants&qid=1575943238&s=apparel&sprefix=womens+snow+pan,fashion,147&sr=1-11&linkCode=li1&tag=whetherio-20&linkId=be8b15cf767e746f829da12898c73d17&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07N2N3ZHJ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Light Snow")) {
      (legs = <div>
                <a href="https://www.amazon.com/North-Face-Mens-Seymore-Pant/dp/B078WFY89W/ref=as_li_ss_il?crid=C0ZS52SC2925&dchild=1&keywords=mens+northface+snow+pants&qid=1575943370&s=apparel&sprefix=mens+northface+s,fashion,143&sr=1-4&th=1&linkCode=li1&tag=whetherio-20&linkId=9e2c7c67a1d53ef28932ed0a8b5051bb&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WFY89W&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Volcom-Womens-Swift-Overall-Snowpant/dp/B07N2N3ZHJ/ref=as_li_ss_il?crid=1UVIKZ4MO7D8Q&dchild=1&keywords=womens+snow+pants&qid=1575943238&s=apparel&sprefix=womens+snow+pan,fashion,147&sr=1-11&linkCode=li1&tag=whetherio-20&linkId=be8b15cf767e746f829da12898c73d17&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07N2N3ZHJ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Snow")) {
      (legs = <div>
                <a href="https://www.amazon.com/North-Face-Mens-Seymore-Pant/dp/B078WFY89W/ref=as_li_ss_il?crid=C0ZS52SC2925&dchild=1&keywords=mens+northface+snow+pants&qid=1575943370&s=apparel&sprefix=mens+northface+s,fashion,143&sr=1-4&th=1&linkCode=li1&tag=whetherio-20&linkId=9e2c7c67a1d53ef28932ed0a8b5051bb&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WFY89W&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Volcom-Womens-Swift-Overall-Snowpant/dp/B07N2N3ZHJ/ref=as_li_ss_il?crid=1UVIKZ4MO7D8Q&dchild=1&keywords=womens+snow+pants&qid=1575943238&s=apparel&sprefix=womens+snow+pan,fashion,147&sr=1-11&linkCode=li1&tag=whetherio-20&linkId=be8b15cf767e746f829da12898c73d17&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07N2N3ZHJ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Clear")) {
      (legs = <div>
                <a href="https://www.amazon.com/North-Face-Mens-Seymore-Pant/dp/B078WFY89W/ref=as_li_ss_il?crid=C0ZS52SC2925&dchild=1&keywords=mens+northface+snow+pants&qid=1575943370&s=apparel&sprefix=mens+northface+s,fashion,143&sr=1-4&th=1&linkCode=li1&tag=whetherio-20&linkId=9e2c7c67a1d53ef28932ed0a8b5051bb&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WFY89W&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Volcom-Womens-Swift-Overall-Snowpant/dp/B07N2N3ZHJ/ref=as_li_ss_il?crid=1UVIKZ4MO7D8Q&dchild=1&keywords=womens+snow+pants&qid=1575943238&s=apparel&sprefix=womens+snow+pan,fashion,147&sr=1-11&linkCode=li1&tag=whetherio-20&linkId=be8b15cf767e746f829da12898c73d17&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07N2N3ZHJ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Mostly Cloudy")) {
      (legs = <div>
                <a href="https://www.amazon.com/North-Face-Mens-Seymore-Pant/dp/B078WFY89W/ref=as_li_ss_il?crid=C0ZS52SC2925&dchild=1&keywords=mens+northface+snow+pants&qid=1575943370&s=apparel&sprefix=mens+northface+s,fashion,143&sr=1-4&th=1&linkCode=li1&tag=whetherio-20&linkId=9e2c7c67a1d53ef28932ed0a8b5051bb&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WFY89W&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Volcom-Womens-Swift-Overall-Snowpant/dp/B07N2N3ZHJ/ref=as_li_ss_il?crid=1UVIKZ4MO7D8Q&dchild=1&keywords=womens+snow+pants&qid=1575943238&s=apparel&sprefix=womens+snow+pan,fashion,147&sr=1-11&linkCode=li1&tag=whetherio-20&linkId=be8b15cf767e746f829da12898c73d17&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07N2N3ZHJ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Cloudy")) {
      (legs = <div>
                <a href="https://www.amazon.com/North-Face-Mens-Seymore-Pant/dp/B078WFY89W/ref=as_li_ss_il?crid=C0ZS52SC2925&dchild=1&keywords=mens+northface+snow+pants&qid=1575943370&s=apparel&sprefix=mens+northface+s,fashion,143&sr=1-4&th=1&linkCode=li1&tag=whetherio-20&linkId=9e2c7c67a1d53ef28932ed0a8b5051bb&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WFY89W&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Volcom-Womens-Swift-Overall-Snowpant/dp/B07N2N3ZHJ/ref=as_li_ss_il?crid=1UVIKZ4MO7D8Q&dchild=1&keywords=womens+snow+pants&qid=1575943238&s=apparel&sprefix=womens+snow+pan,fashion,147&sr=1-11&linkCode=li1&tag=whetherio-20&linkId=be8b15cf767e746f829da12898c73d17&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07N2N3ZHJ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Overcast")) {
      (legs = <div>
                <a href="https://www.amazon.com/North-Face-Mens-Seymore-Pant/dp/B078WFY89W/ref=as_li_ss_il?crid=C0ZS52SC2925&dchild=1&keywords=mens+northface+snow+pants&qid=1575943370&s=apparel&sprefix=mens+northface+s,fashion,143&sr=1-4&th=1&linkCode=li1&tag=whetherio-20&linkId=9e2c7c67a1d53ef28932ed0a8b5051bb&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WFY89W&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (legs = <div>
                    <a href="https://www.amazon.com/Volcom-Womens-Swift-Overall-Snowpant/dp/B07N2N3ZHJ/ref=as_li_ss_il?crid=1UVIKZ4MO7D8Q&dchild=1&keywords=womens+snow+pants&qid=1575943238&s=apparel&sprefix=womens+snow+pan,fashion,147&sr=1-11&linkCode=li1&tag=whetherio-20&linkId=be8b15cf767e746f829da12898c73d17&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07N2N3ZHJ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
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
