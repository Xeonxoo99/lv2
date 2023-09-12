import React from 'react';
import Layout from '../componentsUi/Layout';
import Header from '../componentsUi/Header';
import Form from '../componentsFe/Form';
import List from '../componentsFe/List';

const Home = () => {
    return (
        <Layout>
            <Header />
            <Form />
            <List />
        </Layout>
    );
};

export default Home;
