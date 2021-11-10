import React from 'react';
import classNames from 'classnames';
import { Col, Row } from 'antd';

import styles from './Character.module.scss';

export interface CharacterProps {
    title: string;
    avatar: string;
    species: string;
    status: string;
    location: string;
    seen: string;
}

const Character: React.FC<CharacterProps> = ({
    title,
    avatar,
    status,
    species,
    location,
    seen
}) => {
    const statusClassNames = classNames(styles.status, {
        [styles.statusDead]: status === 'Dead',
        [styles.statusAlive]: status === 'Alive'
    });

    return (
        <div className={styles.character}>
            <Row gutter={12}>
                <Col span={8}>
                    <img className={styles.image} src={avatar} alt={title} />
                </Col>
                <Col span={16}>
                    <div className={styles.content}>
                        <Row>
                            <Col span={24}>
                                <h2 className={styles.title}>{title}</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <div className={statusClassNames}>
                                    <span className={styles.statusBadge} />
                                    <span className={styles.statusText}>{status}</span> -{' '}
                                    <span>{species}</span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <div className={styles.section}>
                                    <p className={styles.label}>Last known location:</p>
                                    <p className={styles.text}>{location}</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <div className={styles.section}>
                                    <p className={styles.label}>First seen in:</p>
                                    <p className={styles.text}>{seen}</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Character;
