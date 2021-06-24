
import { Fragment } from 'react';
import ProductCard from './ProductCard';

const BREAK_POINT = 4

const ProductFeeds = ({ products }) => {

    const adds = [
        'https://links.papareact.com/dyz'
    ]

    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
        -mt-20 md:-mt-44'>

            { products.map((p, i) => (
                <>
                    <ProductCard 
                        product={p}
                        key={p.id} 
                        className={ i!==0 && (i%10===4 || i%10===9)  && 'md:col-span-2' }
                    />
                    {i%5===0 && (<img
                        className='mx-auto md:col-span-full' 
                        src={adds[0]}
                        alt=''
                    />)}
                </>
            )) }

        </div>
    )
}

export default ProductFeeds