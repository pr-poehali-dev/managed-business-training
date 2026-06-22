import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SPEAKER_IMG =
  'https://cdn.poehali.dev/projects/f207f703-c18a-40a7-88bf-dc18f47fe141/files/188a3009-2e68-4d1e-920d-9c6f9ff66f7c.jpg';

const problems = [
  'Сливаю бюджеты на маркетинг — плачу за рекламу, а возврата нет.',
  'Не понимаю, почему одни менеджеры продают дорого, а другие — много, но дёшево.',
  'РОП отчитывается процентом плана, а бизнес не растёт.',
  'Каждый день влезаю в сделки, разбираю звонки, «дожимаю» клиентов.',
  'Не вижу, где потеряна выручка и какой у компании потенциал.',
  'Отдел продаж — чёрный ящик. Что там происходит — непонятно.',
];

const audience = [
  {
    icon: 'Crown',
    text: 'Собственникам, которые хотят управлять результатом, а не операционкой маркетинга и продаж.',
  },
  {
    icon: 'Flame',
    text: 'Тем, кто устал быть «пожарным» и готов выстроить систему без ежедневного контроля.',
  },
  {
    icon: 'ShieldOff',
    text: 'Тем, кому надоели оправдания: «лиды плохие», «у конкурентов дешевле», «на рынке кризис».',
  },
];

const tasks = [
  {
    num: '01',
    title: 'Перестать сливать бюджет на маркетинг',
    points: [
      'Определите ценностный тип вашего клиента',
      'Настроите коммуникацию, попадающую в ЦА с первого касания',
      'Исключите слова и приёмы, которые отталкивают клиента',
    ],
  },
  {
    num: '02',
    title: 'Увидеть скрытый потенциал выручки в отделе продаж',
    points: [
      'Поймёте, где резерв роста без найма новых менеджеров',
      'За 10 минут в день оцените эффективность РОПа и менеджеров',
      'Получите формулу реального плана продаж',
    ],
  },
  {
    num: '03',
    title: 'Выстроить управление продажами без операционки',
    points: [
      'План из 8 элементов работающей системы продаж',
      'Поймёте, какие задачи должен решать РОП, а какие — нет',
      'Контроль результата по 5 ключевым показателям',
    ],
  },
  {
    num: '04',
    title: 'Уйти с готовым планом действий',
    points: [
      'Сформируете ценности своей ЦА прямо на тренинге',
      'Посчитаете реальный потенциал своей компании',
      'Заберёте пошаговый план на ближайший понедельник',
    ],
  },
];

const credentials = [
  'Практик с опытом построения и управления продажами более 25 лет',
  'Ответственный советник по развитию продаж собственника бизнеса',
  'Автор запатентованной методики «4 группы ценностей»',
  '5 лет создаёт системы продаж, обучает команды, разрабатывает стандарты',
  'Реализованы продукты и услуги стоимостью от 49 ₽ до 500 000 000 ₽',
];

export default function Index() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-lime selection:text-background">
      {/* НАВ */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-16 px-4 md:px-8">
          <span className="font-display font-bold text-lg tracking-tight">
            ЯНА ХРАПОВИЦКАЯ
          </span>
          <a href="#form">
            <Button className="bg-lime text-primary-foreground hover:bg-lime/90 font-semibold rounded-full px-5">
              Записаться
            </Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 grid-bg">
        <div className="absolute top-10 -left-20 w-96 h-96 rounded-full bg-violet/40 blob animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-orange/30 blob animate-float-slow" style={{ animationDelay: '3s' }} />
        <div className="container relative px-4 md:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-4 py-1.5 text-sm text-lime mb-8 animate-fade-up">
            <Icon name="Clock" size={16} />
            6 часов очного тренинга с практикой
          </div>
          <h1 className="font-display font-bold uppercase leading-[0.95] text-5xl md:text-7xl lg:text-8xl max-w-5xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Управляемый бизнес <span className="text-gradient">без хаоса</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Как за 6 часов настроить маркетинг по ценностям и управление
            продажами — чтобы расти без ежедневного погружения в операционку.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href="#form">
              <Button size="lg" className="bg-lime text-primary-foreground hover:bg-lime/90 font-bold text-base rounded-full px-8 h-14 glow-lime">
                Записаться на тренинг
                <Icon name="ArrowRight" size={20} className="ml-1" />
              </Button>
            </a>
            <a href="#tasks">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 border-border bg-secondary/40 hover:bg-secondary font-semibold text-base">
                Что внутри
              </Button>
            </a>
          </div>
          <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[
              ['300–600%', 'рост выручки за 12 мес'],
              ['25+ лет', 'в управлении продажами'],
              ['5 показателей', 'для контроля результата'],
            ].map(([big, small]) => (
              <div key={small}>
                <div className="font-display font-bold text-4xl md:text-5xl text-gradient">{big}</div>
                <div className="text-sm text-muted-foreground mt-1">{small}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЕГУЩАЯ СТРОКА */}
      <div className="border-y border-border py-4 bg-secondary/30 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center font-display uppercase text-2xl md:text-3xl text-muted-foreground">
              {['Маркетинг по ценностям', 'Система продаж', 'Без операционки', 'Реальный план продаж', 'Потенциал выручки'].map((t) => (
                <span key={t} className="flex items-center">
                  <Icon name="Sparkles" size={20} className="mx-6 text-lime" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ДЛЯ КОГО */}
      <section className="py-24 md:py-32 container px-4 md:px-8">
        <p className="font-display uppercase text-lime tracking-widest mb-4">Для кого</p>
        <h2 className="font-display font-semibold uppercase text-4xl md:text-6xl max-w-3xl mb-16">
          Тренинг для собственников бизнеса
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {audience.map((a) => (
            <div key={a.icon} className="rounded-3xl border border-border bg-card p-8 hover:border-lime/50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-lime/15 flex items-center justify-center text-lime mb-6">
                <Icon name={a.icon} size={28} />
              </div>
              <p className="text-lg text-foreground/90">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ПРОБЛЕМЫ */}
      <section className="py-24 md:py-32 bg-secondary/20 border-y border-border">
        <div className="container px-4 md:px-8">
          <p className="font-display uppercase text-orange tracking-widest mb-4">Знакомо?</p>
          <h2 className="font-display font-semibold uppercase text-4xl md:text-6xl max-w-3xl mb-16">
            С какими проблемами разберёмся
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((p, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
                <Icon name="X" size={22} className="text-orange shrink-0 mt-0.5" />
                <p className="text-lg text-foreground/90">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЗАДАЧИ */}
      <section id="tasks" className="py-24 md:py-32 container px-4 md:px-8">
        <p className="font-display uppercase text-lime tracking-widest mb-4">Результат</p>
        <h2 className="font-display font-semibold uppercase text-4xl md:text-6xl max-w-3xl mb-16">
          Какие задачи решит тренинг
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tasks.map((t) => (
            <div key={t.num} className="group relative rounded-3xl border border-border bg-card p-8 overflow-hidden hover:border-lime/50 transition-colors">
              <span className="absolute -top-4 -right-2 font-display font-bold text-8xl text-secondary/60 group-hover:text-lime/15 transition-colors">
                {t.num}
              </span>
              <h3 className="font-display font-semibold uppercase text-2xl mb-6 relative">{t.title}</h3>
              <ul className="space-y-3 relative">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-lime shrink-0 mt-0.5" />
                    <span className="text-foreground/85">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* СПИКЕР */}
      <section className="py-24 md:py-32 bg-secondary/20 border-y border-border">
        <div className="container px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-lime/30 to-orange/30 blob rounded-[2rem]" />
            <img
              src={SPEAKER_IMG}
              alt="Яна Храповицкая"
              className="relative rounded-[2rem] w-full object-cover aspect-[4/5] border border-border"
            />
          </div>
          <div>
            <p className="font-display uppercase text-lime tracking-widest mb-4">Кто ведёт</p>
            <h2 className="font-display font-bold uppercase text-5xl md:text-6xl mb-2">Яна Храповицкая</h2>
            <p className="text-orange font-semibold text-lg mb-8">Советник по развитию продаж</p>
            <ul className="space-y-4">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <Icon name="BadgeCheck" size={22} className="text-lime shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground/90">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ФОРМА */}
      <section id="form" className="py-24 md:py-32 container px-4 md:px-8">
        <div className="relative max-w-3xl mx-auto rounded-[2.5rem] border border-border bg-card p-8 md:p-14 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-lime/20 blob" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/10 px-4 py-1.5 text-sm text-orange mb-6">
              <Icon name="CalendarCheck" size={16} />
              6 часов очно · практика · кейсы · план действий
            </div>
            <h2 className="font-display font-bold uppercase text-4xl md:text-5xl mb-4">
              Запишитесь на тренинг
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Оставьте контакты — пришлём подтверждение и детали на email.
            </p>

            {sent ? (
              <div className="rounded-2xl bg-lime/15 border border-lime/40 p-8 text-center">
                <Icon name="MailCheck" size={48} className="text-lime mx-auto mb-4" />
                <h3 className="font-display font-semibold uppercase text-2xl mb-2">Заявка принята!</h3>
                <p className="text-foreground/80">
                  Подтверждение и детали тренинга придут на {form.email || 'вашу почту'}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  required
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-14 rounded-2xl bg-secondary/40 border-border text-base px-5"
                />
                <Input
                  required
                  type="email"
                  placeholder="Email для подтверждения"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="h-14 rounded-2xl bg-secondary/40 border-border text-base px-5"
                />
                <Input
                  required
                  type="tel"
                  placeholder="Телефон"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="h-14 rounded-2xl bg-secondary/40 border-border text-base px-5"
                />
                <Button type="submit" size="lg" className="w-full bg-lime text-primary-foreground hover:bg-lime/90 font-bold text-base rounded-2xl h-14 glow-lime">
                  Записаться на тренинг
                  <Icon name="ArrowRight" size={20} className="ml-1" />
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ФУТЕР */}
      <footer className="border-t border-border py-10">
        <div className="container px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
          <span className="font-display uppercase tracking-wide">Яна Храповицкая · Тренинг по продажам</span>
          <span className="text-sm">© {new Date().getFullYear()} Все права защищены</span>
        </div>
      </footer>
    </div>
  );
}
