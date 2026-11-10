import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main className="page">
      <header><span className="logo">NUMBLLE</span><nav>Каталог　 Заказать из-за рубежа　 Контакты</nav></header>
      <section className="hero">
        <p className="eyebrow">ONLINE CLOTHING STORE</p>
        <h1>Современный стиль.<br />Твой выбор.</h1>
        <p>Одежда из нашего каталога и возможность заказать понравившуюся вещь с зарубежного маркетплейса.</p>
        <button>Перейти в каталог</button>
      </section>
      <section className="features"><article><h2>Каталог</h2><p>Выбирай одежду, размер и цвет.</p></article><article><h2>Заказ из-за рубежа</h2><p>Отправь ссылку на товар и укажи необходимые характеристики.</p></article></section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
