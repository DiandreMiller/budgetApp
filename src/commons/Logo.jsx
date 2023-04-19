import SpendWise2 from '../Images/SpendWise2.png'
import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = () => {
    return (
        <div>
            <Link to='/'>
                <img
                className='logo'
                src={SpendWise2}
                alt='Spend Wise Logo'
                />
             </Link>
        </div>
    )
}

export default Logo