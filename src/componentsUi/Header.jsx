import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    align-items: center;
    border: 1px solid #ddd;
    display: flex;
    height: 50px;
    justify-content: space-between;
    padding: 0 20px;
`;

function Header() {
    return (
        <Box>
            <div>My Todo List</div>
            <div>React</div>
        </Box>
    );
}

export default Header;
