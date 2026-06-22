import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/f207f703-c18a-40a7-88bf-dc18f47fe141/files/7bca6b0f-6fa7-4f6d-bef7-495b26ba346d.jpg';
const PRODUCT_IMG =
  'https://cdn.poehali.dev/projects/f207f703-c18a-40a7-88bf-dc18f47fe141/files/b98ad6e0-acf2-4b7f-b626-1f055054bb7c.jpg';
const ATELIER_IMG =
  'https://cdn.poehali.dev/projects/f207f703-c18a-40a7-88bf-dc18f47fe141/files/b9e98151-7bf8-4193-8805-98e7be74e3e0.jpg';

const seasons = ['Все', 'Осенняя', 'Зимняя', 'Весенняя'] as const;
const colors = ['Все', 'Соболь', 'Норка', 'Шиншилла', 'Лиса'] as const;

type Product = {
  id: number;
  name: string;
  season: string;
  color: string;
  size: string;
  price: number;
  composition: string;
};

const products: Product[] = [
  { id: 1, name: 'Пальто Milano', season: 'Зимняя', color: 'Соболь', size: '42–50', price: 1290000, composition: '100% баргузинский соболь' },
  { id: 2, name: 'Шуба Firenze', season: 'Зимняя', color: 'Норка', size: '40–52', price: 690000, composition: '100% норка Black Glama' },
  { id: 3, name: 'Жакет Roma', season: 'Осенняя', color: 'Шиншилла', size: '42–48', price: 980000, composition: '100% шиншилла' },
  { id: 4, name: 'Накидка Venezia', season: 'Весенняя', color: 'Лиса', size: '44–50', price: 420000, composition: '100% финская лиса' },
  { id: 5, name: 'Пальто Torino', season: 'Осенняя', color: 'Норка', size: '42–54', price: 750000, composition: '100% норка с кашемиром' },
  { id: 6, name: 'Болеро Napoli', season: 'Весенняя', color: 'Соболь', size: '40–48', price: 560000, composition: '100% соболь' },
];

const fmt = (n: number) => n.toLocaleString('ru-RU') + ' ₽';

const collections = [
  { name: 'Осенняя', desc: 'Лёгкие меха и приглушённые оттенки для золотого сезона.', icon: 'Leaf' },
  { name: 'Зимняя', desc: 'Объёмные пальто из соболя и норки — тепло и роскошь.', icon: 'Snowflake' },
  { name: 'Весенняя', desc: 'Воздушные накидки и болеро для тёплых вечеров.', icon: 'Flower2' },
];

const advantages = [
  { icon: 'History', title: 'Более 30 лет', desc: 'Итальянский модный дом с безупречной репутацией с 1992 года.' },
  { icon: 'Gem', title: 'Лучшее сырьё', desc: 'Закупаем мех только высшей категории на международных аукционах.' },
  { icon: 'PenTool', title: 'Авторский дизайн', desc: 'Каждая модель создаётся вручную дизайнерами в нашем ателье.' },
  { icon: 'Sparkles', title: 'Эксклюзивность', desc: 'Ограниченные коллекции — вы не встретите такую вещь на других.' },
];

export default function Index() {
  const [season, setSeason] = useState<string>('Все');
  const [color, setColor] = useState<string>('Все');
  const [maxPrice, setMaxPrice] = useState<number>(1300000);

  const filtered = products.filter(
    (p) =>
      (season === 'Все' || p.season === season) &&
      (color === 'Все' || p.color === color) &&
      p.price <= maxPrice,
  );

  return (
    <div className="min-h-screen bg-background text-foreground grain">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-20 px-4 md:px-8">
          <a href="#top" className="font-display text-3xl tracking-[0.25em] text-chocolate">
            BRASCHI
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-luxe uppercase text-muted-foreground">
            <a href="#catalog" className="hover:text-chocolate transition-colors">Каталог</a>
            <a href="#brand" className="hover:text-chocolate transition-colors">Бренд</a>
            <a href="#contacts" className="hover:text-chocolate transition-colors">Контакты</a>
          </nav>
          <a href="#contacts">
            <Button className="bg-chocolate text-cream hover:bg-chocolate/90 rounded-none tracking-wider uppercase text-xs px-6">
              Записаться
            </Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
        <img src={HERO_IMG} alt="BRASCHI" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-chocolate/20 to-transparent" />
        <div className="relative container px-4 md:px-8 pb-24 md:pb-32">
          <p className="text-cream/80 tracking-luxe uppercase text-sm mb-6 animate-fade-up">
            Эксклюзивный итальянский бренд
          </p>
          <h1 className="font-display text-cream text-6xl md:text-8xl lg:text-9xl leading-[0.9] max-w-4xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Искусство меха<br />в каждой детали
          </h1>
          <p className="text-cream/85 text-lg md:text-xl max-w-xl mt-8 font-serif italic animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Более 30 лет создаём изделия, в которых роскошь становится наследием.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href="#catalog">
              <Button size="lg" className="bg-gold text-chocolate hover:bg-gold/90 rounded-none tracking-luxe uppercase text-xs h-14 px-10">
                Смотреть коллекцию
              </Button>
            </a>
            <a href="#brand">
              <Button size="lg" variant="outline" className="border-cream/60 bg-transparent text-cream hover:bg-cream hover:text-chocolate rounded-none tracking-luxe uppercase text-xs h-14 px-10">
                О бренде
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* COLLECTIONS / CAROUSEL feel */}
      <section className="py-24 md:py-32 container px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-gold tracking-luxe uppercase text-sm mb-4">Коллекции сезона</p>
          <h2 className="font-display text-5xl md:text-7xl text-chocolate">Главные модели</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((c, i) => (
            <div key={c.name} className="group animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img src={PRODUCT_IMG} alt={c.name} className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-chocolate/0 group-hover:bg-chocolate/20 transition-colors" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-cream/90 flex items-center justify-center text-chocolate">
                  <Icon name={c.icon} size={22} />
                </div>
              </div>
              <h3 className="font-display text-3xl text-chocolate mt-6">{c.name} коллекция</h3>
              <p className="text-muted-foreground mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 md:py-32 bg-secondary/40 border-y border-border">
        <div className="container px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-gold tracking-luxe uppercase text-sm mb-4">Каталог</p>
              <h2 className="font-display text-5xl md:text-7xl text-chocolate">Премиальный мех</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Подберите изделие по сезону, меху и бюджету. Все цены — за эксклюзивные модели ручной работы.
            </p>
          </div>

          {/* FILTERS */}
          <div className="bg-card border border-border p-6 md:p-8 mb-12 grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs tracking-luxe uppercase text-muted-foreground mb-3">Сезон</p>
              <div className="flex flex-wrap gap-2">
                {seasons.map((s) => (
                  <button key={s} onClick={() => setSeason(s)} className={`px-4 py-2 text-sm border transition-colors ${season === s ? 'bg-chocolate text-cream border-chocolate' : 'border-border hover:border-chocolate'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs tracking-luxe uppercase text-muted-foreground mb-3">Мех</p>
              <div className="flex flex-wrap gap-2">
                {colors.map((c) => (
                  <button key={c} onClick={() => setColor(c)} className={`px-4 py-2 text-sm border transition-colors ${color === c ? 'bg-chocolate text-cream border-chocolate' : 'border-border hover:border-chocolate'}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs tracking-luxe uppercase text-muted-foreground mb-3">
                Цена до {fmt(maxPrice)}
              </p>
              <input
                type="range"
                min={400000}
                max={1300000}
                step={10000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[hsl(var(--gold))]"
              />
            </div>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <Dialog key={p.id}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer text-left">
                    <div className="relative overflow-hidden bg-cream">
                      <img src={PRODUCT_IMG} alt={p.name} className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" />
                      <span className="absolute top-3 right-3 bg-cream/90 text-chocolate text-xs px-3 py-1 tracking-wide uppercase">{p.season}</span>
                    </div>
                    <div className="flex justify-between items-baseline mt-5">
                      <h3 className="font-display text-2xl text-chocolate">{p.name}</h3>
                      <span className="text-gold font-serif text-xl">{fmt(p.price)}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">{p.color} · размеры {p.size}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl bg-card border-border p-0 overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <img src={PRODUCT_IMG} alt={p.name} className="w-full h-full object-cover aspect-[3/4]" />
                    <div className="p-8 flex flex-col">
                      <span className="text-gold tracking-luxe uppercase text-xs mb-2">{p.season} коллекция</span>
                      <h3 className="font-display text-4xl text-chocolate mb-4">{p.name}</h3>
                      <div className="space-y-3 text-sm border-t border-border pt-4">
                        <div className="flex justify-between"><span className="text-muted-foreground">Состав</span><span>{p.composition}</span></div>
                        <div className="flex justify-between"><span className="text-muted-foreground">Размеры</span><span>{p.size}</span></div>
                        <div className="flex justify-between"><span className="text-muted-foreground">Мех</span><span>{p.color}</span></div>
                      </div>
                      <div className="mt-auto pt-6">
                        <p className="font-serif text-3xl text-gold mb-4">{fmt(p.price)}</p>
                        <Button className="w-full bg-chocolate text-cream hover:bg-chocolate/90 rounded-none tracking-luxe uppercase text-xs h-12">
                          Записаться на примерку
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">По выбранным фильтрам ничего не найдено.</p>
          )}
        </div>
      </section>

      {/* BRAND STORY */}
      <section id="brand" className="py-24 md:py-32 container px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={ATELIER_IMG} alt="Ателье BRASCHI" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-gold text-chocolate p-8 hidden md:block">
              <p className="font-display text-6xl leading-none">30+</p>
              <p className="tracking-luxe uppercase text-xs mt-2">лет мастерства</p>
            </div>
          </div>
          <div>
            <p className="text-gold tracking-luxe uppercase text-sm mb-4">История бренда</p>
            <h2 className="font-display text-5xl md:text-6xl text-chocolate leading-tight mb-8">
              Наследие, рождённое в Италии
            </h2>
            <p className="text-muted-foreground text-lg mb-6 font-serif italic">
              Более тридцати лет дом BRASCHI создаёт меховые изделия, в которых традиции европейского ремесла встречаются с современным дизайном.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Icon name="Truck" size={24} className="text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-2xl text-chocolate">Закупка сырья</h4>
                  <p className="text-muted-foreground">Отбираем мех высшей категории на международных аукционах.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="PenTool" size={24} className="text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-2xl text-chocolate">Работа дизайнеров</h4>
                  <p className="text-muted-foreground">Каждая модель прорабатывается и шьётся вручную в нашем ателье.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Sparkles" size={24} className="text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-2xl text-chocolate">Эксклюзивность</h4>
                  <p className="text-muted-foreground">Ограниченные коллекции для тех, кто ценит уникальность.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {advantages.map((a) => (
            <div key={a.title} className="border border-border bg-card p-8 hover:border-gold transition-colors">
              <Icon name={a.icon} size={32} className="text-gold mb-5" />
              <h3 className="font-display text-2xl text-chocolate mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 md:py-32 bg-chocolate text-cream">
        <div className="container px-4 md:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-gold tracking-luxe uppercase text-sm mb-4">Контакты и сервис</p>
            <h2 className="font-display text-5xl md:text-7xl mb-10">Бутик в Москве</h2>
            <div className="space-y-7">
              <div className="flex gap-4">
                <Icon name="MapPin" size={24} className="text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-2xl">Адрес бутика</h4>
                  <p className="text-cream/75">г. Москва, ул. Петровка, 15 · ежедневно 11:00–21:00</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Phone" size={24} className="text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-2xl">Телефон</h4>
                  <p className="text-cream/75">+7 (495) 000-00-00</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Shirt" size={24} className="text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-2xl">Примерка и доставка</h4>
                  <p className="text-cream/75">Запишитесь на индивидуальную примерку. Доставляем по Москве и всей России.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="RefreshCw" size={24} className="text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-2xl">Политика возврата</h4>
                  <p className="text-cream/75">Возврат и обмен изделия в течение 14 дней с сохранением товарного вида.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-cream text-chocolate p-8 md:p-12">
            <h3 className="font-display text-4xl mb-2">Запись на примерку</h3>
            <p className="text-chocolate/70 mb-8">Оставьте контакты — наш консультант свяжется с вами.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Ваше имя" className="w-full h-12 px-4 bg-secondary/60 border border-border outline-none focus:border-gold" />
              <input placeholder="Телефон" className="w-full h-12 px-4 bg-secondary/60 border border-border outline-none focus:border-gold" />
              <input placeholder="Email" className="w-full h-12 px-4 bg-secondary/60 border border-border outline-none focus:border-gold" />
              <Button className="w-full bg-chocolate text-cream hover:bg-chocolate/90 rounded-none tracking-luxe uppercase text-xs h-12">
                Записаться
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-chocolate text-cream/60 border-t border-cream/15 py-10">
        <div className="container px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-display text-2xl tracking-[0.25em] text-cream">BRASCHI</span>
          <span className="text-sm tracking-wide">© {new Date().getFullYear()} Эксклюзивный итальянский мех</span>
        </div>
      </footer>
    </div>
  );
}
