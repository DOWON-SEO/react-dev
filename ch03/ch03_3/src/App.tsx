import React from 'react';
import logo from './logo.svg';
import './App.css';

import AvatarTest from './pages/AvatarTest';
import BackgroundImageTest from './pages/BackgroundImageTest';
import BorderTest from './pages/BorderTest';
import DisplayNoneTest from './pages/DisplayNoneTest';
import DisplayTest from './pages/DisplayTest';
import DivTest from './pages/DivTest';
import HeightTest from './pages/HeightTest';
import ImageTest from './pages/ImageTest';
import MarginTest from './pages/MarginTest';
import OverlayTest from './pages/OverlayTest';
import PaddingTest from './pages/PaddingTest';
import PositionTest from './pages/PositionTest';
import ViewportTest from './pages/ViewportTest';

function App() {
    return (
        <main>
            <h1>테일윈드 테스트</h1>
            <AvatarTest/>
            <BackgroundImageTest/>
            <BorderTest/>
            <DisplayNoneTest/>
            <DisplayTest/>
            <DivTest/>
            <HeightTest/>
            <ImageTest/>
            <MarginTest/>
            <OverlayTest/>
            <PaddingTest/>
            <PositionTest/>
            <ViewportTest/>
        </main>
    );
}

export default App;
