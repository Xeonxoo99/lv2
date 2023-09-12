import React from 'react';
import styled from 'styled-components';

const Ayout = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    min-width: 800px;
`;

const Layout = (props) => {
    return <Ayout>{props.children}</Ayout>;
};

export default Layout;
