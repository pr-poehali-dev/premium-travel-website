import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/16b8e5a4-0ef7-46d6-af29-2c42c1a1a1c9/files/d1453b76-fec0-4dcd-bbf3-a117f777fbd3.jpg";
const POOL_IMAGE = "https://cdn.poehali.dev/projects/16b8e5a4-0ef7-46d6-af29-2c42c1a1a1c9/files/1827bb5f-3276-482e-884c-26f98d6d26f0.jpg";

const destinations = [
  { name: "Турция", emoji: "🇹🇷", price: "от 45 000 ₽", nights: "7 ночей", tag: "Хит сезона", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80" },
  { name: "Египет", emoji: "🇪🇬", price: "от 38 000 ₽", nights: "9 ночей", tag: "Популярно", img: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80" },
  { name: "ОАЭ", emoji: "🇦🇪", price: "от 72 000 ₽", nights: "5 ночей", tag: "Премиум", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" },
  { name: "Таиланд", emoji: "🇹🇭", price: "от 65 000 ₽", nights: "10 ночей", tag: "Экзотика", img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80" },
  { name: "Мальдивы", emoji: "🇲🇻", price: "от 120 000 ₽", nights: "7 ночей", tag: "Люкс", img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80" },
  { name: "Европа", emoji: "🌍", price: "от 55 000 ₽", nights: "8 ночей", tag: "Культура", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80" },
];

const hotTours = [
  { country: "Турция, Анталия", hotel: "Rixos Premium Belek 5★", rating: "9.4", oldPrice: "89 000 ₽", newPrice: "54 000 ₽", discount: "39%", nights: "7 ночей", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { country: "Египет, Хургада", hotel: "Albatros Palace Resort 5★", rating: "9.1", oldPrice: "62 000 ₽", newPrice: "41 000 ₽", discount: "34%", nights: "10 ночей", img: "https://images.unsplash.com/photo-1582610116397-edb72c2e04c3?w=600&q=80" },
  { country: "ОАЭ, Дубай", hotel: "Jumeirah Beach Hotel 5★", rating: "9.6", oldPrice: "105 000 ₽", newPrice: "73 000 ₽", discount: "30%", nights: "5 ночей", img: "https://images.unsplash.com/photo-1533395427226-788cee21cc9e?w=600&q=80" },
];

const advantages = [
  { icon: "Award", title: "10+ лет опыта", desc: "Работаем с 2014 года, отправили тысячи туристов" },
  { icon: "Shield", title: "Официальные туроператоры", desc: "Только проверенные партнёры с лицензиями" },
  { icon: "BadgePercent", title: "Лучшие цены", desc: "Гарантия цены — найдёте дешевле, вернём разницу" },
  { icon: "Headphones", title: "Поддержка 24/7", desc: "На связи круглосуточно в любой точке мира" },
  { icon: "UserCheck", title: "Индивидуальный подбор", desc: "Персональный менеджер для каждого клиента" },
  { icon: "Users", title: "5 000+ клиентов", desc: "Довольных путешественников по всему миру" },
];

const reviews = [
  { name: "Анна Петрова", location: "Москва", tour: "Мальдивы, 2024", rating: 5, text: "Невероятный сервис! Менеджер подобрал нам идеальный отель с видом на лагуну. Всё было организовано безупречно — от трансфера до экскурсий. Уже планируем следующую поездку!" },
  { name: "Михаил Соколов", location: "Санкт-Петербург", tour: "ОАЭ, Дубай, 2024", rating: 5, text: "Обратились первый раз и остались в полном восторге. Цены значительно ниже, чем у других агентств. Отель превзошёл все ожидания. Однозначно рекомендую!" },
  { name: "Елена Новикова", location: "Казань", tour: "Таиланд, 2023", rating: 5, text: "Путешествовали семьёй с детьми. Всё продумано до мелочей: детское меню, анимация, безопасный пляж. Спасибо за такой незабываемый отдых!" },
];

const faqs = [
  { q: "Как забронировать тур?", a: "Оставьте заявку на сайте или позвоните нам. Менеджер свяжется с вами в течение 15 минут, подберёт подходящие варианты и проведёт по всем этапам бронирования." },
  { q: "Какие документы нужны для поездки?", a: "Для большинства направлений достаточно загранпаспорта. Мы заранее уточним все требования по вашему направлению и поможем оформить визу при необходимости." },
  { q: "Можно ли оформить рассрочку?", a: "Да! Мы предлагаем рассрочку на 3, 6 и 12 месяцев без процентов через наших банковских партнёров. Первоначальный взнос от 20%." },
  { q: "Как происходит оплата?", a: "Принимаем наличные, банковские карты, переводы. Возможна оплата онлайн на сайте. Выдаём все необходимые документы и чеки." },
  { q: "Что входит в стоимость тура?", a: "Стандартный пакет включает: перелёт туда и обратно, трансфер из аэропорта, проживание в отеле и питание согласно программе тура, медицинскую страховку." },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollReveal();
  return <div ref={ref} className={`section-reveal ${className}`}>{children}</div>;
}

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchForm, setSearchForm] = useState({ country: "", date: "", tourists: "2", budget: "" });
  const [contactForm, setContactForm] = useState({ name: "", phone: "", email: "", direction: "", budget: "", comment: "" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-body" style={{ color: "var(--charcoal)", background: "var(--cream)" }}>

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-xl" : ""}`}
        style={{ background: scrolled ? "var(--navy)" : "transparent" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--gold)" }}>
              <Icon name="Globe" size={20} style={{ color: "var(--navy)" }} />
            </div>
            <div>
              <div className="font-display font-bold text-xl text-white leading-none">Лазурный Путь</div>
              <div className="text-xs text-white/60 font-body tracking-widest uppercase">Travel Agency</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["Направления", "Горящие туры", "О нас", "Отзывы", "Контакты"].map((item, i) => {
              const ids = ["directions", "hot", "about", "reviews", "contacts"];
              return (
                <button key={item} onClick={() => scrollTo(ids[i])}
                  className="text-white/80 hover:text-white transition-colors text-sm font-body tracking-wide">
                  {item}
                </button>
              );
            })}
          </nav>

          <button onClick={() => scrollTo("contacts")}
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Подобрать тур
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Путешествия" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "var(--gold)" }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-fade-in"
            style={{ background: "rgba(244,185,66,0.2)", border: "1px solid var(--gold)" }}>
            <Icon name="Sparkles" size={14} style={{ color: "var(--gold)" }} />
            <span className="text-sm font-body" style={{ color: "var(--gold)" }}>Более 5000 довольных клиентов</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-light text-white leading-tight mb-6 animate-fade-in delay-100">
            Откройте мир<br />
            <em className="gold-shimmer not-italic font-semibold">ярких путешествий</em>
          </h1>

          <p className="text-lg md:text-xl text-white/80 font-body mb-10 max-w-2xl mx-auto animate-fade-in delay-200">
            Подбираем идеальные туры по лучшим ценам с поддержкой на каждом этапе вашей поездки
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-14 animate-fade-in delay-300">
            <button onClick={() => scrollTo("contacts")}
              className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl"
              style={{ background: "var(--gold)", color: "var(--navy)" }}>
              Подобрать тур
            </button>
            <button onClick={() => scrollTo("contacts")}
              className="px-8 py-4 rounded-full font-semibold text-lg text-white transition-all duration-200 hover:scale-105"
              style={{ border: "2px solid rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.1)" }}>
              Консультация
            </button>
          </div>

          {/* Search Form */}
          <div className="animate-fade-in delay-400 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto"
            style={{ background: "rgba(15,30,60,0.7)", backdropFilter: "blur(20px)", border: "1px solid rgba(244,185,66,0.2)" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-body tracking-widest uppercase" style={{ color: "var(--gold)" }}>Страна</label>
                <select value={searchForm.country} onChange={e => setSearchForm({ ...searchForm, country: e.target.value })}
                  className="bg-white/10 text-white border border-white/20 rounded-xl px-4 py-3 text-sm font-body focus:outline-none">
                  <option value="" className="text-black">Выбрать</option>
                  {["Турция","Египет","ОАЭ","Таиланд","Мальдивы","Европа"].map(c => (
                    <option key={c} value={c} className="text-black">{c}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-body tracking-widest uppercase" style={{ color: "var(--gold)" }}>Дата вылета</label>
                <input type="date" value={searchForm.date} onChange={e => setSearchForm({ ...searchForm, date: e.target.value })}
                  className="bg-white/10 text-white border border-white/20 rounded-xl px-4 py-3 text-sm font-body focus:outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-body tracking-widest uppercase" style={{ color: "var(--gold)" }}>Туристы</label>
                <select value={searchForm.tourists} onChange={e => setSearchForm({ ...searchForm, tourists: e.target.value })}
                  className="bg-white/10 text-white border border-white/20 rounded-xl px-4 py-3 text-sm font-body focus:outline-none">
                  {["1","2","3","4","5+"].map(n => <option key={n} value={n} className="text-black">{n} {n === "1" ? "турист" : "туриста"}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-body tracking-widest uppercase" style={{ color: "var(--gold)" }}>Бюджет</label>
                <select value={searchForm.budget} onChange={e => setSearchForm({ ...searchForm, budget: e.target.value })}
                  className="bg-white/10 text-white border border-white/20 rounded-xl px-4 py-3 text-sm font-body focus:outline-none">
                  <option value="" className="text-black">Любой</option>
                  <option value="30-60" className="text-black">30 000 — 60 000 ₽</option>
                  <option value="60-100" className="text-black">60 000 — 100 000 ₽</option>
                  <option value="100+" className="text-black">от 100 000 ₽</option>
                </select>
              </div>
            </div>
            <button onClick={() => scrollTo("contacts")} className="mt-5 w-full py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90"
              style={{ background: "var(--gold)", color: "var(--navy)" }}>
              <span className="flex items-center justify-center gap-2">
                <Icon name="Search" size={18} />
                Найти туры
              </span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={28} className="text-white/60" />
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "5 000+", label: "Довольных клиентов" },
            { num: "120+", label: "Направлений" },
            { num: "10 лет", label: "На рынке туризма" },
            { num: "24/7", label: "Поддержка" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-4xl font-semibold mb-1" style={{ color: "var(--gold)" }}>{s.num}</div>
              <div className="text-white/60 text-sm font-body">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DIRECTIONS */}
      <section id="directions" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <RevealSection className="text-center mb-16">
            <span className="text-sm font-body tracking-widest uppercase mb-4 block" style={{ color: "var(--gold)" }}>Куда полетим?</span>
            <h2 className="font-display text-5xl font-light" style={{ color: "var(--navy)" }}>
              Популярные <em className="not-italic font-semibold">направления</em>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto font-body">Тщательно отобранные направления с лучшими отелями и гарантированным качеством</p>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, i) => (
              <RevealSection key={dest.name} className={`delay-${(i + 1) * 100}`}>
                <div className="tour-card rounded-2xl overflow-hidden cursor-pointer group relative h-72">
                  <img src={dest.img} alt={dest.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,35,60,0.9) 0%, rgba(10,35,60,0.2) 60%, transparent 100%)" }} />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold font-body" style={{ background: "var(--gold)", color: "var(--navy)" }}>
                      {dest.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{dest.emoji}</span>
                      <h3 className="font-display text-2xl font-semibold text-white">{dest.name}</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-sm font-body">{dest.nights}</span>
                      <span className="font-semibold font-body" style={{ color: "var(--gold)" }}>{dest.price}</span>
                    </div>
                    <button className="mt-3 w-full py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={() => scrollTo("contacts")}
                      style={{ background: "var(--gold)", color: "var(--navy)" }}>
                      Подробнее
                    </button>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* HOT TOURS */}
      <section id="hot" className="py-24 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto">
          <RevealSection className="text-center mb-16">
            <span className="text-sm font-body tracking-widest uppercase mb-4 block" style={{ color: "var(--gold)" }}>Спешите — мест мало!</span>
            <h2 className="font-display text-5xl font-light text-white">
              Горящие <em className="not-italic font-semibold" style={{ color: "var(--gold)" }}>туры</em>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto font-body">Скидки до 40% на ближайшие вылеты. Обновляются ежедневно</p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hotTours.map((tour, i) => (
              <RevealSection key={i} className={`delay-${(i + 1) * 200}`}>
                <div className="tour-card rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(244,185,66,0.2)" }}>
                  <div className="relative h-52">
                    <img src={tour.img} alt={tour.country} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full text-sm font-bold font-body"
                        style={{ background: "#ef4444", color: "white" }}>
                        −{tour.discount}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full"
                      style={{ background: "rgba(0,0,0,0.6)" }}>
                      <Icon name="Star" size={12} style={{ color: "var(--gold)" }} />
                      <span className="text-white text-xs font-semibold font-body">{tour.rating}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-white/50 text-xs font-body mb-1">{tour.country} · {tour.nights}</div>
                    <h3 className="font-display text-lg text-white mb-3">{tour.hotel}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-white/40 line-through text-sm font-body mr-2">{tour.oldPrice}</span>
                        <span className="font-bold text-xl font-body" style={{ color: "var(--gold)" }}>{tour.newPrice}</span>
                      </div>
                    </div>
                    <button onClick={() => scrollTo("contacts")}
                      className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 font-body"
                      style={{ background: "var(--gold)", color: "var(--navy)" }}>
                      Забронировать
                    </button>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / ADVANTAGES */}
      <section id="about" className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <RevealSection>
              <span className="text-sm font-body tracking-widest uppercase mb-4 block" style={{ color: "var(--gold)" }}>О нас</span>
              <h2 className="font-display text-5xl font-light leading-tight mb-6" style={{ color: "var(--navy)" }}>
                Доверяйте профессионалам<br />
                <em className="not-italic font-semibold">с 10-летним опытом</em>
              </h2>
              <p className="text-gray-500 font-body leading-relaxed mb-6">
                С 2014 года мы помогаем людям открывать мир. За эти годы мы стали не просто турагентством — мы стали личными travel-советниками для тысяч семей и путешественников.
              </p>
              <p className="text-gray-500 font-body leading-relaxed">
                Каждый тур — это история, которую мы создаём вместе с вами. Наши менеджеры — сами заядлые путешественники, которые знают направления не по брошюрам, а по личному опыту.
              </p>
            </RevealSection>
            <RevealSection>
              <div className="relative rounded-3xl overflow-hidden h-96 shadow-2xl">
                <img src={POOL_IMAGE} alt="Отдых" className="w-full h-full object-cover" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl p-4"
                  style={{ background: "rgba(15,76,129,0.85)", backdropFilter: "blur(10px)" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "var(--gold)" }}>
                      <Icon name="Phone" size={20} style={{ color: "var(--navy)" }} />
                    </div>
                    <div>
                      <div className="text-white font-semibold font-body">Позвоните нам</div>
                      <div className="font-display text-xl font-semibold" style={{ color: "var(--gold)" }}>+7 (800) 000-00-00</div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <RevealSection key={i} className={`delay-${(i % 3 + 1) * 100}`}>
                <div className="p-6 rounded-2xl bg-white transition-all duration-300 hover:shadow-xl group border border-transparent hover:border-yellow-200">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(15,76,129,0.1)" }}>
                    <Icon name={adv.icon} fallback="Star" size={22} style={{ color: "var(--navy)" }} />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2" style={{ color: "var(--navy)" }}>{adv.title}</h3>
                  <p className="text-gray-500 text-sm font-body leading-relaxed">{adv.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto">
          <RevealSection className="text-center mb-16">
            <span className="text-sm font-body tracking-widest uppercase mb-4 block" style={{ color: "var(--gold)" }}>Отзывы</span>
            <h2 className="font-display text-5xl font-light text-white">
              Что говорят наши <em className="not-italic font-semibold" style={{ color: "var(--gold)" }}>клиенты</em>
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <RevealSection key={i} className={`delay-${(i + 1) * 150}`}>
                <div className="p-6 rounded-2xl h-full flex flex-col"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(244,185,66,0.15)" }}>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Icon key={j} name="Star" size={14} style={{ color: "var(--gold)" }} />
                    ))}
                  </div>
                  <p className="text-white/70 font-body text-sm leading-relaxed mb-5 flex-1 italic">«{review.text}»</p>
                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-display text-lg font-semibold"
                      style={{ background: "var(--gold)", color: "var(--navy)" }}>
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm font-body">{review.name}</div>
                      <div className="text-white/40 text-xs font-body">{review.location} · {review.tour}</div>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contacts" className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <RevealSection>
              <span className="text-sm font-body tracking-widest uppercase mb-4 block" style={{ color: "var(--gold)" }}>Связаться с нами</span>
              <h2 className="font-display text-5xl font-light leading-tight mb-6" style={{ color: "var(--navy)" }}>
                Получите лучшие<br />
                <em className="not-italic font-semibold">предложения</em>
              </h2>
              <p className="text-gray-500 font-body mb-8">Оставьте заявку и мы свяжемся с вами в течение 15 минут с персональными предложениями</p>

              <div className="space-y-5">
                {[
                  { icon: "Phone", label: "+7 (800) 000-00-00", sub: "Бесплатно по России" },
                  { icon: "Mail", label: "info@lazurnyput.ru", sub: "Ответим в течение часа" },
                  { icon: "MessageCircle", label: "WhatsApp / Telegram", sub: "@lazurnyput" },
                  { icon: "MapPin", label: "ул. Тверская, 15, офис 301", sub: "Москва, пн–пт 9:00–20:00" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(15,76,129,0.1)" }}>
                      <Icon name={c.icon} fallback="Phone" size={20} style={{ color: "var(--navy)" }} />
                    </div>
                    <div>
                      <div className="font-semibold font-body" style={{ color: "var(--navy)" }}>{c.label}</div>
                      <div className="text-gray-400 text-sm font-body">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>

            <RevealSection>
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold font-body text-gray-500 uppercase tracking-wide">Имя *</label>
                    <input value={contactForm.name} onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Ваше имя"
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-yellow-400" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold font-body text-gray-500 uppercase tracking-wide">Телефон *</label>
                    <input value={contactForm.phone} onChange={e => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 mb-4">
                  <label className="text-xs font-semibold font-body text-gray-500 uppercase tracking-wide">Email</label>
                  <input value={contactForm.email} onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="example@mail.ru"
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold font-body text-gray-500 uppercase tracking-wide">Направление</label>
                    <select value={contactForm.direction} onChange={e => setContactForm({ ...contactForm, direction: e.target.value })}
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none">
                      <option value="">Не выбрано</option>
                      {["Турция","Египет","ОАЭ","Таиланд","Мальдивы","Европа"].map(c => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold font-body text-gray-500 uppercase tracking-wide">Бюджет</label>
                    <select value={contactForm.budget} onChange={e => setContactForm({ ...contactForm, budget: e.target.value })}
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none">
                      <option value="">Любой</option>
                      <option>до 60 000 ₽</option>
                      <option>60 000 – 100 000 ₽</option>
                      <option>от 100 000 ₽</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 mb-6">
                  <label className="text-xs font-semibold font-body text-gray-500 uppercase tracking-wide">Комментарий</label>
                  <textarea value={contactForm.comment} onChange={e => setContactForm({ ...contactForm, comment: e.target.value })}
                    placeholder="Ваши пожелания по туру..."
                    rows={3}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none resize-none" />
                </div>
                <button className="w-full py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 hover:shadow-lg font-body"
                  style={{ background: "var(--navy)", color: "white" }}>
                  <span className="flex items-center justify-center gap-2">
                    <Icon name="Send" size={18} />
                    Получить лучшие предложения
                  </span>
                </button>
                <p className="text-center text-gray-400 text-xs font-body mt-3">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6" style={{ background: "white" }}>
        <div className="max-w-3xl mx-auto">
          <RevealSection className="text-center mb-16">
            <span className="text-sm font-body tracking-widest uppercase mb-4 block" style={{ color: "var(--gold)" }}>FAQ</span>
            <h2 className="font-display text-5xl font-light" style={{ color: "var(--navy)" }}>
              Частые <em className="not-italic font-semibold">вопросы</em>
            </h2>
          </RevealSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <RevealSection key={i}>
                <div className="rounded-2xl overflow-hidden border transition-all duration-200"
                  style={{ borderColor: openFaq === i ? "var(--gold)" : "#e5e7eb" }}>
                  <button className="w-full px-6 py-5 flex items-center justify-between text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="font-semibold font-body" style={{ color: "var(--navy)" }}>{faq.q}</span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-colors duration-200"
                      style={{ background: openFaq === i ? "var(--gold)" : "rgba(15,76,129,0.1)" }}>
                      <Icon name={openFaq === i ? "Minus" : "Plus"} size={16} style={{ color: "var(--navy)" }} />
                    </div>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-500 font-body text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--navy-dark)", borderTop: "1px solid rgba(244,185,66,0.2)" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--gold)" }}>
                  <Icon name="Globe" size={20} style={{ color: "var(--navy)" }} />
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-white">Лазурный Путь</div>
                  <div className="text-xs text-white/40 tracking-widest uppercase font-body">Travel Agency</div>
                </div>
              </div>
              <p className="text-white/50 text-sm font-body leading-relaxed max-w-xs">
                Создаём незабываемые путешествия с 2014 года. Доверие тысяч клиентов — наша главная награда.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-body tracking-wide uppercase text-xs" style={{ color: "var(--gold)" }}>Направления</h4>
              <ul className="space-y-2 text-white/50 text-sm font-body">
                {["Турция","Египет","ОАЭ","Таиланд","Мальдивы"].map(d => (
                  <li key={d}><button className="hover:text-white transition-colors" onClick={() => scrollTo("directions")}>{d}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-body tracking-wide uppercase text-xs" style={{ color: "var(--gold)" }}>Контакты</h4>
              <ul className="space-y-2 text-white/50 text-sm font-body">
                <li>+7 (800) 000-00-00</li>
                <li>info@lazurnyput.ru</li>
                <li>WhatsApp / Telegram</li>
                <li>Тверская, 15, Москва</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="text-white/30 text-xs font-body">© 2024 Лазурный Путь. Все права защищены.</p>
            <div className="flex gap-6 text-xs text-white/30 font-body">
              <button className="hover:text-white/60 transition-colors">Политика конфиденциальности</button>
              <button className="hover:text-white/60 transition-colors">Пользовательское соглашение</button>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/78000000000" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-50 transition-all duration-200 hover:scale-110"
        style={{ background: "#25D366" }}>
        <Icon name="MessageCircle" size={26} className="text-white" />
      </a>
    </div>
  );
}