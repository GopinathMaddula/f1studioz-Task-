import {MdOutlineArrowForwardIos} from 'react-icons/md'
import {Link} from 'react-router-dom'
import './index.css'

export default function Tab2Cards(){
    return(
        <>
            <div className='tab2-cards-container'>
                <Link to='/desktop3' className='link-type'>
                <div className='card-container'>
                    <div className='content-card'>
                        <h1 className='card-heading'>Configure your door from scratch</h1>
                        <p className='card-sub-heading'>Residential, Commerical, Entry doors</p>
                    </div>
                    <div className='icon-container'>
                    <MdOutlineArrowForwardIos className='jump-arrow'/>
                    </div>
                </div>
                </Link>
                <div className='card-container'>
                    <div className='content-card'>
                        <h1 className='card-heading'>Parts / Openers</h1>
                        <p className='card-sub-heading'>Order Parts and Openers</p>
                    </div>
                    <div className='icon-container'>
                    <MdOutlineArrowForwardIos className='jump-arrow'/>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='content-card'>
                        <h1 className='card-heading'>Direct Item Entry</h1>
                        <p className='card-sub-heading'>Order Parts / Openers using a Product ID</p>
                    </div>
                    <div className='icon-container'>
                    <MdOutlineArrowForwardIos className='jump-arrow'/>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='content-card'>
                        <h1 className='card-heading'>Choose from favourites</h1>
                        <p className='card-sub-heading'>Re-order door from your favourites </p>
                    </div>
                    <div className='icon-container'>
                    <MdOutlineArrowForwardIos className='jump-arrow'/>
                    </div>
                </div>
            </div>
        </>
    )
}