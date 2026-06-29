export type Language = 'en' | 'ru';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero
    'hero.available': 'Available for work',
    'hero.tagline': 'I’m Alenna, a UX/UI/Product and Graphic designer. Creating solutions is what I truly love doing. Good design just feels good. Also, I know the pieces fit ;)',
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
    'about.title': 'I know the pieces fit.',
    'about.subtitle': 'Any problem for me is like a literal puzzle. Solving it is definitely satisfying. Especially design problems. ',
    'about.uiux_title': 'UI/UX Design',
    'about.uiux_desc': 'Wireframing, prototyping, and crafting seamless digital interfaces that users actually enjoy navigating. Mobile, web and beyond.',
    'about.graphic_title': 'Graphic Design',
    'about.graphic_desc': 'Brand identities, typography systems, and editorial layouts that do what they are supposed to do and look great.',
    'about.resume_cta': 'Request a Resume',
    'about.resume_title': 'Request a Resume',
    'about.resume_note': 'Send me a message and I\'ll share my resume with you.',

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

    // Hero
    'hero.available': 'Открыта к cотрудничеству',
    'hero.tagline': 'Я - Алёна, UX/UI/Product и графический дизайнер. Люблю решать задачи. Когда дизайн хороший, то и на душе приятно, и бизнес на высоте. And I know the pieces fit ;)',
    'hero.scroll': 'Листайте чтобы увидеть больше • Листайте чтобы увидеть больше • ',

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
    'about.title': 'Знаю, что всё сложится',
    'about.subtitle': 'Любая задача для меня — как пазл. Решать её — настоящее удовольствие. Особенно если это дизайн-задача.',
    'about.uiux_title': 'UI/UX Дизайн',
    'about.uiux_desc': 'Вайрфреймы, прототипирование и создание удобных цифровых интерфейсов, которыми приятно пользоваться. Мобильные приложения, веб-сайты и всё, что душе угодно.',
    'about.graphic_title': 'Графический дизайн',
    'about.graphic_desc': 'Фирменный стиль, типографика и печатные макеты, которые помогают достичь поставленных целей и выглядят приятно.',
    'about.resume_cta': 'Запросить резюме',
    'about.resume_title': 'Запросить резюме',
    'about.resume_note': 'Напишите мне, и я поделюсь своим резюме.',

    // Contact
    'contact.title': 'Давайте создадим полезную\n',
    'contact.title_accent': 'красоту.',
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