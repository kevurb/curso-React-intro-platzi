import {ReactComponent as ChechSVG } from './check.svg'
import {ReactComponent as DeleteSVG } from './delete.svg'
const iconTypes = {
    "check":<ChechSVG/>,
    "delete":<DeleteSVG/>,
}
function TodoIcon ({type}){
    return (

        <span 
            className={`Icon Icon-svg Icon-${type}`}>
            
        {iconTypes[type]}
        </span>
        
    )
}
export {TodoIcon}