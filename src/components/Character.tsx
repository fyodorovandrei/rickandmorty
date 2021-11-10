import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Col, Row } from 'antd';
import axios from '../utils/axios';

import styles from './Character.module.scss';

export interface CharacterProps {
    title: string;
    avatar: string;
    species: string;
    status: string;
    locationId: number | undefined;
    firstEpisode: number | undefined;
}

interface Event {
    name: string;
}

interface Location {
    name: string;
    residents?: string[];
    dimension?: string;
}

const getFullLocation = (location: Location): string => {
    let str = '';

    if (location) {
        str += location.name;

        if (location.dimension) {
            str += `- ${location.dimension}`;
        }

        if (location.residents) {
            str += ` (${location.residents.length} residents)`;
        }
    }

    return str;
};

const Character: React.FC<CharacterProps> = ({
    title,
    avatar,
    status,
    species,
    locationId,
    firstEpisode
}) => {
    const statusClassNames = classNames(styles.status, {
        [styles.statusDead]: status === 'Dead',
        [styles.statusAlive]: status === 'Alive'
    });

    const [event, setEvent] = useState<Event | undefined>(undefined);

    useEffect(() => {
        axios.get(`/episode/${firstEpisode}`).then((res) => {
            setEvent(res.data);
        });
    }, [firstEpisode]);

    const [location, setLocation] = useState<Location | undefined>(undefined);

    useEffect(() => {
        if (locationId) {
            axios.get(`/location/${locationId}`).then((res) => {
                setLocation(res.data);
            });
        } else {
            setLocation({ name: '--' });
        }
    }, [locationId]);

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
                                    {location ? (
                                        <p className={styles.text}>{getFullLocation(location)}</p>
                                    ) : (
                                        <div className={styles.textSkeleton} />
                                    )}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <div className={styles.section}>
                                    <p className={styles.label}>First seen in:</p>
                                    {event ? (
                                        <p className={styles.text}>{event.name}</p>
                                    ) : (
                                        <div className={styles.textSkeleton} />
                                    )}
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
