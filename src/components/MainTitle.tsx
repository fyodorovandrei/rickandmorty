import React from 'react';
import { ReactComponent as Background } from '../assets/icon-flat.svg';
import styles from './MainTitle.module.scss';

export interface MainTitleProps {
    title: string;
}

const MainTitle: React.FC<MainTitleProps> = ({ title }) => {
    return (
        <div className={styles.mainTitle}>
            <Background />
            <h1 className={styles.title}>{title}</h1>
        </div>
    );
};

export default MainTitle;
