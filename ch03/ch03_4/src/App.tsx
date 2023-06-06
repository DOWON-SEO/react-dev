import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardContainer from './pages/CardContainer';
import UserContainer from './pages/UserContainer';
import AlignTest from './pages/AlignTest';
import JustifyCenterTest from './pages/JustifyCenterTest';
import MinMaxTest from './pages/MinMaxTest';
import WrapTest from './pages/WrapTest';
import DirectionTest from './pages/DirectionTest';

function App() {
    return (
        <main>
            <h1>테스트</h1>
            <CardContainer/>
            <UserContainer/>
            <AlignTest/>
            <JustifyCenterTest/>
            <MinMaxTest/>
            <WrapTest/>
            <DirectionTest/>
        </main>
    );
}

export default App;
