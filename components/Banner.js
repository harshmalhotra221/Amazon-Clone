import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image"

function Banner() {
    return <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
        >
            
            {/* <div>
                <img loading="lazy" src="https://i.ibb.co/wzBrzYm/chaap-do-3.png" alt="" />
            </div> */}


            <div>
                <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
            </div>

            <div>
                <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
            </div>

            <div>
                <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://m.media-amazon.com/images/I/61ih5+ZxygL._SX3000_.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/2022/OHL/FrequentlyBoughtStore/Revised/header-PC.gif" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://m.media-amazon.com/images/I/81wRrwmg4CL._SX3000_.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://m.media-amazon.com/images/I/61d-MHn6aHL._SX3000_.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://m.media-amazon.com/images/I/61TtaVRWNjL._SX3000_.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://m.media-amazon.com/images/I/717R1YAIpSL._SX3000_.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://m.media-amazon.com/images/I/61gmF5nxjLL._SX3000_.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://m.media-amazon.com/images/I/71GXZeJTlRL._SX3000_.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://m.media-amazon.com/images/I/61XJMtByggL._SX3000_.jpg" alt="" />
            </div>
            
        </Carousel>
    </div>
}

export default Banner