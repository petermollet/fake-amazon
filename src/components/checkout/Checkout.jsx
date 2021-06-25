
import { useSelector } from 'react-redux'
import Currency from 'react-currency-formatter'
import { useSession } from 'next-auth/client'
import { selectItems, selectTotal, selectTotalItems } from './../../slices/cartSlice'

const Checkout = () => {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const totalItems = useSelector(selectTotalItems)
    const [session] = useSession()

    return (
        items.length > 0 && (
        <div className='flex flex-col bg-white p-10 xl:p-5 xl:w-1/4 shadow-md'>
            <h2 className='whitespace-nowrap'>
                Subtotal ({totalItems} items):{' '}
                <span className='font-bold'>
                    <Currency quantity={total} currency='EUR' />
                </span>
            </h2>
            <button className={`button mt-2 
            ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`} >
                {!session ? 'Sign in to checkout' : 'Proceed'}
            </button>
        </div>
    ))
}

export default Checkout
