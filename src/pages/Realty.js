import styles from './Realty.module.css';
import image1 from '../data/realty_image1.png';
import Layout from '../components/shared/Layout';

const Realty = () => {
    return (
        <Layout activeMenu='realty'>
            <div className={styles.container}>
                <div className={styles.area1}>
                    <div className={styles.text1}>
                        <div className={styles.text1_1}>복비없이 투명한<br />부동산 직거래</div>
                        <div className={styles.text1_2}>이웃이 살던 집, 당근마켓에서<br />편하게 직거래해보세요.</div>
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

export default Realty;