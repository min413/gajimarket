import styles from './Car.module.css';
import Layout from '../components/shared/Layout';
import image1 from '../data/car_image1.png';


const Car = () => {
    return (
        <Layout activeMenu='car'>
            <div className={styles.container}>
                <div className={styles.area1}>
                    <div className={styles.text1}>
                        <div className={styles.text1_1}>딜러 수수료 없는<br />중고차 직거래</div>
                        <div className={styles.text1_2}>딜러 없이 믿고 살 수 있는 중고차,<br />당근에서 직거래해보세요.</div>
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

export default Car;