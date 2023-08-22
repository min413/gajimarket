import styles from './Layout.module.css';
import Header from './Header';

const Layout = ({children, activeMenu}) => {
    return (
        <div className={styles.contianer}>
            <Header activeMenu={activeMenu}/>
            <div>
                {children}
            </div>
        </div>
    )
}
export default Layout;