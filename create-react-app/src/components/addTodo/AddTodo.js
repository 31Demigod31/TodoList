import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Row, Col, Button, FormControl } from 'react-bootstrap';
import style from './AddTodo.module.css';


const AddTodo = ({ todo, setTodo }) => {


    const [value, setValue] = useState('')

    const saveTodo = () => {
        if (value) {
        setTodo(
            [...todo, {
                id: uuid(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }
}

    return (
        <Row>
            <Col className={style.addTodoForm}>
                <FormControl placeholder='Введите задачу' value={value} onChange={(e) => setValue(e.target.value)} />
                <Button onClick={saveTodo} className={style.btn}>Добавить</Button>
            </Col>
        </Row>
    )
}

export default AddTodo;