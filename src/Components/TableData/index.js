import {AiOutlineArrowDown} from "react-icons/ai"
import {FaPlus} from 'react-icons/fa'
import TableContent from '../TableContent'
import { useNavigate } from "react-router-dom";

import "./index.css"

export default function TableData(props){
    const {searchInput} = props
    
    let navigate = useNavigate()

    const handleChange = () => {
        navigate('/desktop2')
    }

    return (
        <>
        <div className="table-container">
            <ul className="column-table-container">
                <li className="column-name-container first-column-width">
                    <h1 className="column-heading">PRODUCT INFORMATION</h1>
                    <AiOutlineArrowDown className="arrow-icon"/>
                </li>
                <li className="column-name-container second-column-width">
                    <h1 className="column-heading">CART NAME</h1>
                    <AiOutlineArrowDown className="arrow-icon"/>
                </li>
                <li className="column-name-container third-column-width">
                    <h1 className="column-heading">SHIPPING POINT</h1>
                    <AiOutlineArrowDown className="arrow-icon"/>
                </li>
                <li className="column-name-container fourth-column-width">
                    <h1 className="column-heading">CREATED BY</h1>
                    <AiOutlineArrowDown className="arrow-icon"/>
                </li>
                <li className="column-name-container fifth-column-width">
                    <h1 className="column-heading">EXPIRY</h1>
                    <AiOutlineArrowDown className="arrow-icon"/>
                </li>
            </ul>
            <TableContent searchInput={searchInput}/>
        </div>
        <div className="plus-icon-container">
                <button type='button' className="plus-button" onClick={handleChange}><FaPlus className="add-icon"/></button>
            </div>
        </>
        
    )
}