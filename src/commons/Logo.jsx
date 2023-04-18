import SpendWise2 from '../Images/SpendWise2.png'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div>
            <Link to='/'>
            <img
                src={SpendWise2}
                alt='Spend Wise Logo'
                />
             </Link>
        </div>
    )
}

export default Logo