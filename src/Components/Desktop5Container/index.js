import {HiMinusSm} from 'react-icons/hi'
import {FaPlus} from 'react-icons/fa'
import {TbDiscount2} from 'react-icons/tb'
import {BsHeartFill}  from 'react-icons/bs'
import {MdModeEdit, MdDelete}  from 'react-icons/md'
import {IoIosBrowsers}  from 'react-icons/io'
import {AiOutlineCalendar, AiFillPlusSquare} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import './index.css'

export default function Desktop5Container(){
    let navigate = useNavigate()
    const handleAddMore = () => {
        navigate('/desktop2')
    }
    const handlePlaceOrder = ()=> {
        navigate('/')
    }
    const handleEdit = () => {
        navigate('/desktop4')
    }

    return(
        <>
            <div className='main5-container'>
                <div className='first-card-container'>
                    <div className='content-container'>
                        <h1 className='first-card-heading'>10' 0'' X 10' 0.0'' CAN211 CC W1 COMPLETE DOOR INTELLICORE OBSCURE, 5TH GENERATION FINISH WALDER DOOR</h1>
                        <p className='first-card-sub-heading'>Job Name: Front door with glass<span className='change'>Change</span></p>
                        <p className='first-card-sub-heading'>Product #CWD •  Garage Door</p>
                        <p className='first-card-sub-heading'>Availability:<span className='stock-color'>IN STOCK</span><span className='available-color'>(Available for Pickup)</span></p>
                    </div>
                    <div className='price-container'>
                        <div className='plus-minus-buttons-container'>
                            <button className='minus-button'><HiMinusSm /></button>
                            <button className='minus-button number-button'>1</button>
                            <button className='minus-button'><FaPlus/></button>
                        </div>
                        <div className='multipliers-container'>
                            <p className='multiplier-content'>Standard Multiplier: .432</p>
                            <p className='multiplier-content'>Secondary Multipliers Applied</p>
                            <div className='discount-container'>
                                <TbDiscount2 className='discount'/>
                                <p className='mcq-style'>Apply MPQ</p>
                            </div>
                        </div>
                        <div className='net-price-container'>
                            <p className='font'>Net Price: <span className='amount'>$4500.00</span></p>
                            <p className='font'>Unit Price: $4800.00</p>
                            <p className='font view-price-style'>View Price Details</p>
                        </div>
                    </div>
                    <div className='icons-container'>
                        <div className='each-icon-container'>
                            <BsHeartFill className='icon-color'/>
                            <h1 className='icon-heading'>FAVORITES</h1>
                        </div>
                        <div className='each-icon-container' onClick={handleEdit}>
                            <MdModeEdit className='icon-color'/>
                            <h1 className='icon-heading'>EDIT</h1>
                        </div>
                        <div className='each-icon-container'>
                            <IoIosBrowsers className='icon-color'/>
                            <h1 className='icon-heading'>COPY</h1>
                        </div>
                        <div className='each-icon-container'>
                            <MdDelete className='icon-color'/>
                            <h1 className='icon-heading'>DELETE</h1>
                        </div>
                    </div>
                </div>

                <div className='second-card-container'>
                    <div className='first-second-card-container'>
                    <div className='first-card'>
                        <p className='card-fonts'>Change Delivery Date</p>
                        <div className='date-container'>
                            <h1 className='card-fonts date-font'>Example: 31-DEC-1999</h1>
                            <AiOutlineCalendar className='calender-icon'/>
                        </div>
                        <p className='card-fonts'>Standard Delivery: Tue May 28 - 2019</p>
                    </div>
                    <div className='first-card margin-bottom'>
                        <p className='card-fonts'>Purchase Order Number</p>
                        <div className='date-container'>
                            <h1 className='card-fonts date-font'>Enter PO Number</h1>
                        </div>
                        <p className='card-fonts'>This PO will be useful to track this order items </p>
                    </div>
                    </div>
                    <div className='third-container'>
                        <h1 className='card-fonts bill-font'>Bill Summary</h1>
                        <div className='bill-content-container'>
                           <p className='card-fonts bill-content-font'>Sub Total</p> 
                           <p className='card-fonts bill-content-font'>$ 4500.00</p>    
                        </div>
                        <div className='bill-content-container'>
                           <p className='card-fonts bill-content-font'>Energy Surcharge</p> 
                           <p className='card-fonts bill-content-font'>$ 70.18</p>    
                        </div>
                        <div className='bill-content-container'>
                           <p className='card-fonts bill-content-font'>Sales Tax</p> 
                           <p className='card-fonts bill-content-font'>$ 490.93</p>    
                        </div>
                        <div className='bill-content-container'>
                           <p className='card-fonts total-font'>TOTAL</p> 
                           <p className='card-fonts total-font'>$ 5061.11</p>    
                        </div>
                        <hr className='total-line'/>
                        <div className='tax-container'>
                            <input type='checkbox' id='applyTax'/>
                            <label htmlFor='applyTax' className='card-fonts apply-font'>Apply Tax</label>
                        </div>
                        <p className='card-fonts tax-font'>(The 1% iStore discount is calculated into the total price for all doors and door parts. Please refer to the quote or order acknowledgment for details.)</p>

                    </div>
                        
                    </div>
                <div className='fourth-container'>
                    <div className='billing-container'>
                        <p className='card-fonts billing-heading'>Billing to</p>
                        <div className='billing-address-container'>
                            <div className='address address-font'>
                                <h1 className='card-fonts address-heading'>Bement Jared</h1>
                                <p className='card-fonts address-sub-heading'>144 Curt Shores, 50, Madison Avenue 
                                    Hixson - 42040</p>
                                <p className='card-fonts address-sub-heading'>Contact: (123) 456 7890</p>
                            </div>
                            <p className='change'>CHANGE</p>
                        </div>
                    </div>
                    <div className='vertical-line'>

                    </div>
                    <div className='billing-container margin-left right-margin'>
                        <p className='card-fonts billing-heading'>Shipping To</p>
                        <div className='billing-address-container'>
                            <div className='address address-font'>
                                <h1 className='card-fonts address-heading'>Bement Jared</h1>
                                <p className='card-fonts address-sub-heading'>144 Curt Shores, 50, Madison Avenue 
                                    Hixson - 42040</p>
                                <p className='card-fonts address-sub-heading'>Contact: (123) 456 7890</p>
                            </div>
                            <p className='change'>CHANGE</p>
                        </div>
                    </div>
                </div>
                <div className='fifth-container'>
                    <div className='item-container'>
                        <p className='card-fonts item-font'>1 Item</p>
                        <p className='card-fonts cost-font'>$5061.11</p>
                    </div>
                    <div className='cart-buttons-container'>
                        <button className='cart-button add-to-cart' onClick={handleAddMore}><span><AiFillPlusSquare className='plus-icon'/></span>ADD MORE</button>
                        <button className='cart-button order-button' onClick={handlePlaceOrder}>PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </>
    )
}