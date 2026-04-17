    import { Link } from 'react-router-dom'
    import png  from '../assets/LargeTile.scale-100.png'
    
export function Navbar() {

    return (
        <nav>
            <ul>
                <img src={png} alt="Logo" className="w-[35px] h-[35px] top-[10px] left-[10px] absolute" />

                <li>
                <Link to="/">Oversigt</Link>
                </li>
                <li className="w-[78px] h-[22px] absolute top-16px left-[203px] text-[#55EC20]"> 
                <Link to="/now">Lige nu</Link>
                </li>
                <li><Link to="/about">Historik</Link></li>


            </ul>
        </nav>
    )
}