import React, { useState, useEffect }  from "react"

const FootwearTile = props => {

  let footwear
    if (props.temperature > 80 && props.summary.includes("Light Rain")) {
      (footwear =  <div>
                    <a href="https://www.amazon.com/KEEN-Newport-Water-Black-Outsole/dp/B07DK2CQ8V/ref=as_li_ss_il?crid=M18UY21E1X0B&dchild=1&keywords=mens+keen+sandals&qid=1575943551&s=apparel&sprefix=mens+KEEN+san,fashion,147&sr=1-12&linkCode=li1&tag=whetherio-20&linkId=63f0c92db042de5ec2f620fa283ce9ec&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07DK2CQ8V&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/KEEN-Womens-Emerald-Thong-Sandal/dp/B008JEIU24/ref=as_li_ss_il?crid=3S9KA6E3OM27&dchild=1&keywords=womens+keen+flip+flops&qid=1575943974&s=apparel&sprefix=womens+fli,fashion,153&sr=1-31&linkCode=li1&tag=whetherio-20&linkId=50b945fddc1e2336f672d3e582833c1f&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008JEIU24&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 80 && props.summary.includes("Rain")) {
      (footwear =  <div>
                    <a href="https://www.amazon.com/KEEN-Newport-Water-Black-Outsole/dp/B07DK2CQ8V/ref=as_li_ss_il?crid=M18UY21E1X0B&dchild=1&keywords=mens+keen+sandals&qid=1575943551&s=apparel&sprefix=mens+KEEN+san,fashion,147&sr=1-12&linkCode=li1&tag=whetherio-20&linkId=63f0c92db042de5ec2f620fa283ce9ec&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07DK2CQ8V&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/KEEN-Womens-Emerald-Thong-Sandal/dp/B008JEIU24/ref=as_li_ss_il?crid=3S9KA6E3OM27&dchild=1&keywords=womens+keen+flip+flops&qid=1575943974&s=apparel&sprefix=womens+fli,fashion,153&sr=1-31&linkCode=li1&tag=whetherio-20&linkId=50b945fddc1e2336f672d3e582833c1f&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008JEIU24&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 80 && props.summary.includes("Drizzle")) {
      (footwear =  <div>
                    <a href="https://www.amazon.com/KEEN-Newport-Water-Black-Outsole/dp/B07DK2CQ8V/ref=as_li_ss_il?crid=M18UY21E1X0B&dchild=1&keywords=mens+keen+sandals&qid=1575943551&s=apparel&sprefix=mens+KEEN+san,fashion,147&sr=1-12&linkCode=li1&tag=whetherio-20&linkId=63f0c92db042de5ec2f620fa283ce9ec&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07DK2CQ8V&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/KEEN-Womens-Emerald-Thong-Sandal/dp/B008JEIU24/ref=as_li_ss_il?crid=3S9KA6E3OM27&dchild=1&keywords=womens+keen+flip+flops&qid=1575943974&s=apparel&sprefix=womens+fli,fashion,153&sr=1-31&linkCode=li1&tag=whetherio-20&linkId=50b945fddc1e2336f672d3e582833c1f&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008JEIU24&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 80 && props.summary.includes("Clear")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/adidas-Adilette-Shower-Slide-Sandal/dp/B0711R1W9Z/ref=as_li_ss_il?crid=2QYRN55AJFL2K&dchild=1&keywords=mens+flip+flops&qid=1575943468&s=apparel&sprefix=mens+fli,fashion,155&sr=1-5&linkCode=li1&tag=whetherio-20&linkId=f0b1a23b26e6ac8d373545ffd3a13f3e&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0711R1W9Z&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Teva-Womens-Olowahu-Flip-Flop-Black/dp/B07DR7WP5G/ref=as_li_ss_il?dchild=1&keywords=womens+flip+flops&qid=1575944066&refinements=p_72:2661618011&rnid=2661617011&s=apparel&sr=1-10&th=1&linkCode=li1&tag=whetherio-20&linkId=86253647f5400254d075a748a259db9e&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07DR7WP5G&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 80 && props.summary.includes("Mostly Cloudy")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/adidas-Adilette-Shower-Slide-Sandal/dp/B0711R1W9Z/ref=as_li_ss_il?crid=2QYRN55AJFL2K&dchild=1&keywords=mens+flip+flops&qid=1575943468&s=apparel&sprefix=mens+fli,fashion,155&sr=1-5&linkCode=li1&tag=whetherio-20&linkId=f0b1a23b26e6ac8d373545ffd3a13f3e&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0711R1W9Z&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Teva-Womens-Olowahu-Flip-Flop-Black/dp/B07DR7WP5G/ref=as_li_ss_il?dchild=1&keywords=womens+flip+flops&qid=1575944066&refinements=p_72:2661618011&rnid=2661617011&s=apparel&sr=1-10&th=1&linkCode=li1&tag=whetherio-20&linkId=86253647f5400254d075a748a259db9e&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07DR7WP5G&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 80 && props.summary.includes("Cloudy")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/adidas-Adilette-Shower-Slide-Sandal/dp/B0711R1W9Z/ref=as_li_ss_il?crid=2QYRN55AJFL2K&dchild=1&keywords=mens+flip+flops&qid=1575943468&s=apparel&sprefix=mens+fli,fashion,155&sr=1-5&linkCode=li1&tag=whetherio-20&linkId=f0b1a23b26e6ac8d373545ffd3a13f3e&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0711R1W9Z&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Teva-Womens-Olowahu-Flip-Flop-Black/dp/B07DR7WP5G/ref=as_li_ss_il?dchild=1&keywords=womens+flip+flops&qid=1575944066&refinements=p_72:2661618011&rnid=2661617011&s=apparel&sr=1-10&th=1&linkCode=li1&tag=whetherio-20&linkId=86253647f5400254d075a748a259db9e&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07DR7WP5G&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 80 && props.summary.includes("Overcast")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/adidas-Adilette-Shower-Slide-Sandal/dp/B0711R1W9Z/ref=as_li_ss_il?crid=2QYRN55AJFL2K&dchild=1&keywords=mens+flip+flops&qid=1575943468&s=apparel&sprefix=mens+fli,fashion,155&sr=1-5&linkCode=li1&tag=whetherio-20&linkId=f0b1a23b26e6ac8d373545ffd3a13f3e&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0711R1W9Z&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Teva-Womens-Olowahu-Flip-Flop-Black/dp/B07DR7WP5G/ref=as_li_ss_il?dchild=1&keywords=womens+flip+flops&qid=1575944066&refinements=p_72:2661618011&rnid=2661617011&s=apparel&sr=1-10&th=1&linkCode=li1&tag=whetherio-20&linkId=86253647f5400254d075a748a259db9e&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07DR7WP5G&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 60 && props.temperature < 79.99 && props.summary.includes("Light Rain")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/KEEN-Utility-Boulder-Industrial-Raven/dp/B0741HLBBR/ref=as_li_ss_il?crid=1YJ26GQ7OJJ1Y&dchild=1&keywords=mens+keen+shoes&qid=1575943786&s=apparel&sprefix=mens+keen,fashion,154&sr=1-17&linkCode=li2&tag=whetherio-20&linkId=cd9859fa3af731b59a25e35a4b7f513d&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0741HLBBR&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Hunter-Womens-Original-Short-Black/dp/B00K1WARBE/ref=as_li_ss_il?crid=3SAZEZODLXC5B&dchild=1&keywords=womens+hunter+boots&qid=1575944183&s=apparel&sprefix=womens+hunter,fashion,168&sr=1-3&linkCode=li1&tag=whetherio-20&linkId=10ee8b37f54713a19b1c02970623e34e&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00K1WARBE&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 60 && props.temperature < 79.99 && props.summary.includes("Rain")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/KEEN-Utility-Boulder-Industrial-Raven/dp/B0741HLBBR/ref=as_li_ss_il?crid=1YJ26GQ7OJJ1Y&dchild=1&keywords=mens+keen+shoes&qid=1575943786&s=apparel&sprefix=mens+keen,fashion,154&sr=1-17&linkCode=li2&tag=whetherio-20&linkId=cd9859fa3af731b59a25e35a4b7f513d&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0741HLBBR&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Hunter-Womens-Original-Short-Black/dp/B00K1WARBE/ref=as_li_ss_il?crid=3SAZEZODLXC5B&dchild=1&keywords=womens+hunter+boots&qid=1575944183&s=apparel&sprefix=womens+hunter,fashion,168&sr=1-3&linkCode=li1&tag=whetherio-20&linkId=10ee8b37f54713a19b1c02970623e34e&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00K1WARBE&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 60 && props.temperature < 79.99 && props.summary.includes("Drizzle")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/KEEN-Utility-Boulder-Industrial-Raven/dp/B0741HLBBR/ref=as_li_ss_il?crid=1YJ26GQ7OJJ1Y&dchild=1&keywords=mens+keen+shoes&qid=1575943786&s=apparel&sprefix=mens+keen,fashion,154&sr=1-17&linkCode=li2&tag=whetherio-20&linkId=cd9859fa3af731b59a25e35a4b7f513d&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0741HLBBR&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Hunter-Womens-Original-Short-Black/dp/B00K1WARBE/ref=as_li_ss_il?crid=3SAZEZODLXC5B&dchild=1&keywords=womens+hunter+boots&qid=1575944183&s=apparel&sprefix=womens+hunter,fashion,168&sr=1-3&linkCode=li1&tag=whetherio-20&linkId=10ee8b37f54713a19b1c02970623e34e&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00K1WARBE&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 60 && props.temperature < 79.99 && props.summary.includes("Clear")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/adidas-Superstar-Shoes-Mens-White/dp/B07QYQ82KG/ref=as_li_ss_il?crid=3PYPFN6SKASYF&dchild=1&keywords=mens+shell+toe+adidas+shoes&qid=1575943680&s=apparel&sprefix=mens+shell+toe,fashion,143&sr=1-6&linkCode=li1&tag=whetherio-20&linkId=7ab251fa0bd7a4da77ae3ddd48dda5dd&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07QYQ82KG&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Under-Armour-Breathe-Sneaker-Heights/dp/B07HKV4TYR/ref=as_li_ss_il?dchild=1&keywords=womens+shoes&qid=1575944237&s=apparel&sr=1-11&linkCode=li1&tag=whetherio-20&linkId=1541a2cfc395e8b847a2f8ffbce0c023&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07HKV4TYR&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 60 && props.temperature < 79.99 && props.summary.includes("Mostly Cloudy")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/adidas-Superstar-Shoes-Mens-White/dp/B07QYQ82KG/ref=as_li_ss_il?crid=3PYPFN6SKASYF&dchild=1&keywords=mens+shell+toe+adidas+shoes&qid=1575943680&s=apparel&sprefix=mens+shell+toe,fashion,143&sr=1-6&linkCode=li1&tag=whetherio-20&linkId=7ab251fa0bd7a4da77ae3ddd48dda5dd&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07QYQ82KG&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Under-Armour-Breathe-Sneaker-Heights/dp/B07HKV4TYR/ref=as_li_ss_il?dchild=1&keywords=womens+shoes&qid=1575944237&s=apparel&sr=1-11&linkCode=li1&tag=whetherio-20&linkId=1541a2cfc395e8b847a2f8ffbce0c023&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07HKV4TYR&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 60 && props.temperature < 79.99 && props.summary.includes("Cloudy")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/adidas-Superstar-Shoes-Mens-White/dp/B07QYQ82KG/ref=as_li_ss_il?crid=3PYPFN6SKASYF&dchild=1&keywords=mens+shell+toe+adidas+shoes&qid=1575943680&s=apparel&sprefix=mens+shell+toe,fashion,143&sr=1-6&linkCode=li1&tag=whetherio-20&linkId=7ab251fa0bd7a4da77ae3ddd48dda5dd&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07QYQ82KG&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Under-Armour-Breathe-Sneaker-Heights/dp/B07HKV4TYR/ref=as_li_ss_il?dchild=1&keywords=womens+shoes&qid=1575944237&s=apparel&sr=1-11&linkCode=li1&tag=whetherio-20&linkId=1541a2cfc395e8b847a2f8ffbce0c023&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07HKV4TYR&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 60 && props.temperature < 79.99 && props.summary.includes("Overcast")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/adidas-Superstar-Shoes-Mens-White/dp/B07QYQ82KG/ref=as_li_ss_il?crid=3PYPFN6SKASYF&dchild=1&keywords=mens+shell+toe+adidas+shoes&qid=1575943680&s=apparel&sprefix=mens+shell+toe,fashion,143&sr=1-6&linkCode=li1&tag=whetherio-20&linkId=7ab251fa0bd7a4da77ae3ddd48dda5dd&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07QYQ82KG&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Under-Armour-Breathe-Sneaker-Heights/dp/B07HKV4TYR/ref=as_li_ss_il?dchild=1&keywords=womens+shoes&qid=1575944237&s=apparel&sr=1-11&linkCode=li1&tag=whetherio-20&linkId=1541a2cfc395e8b847a2f8ffbce0c023&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07HKV4TYR&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 60 && props.temperature < 79.99 && props.summary.includes("Foggy")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/adidas-Superstar-Shoes-Mens-White/dp/B07QYQ82KG/ref=as_li_ss_il?crid=3PYPFN6SKASYF&dchild=1&keywords=mens+shell+toe+adidas+shoes&qid=1575943680&s=apparel&sprefix=mens+shell+toe,fashion,143&sr=1-6&linkCode=li1&tag=whetherio-20&linkId=7ab251fa0bd7a4da77ae3ddd48dda5dd&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07QYQ82KG&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Under-Armour-Breathe-Sneaker-Heights/dp/B07HKV4TYR/ref=as_li_ss_il?dchild=1&keywords=womens+shoes&qid=1575944237&s=apparel&sr=1-11&linkCode=li1&tag=whetherio-20&linkId=1541a2cfc395e8b847a2f8ffbce0c023&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07HKV4TYR&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 33 && props.temperature < 59.99  && props.summary.includes("Flurries")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/KEEN-Revel-Winter-Magnet-Tawny/dp/B00RM1746I/ref=as_li_ss_il?dchild=1&keywords=keen&qid=1575925787&sr=8-15&linkCode=li1&tag=whetherio-20&linkId=0df6d9e8d2d97ddddd07b2e1de9030ef&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RM1746I&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Timberland-Womens-Waterproof-Fleece-Nubuck/dp/B079333R5F/ref=as_li_ss_il?crid=2L6M8FU66PLBJ&dchild=1&keywords=female+boots+for+women&qid=1575926729&sprefix=female+boots,aps,204&sr=8-4&linkCode=li1&tag=whetherio-20&linkId=0047744153b0330f9a0464f7f1f99246&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B079333R5F&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 33 && props.temperature < 59.99  && props.summary.includes("Light Snow")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/KEEN-Revel-Winter-Magnet-Tawny/dp/B00RM1746I/ref=as_li_ss_il?dchild=1&keywords=keen&qid=1575925787&sr=8-15&linkCode=li1&tag=whetherio-20&linkId=0df6d9e8d2d97ddddd07b2e1de9030ef&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RM1746I&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Timberland-Womens-Waterproof-Fleece-Nubuck/dp/B079333R5F/ref=as_li_ss_il?crid=2L6M8FU66PLBJ&dchild=1&keywords=female+boots+for+women&qid=1575926729&sprefix=female+boots,aps,204&sr=8-4&linkCode=li1&tag=whetherio-20&linkId=0047744153b0330f9a0464f7f1f99246&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B079333R5F&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 33 && props.temperature < 59.99  && props.summary.includes("Snow")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/KEEN-Revel-Winter-Magnet-Tawny/dp/B00RM1746I/ref=as_li_ss_il?dchild=1&keywords=keen&qid=1575925787&sr=8-15&linkCode=li1&tag=whetherio-20&linkId=0df6d9e8d2d97ddddd07b2e1de9030ef&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RM1746I&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Timberland-Womens-Waterproof-Fleece-Nubuck/dp/B079333R5F/ref=as_li_ss_il?crid=2L6M8FU66PLBJ&dchild=1&keywords=female+boots+for+women&qid=1575926729&sprefix=female+boots,aps,204&sr=8-4&linkCode=li1&tag=whetherio-20&linkId=0047744153b0330f9a0464f7f1f99246&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B079333R5F&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 33 && props.temperature < 59.99  && props.summary.includes("Light Rain")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/KEEN-Revel-Winter-Magnet-Tawny/dp/B00RM1746I/ref=as_li_ss_il?dchild=1&keywords=keen&qid=1575925787&sr=8-15&linkCode=li1&tag=whetherio-20&linkId=0df6d9e8d2d97ddddd07b2e1de9030ef&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RM1746I&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                   </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Timberland-Womens-Waterproof-Fleece-Nubuck/dp/B079333R5F/ref=as_li_ss_il?crid=2L6M8FU66PLBJ&dchild=1&keywords=female+boots+for+women&qid=1575926729&sprefix=female+boots,aps,204&sr=8-4&linkCode=li1&tag=whetherio-20&linkId=0047744153b0330f9a0464f7f1f99246&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B079333R5F&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 33 && props.temperature < 59.99 && props.summary.includes("Rain")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/KEEN-Revel-Winter-Magnet-Tawny/dp/B00RM1746I/ref=as_li_ss_il?dchild=1&keywords=keen&qid=1575925787&sr=8-15&linkCode=li1&tag=whetherio-20&linkId=0df6d9e8d2d97ddddd07b2e1de9030ef&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RM1746I&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Hunter-Womens-Original-Insulated-Short/dp/B07XFNHTLP/ref=as_li_ss_il?crid=U7JRK3LCBEAL&dchild=1&keywords=insulated+hunter+boots+women&qid=1575926975&sprefix=insulated+hunter,aps,135&sr=8-2&linkCode=li1&tag=whetherio-20&linkId=0622a3deb5a9b64f2458b4ca7f1793b6&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07XFNHTLP&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 33 && props.temperature < 59.99 && props.summary.includes("Drizzle")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/KEEN-Revel-Winter-Magnet-Tawny/dp/B00RM1746I/ref=as_li_ss_il?dchild=1&keywords=keen&qid=1575925787&sr=8-15&linkCode=li1&tag=whetherio-20&linkId=0df6d9e8d2d97ddddd07b2e1de9030ef&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RM1746I&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Hunter-Womens-Original-Insulated-Short/dp/B07XFNHTLP/ref=as_li_ss_il?crid=U7JRK3LCBEAL&dchild=1&keywords=insulated+hunter+boots+women&qid=1575926975&sprefix=insulated+hunter,aps,135&sr=8-2&linkCode=li1&tag=whetherio-20&linkId=0622a3deb5a9b64f2458b4ca7f1793b6&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07XFNHTLP&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 33 && props.temperature < 59.99 && props.summary.includes("Clear")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/KEEN-Revel-Winter-Magnet-Tawny/dp/B00RM1746I/ref=as_li_ss_il?dchild=1&keywords=keen&qid=1575925787&sr=8-15&linkCode=li1&tag=whetherio-20&linkId=0df6d9e8d2d97ddddd07b2e1de9030ef&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RM1746I&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Timberland-Womens-Waterproof-Fleece-Nubuck/dp/B079333R5F/ref=as_li_ss_il?crid=2L6M8FU66PLBJ&dchild=1&keywords=female+boots+for+women&qid=1575926729&sprefix=female+boots,aps,204&sr=8-4&linkCode=li1&tag=whetherio-20&linkId=0047744153b0330f9a0464f7f1f99246&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B079333R5F&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 33 && props.temperature < 59.99 && props.summary.includes("Mostly Cloudy")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/KEEN-Revel-Winter-Magnet-Tawny/dp/B00RM1746I/ref=as_li_ss_il?dchild=1&keywords=keen&qid=1575925787&sr=8-15&linkCode=li1&tag=whetherio-20&linkId=0df6d9e8d2d97ddddd07b2e1de9030ef&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RM1746I&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Timberland-Womens-Waterproof-Fleece-Nubuck/dp/B079333R5F/ref=as_li_ss_il?crid=2L6M8FU66PLBJ&dchild=1&keywords=female+boots+for+women&qid=1575926729&sprefix=female+boots,aps,204&sr=8-4&linkCode=li1&tag=whetherio-20&linkId=0047744153b0330f9a0464f7f1f99246&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B079333R5F&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 33 && props.temperature < 59.99 && props.summary.includes("Cloudy")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/KEEN-Revel-Winter-Magnet-Tawny/dp/B00RM1746I/ref=as_li_ss_il?dchild=1&keywords=keen&qid=1575925787&sr=8-15&linkCode=li1&tag=whetherio-20&linkId=0df6d9e8d2d97ddddd07b2e1de9030ef&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RM1746I&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Timberland-Womens-Waterproof-Fleece-Nubuck/dp/B079333R5F/ref=as_li_ss_il?crid=2L6M8FU66PLBJ&dchild=1&keywords=female+boots+for+women&qid=1575926729&sprefix=female+boots,aps,204&sr=8-4&linkCode=li1&tag=whetherio-20&linkId=0047744153b0330f9a0464f7f1f99246&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B079333R5F&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 33 && props.temperature < 59.99 && props.summary.includes("Overcast")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/KEEN-Revel-Winter-Magnet-Tawny/dp/B00RM1746I/ref=as_li_ss_il?dchild=1&keywords=keen&qid=1575925787&sr=8-15&linkCode=li1&tag=whetherio-20&linkId=0df6d9e8d2d97ddddd07b2e1de9030ef&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RM1746I&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Timberland-Womens-Waterproof-Fleece-Nubuck/dp/B079333R5F/ref=as_li_ss_il?crid=2L6M8FU66PLBJ&dchild=1&keywords=female+boots+for+women&qid=1575926729&sprefix=female+boots,aps,204&sr=8-4&linkCode=li1&tag=whetherio-20&linkId=0047744153b0330f9a0464f7f1f99246&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B079333R5F&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature > 33 && props.temperature < 59.99 && props.summary.includes("Foggy")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/KEEN-Revel-Winter-Magnet-Tawny/dp/B00RM1746I/ref=as_li_ss_il?dchild=1&keywords=keen&qid=1575925787&sr=8-15&linkCode=li1&tag=whetherio-20&linkId=0df6d9e8d2d97ddddd07b2e1de9030ef&language=en_US" target="_blank">
                    <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RM1746I&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Timberland-Womens-Waterproof-Fleece-Nubuck/dp/B079333R5F/ref=as_li_ss_il?crid=2L6M8FU66PLBJ&dchild=1&keywords=female+boots+for+women&qid=1575926729&sprefix=female+boots,aps,204&sr=8-4&linkCode=li1&tag=whetherio-20&linkId=0047744153b0330f9a0464f7f1f99246&language=en_US" target="_blank">
                        <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B079333R5F&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature < 32.99 && props.summary.includes("Flurries")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/Sorel-Mens-Caribou-Snow-Boot/dp/B00B1UF378/ref=as_li_ss_il?crid=QADE3Z7AT4Y2&dchild=1&keywords=mens+sorel+winter+boots&qid=1575927080&sprefix=mens+sorre,aps,152&sr=8-2&linkCode=li1&tag=whetherio-20&linkId=800c28b8f87ec4c24a69ed882853c907&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00B1UF378&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Sorel-Womens-Arctic-Black-Quarry/dp/B07KJZMJXW/ref=as_li_ss_il?crid=2ZU15XQ4SK6DO&dchild=1&keywords=womens+sorel+winter+boots&qid=1575927187&sprefix=wmens+sorel+winter+boots,aps,149&sr=8-7&linkCode=li1&tag=whetherio-20&linkId=4718d5c3e0a6b163abb9fb2d090e4a95&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07KJZMJXW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature < 32.99 && props.summary.includes("Drizzle")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/Sorel-Mens-Caribou-Snow-Boot/dp/B00B1UF378/ref=as_li_ss_il?crid=QADE3Z7AT4Y2&dchild=1&keywords=mens+sorel+winter+boots&qid=1575927080&sprefix=mens+sorre,aps,152&sr=8-2&linkCode=li1&tag=whetherio-20&linkId=800c28b8f87ec4c24a69ed882853c907&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00B1UF378&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Sorel-Womens-Arctic-Black-Quarry/dp/B07KJZMJXW/ref=as_li_ss_il?crid=2ZU15XQ4SK6DO&dchild=1&keywords=womens+sorel+winter+boots&qid=1575927187&sprefix=wmens+sorel+winter+boots,aps,149&sr=8-7&linkCode=li1&tag=whetherio-20&linkId=4718d5c3e0a6b163abb9fb2d090e4a95&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07KJZMJXW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature < 32.99 && props.summary.includes("Rain")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/Sorel-Mens-Caribou-Snow-Boot/dp/B00B1UF378/ref=as_li_ss_il?crid=QADE3Z7AT4Y2&dchild=1&keywords=mens+sorel+winter+boots&qid=1575927080&sprefix=mens+sorre,aps,152&sr=8-2&linkCode=li1&tag=whetherio-20&linkId=800c28b8f87ec4c24a69ed882853c907&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00B1UF378&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Sorel-Womens-Arctic-Black-Quarry/dp/B07KJZMJXW/ref=as_li_ss_il?crid=2ZU15XQ4SK6DO&dchild=1&keywords=womens+sorel+winter+boots&qid=1575927187&sprefix=wmens+sorel+winter+boots,aps,149&sr=8-7&linkCode=li1&tag=whetherio-20&linkId=4718d5c3e0a6b163abb9fb2d090e4a95&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07KJZMJXW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature < 32.99 && props.summary.includes("Light Rain")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/Sorel-Mens-Caribou-Snow-Boot/dp/B00B1UF378/ref=as_li_ss_il?crid=QADE3Z7AT4Y2&dchild=1&keywords=mens+sorel+winter+boots&qid=1575927080&sprefix=mens+sorre,aps,152&sr=8-2&linkCode=li1&tag=whetherio-20&linkId=800c28b8f87ec4c24a69ed882853c907&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00B1UF378&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Sorel-Womens-Arctic-Black-Quarry/dp/B07KJZMJXW/ref=as_li_ss_il?crid=2ZU15XQ4SK6DO&dchild=1&keywords=womens+sorel+winter+boots&qid=1575927187&sprefix=wmens+sorel+winter+boots,aps,149&sr=8-7&linkCode=li1&tag=whetherio-20&linkId=4718d5c3e0a6b163abb9fb2d090e4a95&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07KJZMJXW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature < 32.99 && props.summary.includes("Light Snow")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/Sorel-Mens-Caribou-Snow-Boot/dp/B00B1UF378/ref=as_li_ss_il?crid=QADE3Z7AT4Y2&dchild=1&keywords=mens+sorel+winter+boots&qid=1575927080&sprefix=mens+sorre,aps,152&sr=8-2&linkCode=li1&tag=whetherio-20&linkId=800c28b8f87ec4c24a69ed882853c907&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00B1UF378&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Sorel-Womens-Arctic-Black-Quarry/dp/B07KJZMJXW/ref=as_li_ss_il?crid=2ZU15XQ4SK6DO&dchild=1&keywords=womens+sorel+winter+boots&qid=1575927187&sprefix=wmens+sorel+winter+boots,aps,149&sr=8-7&linkCode=li1&tag=whetherio-20&linkId=4718d5c3e0a6b163abb9fb2d090e4a95&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07KJZMJXW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature < 32.99 && props.summary.includes("Snow")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/Sorel-Mens-Caribou-Snow-Boot/dp/B00B1UF378/ref=as_li_ss_il?crid=QADE3Z7AT4Y2&dchild=1&keywords=mens+sorel+winter+boots&qid=1575927080&sprefix=mens+sorre,aps,152&sr=8-2&linkCode=li1&tag=whetherio-20&linkId=800c28b8f87ec4c24a69ed882853c907&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00B1UF378&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Sorel-Womens-Arctic-Black-Quarry/dp/B07KJZMJXW/ref=as_li_ss_il?crid=2ZU15XQ4SK6DO&dchild=1&keywords=womens+sorel+winter+boots&qid=1575927187&sprefix=wmens+sorel+winter+boots,aps,149&sr=8-7&linkCode=li1&tag=whetherio-20&linkId=4718d5c3e0a6b163abb9fb2d090e4a95&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07KJZMJXW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature < 32.99 && props.summary.includes("Clear")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/Sorel-Mens-Caribou-Snow-Boot/dp/B00B1UF378/ref=as_li_ss_il?crid=QADE3Z7AT4Y2&dchild=1&keywords=mens+sorel+winter+boots&qid=1575927080&sprefix=mens+sorre,aps,152&sr=8-2&linkCode=li1&tag=whetherio-20&linkId=800c28b8f87ec4c24a69ed882853c907&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00B1UF378&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Sorel-Womens-Arctic-Black-Quarry/dp/B07KJZMJXW/ref=as_li_ss_il?crid=2ZU15XQ4SK6DO&dchild=1&keywords=womens+sorel+winter+boots&qid=1575927187&sprefix=wmens+sorel+winter+boots,aps,149&sr=8-7&linkCode=li1&tag=whetherio-20&linkId=4718d5c3e0a6b163abb9fb2d090e4a95&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07KJZMJXW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature < 32.99 && props.summary.includes("Mostly Cloudy")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/Sorel-Mens-Caribou-Snow-Boot/dp/B00B1UF378/ref=as_li_ss_il?crid=QADE3Z7AT4Y2&dchild=1&keywords=mens+sorel+winter+boots&qid=1575927080&sprefix=mens+sorre,aps,152&sr=8-2&linkCode=li1&tag=whetherio-20&linkId=800c28b8f87ec4c24a69ed882853c907&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00B1UF378&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Sorel-Womens-Arctic-Black-Quarry/dp/B07KJZMJXW/ref=as_li_ss_il?crid=2ZU15XQ4SK6DO&dchild=1&keywords=womens+sorel+winter+boots&qid=1575927187&sprefix=wmens+sorel+winter+boots,aps,149&sr=8-7&linkCode=li1&tag=whetherio-20&linkId=4718d5c3e0a6b163abb9fb2d090e4a95&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07KJZMJXW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature < 32.99 && props.summary.includes("Cloudy")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/Sorel-Mens-Caribou-Snow-Boot/dp/B00B1UF378/ref=as_li_ss_il?crid=QADE3Z7AT4Y2&dchild=1&keywords=mens+sorel+winter+boots&qid=1575927080&sprefix=mens+sorre,aps,152&sr=8-2&linkCode=li1&tag=whetherio-20&linkId=800c28b8f87ec4c24a69ed882853c907&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00B1UF378&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Sorel-Womens-Arctic-Black-Quarry/dp/B07KJZMJXW/ref=as_li_ss_il?crid=2ZU15XQ4SK6DO&dchild=1&keywords=womens+sorel+winter+boots&qid=1575927187&sprefix=wmens+sorel+winter+boots,aps,149&sr=8-7&linkCode=li1&tag=whetherio-20&linkId=4718d5c3e0a6b163abb9fb2d090e4a95&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07KJZMJXW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
                      </div>)
        }
      }
    } else if (props.temperature < 32.99 && props.summary.includes("Overcast")) {
      (footwear = <div>
                    <a href="https://www.amazon.com/Sorel-Mens-Caribou-Snow-Boot/dp/B00B1UF378/ref=as_li_ss_il?crid=QADE3Z7AT4Y2&dchild=1&keywords=mens+sorel+winter+boots&qid=1575927080&sprefix=mens+sorre,aps,152&sr=8-2&linkCode=li1&tag=whetherio-20&linkId=800c28b8f87ec4c24a69ed882853c907&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00B1UF378&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                    </a>
                  </div>)
      if (props.user) {
        if (props.user.gender === "female") {
          (footwear = <div>
                        <a href="https://www.amazon.com/Sorel-Womens-Arctic-Black-Quarry/dp/B07KJZMJXW/ref=as_li_ss_il?crid=2ZU15XQ4SK6DO&dchild=1&keywords=womens+sorel+winter+boots&qid=1575927187&sprefix=wmens+sorel+winter+boots,aps,149&sr=8-7&linkCode=li1&tag=whetherio-20&linkId=4718d5c3e0a6b163abb9fb2d090e4a95&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07KJZMJXW&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" />
                        </a>
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
