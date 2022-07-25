import { useState } from 'react'
import './index.css'

export default function Tab(props){
    const {cartsTab} = props
    const [cartSelected, setCartSelected] = useState('cart-selected')
    const [favouriteSelected, setFavouriteSelected] = useState('')
    

    const handleEvent = (event) => {
        if (event.target.value === 'carts'){
            setCartSelected('cart-selected')
            setFavouriteSelected('')
            cartsTab('cart-selected')
        } else  {
            setCartSelected('')
            setFavouriteSelected('cart-selected')
            cartsTab('')
        }
    }
    return (
        <div className='tabs1-container'>
            <button className={`carts1 ${cartSelected}`} onClick={handleEvent} value= 'carts'>CARTS</button>
            <button className={`carts1 ${favouriteSelected}`} onClick={handleEvent}      value='favorites'>FAVORITES</button>
        </div>
    )
}

