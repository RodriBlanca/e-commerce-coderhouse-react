import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
    return (
        <>
            <NavBar />
            <ItemDetailContainer />
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App;