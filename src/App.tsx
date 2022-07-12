import React, {FC} from 'react';
import './App.css';
import AppRouter from "./components/appRouter/AppRouter";
import Header from "./components/header/header";

const App:FC = () => {
  return (
    <div className="App">
        <Header/>
        <AppRouter/>
    </div>
  );
}

export default App;
