import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
// import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import NavBar from '../components/NavBar/NavBar';

const Home = () => {
    return (
        <>
            <Header />
            <NavBar />
            <ItemListContainer />
            <Footer />
        </>
    )
}

export default Home;