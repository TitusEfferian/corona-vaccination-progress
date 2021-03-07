import { memo } from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header_container}>
            <h1 className={styles.h1}>Corona Vaccination Progress Predictions</h1>
            <h2 className={styles.h2}>total vaccinations per hundred</h2>
            <a className={styles.a} href="https://www.kaggle.com/gpreda/covid-world-vaccination-progress">https://www.kaggle.com/gpreda/covid-world-vaccination-progress</a>
        </header>

    )
}

export default memo(Header);
