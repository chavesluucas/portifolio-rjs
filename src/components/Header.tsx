import styles from './Header.module.css'
import logo from '../assets/chavesbook-icon.svg'


export function Header(){
    return(
        <header className={styles.header}>
            <img src={logo} alt="Logo do Chavesbook" />
        </header>
    );
}