import {BsThreeDotsVertical, BsArrowLeft} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import './index.css'

export default function Tab2(){
    return (
        <div className='tabs2-container'>
            <div className='name-container'>
                <Link to='/'><BsArrowLeft className='back-arrow'/></Link>
                
                <h1 className='heading'>Create a new order</h1>
            </div>
            <BsThreeDotsVertical className='dots'/>
        </div>
    )
}