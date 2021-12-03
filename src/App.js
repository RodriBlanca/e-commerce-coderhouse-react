// React
import React from 'react';
// React Router Dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Views
import Home from './views/Home';
import Category from './views/Category';
// Components
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/category/:id" element={<Category />}/>
                    <Route path="/item/:id" element={<ItemDetailContainer />}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;