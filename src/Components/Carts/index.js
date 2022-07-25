import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiFilter} from 'react-icons/bi'
import NoData from '../NoData'
import TableData from '../TableData'
import './index.css'


export default function Carts(props){
    const {cartSelected} = props
    const [activeTabState, setActiveTabState] = useState("selected-cart")
    const [archivedTabState, setArchivedTabState] = useState("")
    const [searchInput, setSearchInput] = useState('')

    const changeInput = (event) => {
        setSearchInput(event.target.value)
    }
    
    const checkStatus = (event)=> {
        if (event.target.value === 'active'){
            setActiveTabState("selected-cart")
            setArchivedTabState('')
        } else {
            setArchivedTabState('selected-cart')
            setActiveTabState('')
        }
    }
    return (
        <div className='main-container'>
        <div className='carts-container'>
            <div className='carts-tab'>
                <button type="button" className={`active-carts ${activeTabState}`} value='active' onClick={checkStatus}>Active Carts</button>
                <button type="button" className={`active-carts ${archivedTabState}`} onClick={checkStatus} value='archived'>Archived Carts</button>
            </div>
            <div className='search-filter-container'>
                <div className='search-container'>
                    <input type='text' className='search-input' placeholder='Search' onChange={changeInput}/>
                    <AiOutlineSearch className='search-icon'/>
                </div>
                <div className='filter-container'>
                    <BiFilter className='filter-icon'/>
                    <h1 className='filter'>Filter</h1>
                </div>
            </div>
        </div>
        {(activeTabState === 'selected-cart') && (cartSelected === 'cart-selected') ? <TableData searchInput={searchInput}/>: <NoData/>}
        
        </div>
        
    )
}