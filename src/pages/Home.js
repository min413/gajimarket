import styles from './Home.module.css';
import Layout from '../components/shared/Layout';
import image1 from '../data/image1.png';
import image2 from '../data/image2.png';
import image3 from '../data/image3.png';
import image4 from '../data/image4.png';
import { CiAlarmOn } from "react-icons/ci";
import { CiBarcode } from "react-icons/ci";
import { CiCalculator2 } from "react-icons/ci";



const Home = () => {
    return (
        <Layout activeMenu='home'>
            <div className={styles.container}>

                <div className={styles.area1}>
                    <div className={styles.text1}>
                        <div className={styles.text1_1}>당신 근처의 <br />당근마켓</div>
                        <div className={styles.text1_2}>중고 거래부터 동네 정보까지, 이웃과 함께해 <br />가깝고 따뜻한 당신의 근처를 만들어요
                        </div>
                    </div>
                    <img
                        className={styles.image1}
                        src={image1}
                        alt='image1'
                    />
                </div>

                <div className={styles.area2}>
                    <img 
                        className={styles.image2}
                        src={image2}
                        alt='image2'
                    />
                    <div className={styles.text2}>
                        <div className={styles.text2_1}>우리 동네 <br /> 중고 직거래 마켓 </div>
                        <div className={styles.text2_2}>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</div>
                        <div className={styles.buttons1}>
                            <button className={styles.button1_1}>
                                인기매물 보기
                            </button>
                            <button className={styles.button1_2}>
                                믿을 수 있는 중고거래
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.area3}>
                    <div className={styles.text3}>
                        <div className={styles.text3_1}>이웃과 함께 하는<br/>동네생활</div>
                        <div className={styles.text3_2}>우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
                        </div>
                        <div className={styles.three_container}>
                            <div className={styles.three_1}>
                                <CiBarcode className={styles.three1_1}/>
                                <div className={styles.three1_2}>우리동네질문</div>
                                <div className={styles.three1_3}>궁금한 게 있을 땐<br/>이웃에게 물어보세요.</div>
                            </div>

                            <div className={styles.three_1}>
                                <CiAlarmOn className={styles.three1_1}/>
                                <div className={styles.three1_2}>동네분실센터</div>
                                <div className={styles.three1_3}>무언가를 잃어버렸을 때,<br/>함께 찾을 수 있어요.</div>
                            </div>

                            <div className={styles.three_1}>
                                <CiCalculator2 className={styles.three1_1}/>
                                <div className={styles.three1_2}>동네모임</div>
                                <div className={styles.three1_3}>관심사가 비슷한 이웃과<br/>온오프라인으로 만나요.</div>
                            </div>
                        </div>
                    </div>
                    <img
                        className={styles.image3}
                        src={image3}
                        alt='image3'
                    />
                </div>

                <div className={styles.area4}>
                    <img 
                        className={styles.image4}
                        src={image4}
                        alt='image4'
                    />
                    <div className={styles.text4}>
                        <div className={styles.text4_1}>내 근처에서 찾는<br />동네가게</div>
                        <div className={styles.text4_2}>우리 동네 가게를 찾고 있나요?<br/>동네 주민이 남긴 진짜 후기를 함께 확인해보세요!</div>
                        <div className={styles.buttons2}>
                            <button className={styles.button2_1}>
                                당근마켓 동네가게 찾기
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Home;