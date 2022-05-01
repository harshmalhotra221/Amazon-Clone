import Image from "next/image"
import { useState } from "react"
import { StarIcon } from "@heroicons/react/solid"
import { ShoppingCartIcon } from "@heroicons/react/outline"
import Link from 'next/link'
import styles from "../styles/Product.module.css"
import Fade from 'react-reveal/Fade'
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux"
import { addToBasket } from "../slices/basketSlice"
import { 
    EyeIcon,
} from '@heroicons/react/outline'
import QuickView from "../components/QuickView"

function Product({ id, title, price, description, category, image, setShowCart, products }) {
    const dispatch = useDispatch();
    const MAX_RATING = 5;
    const MIN_RATING = 1;
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const [hasPrime] = useState(Math.random() < 0.5)

    const [showQuick, setShowQuick] = useState(false)
    const [added, setAdded] = useState(false)

    const addItemToBasket = () => {
        const product = {id, title, price, rating, category, description, image, quantity: 1, hasPrime}

        // Sending the product as an action to the REDUX store... the basket slice
        dispatch(addToBasket(product))
        setShowCart(true)
        setAdded(true)
        setTimeout(() => setAdded(false), 2000)
    }

    return (
        <>
        <Fade bottom>
        <div className={"relative flex flex-col m-5 z-40 p-8 hover:shadow-2xl  rounded-xl bg-white text" + styles.loop_product}>
            
            <p className="absolute top-2 right-1 text-xs italic text-gray-400">{category}</p>

            <div className={`relative rounded-lg ${styles.product_image_wrapper}`}>
                <center><Image className={"cursor-pointer rounded-lg overflow-hidden w-full " + styles.loop_product_image} loading="lazy" src={image} width={220} height={290} objectFit="cover" /></center>
                    <div onClick={() => setShowQuick(true)} className={ `rounded-lg cursor-pointer ${styles.product_image_overly}`}>
                        <div className={`quickbutton rounded-lg ${styles.product_image_overly_button}`}>
                            <span>Quick View</span>
                            <EyeIcon className="h-6" />
                        </div>
                    </div>
            </div>

            <h4 className="my-3">{title}</h4>

            <div className="flex">
                {Array(rating)
                .fill()
                .map((_, index) => (
                    <StarIcon key={index} className="h-5 text-yellow-400" />
                ))}
            </div>

            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5 font-semibold">
                <Currency quantity={price} />
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}

            <button title="Add to cart" onClick={addItemToBasket} className="mt-auto button font-bold">{added ? 'Added' : 'Add to Cart'}</button>
        </div>
        </Fade>
        {showQuick && <QuickView setShowQuick={setShowQuick} id={id} products={products} />}
        </>
    )
}

export default Product