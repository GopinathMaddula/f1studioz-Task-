import Navbar from '../Navbar'
import Tab from '../Tab'
import Carts from '../Carts'
import './index.css'
import { useState } from 'react'

export default function Desktop1(){
    const [cartSelected, setCartSelected] = useState('cart-selected')
    const cartsTab = (value) => {
        setCartSelected(value)
    }

    return(
        <>
            
            <Tab cartsTab = {cartsTab}/>
            <Carts cartSelected={cartSelected}/>
            <Navbar />
        </>
    )
}
