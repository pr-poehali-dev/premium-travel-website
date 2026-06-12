import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { HERO_IMAGE } from "./utils";

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  const [scrolled, setScrolled] = useState(false);
  const [searchForm, setSearchForm] = useState({ country: "", date: "", tourists: "2", budget: "" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
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
    </>
  );
}
