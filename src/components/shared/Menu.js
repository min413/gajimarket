import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

const Menu = ({activeMenu}) => {
    return (
        <div className={styles.container}>
            <div className={styles.menus}>
                <div>
                    안녕
                </div>

                <div>
                    하세유
                </div>

                <div>
                    따아아악
                </div>

            </div>
            
        </div>
    )
}

export default Menu;