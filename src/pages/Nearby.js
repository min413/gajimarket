import styles from './Nearby.module.css';
import Layout from '../components/shared/Layout';
import image1 from '../data/nearby_stores_image1.png';


const Nearby = () => {
    return (
        <Layout activeMenu='nearby-stores'>
            <div className={styles.container}>
                <div className={styles.area1}>
                    <div className={styles.text1}>
                        <div className={styles.text1_1}>동네 이웃들이<br />자주 가는 동네 가게</div>
                        <div className={styles.text1_2}>우리 동네 사람들이<br />이용하는 가게를 찾아보세요.</div>
                    </div>
                    <img
                        className={styles.image1}
                        src={image1}
                        alt='image1'
                    />
                </div>
            </div>
        </Layout>
    )
}

export default Nearby;