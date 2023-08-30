import styles from './Header.module.css'

import IgniteLogo from '../assets/IgniteLogo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={IgniteLogo} alt="Logotipo Ignite" />
            <strong>Ignte Feed</strong>
        </header>
    )
}