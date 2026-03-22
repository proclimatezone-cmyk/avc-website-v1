"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ─────────── DATA ─────────── */
const NAV_LINKS = [
  { label: "1. Кондиционеры", href: "#conditioners" },
  { label: "2. Отопление", href: "#heating" },
  { label: "3. Вентиляция", href: "#ventilation" },
  { label: "4. Сервис", href: "#service" },
  { label: "5. Отзывы", href: "#reviews" },
  { label: "6. Бренды", href: "#brands" },
];

const SERVICES = [
  {
    num: "01",
    title1: "Кондиционирование,",
    title2: "Продажа и Монтаж",
    desc: "Профессиональный подбор, продажа и установка кондиционеров ведущих мировых брендов. Мы обеспечиваем идеальный микроклимат для вашего дома и офиса с гарантией качества на все работы.",
    img: "https://images.unsplash.com/photo-1631545806609-35d4ae440ade?w=800&q=80",
    id: "conditioners",
  },
  {
    num: "02",
    title1: "Системы Отопления,",
    title2: "Проектирование и Монтаж",
    desc: "Комплексные решения по отоплению: от проектирования до ввода в эксплуатацию. Тёплый пол, радиаторы, котельное оборудование — подберём оптимальное решение под ваш бюджет.",
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    id: "heating",
  },
  {
    num: "03",
    title1: "Вентиляция,",
    title2: "Приточная и Вытяжная",
    desc: "Проектируем и монтируем системы вентиляции любой сложности. Чистый воздух, правильный воздухообмен и комфортная атмосфера — залог здоровья вашей семьи и продуктивности бизнеса.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    id: "ventilation",
  },
  {
    num: "04",
    title1: "Сервисное Обслуживание,",
    title2: "Ремонт и Диагностика",
    desc: "Оперативный выезд мастера, диагностика, заправка фреоном, чистка и ремонт кондиционеров всех марок. Заключаем договоры на годовое обслуживание с выгодными условиями.",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    id: "service",
  },
];

const TESTIMONIALS = [
  {
    text: "AVC установили нам кондиционеры Midea в офис за один день. Работают тихо, охлаждают отлично. Рекомендуем!",
    name: "Алишер Каримов",
  },
  {
    text: "Заказывали систему отопления для частного дома. Ребята из AVC всё рассчитали, подобрали оборудование и смонтировали в срок. Довольны на 100%!",
    name: "Дилором Рахимова",
  },
  {
    text: "Уже 3 года обслуживаемся в AVC. Приезжают по первому звонку, цены адекватные, мастера знают своё дело.",
    name: "Бахтиёр Усманов",
  },
  {
    text: "Установили кондиционеры Welkin во все комнаты. Качество на высоте, а цена приятно удивила. Спасибо AVC!",
    name: "Нигора Хасанова",
  },
];

const BRANDS = ["Midea", "Welkin", "Shivaki", "Daikin", "Gree", "Haier", "Samsung", "LG"];

const WHY_US = [
  {
    title: "Быстро и Надёжно",
    desc: "Выезд мастера в день обращения. Монтаж за 1 день. Гарантия на все работы до 3 лет.",
  },
  {
    title: "Только Оригинал",
    desc: "Работаем напрямую с производителями. Вся техника с официальной гарантией и сертификатами.",
  },
  {
    title: "100% Гарантия",
    desc: "Если что-то пойдёт не так — устраним бесплатно. Ваше спокойствие — наш приоритет.",
  },
];

/* ─────────── COMPONENTS ─────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(10,22,40,0.85)] backdrop-blur-xl border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
        <a href="#" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="AVC Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden lg:flex items-center text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors duration-300"
        >
          ( Бесплатный Расчёт )
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-[5px] p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-[2px] bg-white transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`w-6 h-[2px] bg-white transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[2px] bg-white transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-[rgba(10,22,40,0.95)] backdrop-blur-xl`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-lg font-semibold text-[var(--color-accent)]"
          >
            ( Бесплатный Расчёт )
          </a>
        </div>
      </div>
    </nav>
  );
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1f35] to-[#071220]" />
      {/* Decorative orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,200,150,0.08)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,150,200,0.06)_0%,transparent_70%)] blur-3xl" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[var(--color-accent)] text-sm font-medium tracking-widest uppercase mb-4 animate-fadeInUp">
              Узбекистан
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6" style={{ animationDelay: "0.1s" }}>
              <span className="gradient-text">AVC</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 mb-6 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              Системы<br />Микроклимата
            </h2>
            <p className="text-[var(--color-text-muted)] text-base md:text-lg max-w-[520px] mb-8 animate-fadeInUp leading-relaxed" style={{ animationDelay: "0.3s" }}>
              Ведущий поставщик кондиционеров и климатического оборудования в Узбекистане. 
              Продаём и монтируем технику Midea, Welkin, Shivaki с официальной гарантией.
            </p>

            <div className="flex flex-wrap gap-4 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-sm hover:bg-[var(--color-accent-hover)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,150,0.4)] hover:-translate-y-0.5"
              >
                Бесплатный Расчёт
              </a>
              <a
                href="tel:+998901234567"
                className="inline-flex items-center px-8 py-4 rounded-full border border-white/15 text-white font-medium text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
              >
                +998 90 123-45-67
              </a>
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center">
            <div className="relative w-[480px] h-[480px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent border border-white/5 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1631545806609-35d4ae440ade?w=600&q=80"
                  alt="HVAC System"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent" />
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-5 py-3 glow-accent animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
                <p className="text-2xl font-bold text-[var(--color-accent)]">500+</p>
                <p className="text-xs text-[var(--color-text-muted)]">Объектов сдано</p>
              </div>
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-5 py-3 glow-accent animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
                <p className="text-2xl font-bold text-[var(--color-accent)]">10+</p>
                <p className="text-xs text-[var(--color-text-muted)]">Лет опыта</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
          <span className="text-xs text-[var(--color-text-muted)]">Листай вниз</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--color-accent)] to-transparent" />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref, visible } = useInView();
  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-surface)]" />
      {/* BG video overlay feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface)] via-transparent to-[var(--color-surface)]" />
      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        <p
          className={`text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          В AVC мы создаём идеальный микроклимат для вашего дома и бизнеса. 
          Наша команда объединяет многолетний опыт с фокусом на качество и 
          удовлетворённость клиента. В любое время года — мы обеспечим ваш комфорт.
        </p>
        <div
          className={`flex flex-wrap justify-center gap-4 mt-10 transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="tel:+998901234567"
            className="px-6 py-3 rounded-full border border-white/15 text-white text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
          >
            ( Подробнее )
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/15 text-white text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
          >
            ( Бесплатный Расчёт )
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const { ref, visible } = useInView();
  const isEven = index % 2 === 0;

  return (
    <div
      id={service.id}
      ref={ref}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-20 lg:py-28 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className={`${isEven ? "" : "lg:order-2"}`}>
        <span className="text-[var(--color-accent)] text-sm font-mono tracking-widest mb-4 block">{service.num}</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
          {service.title1}
        </h2>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/60 leading-tight mb-6">
          {service.title2}
        </h2>
        <p className="text-[var(--color-text-muted)] text-base leading-relaxed max-w-[500px] mb-8">
          {service.desc}
        </p>
        <a
          href="#contact"
          className="inline-flex text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors duration-300"
        >
          ( Заказать )
        </a>
      </div>
      <div className={`${isEven ? "" : "lg:order-1"} relative`}>
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
          <img
            src={service.img}
            alt={service.title1}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 to-transparent" />
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <section className="relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { ref, visible } = useInView();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="reviews" ref={ref} className="relative py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className={`flex flex-wrap gap-4 mb-4 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          <span className="text-sm text-[var(--color-accent)] font-mono">Google — 4.9/5</span>
          <span className="text-sm text-[var(--color-text-muted)]">•</span>
          <span className="text-sm text-[var(--color-accent)] font-mono">500+ клиентов</span>
        </div>

        <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Отзывы Наших
        </h2>
        <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white/50 mb-12 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Довольных Клиентов
        </h2>

        <div className={`glass rounded-3xl p-8 md:p-12 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex gap-4 mb-8">
            <button
              onClick={prev}
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              ( Назад )
            </button>
            <button
              onClick={next}
              className="text-sm text-white hover:text-[var(--color-accent)] transition-colors"
            >
              ( Далее )
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[0, 1].map((offset) => {
              const idx = (current + offset) % TESTIMONIALS.length;
              return (
                <div key={idx} className="bg-[var(--color-surface-light)] rounded-2xl p-6 md:p-8 border border-white/5">
                  <p className="text-white/80 text-base leading-relaxed mb-6">
                    &ldquo;{TESTIMONIALS[idx].text}&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-[var(--color-accent)]">
                    {TESTIMONIALS[idx].name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const { ref, visible } = useInView();
  return (
    <section ref={ref} className="relative py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
          <div>
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Почему Выбирают
            </h2>
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="gradient-text">AVC</span> для Систем
            </h2>
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white/50 leading-tight transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Микроклимата?
            </h2>

            <div className="mt-12 relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"
                alt="AVC Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent" />
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:pt-8">
            {WHY_US.map((item, i) => (
              <div
                key={i}
                className={`border-l-2 border-[var(--color-accent)]/30 hover:border-[var(--color-accent)] pl-6 py-4 transition-all duration-700 ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[var(--color-text-muted)] text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandsSection() {
  const { ref, visible } = useInView();
  return (
    <section id="brands" ref={ref} className="relative py-28 bg-[var(--color-surface)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          AVC — Официальный Партнёр
        </h2>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white/50 mb-16 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Лучших Мировых Брендов
        </h2>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 glass rounded-2xl px-10 py-6 flex items-center justify-center hover:glow-accent transition-all duration-300 group"
              >
                <span className="text-2xl md:text-3xl font-bold text-white/30 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { ref, visible } = useInView();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="relative py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2
              className={`text-5xl md:text-7xl lg:text-8xl font-black gradient-text leading-none mb-6 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Контакт
            </h2>
          </div>

          <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {submitted ? (
              <div className="glass rounded-3xl p-8 md:p-12 text-center glow-accent">
                <p className="text-xl font-semibold text-[var(--color-accent)] mb-2">Спасибо за заявку!</p>
                <p className="text-[var(--color-text-muted)]">Наш менеджер свяжется с вами в течение 10 минут.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-12 flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Ваше Имя"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-[var(--color-surface-light)] border border-white/5 text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]/50 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Номер Телефона"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-[var(--color-surface-light)] border border-white/5 text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-5 py-4 rounded-xl bg-[var(--color-surface-light)] border border-white/5 text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]/50 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-base hover:bg-[var(--color-accent-hover)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,150,0.4)] mt-2"
                >
                  Отправить Заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-20 bg-[var(--color-surface)] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          <div>
            <h3 className="text-sm font-bold text-white mb-4">Навигация</h3>
            <div className="flex flex-col gap-2">
              {["Главная", "О нас", "Отзывы", "Бренды", "Контакты"].map((l) => (
                <a key={l} href="#" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">Услуги</h3>
            <div className="flex flex-col gap-2">
              {["Кондиционеры", "Отопление", "Вентиляция", "Сервис"].map((l) => (
                <a key={l} href="#" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">Адрес</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              г. Ташкент, Узбекистан
            </p>
            <a href="#" className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors mt-2 inline-block">
              Открыть в Google Maps
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">Контакты</h3>
            <div className="flex flex-col gap-2">
              <a href="tel:+998901234567" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                +998 90 123-45-67
              </a>
              <a href="mailto:info@avc.uz" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                info@avc.uz
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">Соцсети</h3>
            <div className="flex flex-col gap-2">
              {["Telegram", "Instagram", "Facebook"].map((l) => (
                <a key={l} href="#" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">© AVC 2025. Все права защищены.</p>
          <p className="text-xs text-[var(--color-text-muted)]">
            Системы Микроклимата
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────── PAGE ─────────── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <WhyUsSection />
      <BrandsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
