import {MdApps, MdOutlineHelp} from 'react-icons/md'
import {BsFillBellFill} from 'react-icons/bs'

import './index.css'

const Navbar = ()=> {
    return (
        <nav className='navbar'>
            <div className='first-flex-item'>
                <div className='f1-icon'>
                <h1>f1</h1>
                </div>
                <p className='studioz'>Studioz</p>
            </div>
            <div className='second-flex-item'>
                <MdApps className='icon'/>
                <BsFillBellFill className='icon'/>
                <MdOutlineHelp className='icon'/>
                <div>
                <img src='/images/profile.jpg' className='img' alt='profile-img'/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar