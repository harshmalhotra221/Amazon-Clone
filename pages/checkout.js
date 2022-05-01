import Image from "next/image"
import Head from 'next/head'
import { useSelector } from "react-redux"
import Header from "../components/Header"
import { selectItems, selectTotal, selectTotalItems } from "../slices/basketSlice"
import CheckoutProduct from "../components/CheckoutProduct"
import Currency from "react-currency-formatter"
import { useSession } from "next-auth/client"
import { useEffect, useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { useRouter } from "next/router"
import axios from "axios"
import BannerSecond from "../components/Banner-2"
const stripePromise = loadStripe(process.env.stripe_public_key)

function Checkout() {
  const [session] = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const selectTotalItem = useSelector(selectTotalItems)
  const [categorys, setCategorys] = useState([])
  const router = useRouter();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise

    // Call the backend to create a session
    const checkoutSession = await axios.post('/api/create-checkout-session', 
    {
      items: items,
      email: session.user.email
    })

    // Redirect user/customer to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id
  })

  if (result.error) alert(result.error.message)
}

  useEffect(() => {
    const allCategories = items.map(item => item.category)
    const unique = [...new Set(allCategories)]
    setCategorys(unique)
  }, [items])

  return (
    <>
        <Head>
            <title>Checkout | Amazon</title>
        </Head>
    <div className="bg-gray-100">
        <Header />

          <main className="md:flex max-w-6xl mx-auto border-b-2">
            {/* Left */}
            <div className="flex-grow m-5 shadow-2xl">
              <BannerSecond />
              {/* <Image 
                src="https://links.papareact.com/ikj"
                width={1020}
                height={250}
                objectFit="contain" alt=""
              /> */}
              
              <div className="flex flex-col p-5 space-y-10 bg-white">
                <h1 className="text-3xl border-b-2 pb-4 font-semibold">
                  {items.length === 0 
                    ? <div className="relative flex-col m-5 grid-cols-2 mx-auto grid grid-flow-row-dense">
                          <img src="https://i.ibb.co/4j1kLw4/kettle-desaturated-CB424694257.jpg" alt="" className="w-85 h-60"/>
                          <h1 className="font-semibold mt-8">Your Amazon Basket is empty
                            <small>
                              <p onClick={() => router.push('/product')} className="relative font-thin text-green-800 hover:text-yellow-400 link font-serif">
                                Shop today’s deals
                              </p>
                            </small>
                          </h1>
                      </div>
                    : 'Shoping Basket'
                  }
                </h1>

                <div className="mb-5 border-b ">
                            {!!categorys.length && categorys.map(category => (
                                <>
                                <h1 className="text-xl pb-4 font-medium border-b text-gray-500">
                                    {category}
                                </h1>
                                <div className="mb-20">
                                    {!!items.length && items.filter(
                                      item => item.category === category)
                                        .map(item => 
                                        <CheckoutProduct key={item.id} {...item} />
                                    )}
                                </div>
                                </>
                            ))}
                        </div>

                  {/* {items.map((item, i) => (
                    <CheckoutProduct 
                      key={i}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      rating={item.rating}
                      description={item.description}
                      category={item.category}
                      image={item.image}
                      hasPrime={item.hasPrime}
                    />
                  ))} */}
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col bg-white p-10 shadow-2xl mt-5 mb-5">
              {items.length > 0 && (
                <>
                <h2 className="whitespace-nowrap font-semibold">
                  Subtotal ({selectTotalItem} items):{" "}
                    <span className="font-bold text-gray-500">
                      <Currency quantity={total} />
                    </span>
                  </h2>

                  <button 
                    role="link"
                    onClick={createCheckoutSession}
                    disabled={!session}
                    className={`quickbutton mt-2 font-bold ${
                      !session && 
                      "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                    }`}
                  >
                    {!session 
                      ? "Sign in to checkout" 
                      : "Proceed to checkout"
                    }
                  </button>
                </>
              )}
            </div>
          </main>
    </div>
    </>
  )
}

export default Checkout