import Icon from "@/components/ui/icon";
import { RevealSection, POOL_IMAGE, advantages, reviews } from "./utils";

export default function AboutSection() {
  return (
    <>
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
    </>
  );
}
