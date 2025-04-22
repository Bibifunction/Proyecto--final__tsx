import Header from './components/Header';
import SigninForm from './components/SigninForm';
import './index.css';
import './styles/Header.css';

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <SigninForm />
      </div>
    </>
  );
}

export default App;
