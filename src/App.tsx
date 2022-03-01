import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';
import News from './pages/News/News';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <News />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
