import Logo from '../assets/Logo.svg'
import Style from './Header.module.css'

export function Header(){
    return(
        <header className={Style.header}>
            <img src={Logo}/>
        </header>
    )
}