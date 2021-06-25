
import Cart from '../components/checkout/Cart';
import Checkout from '../components/checkout/Checkout';
import Header from './../components/layouts/Header';

const checkout = () => {

    return (
        <div className='bg-gray-100 min-h-screen'>
            <Header/>
            <main className='xl:flex max-w-screen-2xl mx-auto'>
                <Cart/>
                <Checkout/>
            </main>
        </div>
    )
}

export default checkout
