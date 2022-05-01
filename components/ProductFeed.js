import Product from "./Product"

function ProductFeed({ products, setShowCart }) {
    return (
        <div className="z-30 relative max-w-screen-2xl mx-auto grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-62 lg:-mt-40 xl:-mt-46 -mt-14">
            {products && products.slice(0, 4).map(product => (
                <Product products={products} setShowCart={setShowCart} key={product.id} title={product.name} {...product} />
            ))}

            <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/L1headers/Cat-header-PC-Deals-on-clothing-1500x270.jpg" alt="" className="px-5 md:col-span-4 mx-auto rounded-lg" />

            <div className="md:col-span-2">
                {products && products.slice(4, 5).map(product => (
                    <Product products={products} setShowCart={setShowCart} key={product.id} title={product.name} {...product} />
                ))}
            </div>
            {products && products.slice(5, 10).map(product => (
                <Product products={products} setShowCart={setShowCart} key={product.id} title={product.name} {...product} />
            ))}

            <img loading="lazy" src="https://links.papareact.com/dyz" alt="" className="px-5 md:col-span-4 mx-auto rounded-lg" />

            {products && products.slice(10, products.length - 1).map(product => (
                <Product products={products} setShowCart={setShowCart} key={product.id} title={product.name} {...product} />
            ))}
        </div>
    )
}

export default ProductFeed