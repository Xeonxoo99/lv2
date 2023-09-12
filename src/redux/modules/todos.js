// todo.js에 기능을 다 넣자
// todo.js에 있는 걸 나중에 각 컴포넌트에서 import 하여 사용한다.

// reducer : state에 변화를 일으키는 함수

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const DONE_TODO = 'DONE_TODO';
const CHECK_ID = 'CHECK_ID';

// 초기값
const initialState = {
    todos: [
        {
            id: '1',
            title: '리액트',
            body: '리액트를 배워봅시다',
            isDone: false,
        },
    ],
    todo: {
        id: '0',
        title: '',
        body: '',
        isDone: false,
    },
};

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    };
};

export const doneTodo = (payload) => {
    return {
        type: DONE_TODO,
        payload,
    };
};

export const checkID = (payload) => {
    return {
        type: CHECK_ID,
        payload,
    };
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };

        case DONE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            isDone: !todo.isDone,
                        };
                    } else {
                        return todo;
                    }
                }),
            };

        case CHECK_ID:
            return {
                ...state,
                todo: state.todos.find((todo) => {
                    return todo.id === action.payload;
                }),
            };
        default:
            return state;
    }
};

export default todos;
