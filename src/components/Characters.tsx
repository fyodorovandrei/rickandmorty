import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import axios from '../utils/axios';
import Character from './Character';

import styles from './Characters.module.scss';

interface Pagination {
    current: number;
    totalCharacters: number;
    pages: number;
    perPage: number;
}

const Characters: React.FC = () => {
    const [characters, setCharacters] = useState([]);
    const [pagination, setPagination] = useState<Pagination>({
        current: 0,
        totalCharacters: 0,
        pages: 0,
        perPage: 20
    });

    useEffect(() => {
        axios.get(`/character?page=${pagination.current}`).then((res) => {
            const { info, results } = res.data;
            setCharacters(results);
            setPagination((oldPagination) => ({
                ...oldPagination,
                totalCharacters: info.count,
                pages: info.pages
            }));
        });
    }, []);

    return (
        <div className={styles.characters}>
            <Row gutter={32}>
                {characters.map((character: any) => (
                    <Col xxl={12} xl={12} lg={12} md={24} sm={24} key={character.id}>
                        <Character
                            title={character.name}
                            avatar={character.image}
                            status={character.status}
                            species={character.species}
                            location={character.location.name}
                            seen="The Wedding Squanchers"
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Characters;
