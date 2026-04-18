// ========== ДАННЫЕ ==========
const articlesData = [
    { title: "Рак груди: факты ВОЗ", desc: "Официальная информация от Всемирной организации здравоохранения.", link: "https://www.who.int/ru/news-room/fact-sheets/detail/breast-cancer" },
    { title: "Рак молочной железы (Вики)", desc: "Полная энциклопедическая статья о заболевании.", link: "https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%BA_%D0%BC%D0%BE%D0%BB%D0%BE%D1%87%D0%BD%D0%BE%D0%B9_%D0%B6%D0%B5%D0%BB%D0%B5%D0%B7%D1%8B" },
    { : "BreastCancer.org", desc: "Международный ресурс о раке груди.", link: "https://www.breastcancer.org/" },
    { title: "Маммография: подготовка", desc: "Как подготовиться к маммографии.", link: "https://www.mayoclinic.org/tests-procedures/mammogram/about/pac-20384806" },
    { title: "Американское онкообщество", desc: "Подробные материалы от ACS.", link: "https://www.cancer.org/cancer/breast-cancer.html" },
];

const clinicsData = [
  { id: 1, name: "Городская больница №2", address: "ул. Турар Рыскулова, 6", type: "public", lat: 51.1477, lng: 71.4216 },
  { id: 2, name: "Городская поликлиника №9", address: "пр. Мангилик Ел, 16/1", type: "public", lat: 51.0899, lng: 71.4165 },
  { id: 3, name: "ННОЦ (Онкоцентр)", address: "пр. Кабанбай Батыра, 53", type: "research", lat: 51.1201, lng: 71.4428 },
  { id: 4, name: "РДЦ (UMC)", address: "ул. Сыганак, 46", type: "public", lat: 51.1356, lng: 71.4254 },
  { id: 5, name: "Клиника Big Tau", address: "пр. Туран, 50", type: "private", lat: 51.1325, lng: 71.4301 },
  { id: 6, name: "Медцентр Sak", address: "пр. Сарыарка, 42", type: "private", lat: 51.1428, lng: 71.4389 },
  { id: 7, name: "Президентская клиника", address: "пр. Мангилик Ел, 80", type: "private", lat: 51.0954, lng: 71.4218 },
  { id: 8, name: "Онкоцентр UMIT", address: "пр. Абылай хана, 42/1", type: "private", lat: 51.1253, lng: 71.4328 },
  { id: 9, name: "Медцентр EMIRMED", address: "ул. Куйши Дина, 9", type: "private", lat: 51.1224, lng: 71.4193 },
  { id: 10, name: "Поликлиника №4", address: "ул. Ауэзова, 1", type: "public", lat: 51.1591, lng: 71.4182 }
];

// ========== КОНТЕНТ УРОКОВ (30 дней) ==========
const LESSONS = [
  { id: 1, title: "Добро пожаловать!", xp: 100, content: "<h3>Добро пожаловать в 30-дневную программу MammoCare!</h3><p>Вы сделали важный шаг, заботясь о своём здоровье. В течение следующих 30 дней вы узнаете всё о здоровье груди и профилактике рака.</p><h4>Сегодня:</h4><ol><li>Узнайте свой уровень риска</li><li>Настройте трекер цикла</li><li>Начните первый урок</li></ol>", quiz: null },
  { id: 2, title: "Самообследование", xp: 150, content: "<h3>Как правильно проводить самообследование</h3><p><strong>Когда:</strong> 5-7 день цикла, после душа</p><div class=\"mb-4\"><div style=\"position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;\"><iframe style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" src=\"https://www.youtube.com/embed/Y5y6hrHbZtU\" title=\"Самообследование груди\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div><p class=\"text-sm text-gray-500 mt-2 text-center\">Видео: Как проводить самообследование молочной железы</p></div><h4>Шаг 1: Осмотр</h4><p>Встаньте перед зеркалом. Осмотрите грудь на наличие изменений формы, размера, кожи.</p><h4>Шаг 2: Пальпация</h4><p>Используйте подушечки пальцев, двигаясь по спирали от подмышки к соску.</p><h4>Шаг 3: Проверка сосков</h4><p>Сожмите сосок, проверьте на выделения.</p><div class=\"mt-4 p-4 bg-yellow-50 rounded-lg\"><p class=\"text-sm text-yellow-800\"><strong>Важно:</strong> Самообследование не заменяет маммографию и УЗИ. При любых изменениях обратитесь к врачу!</p></div>", quiz: [{ q: "Когда лучше делать самообследование?", options: ["Любой день", "5-7 день цикла", "Во время месячных"], answer: 1 }] },
  { id: 3, title: "Менструальный цикл", xp: 50, content: "<h3>Понимание менструального цикла</h3><p>Средний цикл — 28 дней. Каждая фаза влияет на ткани груди.</p><h4>Фолликулярная фаза (1-14 дни)</h4><p>Растёт уровень эстрогена. Грудь может быть более чувствительной.</p><h4>Овуляция (14 день)</h4><p>Выход яйцеклетки. Максимальный уровень эстрогена.</p><h4>Лютеиновая фаза (15-28 дни)</h4><p>Растёт прогестерон. Возможен дискомфорт в груди.</p>", quiz: [{ q: "Сколько дней длится средний цикл?", options: ["14", "28", "35"], answer: 1 }] },
  { id: 4, title: "Анатомия груди", xp: 50, content: "<h3>Структура тканей груди</h3><p>Грудь состоит из долек, протоков и жировой ткани.</p><h4>Дольки</h4><p>Производят молоко при грудном вскармливании.</p><h4>Протоки</h4><p>Переносят молоко к соску.</p><h4>Жировая ткань</h4><p>Определяет размер груди.</p>", quiz: null },
  { id: 5, title: "Факторы риска", xp: 50, content: "<h3>Что повышает риск</h3><p>Знание факторов риска помогает принимать профилактические меры.</p><h4>Немодифицируемые:</h4><ul><li>Возраст (риск растёт после 40)</li><li>Генетика (BRCA1, BRCA2)</li><li>Семейная история</li></ul><h4>Модифицируемые:</h4><ul><li>Ожирение</li><li>Курение</li><li>Алкоголь</li><li>Малоподвижный образ жизни</li></ul>", quiz: null },
  { id: 6, title: "Питание и здоровье", xp: 50, content: "<h3>Полезные продукты</h3><p>Правильное питание снижает риск заболеваний.</p><h4>Рекомендуется:</h4><ul><li>Овощи и фрукты (особенно крестоцветные)</li><li>Цельнозерновые продукты</li><li>Рыба и омега-3</li><li>Оливковое масло</li></ul><h4>Ограничить:</h4><ul><li>Красное мясо</li><li>Переработанные продукты</li><li>Сахар</li></ul>", quiz: null },
  { id: 7, title: "Физические упражнения", xp: 50, content: "<h3>Активность для здоровья</h3><p>Регулярные упражнения снижают риск рака груди на 10-20%.</p><h4>Рекомендации:</h4><ul><li>150 минут умеренной активности в неделю</li><li>Или 75 минут интенсивной</li><li>Упражнения с весом для мышечной массы</li></ul>", quiz: null },
  { id: 8, title: "Стресс и гормоны", xp: 50, content: "<h3>Влияние стресса</h3><p>Хронический стресс нарушает гормональный баланс.</p><h4>Эффекты стресса:</h4><ul><li>Повышает кортизол</li><li>Снижает иммунитет</li><li>Нарушает сон</li></ul><h4>Методы управления:</h4><ul><li>Медитация</li><li>Дыхательные упражнения</li><li>Достаточный сон</li></ul>", quiz: null },
  { id: 9, title: "Что такое маммография", xp: 50, content: "<h3>Рентген груди</h3><p>Маммография — рентгеновское исследование молочной железы.</p><h4>Цели:</h4><ul><li>Раннее выявление опухолей</li><li>Скрининг до появления симптомов</li></ul><h4>Виды:</h4><ul><li>Скрининговая (профилактическая)</li><li>Диагностическая (при подозрении)</li></ul>", quiz: null },
  { id: 10, title: "Когда проходить", xp: 50, content: "<h3>Возраст и частота</h3><p>Рекомендации по маммографии:</p><ul><li>40-50 лет: раз в 1-2 года</li><li>После 50: ежегодно</li><li>При высоком риске: с 30-35 лет</li></ul><h4>Лучшее время:</h4><p>5-12 день цикла (меньше болезненность)</p>", quiz: null },
  { id: 11, title: "Симптомы рака", xp: 50, content: "<h3>На что обращать внимание</h3><p>Ранние признаки могут быть незаметны, но...</p><h4>Тревожные симптомы:</h4><ul><li>Уплотнение в груди или подмышке</li><li>Изменение формы или размера</li><li>Покраснение или шелушение кожи</li><li>Выделения из соска</li><li>Втяжение кожи или соска</li></ul>", quiz: null },
  { id: 12, title: "Мифы о раке груди", xp: 50, content: "<h3>Развенчание мифов</h3><p><strong>Миф:</strong> Антиперспиранты вызывают рак<br><strong>Факт:</strong> Нет научных доказательств</p><p><strong>Миф:</strong> Травма груди вызывает рак<br><strong>Факт:</strong> Травма не является причиной</p><p><strong>Миф:</strong> Мелкие груди — меньше риск<br><strong>Факт:</strong> Размер не влияет на риск</p>", quiz: null },
  { id: 13, title: "Генетическое тестирование", xp: 50, content: "<h3>BRCA1 и BRCA2</h3><p>Генетические мутации повышают риск.</p><h4>Когда рекомендуется:</h4><ul><li>Семейная история рака груди</li><li>Рак в молодом возрасте</li><li>Несколько случаев в семье</li></ul><h4>Что даёт тестирование:</h4><p>Знание риска для профилактики</p>", quiz: null },
  { id: 14, title: "Биопсия", xp: 50, content: "<h3>Забор ткани для анализа</h3><p>Биопсия — единственный способ подтвердить диагноз.</p><h4>Виды:</h4><ul><li>Пункционная (тонкой иглой)</li><li>Толстоигольная</li><li>Хирургическая</li></ul><h4>Процесс:</h4><p>Обычно амбулаторно, под местной анестезией</p>", quiz: null },
  { id: 15, title: "Стадии рака", xp: 50, content: "<h3>Система стадирования</h3><p>Стадия определяет распространённость.</p><h4>0 стадия:</h4><p>Неинвазивный рак (in situ)</p><h4>I стадия:</h4><p>Опухоль до 2 см, без метастазов</p><h4>II стадия:</h4><p>Опухоль 2-5 см или с метастазами в лимфоузлы</p><h4>III-IV:</h4><p>Распространённый рак</p>", quiz: null },
  { id: 16, title: "Гормонотерапия", xp: 50, content: "<h3>Лечение гормонами</h3><p>Блокировка эстрогена, питающего опухоль.</p><h4>Препараты:</h4><ul><li>Тамоксифен</li><li>Ингибиторы ароматазы</li></ul><h4>Применение:</h4><p>При гормон-позитивном раке</p>", quiz: null },
  { id: 17, title: "Химиотерапия", xp: 50, content: "<h3>Лекарственное лечение</h3><p>Использование препаратов для уничтожения раковых клеток.</p><h4>Когда применяется:</h4><ul><li>До операции (неоадъювантная)</li><li>После операции (адъювантная)</li><li>При метастазах</li></ul>", quiz: null },
  { id: 18, title: "Хирургическое лечение", xp: 50, content: "<h3>Виды операций</h3><h4>Лампэктомия:</h4><p>Удаление опухоли с сохранением груди</p><h4>Мастэктомия:</h4><p>Удаление всей молочной железы</p><h4>Реконструкция:</h4><p>Восстановление груди после операции</p>", quiz: null },
  { id: 19, title: "Лучевая терапия", xp: 50, content: "<h3>Радиотерапия</h3><p>Использование излучения для уничтожения клеток.</p><h4>Применяется после:</h4><ul><li>Лампэктомии</li><li>При метастазах</li></ul><h4>Побочные эффекты:</h4><p>Усталость, изменения кожи</p>", quiz: null },
  { id: 20, title: "Иммунотерапия", xp: 50, content: "<h3>Новый метод лечения</h3><p>Использование собственной иммунной системы.</p><h4>Принцип:</h4><p>Помочь организму распознавать и атаковать раковые клетки</p><h4>Применение:</h4><p>При определённых типах рака</p>", quiz: null },
  { id: 21, title: "Жизнь после лечения", xp: 50, content: "<h3>Реабилитация</h3><p>Возвращение к нормальной жизни.</p><h4>Что важно:</h4><ul><li>Регулярное наблюдение</li><li>Здоровый образ жизни</li><li>Психологическая поддержка</li><li>Физическая активность</li></ul>", quiz: null },
  { id: 22, title: "Психологическая поддержка", xp: 50, content: "<h3>Эмоциональное здоровье</h3><p>Диагноз — стресс для всей семьи.</p><h4>Ресурсы:</h4><ul><li>Психоонколог</li><li>Группы поддержки</li><li>Горячая линия</li></ul>", quiz: null },
  { id: 23, title: "Поддержка близких", xp: 50, content: "<h3>Как помочь</h3><p>Близкие играют важную роль в выздоровлении.</p><h4>Что делать:</h4><ul><li>Слушать и поддерживать</li><li>Помогать с бытовыми делами</li><li>Ходить на приёмы вместе</li><li>Не давить с советами</li></ul>", quiz: null },
  { id: 24, title: "Реконструкция груди", xp: 50, content: "<h3>Восстановление</h3><p>Современная медицина позволяет восстановить грудь.</p><h4>Методы:</h4><ul><li>Импланты</li><li>Собственные ткани</li><li>Комбинированные</li></ul><h4>Когда:</h4><p>Одновременно с мастэктомией или позже</p>", quiz: null },
  { id: 25, title: "Профилактика", xp: 50, content: "<h3>Как снизить риск</h3><ul><li>Поддерживать здоровый вес</li><li>Быть физически активной</li><li>Ограничить алкоголь</li><li>Не курить</li><li>Кормить грудью</li><li>Избегать гормонозаместительной терапии</li></ul>", quiz: null },
  { id: 26, title: "Скрининговые программы", xp: 50, content: "<h3>В Казахстане</h3><p>Государственная программа скрининга.</p><h4>Кто проходит:</h4><ul><li>Женщины 40-70 лет</li><li>Бесплатно</li><li>Раз в 2 года</li></ul>", quiz: null },
  { id: 27, title: "Мужской рак груди", xp: 50, content: "<h3>Редко, но бывает</h3><p>Мужчины тоже могут болеть раком груди.</p><h4>Факторы риска:</h4><ul><li>Генетические мутации</li><li>Возраст</li><li>Гинекомастия</li></ul><h4>Симптомы:</h4><p>Уплотнение, изменения соска</p>", quiz: null },
  { id: 28, title: "Беременность и рак", xp: 50, content: "<h3>Рак при беременности</h3><p>Редкое, но возможное сочетание.</p><h4>Особенности:</h4><ul><li>Диагностика осложнена</li><li>Лечение возможно</li><li>Вынашивание часто сохраняется</li></ul>", quiz: null },
  { id: 29, title: "Новые исследования", xp: 50, content: "<h3>Достижения науки</h3><p>Медицина не стоит на месте.</p><h4>Тенденции:</h4><ul><li>Персонализированная медицина</li><li>Таргетная терапия</li><li>Ранняя диагностика по крови</li></ul>", quiz: null },
  { id: 30, title: "Итоги курса", xp: 100, content: "<h3>Поздравляем!</h3><p>Вы прошли 30-дневную программу MammoCare.</p><h4>Что вы узнали:</h4><ul><li>Как проводить самообследование</li><li>Когда проходить маммографию</li><li>Факторы риска и профилактика</li><li>Современные методы лечения</li></ul><p><strong>Продолжайте заботиться о своём здоровье!</strong></p>", quiz: null }
];

// ========== ДОСТИЖЕНИЯ ==========
const achievements = {
  first_steps: { id: "first_steps", title: "Первые шаги", icon: "🌟", req: p => p.completedDays.includes(1) },
  self_care_expert: { id: "self_care_expert", title: "Эксперт самообследования", icon: "💪", req: p => p.completedDays.includes(2) },
  week_warrior: { id: "week_warrior", title: "Воин недели", icon: "🔥", req: p => p.completedDays.length >= 7 },
  knowledge_seeker: { id: "knowledge_seeker", title: "Искатель знаний", icon: "📚", req: p => p.completedDays.length >= 15 },
  health_champion: { id: "health_champion", title: "Чемпион здоровья", icon: "🏆", req: p => p.completedDays.length >= 30 }
};

// ========== AUTH MANAGER ==========
const AuthManager = {
  async hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + 'mammocare_salt');
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
  },
  async register() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;
    const terms = document.getElementById('terms').checked;
    const errorEl = document.getElementById('auth-error');

    if (!name || !email || !password || !confirm) { errorEl.textContent = t('alert_fill_all_fields'); errorEl.classList.remove('hidden'); return; }
    if (password.length < 8 || !/\d/.test(password)) { errorEl.textContent = t('alert_password_requirements'); errorEl.classList.remove('hidden'); return; }
    if (password !== confirm) { errorEl.textContent = t('alert_passwords_not_match'); errorEl.classList.remove('hidden'); return; }
    if (!terms) { errorEl.textContent = t('alert_accept_terms'); errorEl.classList.remove('hidden'); return; }

    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[email]) { errorEl.textContent = t('alert_email_registered'); errorEl.classList.remove('hidden'); return; }

    const hash = await this.hashPassword(password);
    const userId = 'user_' + Date.now();
    users[email] = { userId, name, email, passwordHash: hash, registered: new Date().toISOString() };
    localStorage.setItem('users', JSON.stringify(users));

    currentUser = users[email];
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    closeAuthModal();
    updateAuthUI();
    showSuccess(t('alert_account_created'));
  },
  async login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorEl = document.getElementById('auth-error');

    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const user = users[email];
    if (!user) { errorEl.textContent = t('alert_user_not_found'); errorEl.classList.remove('hidden'); return; }

    const hash = await this.hashPassword(password);
    if (hash !== user.passwordHash) { errorEl.textContent = t('alert_wrong_password'); errorEl.classList.remove('hidden'); return; }

    currentUser = { ...user, isLoggedIn: true };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    closeAuthModal();
    updateAuthUI();
    renderAccount();
    showSuccess(t('alert_welcome'));
  },
  logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    renderAccount();
    Router.showView('home');
  },
  checkAuth() {
    const saved = localStorage.getItem('currentUser');
    if (saved) {
      currentUser = JSON.parse(saved);
    }
  }
};

let currentUser = null;

// ========== LEARNING MANAGER ==========
const LearningManager = {
  getProgress() {
    const key = currentUser ? `progress_${currentUser.userId}` : 'progress_guest';
    const saved = localStorage.getItem(key);
    if (saved) return JSON.parse(saved);
    return { currentDay: 1, totalPoints: 0, streak: 0, completedDays: [], achievements: [], lastDate: null };
  },
  saveProgress(progress) {
    const key = currentUser ? `progress_${currentUser.userId}` : 'progress_guest';
    localStorage.setItem(key, JSON.stringify(progress));
  },
  completeDay(dayNum, score) {
    const progress = this.getProgress();
    const lesson = LESSONS.find(l => l.id === dayNum);
    if (!progress.completedDays.includes(dayNum)) {
      progress.completedDays.push(dayNum);
      progress.totalPoints += lesson.points;
    }
    progress.currentDay = Math.min(progress.currentDay, dayNum + 1);

    Object.values(achievements).forEach(a => {
      if (a.req(progress) && !progress.achievements.includes(a.id)) {
        progress.achievements.push(a.id);
        setTimeout(() => showAchievement(a), 500);
      }
    });

    this.saveProgress(progress);
    return progress;
  },
  canComplete(dayNum) {
    const progress = this.getProgress();
    return dayNum <= progress.currentDay + 1 && !progress.completedDays.includes(dayNum);
  }
};

// ========== VARS ==========
let cycleData = null;
let currentCalendarDate = new Date();
let map = null;
let markers = [];

// ========== SELF EXAM LOGIC ==========
const examSteps = [
  { text_ru: "Осмотрите грудь в зеркале", text_kz: "Айнада кеуде қуысын қараңыз", text_en: "Examine your breasts in the mirror", check_ru: "Есть ли изменения формы?", check_kz: "Пішін өзгерістері бар ма?", check_en: "Any changes in shape?", risk: 2 },
  { text_ru: "Поднимите руки вверх", text_kz: "Қолдарыңызды жоғары көтеріңіз", text_en: "Raise your arms up", check_ru: "Есть ли втяжения кожи?", check_kz: "Тері тартылуы бар ма?", check_en: "Any skin retraction?", risk: 3 },
  { text_ru: "Проверьте кожу", text_kz: "Теріні тексеріңіз", text_en: "Check the skin", check_ru: "Покраснение или шелушение?", check_kz: "Қызару немесе жарылу бар ма?", check_en: "Redness or peeling?", risk: 2 },
  { text_ru: "Пальпация груди", text_kz: "Кеуде пальпациясы", text_en: "Breast palpation", check_ru: "Есть ли уплотнения?", check_kz: "Түйіндер бар ма?", check_en: "Any lumps?", risk: 5 },
  { text_ru: "Проверьте подмышки", text_kz: "Қолтық астын тексеріңіз", text_en: "Check armpits", check_ru: "Есть ли узлы?", check_kz: "Түйіндер бар ма?", check_en: "Any nodes?", risk: 4 }
];

let examStep = 0;
let examAnswers = [];

function getExamText(key, step) {
  const texts = {
    'text': { ru: step.text_ru, kz: step.text_kz, en: step.text_en },
    'check': { ru: step.check_ru, kz: step.check_kz, en: step.check_en }
  };
  return texts[key]?.[currentLang] || texts[key]?.ru || '';
}

function openSelfExam() {
  const last = loadLocal('lastExam');
  if (last) {
    const diff = Date.now() - last;
    if (diff < 86400000) {
      alert(t('self_exam_alert_done'));
      return;
    }
  }
  examStep = 0;
  examAnswers = [];
  document.getElementById('selfexam-modal').classList.remove('hidden');
  renderExamStep();
}

function closeSelfExam() {
  document.getElementById('selfexam-modal').classList.add('hidden');
}

function renderExamStep() {
  const step = examSteps[examStep];
  document.getElementById('selfexam-step').innerHTML = `
    <p class="font-medium mb-2">${getExamText('text', step)}</p>
    <p class="text-sm text-gray-600 mb-4">${getExamText('check', step)}</p>
    <div class="flex gap-2">
      <button onclick="answerExam(0)" class="flex-1 py-2 bg-green-100 rounded hover:bg-green-200">${t('self_exam_no')}</button>
      <button onclick="answerExam(1)" class="flex-1 py-2 bg-red-100 rounded hover:bg-red-200">${t('self_exam_yes')}</button>
    </div>
    <p class="text-xs mt-3 text-gray-400">${t('self_exam_step', { current: examStep + 1, total: examSteps.length })}</p>
  `;
}

function answerExam(val) {
  examAnswers.push(val);
  examStep++;
  if (examStep >= examSteps.length) {
    finishExam();
  } else {
    renderExamStep();
  }
}

function finishExam() {
  let score = 0;
  examAnswers.forEach((a, i) => {
    if (a === 1) score += examSteps[i].risk;
  });

  let result = "";
  let color = "";
  if (score >= 8) { result = t('self_exam_result_urgent'); color = "text-red-600"; }
  else if (score >= 4) { result = t('self_exam_result_concern'); color = "text-yellow-600"; }
  else { result = t('self_exam_result_ok'); color = "text-green-600"; }

  saveLocal('lastExam', Date.now());

  document.getElementById('selfexam-step').innerHTML = `
    <p class="font-bold ${color} mb-4 text-lg">${result}</p>
    <button onclick="closeSelfExam()" class="w-full py-2 bg-gray-200 rounded-lg">${t('self_exam_close')}</button>
  `;
}

// ========== UTILS ==========
function $(id) { return document.getElementById(id); }
function show(el) { if(el) el.classList.remove('hidden'); }
function hide(el) { if(el) el.classList.add('hidden'); }
function saveLocal(key, data) { localStorage.setItem(key, JSON.stringify(data)); }
function loadLocal(key) { const data = localStorage.getItem(key); return data ? JSON.parse(data) : null; }
function daysBetween(d1, d2) { return Math.round((d2 - d1) / (1000 * 60 * 60 * 24)); }
function addDays(date, days) { const r = new Date(date); r.setDate(r.getDate() + days); return r; }

// ========== NAVIGATION ==========
const Router = {
  showView(viewId) {
    document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));
    document.getElementById(`view-${viewId}`).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelectorAll(`.nav-item[href="#${viewId}"]`).forEach(n => n.classList.add('active'));
    window.location.hash = viewId;
    if (viewId === 'clinics') { setTimeout(() => { initMap(); if(map) map.invalidateSize(); }, 100); }
    if (viewId === 'cycle') updateCycleUI();
    if (viewId === 'learn') { renderLearning(); }
    if (viewId === 'articles') renderArticlesGrid();
    if (viewId === 'account') renderAccount();
  },
  handleRoute() {
    const hash = window.location.hash.replace('#', '') || 'home';
    this.showView(hash);
  }
};

// ========== ARTICLES ==========
function renderArticlesGrid() {
    const container = document.getElementById('articles-grid');
    if(!container) return;
    container.innerHTML = articlesData.map(a => `
        <a href="${a.link}" target="_blank" class="block p-4 border border-gray-200 rounded-lg hover:border-primary transition bg-white">
            <h4 class="font-bold text-gray-800 mb-1">${a.title}</h4>
            <p class="text-sm text-gray-500">${a.desc}</p>
        </a>
    `).join('');
}

// ========== LEARNING ==========
function renderLearning() {
  const progress = LearningManager.getProgress();

  document.getElementById('user-points').textContent = progress.totalPoints;
  document.getElementById('user-streak').textContent = progress.streak;
  document.getElementById('progress-text').textContent = `${progress.completedDays.length}/30 ${t('day').toLowerCase().replace(/[0-9]/g, '')}`;
  document.getElementById('progress-bar').style.width = (progress.completedDays.length / 30 * 100) + '%';

  const achGrid = document.getElementById('achievements-grid');
  achGrid.innerHTML = Object.values(achievements).map(a => {
    const unlocked = progress.achievements.includes(a.id);
    return `<div class="p-3 rounded-xl text-center ${unlocked ? 'bg-yellow-50' : 'bg-gray-100 opacity-50'}">
      <div class="text-2xl mb-1">${a.icon}</div>
      <p class="text-xs font-medium">${a.title}</p>
    </div>`;
  }).join('');

  if (progress.completedDays.includes(5)) {
    document.getElementById('home-premium-banner').classList.remove('hidden');
  }

  renderLearningGrid();
}

function renderLearningGrid() {
  const container = document.getElementById('learning-grid');
  if (!container) return;
  const progress = LearningManager.getProgress();

  container.innerHTML = LESSONS.map(lesson => {
    const isCompleted = progress.completedDays.includes(lesson.id);
    const available = LearningManager.canComplete(lesson.id);
    const locked = !available && !isCompleted;

    return `
      <div class="lesson-card card p-5 ${isCompleted ? 'completed' : locked ? 'locked' : ''}"
           ${!locked ? `onclick="openLesson(${lesson.id})"` : ''}>
        <div class="flex justify-between items-start mb-3">
          <span class="text-xl font-bold">${lesson.id}</span>
          <span class="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-bold">+${lesson.xp} XP</span>
        </div>
        <h3 class="font-bold text-gray-800 mb-1">${lesson.title}</h3>
        <p class="text-sm text-gray-500 mb-3">
          ${isCompleted ? '✓ ' + t('lesson_completed') : locked ? '🔒 ' + t('lesson_locked') : '▶ ' + t('lesson_open')}
        </p>
      </div>
    `;
  }).join('');
}

let currentLessonDay = null;

function openLesson(id) {
  currentLessonDay = id;
  const lesson = LESSONS.find(l => l.id === id);
  if (!lesson) return;

  let quizHtml = '';
  if (lesson.quiz) {
    quizHtml = `
      <div class="mt-6 pt-6 border-t">
        <h4 class="font-semibold mb-3">${t('quiz_title')}</h4>
        ${lesson.quiz.map((q, i) => `
          <div class="mb-4">
            <p class="font-medium mb-2">${i + 1}. ${q.q}</p>
            ${q.options.map((opt, j) => `
              <label class="flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="radio" name="q${i}" value="${j}"> ${opt}
              </label>
            `).join('')}
          </div>
        `).join('')}
      </div>
    `;
  }

  document.getElementById('lesson-content').innerHTML = `
    <div class="text-center mb-6">
      <p class="text-sm text-gray-500">${t('day')} ${lesson.id}</p>
      <h2 class="text-xl font-bold">${lesson.title}</h2>
    </div>
    <div class="prose">
      ${lesson.content}
    </div>
    ${quizHtml}
    <button onclick="completeLesson()" class="w-full mt-6 py-3 bg-primary text-white rounded-lg font-medium">
      ${t('complete_lesson', { xp: lesson.xp })}
    </button>
  `;
  document.getElementById('lesson-modal').classList.remove('hidden');
}

function closeLessonModal() {
  document.getElementById('lesson-modal').classList.add('hidden');
  currentLessonDay = null;
}

function completeLesson() {
  const progress = LearningManager.completeDay(currentLessonDay, 0);
  if (progress) {
    renderLearning();
    renderLearningGrid();
    closeLessonModal();
    updateHomeXP();
    alert(t('alert_next_lesson', { xp: LESSONS.find(l => l.id === currentLessonDay).xp }));
  }
}

// ========== RISK ==========
function calculateRisk() {
  const age = parseInt(document.getElementById('risk-age').value) || 30;
  const weight = parseFloat(document.getElementById('risk-weight').value) || 0;
  const height = parseFloat(document.getElementById('risk-height').value) || 0;
  const family = parseInt(document.getElementById('risk-family').value) || 0;
  const smoke = parseInt(document.getElementById('risk-smoke').value) || 0;
  const symptoms = parseInt(document.getElementById('risk-symptoms').value) || 0;

  let score = 0;
  if (age >= 60) score += 3; else if (age >= 40) score += 2; else if (age >= 30) score += 1;

  let bmi = 0;
  if (weight > 0 && height > 0) {
    bmi = weight / Math.pow(height / 100, 2);
    if (bmi >= 30) score += 2; else if (bmi >= 25) score += 1;
  }

  score += family + smoke + symptoms;

  let resultKey = score <= 3 ? "risk_low" : score <= 7 ? "risk_moderate" : "risk_high";
  let adviceKey = score <= 3 ? "risk_adv_low" : score <= 7 ? "risk_adv_mod" : "risk_adv_high";

  saveLocal('riskData', { level: resultKey, bmi: bmi ? bmi.toFixed(1) : null });
  saveLocal('riskDone', true);

  document.getElementById('risk-result-text').textContent = t(resultKey);
  document.getElementById('risk-result-advice').textContent = t(adviceKey);
  document.getElementById('risk-result').classList.remove('hidden');

  updateHomeRisk(resultKey);
  updateAccountUI();
}

function updateHomeRisk(levelKey) {
    const el = document.getElementById('home-risk-level');
    if(el) el.textContent = t(levelKey);
    const card = document.getElementById('risk-card');
    if(card) card.classList.remove('hidden');
}

function updateHomeXP() {
    const progress = LearningManager.getProgress();
    const total = progress.totalPoints || 0;
    const homeXp = document.getElementById('home-xp-display');
    if(homeXp) homeXp.textContent = `${total} XP`;
}

// ========== CYCLE ==========
let cycleMode = 'menstrual';

function loadCycleData() {
    const saved = loadLocal('cycleData');
    if (saved) {
        cycleData = saved;
        if (cycleData.lastPeriod) {
            cycleData.lastPeriod = new Date(cycleData.lastPeriod);
        }
    }
    cycleMode = loadLocal('cycleMode') || 'menstrual';
    return cycleData;
}

function saveCycleDataFn(data) {
    cycleData = data;
    if (cycleMode === 'menstrual') {
        saveLocal('cycleData', { lastPeriod: data.lastPeriod.toISOString(), cycleLength: data.cycleLength, periodLength: data.periodLength });
    } else {
        saveLocal('cycleData', { menopauseDate: data.menopauseDate });
    }
    saveLocal('cycleMode', cycleMode);
}

function setCycleMode(mode) {
  cycleMode = mode;
  saveLocal('cycleMode', mode);

  const btnMenstrual = document.getElementById('mode-menstrual');
  const btnMenopause = document.getElementById('mode-menopause');
  const menstrualSettings = document.getElementById('menstrual-settings');
  const menopauseSettings = document.getElementById('menopause-settings');

  if (mode === 'menstrual') {
      btnMenstrual.className = 'flex-1 py-2 px-4 border-2 border-primary bg-pink-50 text-primary rounded-lg font-medium';
      btnMenopause.className = 'flex-1 py-2 px-4 border-2 border-gray-200 text-gray-600 rounded-lg font-medium hover:border-gray-300';
      if (menstrualSettings) menstrualSettings.classList.remove('hidden');
      if (menopauseSettings) menopauseSettings.classList.add('hidden');
  } else {
      btnMenstrual.className = 'flex-1 py-2 px-4 border-2 border-gray-200 text-gray-600 rounded-lg font-medium hover:border-gray-300';
      btnMenopause.className = 'flex-1 py-2 px-4 border-2 border-primary bg-blue-50 text-primary rounded-lg font-medium';
      if (menstrualSettings) menstrualSettings.classList.add('hidden');
      if (menopauseSettings) menopauseSettings.classList.remove('hidden');
  }
}

function updateMenopauseUI() {
    if (cycleMode !== 'menopause' || !cycleData || !cycleData.menopauseDate) return;

    const menopauseDate = new Date(cycleData.menopauseDate);
    const today = new Date();
    const yearsSince = Math.floor((today - menopauseDate) / (365.25 * 24 * 60 * 60 * 1000));
    const monthsSince = Math.floor((today - menopauseDate) / (30.44 * 24 * 60 * 60 * 1000));

    const durationEl = document.getElementById('menopause-duration');
    if (durationEl) {
        let word = currentLang === 'en' ? (yearsSince === 1 ? 'year' : 'years') :
                   currentLang === 'kz' ? getYearWordKazakh(yearsSince) :
                   getYearWord(yearsSince);
        if (yearsSince > 0) {
            durationEl.textContent = t('menopause_duration_years', { n: yearsSince, word: word });
        } else if (monthsSince > 0) {
            durationEl.textContent = t('menopause_duration_months', { n: monthsSince });
        } else {
            durationEl.textContent = t('menopause_recently');
        }
    }
}

function getYearWord(n) {
    if (n === 1) return 'год';
    if (n >= 2 && n <= 4) return 'года';
    return 'лет';
}

function getCycleDay(date = new Date()) {
  if (!cycleData) return null;
  let periodStart = new Date(cycleData.lastPeriod);
  while (addDays(periodStart, cycleData.cycleLength) <= date) { periodStart = addDays(periodStart, cycleData.cycleLength); }
  return daysBetween(periodStart, date) + 1;
}

function getDayPhase(date) {
  if (!cycleData) return null;
  let periodStart = new Date(cycleData.lastPeriod);
  while (addDays(periodStart, cycleData.cycleLength) <= date) periodStart = addDays(periodStart, cycleData.cycleLength);
  while (periodStart > date) periodStart = addDays(periodStart, -cycleData.cycleLength);
  const cycleDay = daysBetween(periodStart, date) + 1;
  const ovulationDay = cycleData.cycleLength - 14;
  if (cycleDay <= cycleData.periodLength) return 'period';
  if (cycleDay === ovulationDay) return 'ovulation';
  if (cycleDay >= 5 && cycleDay <= 7) return 'exam';
  return null;
}

function updateCycleUI() {
  loadCycleData();

  setCycleMode(cycleMode);

  if (!cycleData || (!cycleData.lastPeriod && !cycleData.menopauseDate)) {
      show(document.getElementById('cycle-setup'));
      hide(document.getElementById('cycle-calendar-container'));
      return;
  }

  hide(document.getElementById('cycle-setup'));
  show(document.getElementById('cycle-calendar-container'));

  const menstrualView = document.getElementById('menstrual-view');
  const menopauseView = document.getElementById('menopause-view');

  if (cycleMode === 'menopause') {
    if (menstrualView) menstrualView.classList.add('hidden');
    if (menopauseView) menopauseView.classList.remove('hidden');
    updateMenopauseUI();
    return;
  } else {
    if (menstrualView) menstrualView.classList.remove('hidden');
    if (menopauseView) menopauseView.classList.add('hidden');
  }

  const today = new Date();
  const cycleDay = getCycleDay(today);

  const cycleDayEl = document.getElementById('current-cycle-day');
  if(cycleDayEl) cycleDayEl.textContent = cycleDay;

  let next = new Date(cycleData.lastPeriod);
  while (next <= today) next = addDays(next, cycleData.cycleLength);

  const daysToPeriodEl = document.getElementById('days-to-period');
  if(daysToPeriodEl) daysToPeriodEl.textContent = daysBetween(today, next);

  const ovulationDate = addDays(next, -14);
  const daysToOvulationEl = document.getElementById('days-to-ovulation');
  if(daysToOvulationEl) daysToOvulationEl.textContent = Math.max(0, daysBetween(today, ovulationDate));

  const reminder = document.getElementById('exam-reminder');
  if (cycleDay >= 5 && cycleDay <= 7) show(reminder);
  else hide(reminder);

  updateHomeStatus();
  renderCalendar();
  renderForecast();
}

function updateHomeStatus() {
  const cycleDay = getCycleDay();
  if (cycleDay && cycleData) {
    const homeDay = document.getElementById('home-cycle-day');
    if(homeDay) homeDay.textContent = cycleDay;

    let next = new Date(cycleData.lastPeriod);
    while (next <= new Date()) next = addDays(next, cycleData.cycleLength);

    const nextPeriodEl = document.getElementById('home-next-period');
    if(nextPeriodEl) nextPeriodEl.textContent = next.toLocaleDateString(currentLang === 'kz' ? 'kk-KZ' : (currentLang === 'en' ? 'en-US' : 'ru-RU'), { day: 'numeric', month: 'short' });

    const countdown = document.getElementById('home-period-countdown');
    if(countdown) countdown.textContent = `${daysBetween(new Date(), next)} ${t('till_period').split(' ')[0]}`;
  }
}

function renderCalendar() {
  const grid = document.getElementById('calendar-grid');
  if (!grid) return;

  const year = currentCalendarDate.getFullYear();
  const month = currentCalendarDate.getMonth();
  const months = {
      ru: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      kz: ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"],
      en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  };

  const monthYearEl = document.getElementById('calendar-month-year');
  if(monthYearEl) monthYearEl.textContent = `${months[currentLang]?.[month] || months.ru[month]} ${year}`;

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  let startDay = firstDay.getDay() - 1; if (startDay < 0) startDay = 6;
  const today = new Date();
  let html = '';
  for (let i = 0; i < startDay; i++) html += `<div class="calendar-day"></div>`;
  for (let day = 1; day <= lastDay.getDate(); day++) {
    const date = new Date(year, month, day);
    const phase = getDayPhase(date);
    const isToday = date.toDateString() === today.toDateString();
    let classes = 'calendar-day';
    if (isToday) classes += ' today';
    if (phase) classes += ` ${phase}`;
    html += `<div class="${classes}">${day}</div>`;
  }
  grid.innerHTML = html;
}

function renderForecast() {
    const container = document.getElementById('forecast-list');
    if(!container || !cycleData) return;
    let next = new Date(cycleData.lastPeriod);
    while (next <= new Date()) next = addDays(next, cycleData.cycleLength);
    let html = '';
    for(let i=0; i<3; i++) {
        const start = next; const end = addDays(start, cycleData.periodLength - 1);
        const monthNames = { ru: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], kz: ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"], en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] };
        const monthName = monthNames[currentLang]?.[start.getMonth()] || monthNames.ru[start.getMonth()];
        html += `<div class="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
            <span class="font-medium text-gray-700">${monthName}</span>
            <span class="text-sm text-gray-500">${start.getDate()} - ${end.getDate()}</span>
        </div>`;
        next = addDays(next, cycleData.cycleLength);
    }
    container.innerHTML = html;
}

// ========== CLINICS ==========
function initMap() {
    if (map) return;
    const mapEl = document.getElementById('map');
    if (!mapEl) return;
    map = L.map('map').setView([51.128, 71.430], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    renderClinics();
}

function renderClinics() {
  if (!map) return;
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  const searchEl = document.getElementById('search-clinics');
  const typeEl = document.getElementById('filter-type');

  const search = searchEl?.value.toLowerCase() || '';
  const type = typeEl?.value || '';

  const filtered = clinicsData.filter(c => {
    const matchSearch = !search || c.name.toLowerCase().includes(search) || c.address.toLowerCase().includes(search);
    const matchType = !type || c.type === type;
    return matchSearch && matchType;
  });

  filtered.forEach(c => {
    const m = L.marker([c.lat, c.lng]).addTo(map).bindPopup(`<b>${c.name}</b><br>${c.address}`);
    markers.push(m);
  });

  const listEl = document.getElementById('clinics-list');
  if(listEl) {
      listEl.innerHTML = filtered.map(c => `
        <div class="p-3 border rounded-lg hover:border-primary cursor-pointer bg-white" onclick="focusClinic(${c.lat}, ${c.lng})">
          <p class="font-medium">${c.name}</p>
          <p class="text-xs text-gray-500">${c.address}</p>
        </div>
      `).join('');
  }

  if (filtered.length > 0) {
    const bounds = L.latLngBounds(filtered.map(c => [c.lat, c.lng]));
    map.fitBounds(bounds, {padding: [20, 20]});
  }
}

function focusClinic(lat, lng) {
    if(map) {
        map.setView([lat, lng], 16);
        markers.forEach(m => {
            if(Math.abs(m.getLatLng().lat - lat) < 0.001) m.openPopup();
        });
    }
}

// ========== ACCOUNT ==========
function updateAccountUI() {
  const progress = LearningManager.getProgress();

  const xp = progress.totalPoints || 0;
  document.getElementById('account-points').textContent = xp;
  document.getElementById('account-streak').textContent = progress.streak;
  document.getElementById('account-days').textContent = progress.completedDays.length;
  document.getElementById('account-achievements').textContent = progress.achievements.length;
}

function renderAccount() {
  if (currentUser) {
    document.getElementById('account-logged-in').classList.remove('hidden');
    document.getElementById('account-not-logged').classList.add('hidden');
    document.getElementById('account-name').textContent = currentUser.name;
    document.getElementById('account-email').textContent = currentUser.email;
    document.getElementById('account-since').textContent = currentUser.registered ? new Date(currentUser.registered).toLocaleDateString() : 'N/A';
  } else {
    document.getElementById('account-logged-in').classList.add('hidden');
    document.getElementById('account-not-logged').classList.remove('hidden');
  }
  updateAccountUI();
}

function updateAuthUI() {
  // Auth UI updates handled in modal functions
}

function showAuthModal() {
  document.getElementById('auth-modal').classList.remove('hidden');
  showLoginForm();
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.add('hidden');
  document.getElementById('auth-error').classList.add('hidden');
  document.getElementById('auth-success').classList.add('hidden');
}

function showLoginForm() {
  document.getElementById('login-form').classList.remove('hidden');
  document.getElementById('register-form').classList.add('hidden');
  document.getElementById('password-reset-form').classList.add('hidden');
  document.getElementById('auth-modal-title').textContent = t('auth_login');
}

function showRegisterForm() {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('register-form').classList.remove('hidden');
  document.getElementById('password-reset-form').classList.add('hidden');
  document.getElementById('auth-modal-title').textContent = t('auth_register');
}

function showPasswordReset() {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('register-form').classList.add('hidden');
  document.getElementById('password-reset-form').classList.remove('hidden');
}

function requestPasswordReset() {
  const email = document.getElementById('reset-email').value;
  if (email) {
    document.getElementById('auth-success').textContent = t('alert_reset_sent');
    document.getElementById('auth-success').classList.remove('hidden');
  }
}

function showSuccess(msg) {
  const el = document.getElementById('auth-success');
  el.textContent = msg;
  el.classList.remove('hidden');
  setTimeout(() => closeAuthModal(), 1000);
}

function showChangePasswordModal() {
  alert(t('alert_pass_change'));
}

// Achievements modal
function showAchievement(achievement) {
  document.getElementById('achievement-icon').textContent = achievement.icon;
  document.getElementById('achievement-title').textContent = achievement.title;
  document.getElementById('achievement-desc').textContent = achievement.icon + ' ' + achievement.title;
  document.getElementById('achievement-modal').classList.remove('hidden');
}

function closeAchievementModal() {
  document.getElementById('achievement-modal').classList.add('hidden');
}

// Premium modal
function showPremiumModal() {
  document.getElementById('premium-modal').classList.remove('hidden');
}

function closePremiumModal() {
  document.getElementById('premium-modal').classList.add('hidden');
}

function clearAllData() { if(confirm(t('alert_confirm_reset'))) { localStorage.clear(); location.reload(); } }

function resetCycleData() {
    if(confirm(t('alert_confirm_cycle_reset'))) {
        localStorage.removeItem('cycleData');
        cycleData = null;
        show(document.getElementById('cycle-setup'));
        hide(document.getElementById('cycle-calendar-container'));
        updateHomeStatus();
    }
}

// ========== AI CHATBOT ==========
function sendAIMessage() {
  const input = document.getElementById('ai-input');
  const text = input.value.trim();
  if (!text) return;

  const container = document.getElementById('ai-messages');

  container.insertAdjacentHTML('beforeend', `
    <div class="bg-primary text-white p-3 rounded-2xl rounded-tr-none ml-auto max-w-[80%] break-words">
      ${text}
    </div>
  `);

  input.value = '';
  container.scrollTop = container.scrollHeight;

  const typingId = 'typing-' + Date.now();
  container.insertAdjacentHTML('beforeend', `
    <div id="${typingId}" class="bg-white p-3 rounded-2xl rounded-tl-none max-w-[80%] text-gray-400 italic">
      ${currentLang === 'ru' ? 'Печатает...' : currentLang === 'kz' ? 'Жазып жатыр...' : 'Typing...'}
    </div>
  `);

  container.scrollTop = container.scrollHeight;

  setTimeout(() => {
    document.getElementById(typingId)?.remove();
    const response = generateAIResponse(text);
    container.insertAdjacentHTML('beforeend', `
      <div class="bg-white p-3 rounded-2xl rounded-tl-none max-w-[80%]">
        ${response}
      </div>
    `);
    container.scrollTop = container.scrollHeight;
  }, 1000 + Math.random() * 800);
}

function generateAIResponse(text) {
  const tLower = text.toLowerCase();
  const langTexts = {
    ru: {
      pain: `Это может быть важный симптом.<br><br>
      ⚠️ Если вы чувствуете уплотнение или боль — рекомендуется обратиться к врачу и сделать УЗИ или маммографию.<br><br>
      Не откладывайте — ранняя диагностика критически важна.`,
      cycle: `Менструальный цикл в норме длится 21–35 дней.<br><br>
      📅 Лучшее время для самообследования груди — 5–7 день цикла.<br><br>
      В вашем приложении есть трекер — используйте его для точного контроля.`,
      cancer: `Рак молочной железы — одно из самых распространённых заболеваний у женщин.<br><br>
      ❗ Но при раннем выявлении выживаемость достигает 90–98%.<br><br>
      Регулярные проверки — ключ к безопасности.`,
      clinic: `Вы можете открыть раздел "Клиники" в приложении 📍<br><br>
      Там показаны ближайшие центры маммографии в Астане с картой.`,
      advice: `Общие рекомендации:<br><br>
      • Делайте самообследование раз в месяц<br>
      • Проходите УЗИ/маммографию по возрасту<br>
      • Следите за изменениями<br><br>
      Если есть сомнения — лучше проверить.`,
      default: `Я могу помочь с вопросами о здоровье груди, симптомах и профилактике.<br><br>
      Задайте вопрос — я постараюсь дать полезную рекомендацию. 💗`
    },
    kz: {
      pain: `Бұл маңызды белгілер болуы мүмкін.<br><br>
      ⚠️ Егер сізде түйін немесе ауру сезініп жатсаңыз — дәрігерге жүгініп, УДЗ немесе маммография жасатыңыз.<br><br>
      Кешіктірмеу — ерте диагностика өте маңызды.`,
      cycle: `Етеккір циклі қалыпты жағдайда 21–35 күн.<br><br>
      📅 Кеуде қуысын өзіндік тексеру үшін ең жақсы уақыт — циклдің 5–7 күні.<br><br>
      Қолданбада трекер бар — нақты бақылау үшін пайдаланыңыз.`,
      cancer: `Сүт безі обыры — әйелдер арасындағы ең кең таралған аурулардың бірі.<br><br>
      ❗ Бірақ ерте анықтаған кезде өмірлік деңгей 90–98%-ке жетеді.<br><br>
      Түрақты тексерулер — қауіпсіздіктің кілті.`,
      clinic: `Сіз "Клиникалар" бөлімін аша аласыз 📍<br><br>
      Онда Астанадағы ең жақын маммография орталықтары картамен көрсетілген.`,
      advice: `Жалпы ұсыныстар:<br><br>
      • Айына бір рет өзіндік тексеру жасаңыз<br>
      • Жасқа байланысты УДЗ/маммографиядан өтіңіз<br>
      • Өзгерістерге қараңыз<br><br>
      Күдік болса — тексертіңіз.`,
      default: `Мен кеуде денсаулығы, белгілер және алдын алу туралы сұрақтарда көмектесе аламын.<br><br>
      Сұрақ қойыңыз — мен пайдалы ұсыныс беруге тырысамын. 💗`
    },
    en: {
      pain: `This could be an important symptom.<br><br>
      ⚠️ If you feel a lump or pain — see a doctor and get an ultrasound or mammography.<br><br>
      Don't delay — early diagnosis is critical.`,
      cycle: `The menstrual cycle normally lasts 21–35 days.<br><br>
      📅 The best time for breast self-exam is day 5–7 of your cycle.<br><br>
      The app has a tracker — use it for accurate control.`,
      cancer: `Breast cancer is one of the most common diseases in women.<br><br>
      ❗ But with early detection, survival reaches 90–98%.<br><br>
      Regular checks are the key to safety.`,
      clinic: `You can open the "Clinics" section in the app 📍<br><br>
      It shows the nearest mammography centers in Astana with a map.`,
      advice: `General recommendations:<br><br>
      • Do self-exam monthly<br>
      • Get ultrasound/mammography by age<br>
      • Monitor for changes<br><br>
      If in doubt — get checked.`,
      default: `I can help with questions about breast health, symptoms, and prevention.<br><br>
      Ask a question — I'll try to give useful advice. 💗`
    }
  };

  const texts = langTexts[currentLang] || langTexts.ru;

  if (tLower.includes("боль") || tLower.includes("уплотн") || tLower.includes("шиш") || tLower.includes("ауру") || tLower.includes("tүйін") || tLower.includes("pain") || tLower.includes("lump")) {
    return texts.pain;
  }

  if (tLower.includes("цикл") || tLower.includes("месяч") || tLower.includes("етеккір") || tLower.includes("cycle") || tLower.includes("period")) {
    return texts.cycle;
  }

  if (tLower.includes("рак") || tLower.includes("онко") || tLower.includes("обыр") || tLower.includes("cancer") || tLower.includes("онкология")) {
    return texts.cancer;
  }

  if (tLower.includes("где") || tLower.includes("клиник") || tLower.includes("маммограф") || tLower.includes("қайда") || tLower.includes("клиника") || tLower.includes("where") || tLower.includes("clinic")) {
    return texts.clinic;
  }

  if (tLower.includes("что делать") || tLower.includes("совет") || tLower.includes("не істеу") || tLower.includes("advice") || tLower.includes("what to do")) {
    return texts.advice;
  }

  return texts.default;
}

// ========== NOTIFICATIONS ==========
async function enableNotifications() {
  if (!('Notification' in window)) {
    alert('Браузер не поддерживает уведомления');
    return;
  }

  if (Notification.permission === 'granted') {
    return;
  }

  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    alert(t('alert_exam'));
  }
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  if (window.feather) feather.replace();

  const savedLang = loadLocal('appLang');
  if (savedLang) currentLang = savedLang;
  setLanguage(currentLang);

  AuthManager.checkAuth();
  updateAuthUI();
  renderAccount();

  window.addEventListener('hashchange', () => Router.handleRoute());
  Router.handleRoute();

  loadCycleData();
  updateHomeStatus();
  updateHomeXP();

  document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
          document.getElementById('mobile-menu')?.classList.add('hidden');
      });
  });

  document.getElementById('mobile-menu-btn')?.addEventListener('click', () => document.getElementById('mobile-menu')?.classList.remove('hidden'));
  document.getElementById('close-mobile-menu')?.addEventListener('click', () => document.getElementById('mobile-menu')?.classList.add('hidden'));

  document.getElementById('calculate-risk-btn')?.addEventListener('click', calculateRisk);
  document.getElementById('skip-risk-btn')?.addEventListener('click', () => hide(document.getElementById('risk-modal')));
  document.getElementById('continue-after-risk')?.addEventListener('click', () => hide(document.getElementById('risk-modal')));
  document.getElementById('recalculate-risk')?.addEventListener('click', () => show(document.getElementById('risk-modal')));

  document.getElementById('save-cycle-settings')?.addEventListener('click', () => {
    if (cycleMode === 'menopause') {
      const val = document.getElementById('setup-menopause-date').value;
      if (!val) return alert(t('alert_enter_menopause_date'));
      saveCycleDataFn({ menopauseDate: val });
      updateCycleUI();
    } else {
      const val = document.getElementById('setup-last-period').value;
      if (!val) return alert(t('alert_enter_date'));
      saveCycleDataFn({ lastPeriod: new Date(val), cycleLength: parseInt(document.getElementById('setup-cycle-length').value) || 28, periodLength: parseInt(document.getElementById('setup-period-length').value) || 5 });
      updateCycleUI();
    }
  });

  document.getElementById('reset-cycle-btn')?.addEventListener('click', resetCycleData);
  document.getElementById('edit-cycle-settings')?.addEventListener('click', () => { show(document.getElementById('cycle-setup')); hide(document.getElementById('cycle-calendar-container')); });

  document.getElementById('prev-month')?.addEventListener('click', () => { currentCalendarDate.setMonth(currentCalendarDate.getMonth()-1); renderCalendar(); });
  document.getElementById('next-month')?.addEventListener('click', () => { currentCalendarDate.setMonth(currentCalendarDate.getMonth()+1); renderCalendar(); });

  document.getElementById('lang-btn')?.addEventListener('click', (e) => { e.stopPropagation(); document.getElementById('lang-dropdown')?.classList.toggle('hidden'); });
  document.addEventListener('click', () => hide(document.getElementById('lang-dropdown')));

  document.getElementById('ai-btn')?.addEventListener('click', () => show(document.getElementById('ai-modal')));
  document.getElementById('ai-close')?.addEventListener('click', () => hide(document.getElementById('ai-modal')));
  document.getElementById('ai-send')?.addEventListener('click', sendAIMessage);
  document.getElementById('ai-input')?.addEventListener('keypress', (e) => { if(e.key === 'Enter') sendAIMessage(); });

  document.getElementById('search-clinics')?.addEventListener('input', renderClinics);
  document.getElementById('filter-type')?.addEventListener('change', renderClinics);

  document.getElementById('exam-done-btn')?.addEventListener('click', () => { hide(document.getElementById('exam-reminder')); alert(t('alert_exam')); });

  if (!loadLocal('riskDone')) setTimeout(() => show(document.getElementById('risk-modal')), 500);

  document.getElementById('register-password')?.addEventListener('input', function() {
    const bar = document.getElementById('password-strength-bar');
    const len = this.value.length;
    let strength = 0;
    if (len >= 8) strength += 50;
    if (/\d/.test(this.value)) strength += 50;
    bar.style.width = strength + '%';
    bar.style.background = strength < 50 ? '#ef4444' : strength < 100 ? '#f59e0b' : '#10b981';
  });
});
