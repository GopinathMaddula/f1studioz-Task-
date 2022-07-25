import {BsThreeDotsVertical, BsArrowLeft} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import './index.css'

export default function Tab5(){
    
    return (
        <div className='tabs3-container'>
            <div className='name-container'>
                <Link to='/desktop4'>
                <BsArrowLeft className='back-arrow'/>
                </Link>
                <h1 className='heading'>Classic_John45012</h1>
                <p className='sub-heading'>Cart #123456723</p>
            </div>
            <BsThreeDotsVertical className='dots'/>
        </div>
    )
}