import { memo } from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.p}>last model prediction: 05 March 2021</p>
        </footer>

    )
}

export default memo(Footer);
