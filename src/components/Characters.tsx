import React from 'react';
import { Row, Col } from 'antd';
import Character from './Character';

import styles from './Characters.module.scss';

const Characters: React.FC = () => {
    return (
        <div className={styles.characters}>
            <Row gutter={32}>
                <Col xxl={12} xl={12} lg={12} md={12} sm={24}>
                    <Character
                        title="Arcade Alien"
                        avatar="https://rickandmortyapi.com/api/character/avatar/23.jpeg"
                        status="unknown"
                        species="Alien"
                        location="Earth (Replacement Dimension)"
                        seen="The Wedding Squanchers"
                    />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={24}>
                    <Character
                        title="Arcade Alien"
                        avatar="https://rickandmortyapi.com/api/character/avatar/23.jpeg"
                        status="Dead"
                        species="Alien"
                        location="Earth (Replacement Dimension)"
                        seen="The Wedding Squanchers"
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Characters;
