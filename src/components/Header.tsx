import React from 'react';
import { ReactComponent as Logo } from '../assets/icon.svg';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <Logo className={styles.logo} />
        </div>
    );
};

export default Header;
