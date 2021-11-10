import React, { useEffect, useState } from 'react';
import { Row, Col, Pagination, Spin } from 'antd';
import axios from '../utils/axios';
import Character from './Character';
import retrieveId from '../utils/retrieve-id';

import styles from './Characters.module.scss';

interface PaginationState {
    current: number;
    totalCharacters: number;
    pages: number;
    perPage: number;
}

const Characters: React.FC = () => {
    const [loading, toggleLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [pagination, setPagination] = useState<PaginationState>({
        current: 1,
        totalCharacters: 0,
        pages: 0,
        perPage: 20
    });

    useEffect(() => {
        toggleLoading(true);
        axios.get(`/character?page=${pagination.current}`).then((res) => {
            const { info, results } = res.data;
            toggleLoading(false);
            setCharacters(results);
            setPagination((oldPagination) => ({
                ...oldPagination,
                totalCharacters: info.count,
                pages: info.pages
            }));
        });
    }, [pagination.current]);

    const handleOnChangePagination = (page: number) => {
        window.scroll(0, 0);
        setPagination((oldPagination) => ({
            ...oldPagination,
            current: page
        }));
    };

    return (
        <div className={styles.characters}>
            <Spin spinning={loading}>
                <Row gutter={12}>
                    {characters.map((character: any) => (
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} key={character.id}>
                            <Character
                                title={character.name}
                                avatar={character.image}
                                status={character.status}
                                species={character.species}
                                locationId={retrieveId(character.location.url) || undefined}
                                firstEpisode={retrieveId(character.episode[0])}
                            />
                        </Col>
                    ))}
                </Row>
            </Spin>
            <Row>
                <Col span={24}>
                    <div className={styles.pagination}>
                        <Pagination
                            current={pagination.current}
                            total={pagination.totalCharacters}
                            showSizeChanger={false}
                            pageSize={pagination.perPage}
                            onChange={handleOnChangePagination}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Characters;
