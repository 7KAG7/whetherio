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
    if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Light Rain")) {
      (headwear =  <div>
                    <a href="https://www.amazon.com/Callaway-Golf-2017-Umbrella-Silver/dp/B01N1TYGIR/ref=as_li_ss_il?crid=2RVMQ6D9DXA9R&dchild=1&keywords=golf+umbrella&qid=1575939284&refinements=p_89:Callaway&rnid=2528832011&sprefix=golf+um,aps,153&sr=8-5&linkCode=li1&tag=whetherio-20&linkId=9b1ce3751f6b784c4329b5ccbcfae584&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01N1TYGIR&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                        <a href="https://www.amazon.com/Repel-Windproof-Travel-Umbrella-Coating/dp/B0160HYB8S/ref=as_li_ss_il?ascsub&cv_ct_id=amzn1.osp.9b4b746e-0f20-487e-85d4-b2b70c3d9b94&cv_ct_pg=search&cv_ct_wn=osp-search&keywords=purse+umbrella&pd_rd_i=B0160HYB8S&pd_rd_r=7daaa055-00e7-477c-98a5-8b9f00d0f693&pd_rd_w=4QhQL&pd_rd_wg=LpGqE&pf_rd_p=53eff971-6e12-4016-9864-b6dfd929b2b3&pf_rd_r=7Z05KYZ6QTCWBMX690RF&qid=1575939634&linkCode=li1&tag=whetherio-20&linkId=b6e3caabf3be35a6ce53548608a30ba8&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0160HYB8S&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                     </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Rain")) {
      (headwear =  <div>
                    <a href="https://www.amazon.com/Callaway-Golf-2017-Umbrella-Silver/dp/B01N1TYGIR/ref=as_li_ss_il?crid=2RVMQ6D9DXA9R&dchild=1&keywords=golf+umbrella&qid=1575939284&refinements=p_89:Callaway&rnid=2528832011&sprefix=golf+um,aps,153&sr=8-5&linkCode=li1&tag=whetherio-20&linkId=9b1ce3751f6b784c4329b5ccbcfae584&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01N1TYGIR&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                        <a href="https://www.amazon.com/Repel-Windproof-Travel-Umbrella-Coating/dp/B0160HYB8S/ref=as_li_ss_il?ascsub&cv_ct_id=amzn1.osp.9b4b746e-0f20-487e-85d4-b2b70c3d9b94&cv_ct_pg=search&cv_ct_wn=osp-search&keywords=purse+umbrella&pd_rd_i=B0160HYB8S&pd_rd_r=7daaa055-00e7-477c-98a5-8b9f00d0f693&pd_rd_w=4QhQL&pd_rd_wg=LpGqE&pf_rd_p=53eff971-6e12-4016-9864-b6dfd929b2b3&pf_rd_r=7Z05KYZ6QTCWBMX690RF&qid=1575939634&linkCode=li1&tag=whetherio-20&linkId=b6e3caabf3be35a6ce53548608a30ba8&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0160HYB8S&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                     </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Drizzle")) {
      (headwear =  <div>
                    <a href="https://www.amazon.com/Callaway-Golf-2017-Umbrella-Silver/dp/B01N1TYGIR/ref=as_li_ss_il?crid=2RVMQ6D9DXA9R&dchild=1&keywords=golf+umbrella&qid=1575939284&refinements=p_89:Callaway&rnid=2528832011&sprefix=golf+um,aps,153&sr=8-5&linkCode=li1&tag=whetherio-20&linkId=9b1ce3751f6b784c4329b5ccbcfae584&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01N1TYGIR&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                        <a href="https://www.amazon.com/Repel-Windproof-Travel-Umbrella-Coating/dp/B0160HYB8S/ref=as_li_ss_il?ascsub&cv_ct_id=amzn1.osp.9b4b746e-0f20-487e-85d4-b2b70c3d9b94&cv_ct_pg=search&cv_ct_wn=osp-search&keywords=purse+umbrella&pd_rd_i=B0160HYB8S&pd_rd_r=7daaa055-00e7-477c-98a5-8b9f00d0f693&pd_rd_w=4QhQL&pd_rd_wg=LpGqE&pf_rd_p=53eff971-6e12-4016-9864-b6dfd929b2b3&pf_rd_r=7Z05KYZ6QTCWBMX690RF&qid=1575939634&linkCode=li1&tag=whetherio-20&linkId=b6e3caabf3be35a6ce53548608a30ba8&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0160HYB8S&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
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
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Light Rain")) {
      (headwear = <div>
                    <a target="_blank"  href="https://www.amazon.com/gp/product/B06WV7411J/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06WV7411J&linkCode=as2&tag=whetherio-20&linkId=e2d484e3a7a7e1feb55e704cd068b726">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B06WV7411J&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=whetherio-20" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                        <a href="https://www.amazon.com/Repel-Windproof-Travel-Umbrella-Coating/dp/B0160HYB8S/ref=as_li_ss_il?ascsub&cv_ct_id=amzn1.osp.9b4b746e-0f20-487e-85d4-b2b70c3d9b94&cv_ct_pg=search&cv_ct_wn=osp-search&keywords=purse+umbrella&pd_rd_i=B0160HYB8S&pd_rd_r=7daaa055-00e7-477c-98a5-8b9f00d0f693&pd_rd_w=4QhQL&pd_rd_wg=LpGqE&pf_rd_p=53eff971-6e12-4016-9864-b6dfd929b2b3&pf_rd_r=7Z05KYZ6QTCWBMX690RF&qid=1575939634&linkCode=li1&tag=whetherio-20&linkId=b6e3caabf3be35a6ce53548608a30ba8&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0160HYB8S&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                     </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Rain")) {
      (headwear = <div>
                    <a target="_blank"  href="https://www.amazon.com/gp/product/B06WV7411J/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06WV7411J&linkCode=as2&tag=whetherio-20&linkId=e2d484e3a7a7e1feb55e704cd068b726">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B06WV7411J&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=whetherio-20" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                        <a href="https://www.amazon.com/Repel-Windproof-Travel-Umbrella-Coating/dp/B0160HYB8S/ref=as_li_ss_il?ascsub&cv_ct_id=amzn1.osp.9b4b746e-0f20-487e-85d4-b2b70c3d9b94&cv_ct_pg=search&cv_ct_wn=osp-search&keywords=purse+umbrella&pd_rd_i=B0160HYB8S&pd_rd_r=7daaa055-00e7-477c-98a5-8b9f00d0f693&pd_rd_w=4QhQL&pd_rd_wg=LpGqE&pf_rd_p=53eff971-6e12-4016-9864-b6dfd929b2b3&pf_rd_r=7Z05KYZ6QTCWBMX690RF&qid=1575939634&linkCode=li1&tag=whetherio-20&linkId=b6e3caabf3be35a6ce53548608a30ba8&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0160HYB8S&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                     </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Drizzle")) {
      (headwear = <div>
                    <a target="_blank"  href="https://www.amazon.com/gp/product/B06WV7411J/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06WV7411J&linkCode=as2&tag=whetherio-20&linkId=e2d484e3a7a7e1feb55e704cd068b726">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B06WV7411J&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=whetherio-20" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                        <a href="https://www.amazon.com/Repel-Windproof-Travel-Umbrella-Coating/dp/B0160HYB8S/ref=as_li_ss_il?ascsub&cv_ct_id=amzn1.osp.9b4b746e-0f20-487e-85d4-b2b70c3d9b94&cv_ct_pg=search&cv_ct_wn=osp-search&keywords=purse+umbrella&pd_rd_i=B0160HYB8S&pd_rd_r=7daaa055-00e7-477c-98a5-8b9f00d0f693&pd_rd_w=4QhQL&pd_rd_wg=LpGqE&pf_rd_p=53eff971-6e12-4016-9864-b6dfd929b2b3&pf_rd_r=7Z05KYZ6QTCWBMX690RF&qid=1575939634&linkCode=li1&tag=whetherio-20&linkId=b6e3caabf3be35a6ce53548608a30ba8&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0160HYB8S&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                     </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Clear")) {
      (headwear = <div>
                    <a href="https://www.amazon.com/Hurley-Phantom-Ripstop-Baseball-Heather/dp/B07GNTYB93/ref=as_li_ss_il?dchild=1&keywords=mens+hats&qid=1575939022&refinements=p_72:2661618011&rnid=2661617011&sr=8-30&linkCode=li1&tag=whetherio-20&linkId=57b450eeee3e7fecc4ca16aaab2b4593&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07GNTYB93&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
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
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Cloudy")) {
      (headwear = <div>
                    <a href="https://www.amazon.com/Hurley-Phantom-Ripstop-Baseball-Heather/dp/B07GNTYB93/ref=as_li_ss_il?dchild=1&keywords=mens+hats&qid=1575939022&refinements=p_72:2661618011&rnid=2661617011&sr=8-30&linkCode=li1&tag=whetherio-20&linkId=57b450eeee3e7fecc4ca16aaab2b4593&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07GNTYB93&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
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
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary === ("Overcast")) {
      (headwear = <div>
                    <a href="https://www.amazon.com/Hurley-Phantom-Ripstop-Baseball-Heather/dp/B07GNTYB93/ref=as_li_ss_il?dchild=1&keywords=mens+hats&qid=1575939022&refinements=p_72:2661618011&rnid=2661617011&sr=8-30&linkCode=li1&tag=whetherio-20&linkId=57b450eeee3e7fecc4ca16aaab2b4593&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07GNTYB93&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
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
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59  && currentBodyWeather.summary.includes("Light Rain")) {
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
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary === ("Rain")) {
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
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary === ("Drizzle")) {
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
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Clear")) {
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
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Cloudy")) {
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
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Overcast")) {
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
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Foggy")) {
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
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Light Snow")) {
      (headwear = <div>
                    <a href="https://www.amazon.com/Carhartt-Mens-Knit-Visor-Green/dp/B005442A0K/ref=as_li_ss_il?dchild=1&keywords=mens+winter+jeep+hats&qid=1575939928&sr=8-1&linkCode=li1&tag=whetherio-20&linkId=f1d8b013fda6b85bae6ea110059808d0&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B005442A0K&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                        <a href="https://www.amazon.com/Hatsandscarf-Cable-Knit-Beanie-Chunky/dp/B07H4626YL/ref=as_li_ss_il?dchild=1&keywords=womens+winter+hats&qid=1575940058&sr=8-5&linkCode=li1&tag=whetherio-20&linkId=7c9ff151fa6517da6c757cae0b66a6e1&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07H4626YL&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Snow")) {
      (headwear = <div>
                    <a href="https://www.amazon.com/Carhartt-Mens-Knit-Visor-Green/dp/B005442A0K/ref=as_li_ss_il?dchild=1&keywords=mens+winter+jeep+hats&qid=1575939928&sr=8-1&linkCode=li1&tag=whetherio-20&linkId=f1d8b013fda6b85bae6ea110059808d0&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B005442A0K&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                        <a href="https://www.amazon.com/Hatsandscarf-Cable-Knit-Beanie-Chunky/dp/B07H4626YL/ref=as_li_ss_il?dchild=1&keywords=womens+winter+hats&qid=1575940058&sr=8-5&linkCode=li1&tag=whetherio-20&linkId=7c9ff151fa6517da6c757cae0b66a6e1&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07H4626YL&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Clear")) {
      (headwear = <div>
                    <a href="https://www.amazon.com/Carhartt-Mens-Knit-Visor-Green/dp/B005442A0K/ref=as_li_ss_il?dchild=1&keywords=mens+winter+jeep+hats&qid=1575939928&sr=8-1&linkCode=li1&tag=whetherio-20&linkId=f1d8b013fda6b85bae6ea110059808d0&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B005442A0K&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                        <a href="https://www.amazon.com/Hatsandscarf-Cable-Knit-Beanie-Chunky/dp/B07H4626YL/ref=as_li_ss_il?dchild=1&keywords=womens+winter+hats&qid=1575940058&sr=8-5&linkCode=li1&tag=whetherio-20&linkId=7c9ff151fa6517da6c757cae0b66a6e1&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07H4626YL&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Cloudy")) {
      (headwear = <div>
                    <a href="https://www.amazon.com/Carhartt-Mens-Knit-Visor-Green/dp/B005442A0K/ref=as_li_ss_il?dchild=1&keywords=mens+winter+jeep+hats&qid=1575939928&sr=8-1&linkCode=li1&tag=whetherio-20&linkId=f1d8b013fda6b85bae6ea110059808d0&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B005442A0K&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                        <a href="https://www.amazon.com/Hatsandscarf-Cable-Knit-Beanie-Chunky/dp/B07H4626YL/ref=as_li_ss_il?dchild=1&keywords=womens+winter+hats&qid=1575940058&sr=8-5&linkCode=li1&tag=whetherio-20&linkId=7c9ff151fa6517da6c757cae0b66a6e1&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07H4626YL&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Overcast")) {
      (headwear = <div>
                    <a href="https://www.amazon.com/Carhartt-Mens-Knit-Visor-Green/dp/B005442A0K/ref=as_li_ss_il?dchild=1&keywords=mens+winter+jeep+hats&qid=1575939928&sr=8-1&linkCode=li1&tag=whetherio-20&linkId=f1d8b013fda6b85bae6ea110059808d0&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B005442A0K&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (user) {
        if (user === "female") {
          (headwear = <div>
                        <a href="https://www.amazon.com/Hatsandscarf-Cable-Knit-Beanie-Chunky/dp/B07H4626YL/ref=as_li_ss_il?dchild=1&keywords=womens+winter+hats&qid=1575940058&sr=8-5&linkCode=li1&tag=whetherio-20&linkId=7c9ff151fa6517da6c757cae0b66a6e1&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07H4626YL&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
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
