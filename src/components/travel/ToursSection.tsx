import Icon from "@/components/ui/icon";
import { RevealSection, destinations, hotTours } from "./utils";

interface ToursSectionProps {
  scrollTo: (id: string) => void;
}

export default function ToursSection({ scrollTo }: ToursSectionProps) {
  return (
    <>
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
    </>
  );
}
