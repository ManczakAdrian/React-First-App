import Container from "../Container/Container";
import { NavLink } from 'react-router-dom';
import styles from "./NavBar.module.scss"
import '../../styles/global.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.bar}>
                    <a href="/"><span className="fa fa-tasks" /></a>
                    <ul>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                            to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                            to="/">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                            to="/">About</NavLink></li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;