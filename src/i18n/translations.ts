export type Language = 'en' | 'ru';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero
    'hero.available': 'Available for freelance work',
    'hero.tagline': 'Crafting digital experiences and visual identities that are lightweight, stylish, and anything but boring.',
    'hero.scroll': 'Scroll to explore • Scroll to explore • ',

    // Portfolio
    'work.title': 'Selected\nWork',
    'work.filter.all': 'All',
    'work.filter.uiux': 'UI/UX Design',
    'work.filter.graphic': 'Graphic Design',
    'work.filter.branding': 'Branding',
    'work.filter.art': 'Art / Illustration',

    // Detail view
    'detail.back': 'Back to Work',
    'detail.services': 'Services',
    'detail.role': 'Role',
    'detail.year': 'Year',
    'detail.back_portfolio': 'Back to portfolio',

    // About
    'about.title': 'Not just making it pretty. Making it work.',
    'about.subtitle': 'Blending aesthetics with user-centric functionality. With a background spanning robust graphic design and deep UI/UX systems.',
    'about.uiux_title': 'UI/UX Design',
    'about.uiux_desc': 'Wireframing, prototyping, and crafting seamless digital interfaces that users actually enjoy navigating.',
    'about.graphic_title': 'Graphic Design',
    'about.graphic_desc': 'Brand identities, typography systems, and editorial layouts that leave a lasting visual impact across all mediums.',

    // Contact
    'contact.title': "Let's build something\n",
    'contact.title_accent': 'catchy.',
    'contact.email': 'Email Me',
    'contact.telegram': 'Telegram',
    'contact.footer': 'All rights reserved.',

    // Projects
    'project.tipbox': 'Tipbox — Cashless Tipping App',
    'project.tipbox.desc': 'Designed the MVP scope and high-fidelity prototype for a mobile tipping app in Turkey, creating a pitch-ready presentation to attract early-stage investors.',
    'project.snova': 'Snova Cup — Reusable Cup System',
    'project.snova.desc': 'Created the brand identity, website design, and full user journey for a reusable cup system concept for Russian cafes, inspired by European models like Recup.',
    'project.heycanvas': 'HeyCanvas — Branding & Website',
    'project.heycanvas.desc': 'Designed the brand identity and website from scratch for an international portrait-painting service, balancing vibrant art with a clean, minimal brand aesthetic.',
    'project.gtrivia': 'GTrivia — Quiz App',
    'project.gtrivia.desc': 'Led the full graphic design process for a mobile quiz app, including logo, brand identity, app UI, social media assets, and visual components for live streaming.',
    'project.avinext': 'Avinext — Logo & Brand Guidelines',
    'project.avinext.desc': 'Developed the comprehensive brand style guide and logo usage guidelines for the company Avinext. Also created a website concept.',
    'project.artthree': 'Art for Local Bakery',
    'project.artthree.desc': 'Created three custom paintings for a local bakery\'s interior refresh, replacing old food posters with real artwork.',
  },
  ru: {
    // Nav
    'nav.work': 'Работы',
    'nav.about': 'Обо мне',
    'nav.contact': 'Контакты',

    // Hero — stays in English per request

    // Portfolio
    'work.title': 'Избранные\nпроекты',
    'work.filter.all': 'Все',
    'work.filter.uiux': 'UI/UX Дизайн',
    'work.filter.graphic': 'Графический дизайн',
    'work.filter.branding': 'Брендинг',
    'work.filter.art': 'Арт / Иллюстрация',

    // Detail view
    'detail.back': 'Назад к проектам',
    'detail.services': 'Услуги',
    'detail.role': 'Роль',
    'detail.year': 'Год',
    'detail.back_portfolio': 'Назад к портфолио',

    // About
    'about.title': 'Не просто красиво. Работает.',
    'about.subtitle': 'Сочетание эстетики и пользовательского опыта. Опыт в графическом дизайне и глубоких UI/UX-системах.',
    'about.uiux_title': 'UI/UX Дизайн',
    'about.uiux_desc': 'Вайрфреймы, прототипирование и создание удобных цифровых интерфейсов, которыми приятно пользоваться.',
    'about.graphic_title': 'Графический дизайн',
    'about.graphic_desc': 'Фирменные стили, типографика и редакционные макеты, оставляющие яркое визуальное впечатление.',

    // Contact
    'contact.title': 'Давайте создадим\n',
    'contact.title_accent': 'нечто особенное.',
    'contact.email': 'Написать',
    'contact.telegram': 'Telegram',
    'contact.footer': 'Все права защищены.',

    // Projects
    'project.tipbox': 'Tipbox — приложение для чаевых',
    'project.tipbox.desc': 'Разработала MVP и высокодетализированный прототип мобильного приложения для чаевых в Турции, создав презентацию для привлечения инвесторов.',
    'project.snova': 'Snova Cup — система многоразовых стаканов',
    'project.snova.desc': 'Создала бренд-айдентику, дизайн сайта и полный пользовательский путь для концепции многоразовых стаканов для российских кофеен.',
    'project.heycanvas': 'HeyCanvas — брендинг и сайт',
    'project.heycanvas.desc': 'Разработала бренд-айдентику и сайт с нуля для международного сервиса портретной живописи, сочетая яркое искусство с минималистичной эстетикой.',
    'project.gtrivia': 'GTrivia — приложение-викторина',
    'project.gtrivia.desc': 'Руководила полным процессом графического дизайна мобильного приложения-викторины: логотип, айдентика, UI, соцсети и визуальные компоненты для стриминга.',
    'project.avinext': 'Avinext — логотип и гайдлайн',
    'project.avinext.desc': 'Разработала полный бренд-гайд и руководство по использованию логотипа для компании Avinext, а также концепцию веб-сайта.',
    'project.artthree': 'Арт для местной пекарни',
    'project.artthree.desc': 'Создала три авторские картины для обновления интерьера местной пекарни, заменив старые постеры с едой на живые художественные работы.',
  },
};