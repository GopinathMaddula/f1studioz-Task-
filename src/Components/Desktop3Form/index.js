import {AiFillQuestionCircle} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import './index.css'

export default function Desktop3Form(){
    let navigate = useNavigate()
    const handleConfigure = () => {
        navigate('/desktop4')
    }

    return(
        <>
            <div className='desk3-container'>
                <form className='desk3-form-container'>
                    <div className='label-container'>
                        <p className='label'>Select Category</p>
                        <select className='drop-down'>
                            <option value='Residential Door'>Residential Door</option>
                        </select>
                    </div>   
                    <div className='label-container'>
                        <div className='label-symbol'> 
                        <p className='label'>Select Series</p>
                        <AiFillQuestionCircle className='question-icon'/>
                        </div>
                        <select className='drop-down'>
                            <option value='Canyon Ridge® Collection'>Canyon Ridge® Collection</option>
                        </select>
                    </div>
                    <div className='label-container'>
                        <div className='label-symbol'> 
                        <p className='label'>Door Type</p>
                        <AiFillQuestionCircle className='question-icon'/>
                        </div>
                        <select className='drop-down last-drop-down'>
                            <option value='CAN212'>CAN212</option>
                        </select>
                    </div>
                </form>
                <div className='button-container'>
                        <button className='configure-button' onClick={handleConfigure}>CONFIGURE</button>
                    </div>
            </div>
        </>
    )
}