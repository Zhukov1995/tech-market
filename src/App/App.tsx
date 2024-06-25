import React from 'react';
import styles from './App.module.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import { Route, Routes } from 'react-router-dom';
import AllWidgetPage from './pages/AllWidgetPage/AllWidgetPage';
import WidgetPage from './pages/WidgetPage/WidgetPage';

function App() {

  return (
    <div className={styles.app}>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/widgets" element={<AllWidgetPage />} />
        <Route path="/widget" element={<WidgetPage />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
