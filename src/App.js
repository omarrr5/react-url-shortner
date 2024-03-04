import './App.css';
import BackgroundAnimation from './components/BackgroundAnimation';
import InputShortner from './components/InputShortner';
import LinkResult from './components/LinkResult';

function App() {
  return (
    <div className="container">
      <InputShortner/>
      <LinkResult/>
      <BackgroundAnimation/>
    </div>
  );
}

export default App;
