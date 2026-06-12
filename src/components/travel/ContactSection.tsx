import { useState } from "react";
import Icon from "@/components/ui/icon";
import { RevealSection, faqs } from "./utils";

interface ContactSectionProps {
  scrollTo: (id: string) => void;
}

export default function ContactSection({ scrollTo }: ContactSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({ name: "", phone: "", email: "", direction: "", budget: "", comment: "" });

  return (
    <>
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
    </>
  );
}
