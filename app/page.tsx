import React from 'react';

export default function Home() {
  return (
    <main>
      {/* Навигация */}
      <nav className="navbar">
        <div className="logo">
          AVC<span>.pro</span>
        </div>
        <div>
          <a href="#features" style={{ color: 'white', textDecoration: 'none', margin: '0 15px', fontWeight: 500 }}>Возможности</a>
          <a href="#demo" className="cta-button" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Демо</a>
        </div>
      </nav>

      {/* Hero Экран */}
      <section className="hero">
        <div className="hero-content">
          <h1>Абсолютный контроль коммерческих предложений</h1>
          <p>Мощный Desktop-генератор профессиональных КП для инжиниринговых и климатических компаний (Midea, Welkin, Shivaki). От расчета до PDF за 3 секунды.</p>
          <a href="#demo" className="cta-button">Попробовать инструмент</a>
        </div>
      </section>

      {/* Преимущества */}
      <section id="features" className="features">
        <h2 className="section-title">Создано для инженеров и сейлзов</h2>
        <div className="grid">
          <div className="card">
            <div className="card-icon">⚡</div>
            <h3>Быстрый расчет</h3>
            <p>Забудь про рутину в Excel. Мгновенно агрегируй данные о сплит-системах, VRF и чиллерах, добавляй наценки и коэффициенты в один клик.</p>
          </div>
          <div className="card">
            <div className="card-icon">🎯</div>
            <h3>Премиальный PDF</h3>
            <p>Твое КП будет выглядеть так, будто его час верстал дизайнер. Заказчик увидит современный корпоративный документ, а не кривую таблицу.</p>
          </div>
          <div className="card">
            <div className="card-icon">🔒</div>
            <h3>Локальная база</h3>
            <p>Desktop-приложение работает надежно и без задержек. Вся номенклатура, прайс-листы и база клиентов всегда у тебя под рукой, даже без сети.</p>
          </div>
        </div>
      </section>

      {/* Демонстрационный блок */}
      <section id="demo" className="demo-section">
        <h2 className="section-title" style={{ color: 'white' }}>Интерфейс будущего генератора</h2>
        <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
          Интуитивный, строгий и молниеносно быстрый рабочий стол для формирования предложений.
        </p>
        
        <div className="mockup-container">
          <div className="mockup-header">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="mockup-body">
            &gt; Запуск UI модуля автоматизации коммерческих предложений...
            <br/><br/>
            [Здесь будет интеграция с Desktop App]
          </div>
        </div>
      </section>
    </main>
  );
}
