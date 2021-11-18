import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting={'Welcome to our sport shop'}/>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App;