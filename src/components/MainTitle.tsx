import React from 'react';
import { ReactComponent as Background } from '../assets/icon-flat.svg';
import styles from './MainTitle.module.scss';

const MainTitle: React.FC = () => {
    return (
        <div className={styles.mainTitle}>
            <Background />
            <h1 className={styles.title}>The Rick and Morty</h1>
        </div>
    );
};

export default MainTitle;
