import {BsThreeDotsVertical, BsArrowLeft} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import './index.css'

export default function Tab4(){
    return (
        <div className='tabs4-container'>
            <div className='name-container'>
            <Link to='/desktop3'><BsArrowLeft className='back-arrow'/></Link>
                <h1 className='heading'>Configure a new door</h1>
                <p className='sub-heading'>2 of 3</p>
            </div>
            <BsThreeDotsVertical className='dots'/>
        </div>
    )
}