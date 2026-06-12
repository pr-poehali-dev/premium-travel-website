import { useEffect, useRef } from "react";

export function useScrollReveal() {
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

export function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollReveal();
  return <div ref={ref} className={`section-reveal ${className}`}>{children}</div>;
}

export const HERO_IMAGE = "https://cdn.poehali.dev/projects/16b8e5a4-0ef7-46d6-af29-2c42c1a1a1c9/files/d1453b76-fec0-4dcd-bbf3-a117f777fbd3.jpg";
export const POOL_IMAGE = "https://cdn.poehali.dev/projects/16b8e5a4-0ef7-46d6-af29-2c42c1a1a1c9/files/1827bb5f-3276-482e-884c-26f98d6d26f0.jpg";

export const destinations = [
  { name: "Турция", emoji: "🇹🇷", price: "от 45 000 ₽", nights: "7 ночей", tag: "Хит сезона", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80" },
  { name: "Египет", emoji: "🇪🇬", price: "от 38 000 ₽", nights: "9 ночей", tag: "Популярно", img: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80" },
  { name: "ОАЭ", emoji: "🇦🇪", price: "от 72 000 ₽", nights: "5 ночей", tag: "Премиум", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" },
  { name: "Таиланд", emoji: "🇹🇭", price: "от 65 000 ₽", nights: "10 ночей", tag: "Экзотика", img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80" },
  { name: "Мальдивы", emoji: "🇲🇻", price: "от 120 000 ₽", nights: "7 ночей", tag: "Люкс", img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80" },
  { name: "Европа", emoji: "🌍", price: "от 55 000 ₽", nights: "8 ночей", tag: "Культура", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80" },
];

export const hotTours = [
  { country: "Турция, Анталия", hotel: "Rixos Premium Belek 5★", rating: "9.4", oldPrice: "89 000 ₽", newPrice: "54 000 ₽", discount: "39%", nights: "7 ночей", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { country: "Египет, Хургада", hotel: "Albatros Palace Resort 5★", rating: "9.1", oldPrice: "62 000 ₽", newPrice: "41 000 ₽", discount: "34%", nights: "10 ночей", img: "https://images.unsplash.com/photo-1582610116397-edb72c2e04c3?w=600&q=80" },
  { country: "ОАЭ, Дубай", hotel: "Jumeirah Beach Hotel 5★", rating: "9.6", oldPrice: "105 000 ₽", newPrice: "73 000 ₽", discount: "30%", nights: "5 ночей", img: "https://images.unsplash.com/photo-1533395427226-788cee21cc9e?w=600&q=80" },
];

export const advantages = [
  { icon: "Award", title: "10+ лет опыта", desc: "Работаем с 2014 года, отправили тысячи туристов" },
  { icon: "Shield", title: "Официальные туроператоры", desc: "Только проверенные партнёры с лицензиями" },
  { icon: "BadgePercent", title: "Лучшие цены", desc: "Гарантия цены — найдёте дешевле, вернём разницу" },
  { icon: "Headphones", title: "Поддержка 24/7", desc: "На связи круглосуточно в любой точке мира" },
  { icon: "UserCheck", title: "Индивидуальный подбор", desc: "Персональный менеджер для каждого клиента" },
  { icon: "Users", title: "5 000+ клиентов", desc: "Довольных путешественников по всему миру" },
];

export const reviews = [
  { name: "Анна Петрова", location: "Москва", tour: "Мальдивы, 2024", rating: 5, text: "Невероятный сервис! Менеджер подобрал нам идеальный отель с видом на лагуну. Всё было организовано безупречно — от трансфера до экскурсий. Уже планируем следующую поездку!" },
  { name: "Михаил Соколов", location: "Санкт-Петербург", tour: "ОАЭ, Дубай, 2024", rating: 5, text: "Обратились первый раз и остались в полном восторге. Цены значительно ниже, чем у других агентств. Отель превзошёл все ожидания. Однозначно рекомендую!" },
  { name: "Елена Новикова", location: "Казань", tour: "Таиланд, 2023", rating: 5, text: "Путешествовали семьёй с детьми. Всё продумано до мелочей: детское меню, анимация, безопасный пляж. Спасибо за такой незабываемый отдых!" },
];

export const faqs = [
  { q: "Как забронировать тур?", a: "Оставьте заявку на сайте или позвоните нам. Менеджер свяжется с вами в течение 15 минут, подберёт подходящие варианты и проведёт по всем этапам бронирования." },
  { q: "Какие документы нужны для поездки?", a: "Для большинства направлений достаточно загранпаспорта. Мы заранее уточним все требования по вашему направлению и поможем оформить визу при необходимости." },
  { q: "Можно ли оформить рассрочку?", a: "Да! Мы предлагаем рассрочку на 3, 6 и 12 месяцев без процентов через наших банковских партнёров. Первоначальный взнос от 20%." },
  { q: "Как происходит оплата?", a: "Принимаем наличные, банковские карты, переводы. Возможна оплата онлайн на сайте. Выдаём все необходимые документы и чеки." },
  { q: "Что входит в стоимость тура?", a: "Стандартный пакет включает: перелёт туда и обратно, трансфер из аэропорта, проживание в отеле и питание согласно программе тура, медицинскую страховку." },
];
