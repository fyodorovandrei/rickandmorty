import React from 'react';
import { Header, MainTitle, Characters } from './components';

const App: React.FC = () => (
    <div className="App">
        <Header />
        <MainTitle title="The Rick and Morty" />
        <Characters />
    </div>
);

export default App;
