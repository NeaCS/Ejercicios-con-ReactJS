import './App.css';
import { Provider } from "react-redux";
import store from "./store/index"
import ContadorRedux from './components/ContadorRedux';

function App() {
  return (
    <Provider store={store}>
      <div>
        <ContadorRedux/>
      </div>
    </Provider>
  );
}

export default App;
