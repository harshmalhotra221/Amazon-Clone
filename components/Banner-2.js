import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image"

function BannerSecond() {
    return <div className="relative">
            <div className="absolute w-full h-32 "/>
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
        >
            <div>
                <img loading="lazy" src="https://links.papareact.com/ikj" alt="" height={1000} />
            </div>
            <div>
                <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Header/Af-Unrec-PC.gif" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/HnK/Clearance_1500x300_gif.gif" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Events/May-ART-22/T1/Header/New/Unrec_Desk_Header_EN.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/BAU/OP_Dec/D24582943_IN_WL_Category_Page_1500x400.gif" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Events/May-ART-22/Teaser1/Unrec/New_Updates/Sabs_Pc1.jpg" alt="" height={600}/>
            </div>

            <div>
                <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Events/May-ART-22/Teaser2/Prebook/Upcoming-Deals_PC1_02.jpg" alt=""/>
            </div>
            <div>
                <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/May_22/May-ART_22/Teaser/Rewards_pc.jpg" alt=""/>
            </div>
            <div>
                <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/MayArt22/teaser1/Prime_FREE_1500x300_2.jpg" alt=""/>
            </div>
            {/* <div>
                <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/BAU/OP_Dec/D24582943_IN_WL_Category_Page_1500x400.gif" alt=""/>
            </div> */}
        </Carousel>
    </div>
}

export default BannerSecond