import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <LoginForm />
      </main>
    </>
  );
}

export default App;
