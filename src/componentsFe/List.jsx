import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/modules/todos';
import { doneTodo } from '../redux/modules/todos';
import { Link } from 'react-router-dom';

const Container = styled.div`
    padding: 0 24px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 12px;
`;

const Wrapper1 = styled.div`
    border: 4px solid teal;
    border-radius: 12px;
    padding: 12px 24px 24px 24px;
`;

const SetBtn = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 24px;
`;

const Btn = styled.button`
    background-color: #fff;
    border: 2px solid ${(props) => props.btnColor};

    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 130px;
`;

const Links = styled(Link)``;

const List = () => {
    const dispatch = useDispatch();

    // useSelector를 사용
    // state는 중앙저장소(store)에 있는 state 전부를 의미함
    // 아래의 경우 store에 todos가 있고, todos안에 또 todos가 존재하기에 state.todos.todos가 되는 것
    const todos = useSelector((state) => state.todos.todos);

    const onDeleteHanlder = (id) => {
        dispatch(deleteTodo(id));
    };

    const isdoneTodo = (id) => {
        dispatch(doneTodo(id));
    };
    return (
        <Container>
            <h2>Working.. 🔥</h2>
            <Wrapper>
                {todos.map((todo) => {
                    if (!todo.isDone) {
                        return (
                            <Wrapper1>
                                <Links to={`/${todo.id}`} key={todo.id}>
                                    <div>상세보기</div>
                                </Links>
                                <div>
                                    <h2>{todo.title}</h2>
                                    <div>{todo.body}</div>
                                </div>
                                <SetBtn>
                                    <Btn
                                        btnColor="red"
                                        onClick={() => onDeleteHanlder(todo.id)}
                                    >
                                        삭제하기
                                    </Btn>
                                    <Btn
                                        btnColor="teal"
                                        onClick={() => isdoneTodo(todo.id)}
                                    >
                                        {todo.isDone ? '취소' : '완료'}
                                    </Btn>
                                </SetBtn>
                            </Wrapper1>
                        );
                    } else {
                        return null;
                    }
                })}
            </Wrapper>
            <h2>Done..! 🎉</h2>
            <Wrapper>
                {todos.map((todo) => {
                    if (todo.isDone) {
                        return (
                            <Wrapper1>
                                <Links to={`/${todo.id}`} key={todo.id}>
                                    <div>상세보기</div>
                                </Links>
                                <div>
                                    <h2>{todo.title}</h2>
                                    <div>{todo.body}</div>
                                </div>
                                <SetBtn>
                                    <Btn
                                        btnColor="red"
                                        onClick={() => onDeleteHanlder(todo.id)}
                                    >
                                        삭제하기
                                    </Btn>
                                    <Btn
                                        btnColor="teal"
                                        onClick={() => doneTodo(todo.id)}
                                    >
                                        {todo.isDone ? '취소' : '완료'}
                                    </Btn>
                                </SetBtn>
                            </Wrapper1>
                        );
                    } else {
                        return null;
                    }
                })}
            </Wrapper>
        </Container>
    );
};

export default List;
