import styles from './Header.module.css'
import gaji from '../../data/gaji.png';
import {Link} from 'react-router-dom';

const Header = ({activeMenu}) => {
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.gaji} src={gaji} alt='gaji image' />
            </div>
            
            <div className={styles.menus}>
                <Link to='/' className={activeMenu === 'home' ? styles.focused : styles.link}>
                    중고거래
                </Link>

                <Link to='/nearby-stores' className={activeMenu === 'nearby-stores' ? styles.focused : styles.link}>
                    동네가게
                </Link>

                <Link to='/jobs' className={activeMenu === 'jobs' ? styles.focused : styles.link}>
                    알바
                </Link>

                <Link to='/realty' className={activeMenu === 'realty' ? styles.focused : styles.link}>
                    부동산 직거래
                </Link>

                <Link to='/car' className={activeMenu === 'car' ? styles.focused : styles.link}>
                    중고차 직거래
                </Link>
            </div>

            <div className={styles.right}>
                <input 
                    className={styles.input}
                    placeholder='물품이나 동네를 검색해보세요'
                    
                />
                <button
                    className={styles.button}
                >
                    채팅하기
                </button>

            </div>
        </div>
    )
}

export default Header;