import styles from './Jobs.module.css';
import Layout from '../components/shared/Layout';
import image1 from '../data/jobs_image1.png';

const Jobs = () => {
    return (
        <Layout activeMenu='jobs'>
            <div className={styles.container}>

                <div className={styles.area1}>
                <div className={styles.text1}>
                        <div className={styles.text1_1}>우리 동네에서 찾는<br />당근알바</div>
                        <div className={styles.text1_2}>걸어서 10분 거리의<br />동네 알바들 여기 다 있어요.</div>
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

export default Jobs;