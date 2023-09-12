import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import nextId from 'react-id-generator';

const FormBox = styled.form`
    align-items: center;
    display: flex;
    gap: 20px;
    background-color: #eee;
    border-radius: 12px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
`;

const FormLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
`;

const AddInput = styled.input`
    border: none;
    border-radius: 12px;
    height: 40px;
    padding: 0 12px;
    width: 240px;
`;

const AddBtn = styled.button`
    background-color: teal;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    height: 40px;
    width: 140px;
`;

const Form = () => {
    const id = nextId();

    const dispatch = useDispatch();

    const [todo, setTodo] = useState({
        id: 0,
        title: '',
        body: '',
        isDone: false,
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (todo.title.trim() === '' || todo.body.trim() === '') return;

        dispatch(addTodo({ ...todo, id }));
        setTodo({
            id: 0,
            title: '',
            body: '',
            isDone: false,
        });
    };

    return (
        <FormBox onSubmit={onSubmitHandler}>
            <div>
                <FormLabel> 제목 </FormLabel>
                <AddInput
                    type="text"
                    name="title"
                    value={todo.title}
                    onChange={onChangeHandler}
                />
                <FormLabel> 내용 </FormLabel>
                <AddInput
                    type="text"
                    name="body"
                    value={todo.body}
                    onChange={onChangeHandler}
                />
            </div>
            <AddBtn>추가하기</AddBtn>
        </FormBox>
    );
};

export default Form;
