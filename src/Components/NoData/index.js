import {FaPlus} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import './index.css'

export default function NoData(){
    let navigate = useNavigate()

    const handleChange = () => {
        navigate('/desktop2')
    }
    return(
        <>
        <div className='no-data-container'>
            <h1 className='no-data'>No Data</h1>
        </div>
        <div className="plus-icon-container">
        <button type='button' className="plus-button" onClick={handleChange}><FaPlus className="add-icon"/></button>
    </div>
    </>
    )
}