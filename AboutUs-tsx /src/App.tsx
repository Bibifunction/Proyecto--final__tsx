import React, { useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero'; // Actualizado
import { MenuModal } from './components/menumodal/MenuModal';
import { Pawpose } from './components/pawpose/Pawpose';
import { Team } from './components/team/Team';
import { Pawcode } from './components/pawcode/Pawcode';
import { Message } from './components/message/Message';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

const App: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  
  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <MenuModal isActive={menuActive} toggleMenu={toggleMenu} />
      <main className="main">
        <div className="container">
          <Hero />
          <Pawpose />
          <Team />
          <Pawcode />
          <Message />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;





