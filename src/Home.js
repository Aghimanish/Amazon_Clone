import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="Amazon"/>
                <div className="home_row">
                    <Product id="1" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                     price={135}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={4}/>
                    <Product id="2" title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Black)"
                    price={4499} image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg" rating={5}/>
                </div>
                <div className="home_row">
                    <Product id="3" title="New Apple Watch SE (GPS, 44mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={32900} image="https://images-na.ssl-images-amazon.com/images/I/71rhrO49SmL._SX679_.jpg" rating={5}/>
                    <Product id="4" title="OnePlus Nord 5G (Gray Onyx, 8GB RAM, 128GB Storage)" price={27999}
                    image="https://images-na.ssl-images-amazon.com/images/I/71gag816F7L._SY606_.jpg" rating={4}/>
                    <Product id="5" title="Panasonic 584 L Inverter Frost-Free Side by Side Refrigerator (NR-BS60VKX1, Dark Grey, Stainless Steel Finish)"
                    price={59990} image="https://images-na.ssl-images-amazon.com/images/I/71bRNQxKzNL._SY679_.jpg" rating={2}
                    />
                </div>
                <div className="home_row">
                    <Product id="6" title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                    price={153900} image="https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UY218_.jpg" rating={5}/>
                </div>
            </div>
            
        </div>
    )
}

export default Home
