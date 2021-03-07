import { memo } from 'react';
import Head from 'next/head';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import Header from './Header';
import prediction_data from '../../prediction_data';
import styles from './chart.module.css';
import Footer from './Footer';
const Home = () => {
    return (
        <>
            <Head>
                <title>Corona Vaccination Progress Prediction</title>
                <meta name="description" content="This is a unofficial prediction to predict corona vaccination progress. The Model was build with Google Cloud AutoML Tables, and the datasets come from kaggle community" />
            </Head>
            <Header />
            <main className={styles.grid_container}>
                {
                    prediction_data.map(x => {
                        return (
                            <div>
                                <h5 className={styles.h5}>{x.country}</h5>
                                <VictoryChart
                                    maxDomain={{
                                        y: 100,
                                    }}
                                    theme={VictoryTheme.material}
                                >
                                    <VictoryLine
                                        animate={{
                                            duration: 2000,
                                            onLoad: { duration: 1000 }
                                        }}
                                        style={{
                                            data: { stroke: "#F87171" },
                                            parent: { border: "1px solid #ccc" }
                                        }}
                                        data={x.data}
                                    />
                                </VictoryChart>
                            </div>
                        )
                    })
                }
            </main>
            <Footer />
        </>
    )
}

export default memo(Home);
