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
    if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Light Rain")) {
      (torso =  <div>
                  <a href="https://www.amazon.com/Helly-Hansen-Waterproof-Windproof-Raincoat/dp/B07F2S493K/ref=as_li_ss_il?th=1&linkCode=li1&tag=whetherio-20&linkId=491cdbeb6bdfc61e2146806d63503e59&language=en_US" target="_blank">
                  <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07F2S493K&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                  </a>
                </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/North-Face-Venture-Windmill-Heather/dp/B017S8P844/ref=as_li_ss_il?dchild=1&keywords=womens+north+face+rain+coat&qid=1575941101&s=apparel&sr=1-2&th=1&linkCode=li2&tag=whetherio-20&linkId=99e658f6529fef7f6c2bc9581498f6cd&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B017S8P844&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Rain")) {
      (torso =  <div>
                  <a href="https://www.amazon.com/Helly-Hansen-Waterproof-Windproof-Raincoat/dp/B07F2S493K/ref=as_li_ss_il?th=1&linkCode=li1&tag=whetherio-20&linkId=491cdbeb6bdfc61e2146806d63503e59&language=en_US" target="_blank">
                  <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07F2S493K&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                  </a>
                </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/North-Face-Venture-Windmill-Heather/dp/B017S8P844/ref=as_li_ss_il?dchild=1&keywords=womens+north+face+rain+coat&qid=1575941101&s=apparel&sr=1-2&th=1&linkCode=li2&tag=whetherio-20&linkId=99e658f6529fef7f6c2bc9581498f6cd&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B017S8P844&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Drizzle")) {
      (torso =  <div>
                  <a href="https://www.amazon.com/Helly-Hansen-Waterproof-Windproof-Raincoat/dp/B07F2S493K/ref=as_li_ss_il?th=1&linkCode=li1&tag=whetherio-20&linkId=491cdbeb6bdfc61e2146806d63503e59&language=en_US" target="_blank">
                  <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07F2S493K&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                  </a>
                </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/North-Face-Venture-Windmill-Heather/dp/B017S8P844/ref=as_li_ss_il?dchild=1&keywords=womens+north+face+rain+coat&qid=1575941101&s=apparel&sr=1-2&th=1&linkCode=li2&tag=whetherio-20&linkId=99e658f6529fef7f6c2bc9581498f6cd&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B017S8P844&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Clear")) {
      (torso = <div>
                <a href="https://www.amazon.com/Grunt-Style-America-T-Shirt-Large/dp/B01MY69LE7/ref=as_li_ss_il?crid=2PJCXW0RY8W1G&dchild=1&keywords=mens+tshirts+american&qid=1575940354&sprefix=mens+tshirts+americ,aps,144&sr=8-2&linkCode=li1&tag=whetherio-20&linkId=e3aa720413ea57fea05df24cee8dc032&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MY69LE7&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/Amazon-Essentials-Womens-2-Pack-Slim-Fit/dp/B0775M7SRD/ref=as_li_ss_il?crid=1PESI3D39CURK&dchild=1&keywords=womens+tank+tops&qid=1575941184&s=apparel&sprefix=womens+tank,fashion,154&sr=1-7&linkCode=li1&tag=whetherio-20&linkId=f28be758e561028d4e2c9af85eaf9843&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0775M7SRD&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Mostly Cloudy")) {
      (torso = <div>
                <a href="https://www.amazon.com/Grunt-Style-America-T-Shirt-Large/dp/B01MY69LE7/ref=as_li_ss_il?crid=2PJCXW0RY8W1G&dchild=1&keywords=mens+tshirts+american&qid=1575940354&sprefix=mens+tshirts+americ,aps,144&sr=8-2&linkCode=li1&tag=whetherio-20&linkId=e3aa720413ea57fea05df24cee8dc032&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MY69LE7&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/Amazon-Essentials-Womens-2-Pack-Slim-Fit/dp/B0775M7SRD/ref=as_li_ss_il?crid=1PESI3D39CURK&dchild=1&keywords=womens+tank+tops&qid=1575941184&s=apparel&sprefix=womens+tank,fashion,154&sr=1-7&linkCode=li1&tag=whetherio-20&linkId=f28be758e561028d4e2c9af85eaf9843&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0775M7SRD&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Cloudy")) {
      (torso = <div>
                <a href="https://www.amazon.com/Grunt-Style-America-T-Shirt-Large/dp/B01MY69LE7/ref=as_li_ss_il?crid=2PJCXW0RY8W1G&dchild=1&keywords=mens+tshirts+american&qid=1575940354&sprefix=mens+tshirts+americ,aps,144&sr=8-2&linkCode=li1&tag=whetherio-20&linkId=e3aa720413ea57fea05df24cee8dc032&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MY69LE7&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/Amazon-Essentials-Womens-2-Pack-Slim-Fit/dp/B0775M7SRD/ref=as_li_ss_il?crid=1PESI3D39CURK&dchild=1&keywords=womens+tank+tops&qid=1575941184&s=apparel&sprefix=womens+tank,fashion,154&sr=1-7&linkCode=li1&tag=whetherio-20&linkId=f28be758e561028d4e2c9af85eaf9843&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0775M7SRD&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 80 && currentBodyWeather.summary.contains("Overcast")) {
      (torso = <div>
                <a href="https://www.amazon.com/Grunt-Style-America-T-Shirt-Large/dp/B01MY69LE7/ref=as_li_ss_il?crid=2PJCXW0RY8W1G&dchild=1&keywords=mens+tshirts+american&qid=1575940354&sprefix=mens+tshirts+americ,aps,144&sr=8-2&linkCode=li1&tag=whetherio-20&linkId=e3aa720413ea57fea05df24cee8dc032&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MY69LE7&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/Amazon-Essentials-Womens-2-Pack-Slim-Fit/dp/B0775M7SRD/ref=as_li_ss_il?crid=1PESI3D39CURK&dchild=1&keywords=womens+tank+tops&qid=1575941184&s=apparel&sprefix=womens+tank,fashion,154&sr=1-7&linkCode=li1&tag=whetherio-20&linkId=f28be758e561028d4e2c9af85eaf9843&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0775M7SRD&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Light Rain")) {
      (torso =  <div>
                  <a href="https://www.amazon.com/Helly-Hansen-Waterproof-Windproof-Raincoat/dp/B07F2S493K/ref=as_li_ss_il?th=1&linkCode=li1&tag=whetherio-20&linkId=491cdbeb6bdfc61e2146806d63503e59&language=en_US" target="_blank">
                  <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07F2S493K&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                  </a>
                </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/North-Face-Womens-Resolve-Jacket/dp/B07FKDHC4Z/ref=as_li_ss_il?dchild=1&keywords=womens+waterproof+jacket&qid=1575944582&refinements=p_72:2661618011&rnid=2661617011&s=apparel&sr=1-8&linkCode=li1&tag=whetherio-20&linkId=854af56f000fefeb146ffb895d9ce5cb&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07FKDHC4Z&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Rain")) {
      (torso =  <div>
                  <a href="https://www.amazon.com/Helly-Hansen-Waterproof-Windproof-Raincoat/dp/B07F2S493K/ref=as_li_ss_il?th=1&linkCode=li1&tag=whetherio-20&linkId=491cdbeb6bdfc61e2146806d63503e59&language=en_US" target="_blank">
                  <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07F2S493K&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                  </a>
                </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/North-Face-Womens-Resolve-Jacket/dp/B07FKDHC4Z/ref=as_li_ss_il?dchild=1&keywords=womens+waterproof+jacket&qid=1575944582&refinements=p_72:2661618011&rnid=2661617011&s=apparel&sr=1-8&linkCode=li1&tag=whetherio-20&linkId=854af56f000fefeb146ffb895d9ce5cb&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07FKDHC4Z&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Drizzle")) {
      (torso =  <div>
                  <a href="https://www.amazon.com/Helly-Hansen-Waterproof-Windproof-Raincoat/dp/B07F2S493K/ref=as_li_ss_il?th=1&linkCode=li1&tag=whetherio-20&linkId=491cdbeb6bdfc61e2146806d63503e59&language=en_US" target="_blank">
                  <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07F2S493K&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                  </a>
                </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/North-Face-Venture-Windmill-Heather/dp/B017S8P844/ref=as_li_ss_il?dchild=1&keywords=womens+north+face+rain+coat&qid=1575941101&s=apparel&sr=1-2&th=1&linkCode=li2&tag=whetherio-20&linkId=99e658f6529fef7f6c2bc9581498f6cd&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B017S8P844&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Clear")) {
      (torso = <div>
                <a href="https://www.amazon.com/Black-American-Sleeve-T-Shirt-Charcoal/dp/B01DTGES6S/ref=as_li_ss_il?crid=2PJCXW0RY8W1G&dchild=1&keywords=mens+tshirts+american&qid=1575940528&sprefix=mens+tshirts+americ,aps,144&sr=8-8&linkCode=li1&tag=whetherio-20&linkId=4f3ae0d8b6029002e758857949db2460&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01DTGES6S&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/DUOSTICK-Sleeve-Twist-Shirts-Blouses-XS/dp/B081L5WRRZ/ref=as_li_ss_il?crid=4VJHH56AZRT7&keywords=womens+tops+and+blouses&qid=1575941468&s=apparel&sprefix=womens+top,fashion,159&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNVNNRjdLR1hLWEhBJmVuY3J5cHRlZElkPUEwOTU3MDk2NVBJOUE4MkpKT0U0JmVuY3J5cHRlZEFkSWQ9QTA5NTM1MTEyOEU2Q0FBRU8xVVJQJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==&linkCode=li1&tag=whetherio-20&linkId=2711004716e75df148df1e20e0c063b6&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B081L5WRRZ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Mostly Cloudy")) {
      (torso = <div>
                <a href="https://www.amazon.com/Black-American-Sleeve-T-Shirt-Charcoal/dp/B01DTGES6S/ref=as_li_ss_il?crid=2PJCXW0RY8W1G&dchild=1&keywords=mens+tshirts+american&qid=1575940528&sprefix=mens+tshirts+americ,aps,144&sr=8-8&linkCode=li1&tag=whetherio-20&linkId=4f3ae0d8b6029002e758857949db2460&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01DTGES6S&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/DUOSTICK-Sleeve-Twist-Shirts-Blouses-XS/dp/B081L5WRRZ/ref=as_li_ss_il?crid=4VJHH56AZRT7&keywords=womens+tops+and+blouses&qid=1575941468&s=apparel&sprefix=womens+top,fashion,159&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNVNNRjdLR1hLWEhBJmVuY3J5cHRlZElkPUEwOTU3MDk2NVBJOUE4MkpKT0U0JmVuY3J5cHRlZEFkSWQ9QTA5NTM1MTEyOEU2Q0FBRU8xVVJQJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==&linkCode=li1&tag=whetherio-20&linkId=2711004716e75df148df1e20e0c063b6&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B081L5WRRZ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Cloudy")) {
      (torso = <div>
                <a href="https://www.amazon.com/Black-American-Sleeve-T-Shirt-Charcoal/dp/B01DTGES6S/ref=as_li_ss_il?crid=2PJCXW0RY8W1G&dchild=1&keywords=mens+tshirts+american&qid=1575940528&sprefix=mens+tshirts+americ,aps,144&sr=8-8&linkCode=li1&tag=whetherio-20&linkId=4f3ae0d8b6029002e758857949db2460&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01DTGES6S&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/DUOSTICK-Sleeve-Twist-Shirts-Blouses-XS/dp/B081L5WRRZ/ref=as_li_ss_il?crid=4VJHH56AZRT7&keywords=womens+tops+and+blouses&qid=1575941468&s=apparel&sprefix=womens+top,fashion,159&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNVNNRjdLR1hLWEhBJmVuY3J5cHRlZElkPUEwOTU3MDk2NVBJOUE4MkpKT0U0JmVuY3J5cHRlZEFkSWQ9QTA5NTM1MTEyOEU2Q0FBRU8xVVJQJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==&linkCode=li1&tag=whetherio-20&linkId=2711004716e75df148df1e20e0c063b6&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B081L5WRRZ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Overcast")) {
      (torso = <div>
                <a href="https://www.amazon.com/Black-American-Sleeve-T-Shirt-Charcoal/dp/B01DTGES6S/ref=as_li_ss_il?crid=2PJCXW0RY8W1G&dchild=1&keywords=mens+tshirts+american&qid=1575940528&sprefix=mens+tshirts+americ,aps,144&sr=8-8&linkCode=li1&tag=whetherio-20&linkId=4f3ae0d8b6029002e758857949db2460&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01DTGES6S&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/DUOSTICK-Sleeve-Twist-Shirts-Blouses-XS/dp/B081L5WRRZ/ref=as_li_ss_il?crid=4VJHH56AZRT7&keywords=womens+tops+and+blouses&qid=1575941468&s=apparel&sprefix=womens+top,fashion,159&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNVNNRjdLR1hLWEhBJmVuY3J5cHRlZElkPUEwOTU3MDk2NVBJOUE4MkpKT0U0JmVuY3J5cHRlZEFkSWQ9QTA5NTM1MTEyOEU2Q0FBRU8xVVJQJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==&linkCode=li1&tag=whetherio-20&linkId=2711004716e75df148df1e20e0c063b6&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B081L5WRRZ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 60 && currentBodyWeather.temperature < 79 && currentBodyWeather.summary.includes("Foggy")) {
      (torso = <div>
                <a href="https://www.amazon.com/Black-American-Sleeve-T-Shirt-Charcoal/dp/B01DTGES6S/ref=as_li_ss_il?crid=2PJCXW0RY8W1G&dchild=1&keywords=mens+tshirts+american&qid=1575940528&sprefix=mens+tshirts+americ,aps,144&sr=8-8&linkCode=li1&tag=whetherio-20&linkId=4f3ae0d8b6029002e758857949db2460&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01DTGES6S&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/DUOSTICK-Sleeve-Twist-Shirts-Blouses-XS/dp/B081L5WRRZ/ref=as_li_ss_il?crid=4VJHH56AZRT7&keywords=womens+tops+and+blouses&qid=1575941468&s=apparel&sprefix=womens+top,fashion,159&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNVNNRjdLR1hLWEhBJmVuY3J5cHRlZElkPUEwOTU3MDk2NVBJOUE4MkpKT0U0JmVuY3J5cHRlZEFkSWQ9QTA5NTM1MTEyOEU2Q0FBRU8xVVJQJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==&linkCode=li1&tag=whetherio-20&linkId=2711004716e75df148df1e20e0c063b6&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B081L5WRRZ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Flurries")) {
      (torso = <div>
                <a href="https://www.amazon.com/Helly-Hansen-Waterproof-Windproof-Breathable/dp/B006ZML8D0/ref=as_li_ss_il?crid=2DXOOVXRYOPCP&dchild=1&keywords=helle+hansen+rain+coat&qid=1575940730&sprefix=helle+hansen+jackets+mens,aps,150&sr=8-1&linkCode=li1&tag=whetherio-20&linkId=932c164625775155d818e07473c8b249&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B006ZML8D0&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/North-Face-Womens-Resolve-Insulated/dp/B078WGCNNG/ref=as_li_ss_il?dchild=1&keywords=patagonia+waterproof+jacket+for+women+insulated&qid=1575932808&sr=8-5&th=1&linkCode=li2&tag=whetherio-20&linkId=94d3bf954b9578ae13e915c1f7c9cb46&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WGCNNG&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Light Snow")) {
      (torso = <div>
                <a href="https://www.amazon.com/Helly-Hansen-Waterproof-Windproof-Breathable/dp/B006ZML8D0/ref=as_li_ss_il?crid=2DXOOVXRYOPCP&dchild=1&keywords=helle+hansen+rain+coat&qid=1575940730&sprefix=helle+hansen+jackets+mens,aps,150&sr=8-1&linkCode=li1&tag=whetherio-20&linkId=932c164625775155d818e07473c8b249&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B006ZML8D0&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/North-Face-Womens-Resolve-Insulated/dp/B078WGCNNG/ref=as_li_ss_il?dchild=1&keywords=patagonia+waterproof+jacket+for+women+insulated&qid=1575932808&sr=8-5&th=1&linkCode=li2&tag=whetherio-20&linkId=94d3bf954b9578ae13e915c1f7c9cb46&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WGCNNG&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Snow")) {
      (torso = <div>
                <a href="https://www.amazon.com/Helly-Hansen-Waterproof-Windproof-Breathable/dp/B006ZML8D0/ref=as_li_ss_il?crid=2DXOOVXRYOPCP&dchild=1&keywords=helle+hansen+rain+coat&qid=1575940730&sprefix=helle+hansen+jackets+mens,aps,150&sr=8-1&linkCode=li1&tag=whetherio-20&linkId=932c164625775155d818e07473c8b249&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B006ZML8D0&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/North-Face-Womens-Resolve-Insulated/dp/B078WGCNNG/ref=as_li_ss_il?dchild=1&keywords=patagonia+waterproof+jacket+for+women+insulated&qid=1575932808&sr=8-5&th=1&linkCode=li2&tag=whetherio-20&linkId=94d3bf954b9578ae13e915c1f7c9cb46&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WGCNNG&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Light Rain")) {
      (torso = <div>
                <a href="https://www.amazon.com/Helly-Hansen-Waterproof-Windproof-Breathable/dp/B006ZML8D0/ref=as_li_ss_il?crid=2DXOOVXRYOPCP&dchild=1&keywords=helle+hansen+rain+coat&qid=1575940730&sprefix=helle+hansen+jackets+mens,aps,150&sr=8-1&linkCode=li1&tag=whetherio-20&linkId=932c164625775155d818e07473c8b249&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B006ZML8D0&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/North-Face-Womens-Resolve-Insulated/dp/B078WGCNNG/ref=as_li_ss_il?dchild=1&keywords=patagonia+waterproof+jacket+for+women+insulated&qid=1575932808&sr=8-5&th=1&linkCode=li2&tag=whetherio-20&linkId=94d3bf954b9578ae13e915c1f7c9cb46&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WGCNNG&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Rain")) {
      (torso = <div>
                <a href="https://www.amazon.com/Helly-Hansen-Waterproof-Windproof-Breathable/dp/B006ZML8D0/ref=as_li_ss_il?crid=2DXOOVXRYOPCP&dchild=1&keywords=helle+hansen+rain+coat&qid=1575940730&sprefix=helle+hansen+jackets+mens,aps,150&sr=8-1&linkCode=li1&tag=whetherio-20&linkId=932c164625775155d818e07473c8b249&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B006ZML8D0&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/North-Face-Womens-Resolve-Insulated/dp/B078WGCNNG/ref=as_li_ss_il?dchild=1&keywords=patagonia+waterproof+jacket+for+women+insulated&qid=1575932808&sr=8-5&th=1&linkCode=li2&tag=whetherio-20&linkId=94d3bf954b9578ae13e915c1f7c9cb46&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WGCNNG&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Drizzle")) {
      (torso = <div>
                <a href="https://www.amazon.com/Helly-Hansen-Waterproof-Windproof-Breathable/dp/B006ZML8D0/ref=as_li_ss_il?crid=2DXOOVXRYOPCP&dchild=1&keywords=helle+hansen+rain+coat&qid=1575940730&sprefix=helle+hansen+jackets+mens,aps,150&sr=8-1&linkCode=li1&tag=whetherio-20&linkId=932c164625775155d818e07473c8b249&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B006ZML8D0&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/North-Face-Womens-Resolve-Insulated/dp/B078WGCNNG/ref=as_li_ss_il?dchild=1&keywords=patagonia+waterproof+jacket+for+women+insulated&qid=1575932808&sr=8-5&th=1&linkCode=li2&tag=whetherio-20&linkId=94d3bf954b9578ae13e915c1f7c9cb46&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WGCNNG&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Clear")) {
      (torso = <div>
                <a href="https://www.amazon.com/Patagonia-Down-Sweater-Black-Medium/dp/B01MRQGGWY/ref=as_li_ss_il?crid=23VEY1OVHXGB0&dchild=1&keywords=mens+patagonia+down+sweater+jacket&qid=1575570397&sprefix=mens+patagonia+down+,aps,130&sr=8-3&th=1&linkCode=li1&tag=whetherio-20&linkId=87fafa5564ebb1011eb88bc055dbdebd&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MRQGGWY&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/dp/B015OZ2EDQ/ref=as_li_ss_il?psc=1&pd_rd_i=B015OZ2EDQ&pd_rd_w=3KR1N&pf_rd_p=45a72588-80f7-4414-9851-786f6c16d42b&pd_rd_wg=NOr4r&pf_rd_r=X74BVBWRBP9396Q471KG&pd_rd_r=b87d7480-0a0d-4fb4-ac2c-a5cc3fb7221a&smid=A6Y8EA3VZD1DF&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVVBOSUxaUTBBUzRPJmVuY3J5cHRlZElkPUEwNDc1NzQwMkdQTEJZOENINDVYVCZlbmNyeXB0ZWRBZElkPUEwMjkzNTIzMkNXQ1VYUk1CUk9JUyZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=&linkCode=li1&tag=whetherio-20&linkId=c366c1378f995d8a6a5cac5a0aa30d14&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B015OZ2EDQ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Mostly Cloudy")) {
      (torso = <div>
                <a href="https://www.amazon.com/Patagonia-Down-Sweater-Black-Medium/dp/B01MRQGGWY/ref=as_li_ss_il?crid=23VEY1OVHXGB0&dchild=1&keywords=mens+patagonia+down+sweater+jacket&qid=1575570397&sprefix=mens+patagonia+down+,aps,130&sr=8-3&th=1&linkCode=li1&tag=whetherio-20&linkId=87fafa5564ebb1011eb88bc055dbdebd&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MRQGGWY&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/dp/B015OZ2EDQ/ref=as_li_ss_il?psc=1&pd_rd_i=B015OZ2EDQ&pd_rd_w=3KR1N&pf_rd_p=45a72588-80f7-4414-9851-786f6c16d42b&pd_rd_wg=NOr4r&pf_rd_r=X74BVBWRBP9396Q471KG&pd_rd_r=b87d7480-0a0d-4fb4-ac2c-a5cc3fb7221a&smid=A6Y8EA3VZD1DF&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVVBOSUxaUTBBUzRPJmVuY3J5cHRlZElkPUEwNDc1NzQwMkdQTEJZOENINDVYVCZlbmNyeXB0ZWRBZElkPUEwMjkzNTIzMkNXQ1VYUk1CUk9JUyZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=&linkCode=li1&tag=whetherio-20&linkId=c366c1378f995d8a6a5cac5a0aa30d14&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B015OZ2EDQ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Cloudy")) {
      (torso = <div>
                <a href="https://www.amazon.com/Patagonia-Down-Sweater-Black-Medium/dp/B01MRQGGWY/ref=as_li_ss_il?crid=23VEY1OVHXGB0&dchild=1&keywords=mens+patagonia+down+sweater+jacket&qid=1575570397&sprefix=mens+patagonia+down+,aps,130&sr=8-3&th=1&linkCode=li1&tag=whetherio-20&linkId=87fafa5564ebb1011eb88bc055dbdebd&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MRQGGWY&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/dp/B015OZ2EDQ/ref=as_li_ss_il?psc=1&pd_rd_i=B015OZ2EDQ&pd_rd_w=3KR1N&pf_rd_p=45a72588-80f7-4414-9851-786f6c16d42b&pd_rd_wg=NOr4r&pf_rd_r=X74BVBWRBP9396Q471KG&pd_rd_r=b87d7480-0a0d-4fb4-ac2c-a5cc3fb7221a&smid=A6Y8EA3VZD1DF&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVVBOSUxaUTBBUzRPJmVuY3J5cHRlZElkPUEwNDc1NzQwMkdQTEJZOENINDVYVCZlbmNyeXB0ZWRBZElkPUEwMjkzNTIzMkNXQ1VYUk1CUk9JUyZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=&linkCode=li1&tag=whetherio-20&linkId=c366c1378f995d8a6a5cac5a0aa30d14&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B015OZ2EDQ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Overcast")) {
      (torso = <div>
                <a href="https://www.amazon.com/Patagonia-Down-Sweater-Black-Medium/dp/B01MRQGGWY/ref=as_li_ss_il?crid=23VEY1OVHXGB0&dchild=1&keywords=mens+patagonia+down+sweater+jacket&qid=1575570397&sprefix=mens+patagonia+down+,aps,130&sr=8-3&th=1&linkCode=li1&tag=whetherio-20&linkId=87fafa5564ebb1011eb88bc055dbdebd&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MRQGGWY&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/dp/B015OZ2EDQ/ref=as_li_ss_il?psc=1&pd_rd_i=B015OZ2EDQ&pd_rd_w=3KR1N&pf_rd_p=45a72588-80f7-4414-9851-786f6c16d42b&pd_rd_wg=NOr4r&pf_rd_r=X74BVBWRBP9396Q471KG&pd_rd_r=b87d7480-0a0d-4fb4-ac2c-a5cc3fb7221a&smid=A6Y8EA3VZD1DF&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVVBOSUxaUTBBUzRPJmVuY3J5cHRlZElkPUEwNDc1NzQwMkdQTEJZOENINDVYVCZlbmNyeXB0ZWRBZElkPUEwMjkzNTIzMkNXQ1VYUk1CUk9JUyZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=&linkCode=li1&tag=whetherio-20&linkId=c366c1378f995d8a6a5cac5a0aa30d14&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B015OZ2EDQ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature > 33 && currentBodyWeather.temperature < 59 && currentBodyWeather.summary.includes("Foggy")) {
      (torso = <div>
                <a href="https://www.amazon.com/Patagonia-Down-Sweater-Black-Medium/dp/B01MRQGGWY/ref=as_li_ss_il?crid=23VEY1OVHXGB0&dchild=1&keywords=mens+patagonia+down+sweater+jacket&qid=1575570397&sprefix=mens+patagonia+down+,aps,130&sr=8-3&th=1&linkCode=li1&tag=whetherio-20&linkId=87fafa5564ebb1011eb88bc055dbdebd&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MRQGGWY&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/dp/B015OZ2EDQ/ref=as_li_ss_il?psc=1&pd_rd_i=B015OZ2EDQ&pd_rd_w=3KR1N&pf_rd_p=45a72588-80f7-4414-9851-786f6c16d42b&pd_rd_wg=NOr4r&pf_rd_r=X74BVBWRBP9396Q471KG&pd_rd_r=b87d7480-0a0d-4fb4-ac2c-a5cc3fb7221a&smid=A6Y8EA3VZD1DF&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVVBOSUxaUTBBUzRPJmVuY3J5cHRlZElkPUEwNDc1NzQwMkdQTEJZOENINDVYVCZlbmNyeXB0ZWRBZElkPUEwMjkzNTIzMkNXQ1VYUk1CUk9JUyZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=&linkCode=li1&tag=whetherio-20&linkId=c366c1378f995d8a6a5cac5a0aa30d14&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B015OZ2EDQ&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Flurries")) {
      (torso = <div>
                <a href="https://www.amazon.com/Mountain-Hardwear-Firefall-Jacket-Shark/dp/B01N678WR7/ref=as_li_ss_il?dchild=1&keywords=mens+mountain+hardwear+firefall&qid=1575941625&s=apparel&sr=1-6&linkCode=li1&tag=whetherio-20&linkId=e00526c4bb963f36af55445473acb688&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01N678WR7&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/Canada-Goose-Lorette-Parka-Womens/dp/B01M3Q1ALE/ref=as_li_ss_il?_encoding=UTF8&pd_rd_i=B01MDMFDTH&pd_rd_r=eba3c860-b0a5-4f97-89b9-207ac9d7c36a&pd_rd_w=vYmK9&pd_rd_wg=jBbo1&pf_rd_p=5873ae95-9063-4a23-9b7e-eafa738c2269&pf_rd_r=J9VHRX4E5BVNXAQ8EJ2H&refRID=J9VHRX4E5BVNXAQ8EJ2H&th=1&linkCode=li1&tag=whetherio-20&linkId=f915fcdb49c1a3f8da6b3f8ba78a134b&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M3Q1ALE&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Drizzle")) {
      (torso = <div>
                <a href="https://www.amazon.com/Mountain-Hardwear-Firefall-Jacket-Shark/dp/B01N678WR7/ref=as_li_ss_il?dchild=1&keywords=mens+mountain+hardwear+firefall&qid=1575941625&s=apparel&sr=1-6&linkCode=li1&tag=whetherio-20&linkId=e00526c4bb963f36af55445473acb688&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01N678WR7&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/Canada-Goose-Lorette-Parka-Womens/dp/B01M3Q1ALE/ref=as_li_ss_il?_encoding=UTF8&pd_rd_i=B01MDMFDTH&pd_rd_r=eba3c860-b0a5-4f97-89b9-207ac9d7c36a&pd_rd_w=vYmK9&pd_rd_wg=jBbo1&pf_rd_p=5873ae95-9063-4a23-9b7e-eafa738c2269&pf_rd_r=J9VHRX4E5BVNXAQ8EJ2H&refRID=J9VHRX4E5BVNXAQ8EJ2H&th=1&linkCode=li1&tag=whetherio-20&linkId=f915fcdb49c1a3f8da6b3f8ba78a134b&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M3Q1ALE&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Light Rain")) {
      (torso = <div>
                <a href="https://www.amazon.com/Mountain-Hardwear-Firefall-Jacket-Shark/dp/B01N678WR7/ref=as_li_ss_il?dchild=1&keywords=mens+mountain+hardwear+firefall&qid=1575941625&s=apparel&sr=1-6&linkCode=li1&tag=whetherio-20&linkId=e00526c4bb963f36af55445473acb688&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01N678WR7&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/Canada-Goose-Lorette-Parka-Womens/dp/B01M3Q1ALE/ref=as_li_ss_il?_encoding=UTF8&pd_rd_i=B01MDMFDTH&pd_rd_r=eba3c860-b0a5-4f97-89b9-207ac9d7c36a&pd_rd_w=vYmK9&pd_rd_wg=jBbo1&pf_rd_p=5873ae95-9063-4a23-9b7e-eafa738c2269&pf_rd_r=J9VHRX4E5BVNXAQ8EJ2H&refRID=J9VHRX4E5BVNXAQ8EJ2H&th=1&linkCode=li1&tag=whetherio-20&linkId=f915fcdb49c1a3f8da6b3f8ba78a134b&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M3Q1ALE&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Light Snow")) {
      (torso = <div>
                <a href="https://www.amazon.com/Mountain-Hardwear-Firefall-Jacket-Shark/dp/B01N678WR7/ref=as_li_ss_il?dchild=1&keywords=mens+mountain+hardwear+firefall&qid=1575941625&s=apparel&sr=1-6&linkCode=li1&tag=whetherio-20&linkId=e00526c4bb963f36af55445473acb688&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01N678WR7&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/Canada-Goose-Lorette-Parka-Womens/dp/B01M3Q1ALE/ref=as_li_ss_il?_encoding=UTF8&pd_rd_i=B01MDMFDTH&pd_rd_r=eba3c860-b0a5-4f97-89b9-207ac9d7c36a&pd_rd_w=vYmK9&pd_rd_wg=jBbo1&pf_rd_p=5873ae95-9063-4a23-9b7e-eafa738c2269&pf_rd_r=J9VHRX4E5BVNXAQ8EJ2H&refRID=J9VHRX4E5BVNXAQ8EJ2H&th=1&linkCode=li1&tag=whetherio-20&linkId=f915fcdb49c1a3f8da6b3f8ba78a134b&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M3Q1ALE&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Snow")) {
      (torso = <div>
                <a href="https://www.amazon.com/Mountain-Hardwear-Firefall-Jacket-Shark/dp/B01N678WR7/ref=as_li_ss_il?dchild=1&keywords=mens+mountain+hardwear+firefall&qid=1575941625&s=apparel&sr=1-6&linkCode=li1&tag=whetherio-20&linkId=e00526c4bb963f36af55445473acb688&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01N678WR7&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/Canada-Goose-Lorette-Parka-Womens/dp/B01M3Q1ALE/ref=as_li_ss_il?_encoding=UTF8&pd_rd_i=B01MDMFDTH&pd_rd_r=eba3c860-b0a5-4f97-89b9-207ac9d7c36a&pd_rd_w=vYmK9&pd_rd_wg=jBbo1&pf_rd_p=5873ae95-9063-4a23-9b7e-eafa738c2269&pf_rd_r=J9VHRX4E5BVNXAQ8EJ2H&refRID=J9VHRX4E5BVNXAQ8EJ2H&th=1&linkCode=li1&tag=whetherio-20&linkId=f915fcdb49c1a3f8da6b3f8ba78a134b&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M3Q1ALE&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Clear")) {
      (torso = <div>
                <a href="https://www.amazon.com/Mountain-Hardwear-Firefall-Jacket-Shark/dp/B01N678WR7/ref=as_li_ss_il?dchild=1&keywords=mens+mountain+hardwear+firefall&qid=1575941625&s=apparel&sr=1-6&linkCode=li1&tag=whetherio-20&linkId=e00526c4bb963f36af55445473acb688&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01N678WR7&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/Canada-Goose-Lorette-Parka-Womens/dp/B01M3Q1ALE/ref=as_li_ss_il?_encoding=UTF8&pd_rd_i=B01MDMFDTH&pd_rd_r=eba3c860-b0a5-4f97-89b9-207ac9d7c36a&pd_rd_w=vYmK9&pd_rd_wg=jBbo1&pf_rd_p=5873ae95-9063-4a23-9b7e-eafa738c2269&pf_rd_r=J9VHRX4E5BVNXAQ8EJ2H&refRID=J9VHRX4E5BVNXAQ8EJ2H&th=1&linkCode=li1&tag=whetherio-20&linkId=f915fcdb49c1a3f8da6b3f8ba78a134b&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M3Q1ALE&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Mostly Cloudy")) {
      (torso = <div>
                <a href="https://www.amazon.com/Mountain-Hardwear-Firefall-Jacket-Shark/dp/B01N678WR7/ref=as_li_ss_il?dchild=1&keywords=mens+mountain+hardwear+firefall&qid=1575941625&s=apparel&sr=1-6&linkCode=li1&tag=whetherio-20&linkId=e00526c4bb963f36af55445473acb688&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01N678WR7&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/Canada-Goose-Lorette-Parka-Womens/dp/B01M3Q1ALE/ref=as_li_ss_il?_encoding=UTF8&pd_rd_i=B01MDMFDTH&pd_rd_r=eba3c860-b0a5-4f97-89b9-207ac9d7c36a&pd_rd_w=vYmK9&pd_rd_wg=jBbo1&pf_rd_p=5873ae95-9063-4a23-9b7e-eafa738c2269&pf_rd_r=J9VHRX4E5BVNXAQ8EJ2H&refRID=J9VHRX4E5BVNXAQ8EJ2H&th=1&linkCode=li1&tag=whetherio-20&linkId=f915fcdb49c1a3f8da6b3f8ba78a134b&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M3Q1ALE&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Cloudy")) {
      (torso = <div>
                <a href="https://www.amazon.com/Mountain-Hardwear-Firefall-Jacket-Shark/dp/B01N678WR7/ref=as_li_ss_il?dchild=1&keywords=mens+mountain+hardwear+firefall&qid=1575941625&s=apparel&sr=1-6&linkCode=li1&tag=whetherio-20&linkId=e00526c4bb963f36af55445473acb688&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01N678WR7&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/Canada-Goose-Lorette-Parka-Womens/dp/B01M3Q1ALE/ref=as_li_ss_il?_encoding=UTF8&pd_rd_i=B01MDMFDTH&pd_rd_r=eba3c860-b0a5-4f97-89b9-207ac9d7c36a&pd_rd_w=vYmK9&pd_rd_wg=jBbo1&pf_rd_p=5873ae95-9063-4a23-9b7e-eafa738c2269&pf_rd_r=J9VHRX4E5BVNXAQ8EJ2H&refRID=J9VHRX4E5BVNXAQ8EJ2H&th=1&linkCode=li1&tag=whetherio-20&linkId=f915fcdb49c1a3f8da6b3f8ba78a134b&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M3Q1ALE&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
        }
      }
    } else if (currentBodyWeather.temperature < 32 && currentBodyWeather.summary.includes("Overcast")) {
      (torso = <div>
                <a href="https://www.amazon.com/Mountain-Hardwear-Firefall-Jacket-Shark/dp/B01N678WR7/ref=as_li_ss_il?dchild=1&keywords=mens+mountain+hardwear+firefall&qid=1575941625&s=apparel&sr=1-6&linkCode=li1&tag=whetherio-20&linkId=e00526c4bb963f36af55445473acb688&language=en_US" target="_blank">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01N678WR7&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                </a>
               </div>)
      if (user) {
        if (user === "female") {
          (torso = <div>
                    <a href="https://www.amazon.com/Canada-Goose-Lorette-Parka-Womens/dp/B01M3Q1ALE/ref=as_li_ss_il?_encoding=UTF8&pd_rd_i=B01MDMFDTH&pd_rd_r=eba3c860-b0a5-4f97-89b9-207ac9d7c36a&pd_rd_w=vYmK9&pd_rd_wg=jBbo1&pf_rd_p=5873ae95-9063-4a23-9b7e-eafa738c2269&pf_rd_r=J9VHRX4E5BVNXAQ8EJ2H&refRID=J9VHRX4E5BVNXAQ8EJ2H&th=1&linkCode=li1&tag=whetherio-20&linkId=f915fcdb49c1a3f8da6b3f8ba78a134b&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M3Q1ALE&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
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
