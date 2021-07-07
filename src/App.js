
import './App.css';
import Quiz from './component/quiz'
import { Provider } from 'react-redux'
import store from './Store'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store ={store}>
      <Quiz />
    </Provider>


  );
}

export default App;
