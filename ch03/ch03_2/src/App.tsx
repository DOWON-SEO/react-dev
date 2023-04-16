import React from 'react';
import logo from './logo.svg';
import './App.css';
import Color from './pages/Color';
import Tailwindcss from './pages/Tailwindcss';
import TextsTest from './pages/TextsTest';

function App() {
    return (
        <div>
            <h1>테일윈드 테스트</h1>
            <Color/>
            <Tailwindcss/>
            <TextsTest/>
        </div>
    );
}

export default App;
