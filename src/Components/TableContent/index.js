import './index.css'

const tableData = [{id:1,productInformation: "2 Classic Collection Garage Door, 2 Entry Door", 
cartName: "Johnson_Classic14209123", 
shippingPoint:"Russia Plant", 
createdBy:"Manoj Bajpayee", 
expiry:6},
{id:2, productInformation: "10' 0'' X 10' 0.0'' CAN211CCW1 COMPLETE DOOR INTELLICORE", 
cartName: "Carter_Classic14209123", 
shippingPoint:"Russia Plant", 
createdBy:"Steve Benneth...", 
expiry:4},
{id:3,productInformation: "Canyon Ridge® Collection Ultra-Grain® Series with Intellicore®", 
cartName: "Michigan_Classic14209123", 
shippingPoint:"ABC Plant", 
createdBy:"Steve Benneth...", 
expiry:90},
{id:4,productInformation: "2 Classic Collection Garage Door, 2 Entry Door", 
cartName: "Johnson_Classic14209123", 
shippingPoint:"Russia Plant", 
createdBy:"Manoj Bajpayee", 
expiry:6},
{id:5,productInformation: "2 Classic Collection Garage Door, 2 Entry Door", 
cartName: "Johnson_Classic14209123", 
shippingPoint:"Russia Plant", 
createdBy:"Manoj Bajpayee", 
expiry:6},
{id:6,productInformation: "10' 0'' X 10' 0.0'' CAN211CCW1 COMPLETE DOOR INTELLICORE", 
cartName: "Carter_Classic14209123", 
shippingPoint:"Russia Plant", 
createdBy:"Steve Benneth...", 
expiry:4},
{id:7, productInformation: "Canyon Ridge® Collection Ultra-Grain® Series with Intellicore®", 
cartName: "Michigan_Classic14209123", 
shippingPoint:"ABC Plant", 
createdBy:"Steve Benneth...", 
expiry:90},
{id:8, productInformation: "2 Classic Collection Garage Door, 2 Entry Door", 
cartName: "Johnson_Classic14209123", 
shippingPoint:"Russia Plant", 
createdBy:"Manoj Bajpayee", 
expiry:6},
{id:9,productInformation: "2 Classic Collection Garage Door, 2 Entry Door", 
cartName: "Johnson_Classic14209123", 
shippingPoint:"Russia Plant", 
createdBy:"Manoj Bajpayee", 
expiry:6},
{id:10,productInformation: "10' 0'' X 10' 0.0'' CAN211CCW1 COMPLETE DOOR INTELLICORE", 
cartName: "Carter_Classic14209123", 
shippingPoint:"Russia Plant", 
createdBy:"Steve Benneth...", 
expiry:4},
{id:11, productInformation: "Canyon Ridge® Collection Ultra-Grain® Series with Intellicore®", 
cartName: "Michigan_Classic14209123", 
shippingPoint:"ABC Plant", 
createdBy:"Steve Benneth...", 
expiry:90},
{id:12, productInformation: "2 Classic Collection Garage Door, 2 Entry Door", 
cartName: "Johnson_Classic14209123", 
shippingPoint:"Russia Plant", 
createdBy:"Manoj Bajpayee", 
expiry:6}
]

export default function TableContent(props){
    const {searchInput} = props

    const filteredArray = tableData.filter((eachItem)=> eachItem.productInformation.includes(searchInput))

    return (
        <>
            {filteredArray.map((eachItem,index)=>{
                let backgroundColor;
                let expires;
                if (index%2 === 0){
                    backgroundColor = 'background-color'
                } else{
                    backgroundColor = ''
                }
                if (eachItem.expiry <= 10){
                    expires = 'expires-soon'
                }
                return (
                <ul className={`row-container ${backgroundColor}`}>
                    <li className='list first-column-width'>{eachItem.productInformation}</li>
                    <li className='list second-column-width'>{eachItem.cartName}</li>
                    <li className='list third-column-width'>{eachItem.shippingPoint}</li>
                    <li className='list fourth-column-width'>{eachItem.createdBy}</li>
                    {expires === 'expires-soon'? <li className='list fifth-column-width soon'>Expires in {eachItem.expiry} days</li> : <li className='list fifth-column-width'>Expires in {eachItem.expiry} days<span className='new'>NEW</span></li>}
                    
                </ul>
                )
            })}
        </>
    )
}