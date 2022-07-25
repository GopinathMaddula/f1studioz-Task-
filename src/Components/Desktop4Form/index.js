import { useEffect, useState } from 'react'
import {AiFillQuestionCircle, AiFillInfoCircle} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import './index.css'

const checkboxesArray = [
    {
        id: 1,
        label: "Extra Strut(s)",
    },
    {
        id: 2,
        label: "Spade Strap Hinge(s)",
    },
    {
        id: 3,
        label: "14 GA Quiet Hinge",
    },
    {
        id: 4,
        label: "Less Bottom Astragal",
    },
    {
        id: 5,
        label: "Gold Bar Gurantee ( Select Dealers )",
    },
    {
        id: 6,
        label: "Medallion Hardware Upgrade",
    },
    {
        id: 7,
        label: "Light Seal Kit",
    },
    {
        id: 8,
        label: "Slide Lock Mounted at 54”",
    },
    {
        id: 9,
        label: "2 Spear Lift Handles",
    },
]
const measurementArray = [
{
    id : 0,
    value: 0,
},
{
    id : 1,
    value: 1,
},
{
    id : 2,
    value: 2,
},
{
    id : 3,
    value: 3,
},
{
    id : 4,
    value: 4,
},
{
    id : 5,
    value: 5,
},
{
    id : 6,
    value: 6,
},
{
    id : 7,
    value: 7,
},
{
    id : 8,
    value: 8,
},
]
const glassTypeArray = [
    {
        id : 0,
        type: 'Solid (No Windows)',
    },
    {
        id : 1,
        type: "Laminated Safety",
    },
    {
        id : 2,
        type: "Obscured",
    },
    {
        id : 3,
        type: "Tempered",
    },
    {
        id : 4,
        type: 'none',
    }
    
    ]
const springsArray = [
    {id:0, spring: "Galvanised Torsion"}, 
    {id:1, spring: 'Oil-Tempered'}, 
    {id:2, spring: "Coated"}, 
    {id:4, spring: 'none'}
]

const locksArray = [
    {
        id: 0,
        lock: 'Inside Slide Lock (#2)'
    },
    {
        id: 1,
        lock: 'Mortise Locks'
    },
    {
        id: 2,
        lock: 'Padlocks'
    },
    {
        id: 3,
        lock: 'Deadbolt Locks'
    },
    {
        id: 3,
        lock: 'none'
    },
]


export default function Desktop4(){
    let navigate = useNavigate()
    const handleAddCart = () => {
        navigate('/desktop5')
    }
    
    const [state, setState] = useState({width:0, height: 0, widthIn: 0, heightIn: 0, glassType: 'none', spring: 'none', lock: 'none'})
    // const [glassType, setGlassType] = useState('none')
    // const [spring, setSpring] = useState('none')
    // const [lock, setLock] = useState('none')
    
    let percentage = 0;

    const {width, height, widthIn, heightIn, glassType, spring, lock} = state
    

    if (width !==0 && height !== 0 && widthIn !== 0 && heightIn !== 0){
        percentage += 25
    }
    if (glassType !== 'none'){
        percentage += 25
    }
    if (spring !== 'none'){
        percentage += 25
    }
    if (lock !== 'none'){
        percentage += 25
    }

    const handleWidth = (event) => {
        setState((prev)=>({...prev, width: event.target.value}))
     }
    const handleWidthIn = (event) => {
        setState((prev)=>({...prev, widthIn: event.target.value}))
    }
    const handleHeight = (event) => {
        setState((prev)=>({...prev, height: event.target.value}))
    }
    const handleHeightIn = (event) => {
        setState((prev)=>({...prev, heightIn: event.target.value}))
    }
    
    const handleGlassType = (event) => {
        setState((prev)=>({...prev, glassType: event.target.value}))
    }

    const handleSpring = (event) => {
        setState((prev)=>({...prev, spring: event.target.value}))
    }

    const handleLock = (event) => {
        setState((prev)=>({...prev, lock: event.target.value}))
    }
    
    useEffect(()=>{
        
        let data = localStorage.getItem('persitedData')
        let parsedData = JSON.parse(data)

        if (width === 0 && height === 0 && widthIn === 0 && heightIn === 0 && glassType === 'none' && spring === 'none' && lock === 'none'){
            setState((prev)=> ({...prev, ...parsedData}))
        }
        // setState({...state, width:parsedData.width, height: parsedData.height, widthIn: parsedData.widthIn, heightIn: parsedData.heightIn, glassType: parsedData.glassType, spring: parsedData.spring, lock: parsedData.lock})
       
    }, [])
    
    // console.log(state)
    useEffect(()=>{
        localStorage.setItem('persitedData',JSON.stringify({width, height, widthIn, heightIn, glassType, spring, lock}))
        // console.log({width, height, widthIn, heightIn, glassType, spring, lock})
        
        
        
    },[width, height, widthIn, heightIn, glassType, spring, lock])


    return(
        <>
        <div className='desktop4-form-container'>
            <div className='progress-bar-container'>
                <div className='progress-bar'>
                    <div className={`percentage-bar percentage-width-${percentage}`}></div>
                </div>
                <p className='percentage'><span className='percent'>{`${percentage}%`}</span> Completed</p>
            </div>

            <div className='form4-container'>
                <div className='form-tab'>
                    <h1 className='tab-heading'>Layout Options</h1>
                </div>
                <div className='label4-container'>
                    <p className='label4'>Assembly Type</p>
                    <select className='drop-down4'>
                        <option value='Complete Door'>Complete Door</option>
                    </select>
                </div>  

                <div className='label4-container'>
                        <div className='label4-symbol'> 
                        <p className='label4'>Measure Size</p>
                        <AiFillQuestionCircle className='question4-icon'/>
                        </div>
                        <div className='measure-size-container'>
                            <div className='width-container'>
                                <p className='width-label'>width</p>
                                <div className='select-container'> 
                                <select className='width-drop-down' value={width} onChange={handleWidth}>
                                    {measurementArray.map((value)=>
                                        <option value={value.id}>{value.value} ft.</option>
                                    )}
                                </select>
                                <select className='width-drop-down' value={widthIn} onChange={handleWidthIn}>
                                    {measurementArray.map((value)=>
                                        <option value={value.id}>{value.value} in.</option>
                                    )}
                                    
                                </select>
                                </div>
                            </div>
                            <div className='height-container'>
                            <p className='width-label'>Height</p>
                            <div className='select-container'> 
                                <select className='width-drop-down' value={height} onChange={handleHeight}>
                                    {measurementArray.map((value)=>
                                        <option value={value.id}>{value.value} ft.</option>
                                    )}
                                    
                                </select>
                                <select className='width-drop-down' value={heightIn} onChange={handleHeightIn}>
                                    {measurementArray.map((value)=>
                                        <option value={value.id}>{value.value} in.</option>
                                    )}
                                </select>
                                </div>
                            </div>
                        </div>
                    </div>
                
                <div className='label4-container'>
                        <div className='label4-symbol'> 
                        <p className='label4'>Windcode</p>
                        <AiFillQuestionCircle className='question4-icon'/>
                        </div>
                        <select className='drop-down4'>
                            <option value='CAN212'>WindCode W1</option>
                        </select>
                    </div>
                
                    <div className='label4-container'>
                        <div className='label4-symbol'> 
                        <p className='label4'>Design</p>
                        <AiFillQuestionCircle className='question4-icon'/>
                        </div>
                        <select className='drop-down4'>
                            <option value='CAN212'>CC</option>
                        </select>
                    </div>

                    <div className='label4-container'>
                        <div className='label4-symbol'> 
                        <p className='label4'>Color</p>
                        <AiFillQuestionCircle className='question4-icon'/>
                        </div>
                        <select className='drop-down4'>
                            <option value='CAN212'>Dark Finish</option>
                        </select>
                    </div>
                
            </div>

            <div className='form4-container'>
                <div className='form-tab'>
                    <h1 className='tab-heading'>Window Options</h1>
                </div>
                <div className='label4-container'>
                        <div className='label4-symbol'> 
                        <p className='label4'>Glass Type</p>
                        <AiFillQuestionCircle className='question4-icon'/>
                        </div>
                        <select className='drop-down4' value={glassType} onChange={handleGlassType}>
                            {glassTypeArray.map((each)=> 
                                <option value={each.type}>{each.type}</option>
                            )}
                            
                        </select>
                    </div>

                    <div className='label4-container'>
                        <div className='label4-symbol'> 
                        <p className='label4'>Section(s) Glazed</p>
                        <AiFillQuestionCircle className='question4-icon'/>
                        </div>
                        <select className='drop-down4'>
                            <option value='CAN212'>Sections 4</option>
                        </select>
                    </div>
                
                    <div className='label4-container'>
                        <div className='label4-symbol'> 
                        <p className='label4'>Framing</p>
                        <AiFillQuestionCircle className='question4-icon'/>
                        </div>
                        <select className='drop-down4'>
                            <option value='CAN212'>Arch 1 Design</option>
                        </select>
                    </div>
            </div>

            <div className='form4-container'>
                <div className='form-tab'>
                    <h1 className='tab-heading'>Track Options</h1>
                </div>
                <div className='label4-container'>
                    <p className='label4'>Spring</p>
                    <select className='drop-down4' value={spring} onChange={handleSpring}>
                        {springsArray.map((each)=> (
                            <option value={each.spring}>{each.spring}</option>
                        ))}
                        
                    </select>
                </div>  
                
                <div className='label4-container'>
                        <div className='label4-symbol'> 
                        <p className='label4'>Track Size</p>
                        <AiFillQuestionCircle className='question4-icon'/>
                        </div>
                        <select className='drop-down4'>
                            <option value='CAN212'>2” Flag & Jamb Brackets Loose</option>
                        </select>
                    </div>
                
                    <div className='label4-container'>
                        <div className='label4-symbol'> 
                        <p className='label4'>Track Mount</p>
                        <AiFillQuestionCircle className='question4-icon'/>
                        </div>
                        <select className='drop-down4'>
                            <option value='CAN212'>Bracket</option>
                        </select>
                    </div>

                    <div className='label4-container'>
                        <div className='label4-symbol'> 
                        <p className='label4'>Track Lift</p>
                        <AiFillQuestionCircle className='question4-icon'/>
                        </div>
                        <select className='drop-down4'>
                            <option value='CAN212'>Standard</option>
                        </select>
                    </div>

                    <div className='label4-container'>
                        <div className='label4-symbol'> 
                        <p className='label4'>Track Radius</p>
                        <AiFillQuestionCircle className='question4-icon'/>
                        </div>
                        <select className='drop-down4'>
                            <option value='CAN212'>12” Radius</option>
                        </select>
                    </div>
            </div>

            <div className='form4-container'>
                <div className='form-tab'>
                    <h1 className='tab-heading'>Other Options</h1>
                </div>
                <div className='label4-container'>
                        <div className='label4-symbol'> 
                        <p className='label4'>Lock</p>
                        <AiFillQuestionCircle className='question4-icon'/>
                        </div>
                        <select className='drop-down4' value={lock} onChange={handleLock}>
                            {locksArray.map((each)=>(
                                <option value={each.lock}>{each.lock}</option>
                            ))}
                            
                        </select>
                    </div>

                    <div className='label4-container'>
                    <p className='label4'>MISC Lock Options</p>
                    <div className='radio-container'>
                        <input type='radio' className='radio'/>
                        <label className='radio-checkbox-label'>No Lock Hole</label>
                    </div>
                </div> 

                    <div className='label4-container'>
                        <div className='label4-symbol'> 
                        <p className='label4'>Packaging</p>
                        <AiFillQuestionCircle className='question4-icon'/>
                        </div>
                        <div className='packaging-container'>
                            <select className='packaging-dropdown'>
                                <option value='distributor'>[x] Distributor</option>
                            </select>
                            <div className='highlight-container'> 
                                <AiFillInfoCircle className='info-icon'/>
                                <p className='packaging-highlight'>Clopay CWD Models Excludes  Packaging Options</p>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className='label4-container'>
                        <div className='label4-symbol'> 
                        <p className='label4'>Additional Options</p>
                        <AiFillQuestionCircle className='question4-icon'/>
                        </div>
                        <div className='checkboxes-dropdown-container'>
                            <div className='checkboxes-container'>
                                {checkboxesArray.map((each)=> {
                                    return(
                                        <div className='checkbox-label-container'>
                                            <input type='checkbox' className='checkbox' id={each.id}/>
                                            <label className='checkbox-label' htmlFor={each.id}>{each.label}
                                            </label>
                                        </div>
                                    )
                                })}
                                
                            </div>
                            <select className='packing-drop-down'>
                                <option value='5 Extra Struts'>5 Extra Struts</option>
                            </select>
                        </div>
                    </div>
            </div>

            <div className='form4-container'>
                <div className='desk4-buttons-container'>
                    <button className='button4 preview-button'>PREVIEW</button>
                    <button className='button4 add-to-cart-button' onClick={handleAddCart}>ADD TO CART</button>
                </div>
            </div>
        </div>
        </>
    )
}