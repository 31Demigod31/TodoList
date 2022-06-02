import React from 'react';
import style from './Header.module.css'
import { Row, Col } from 'react-bootstrap';

const Header = () => {
    return (
        <Row>
            <Col>
                <div className={style.root}>Todo</div>
            </Col>
        </Row>
    )
}

export default Header;