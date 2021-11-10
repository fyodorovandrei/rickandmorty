import { Header, MainTitle } from './components';
import React from 'react';

const App: React.FC = () => (
    <div className="App">
        <Header />
        <MainTitle title="The Rick and Morty" />
    </div>
);

export default App;
