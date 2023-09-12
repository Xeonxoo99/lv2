import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { checkID } from '../redux/modules/todos';

const Container = styled.div`
    border: 2px solid rgb(238, 238, 238);
    width: 100%;
    height: 100vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
`;

const Box = styled.div`
    width: 600px;
    height: 400px;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Header = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
`;

const Btn = styled.button`
    border: 1px solid ${({ bdColor }) => bdColor};
    height: 40px;
    width: 120px;
    background-color: #fff;
    border-radius: 12px;
    cursor: pointer;
`;

const Title = styled.h1`
    padding: 0 24px;
`;
const Body = styled.h3`
    padding: 0 24px;
`;

const Detail = () => {
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todos.todo);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(checkID(id));
    }, [dispatch, id]);

    return (
        <Container>
            <Box>
                <div>
                    <Header>
                        <div>ID : {todo.id}</div>
                        <Btn
                            bdColor="white"
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            이전으로
                        </Btn>
                    </Header>
                    <Title>{todo.title}</Title>
                    <Body>{todo.body}</Body>
                </div>
            </Box>
        </Container>
    );
};

export default Detail;
