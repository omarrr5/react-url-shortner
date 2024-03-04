import { useState } from 'react';
import './App.css';
import BackgroundAnimation from './components/BackgroundAnimation';
import InputShortner from './components/InputShortner';
import LinkResult from './components/LinkResult';

function App() {

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortner setInputValue={setInputValue}/>
      <LinkResult inputValue={inputValue}/>
      <BackgroundAnimation/>
    </div>
  );
}

export default App;
