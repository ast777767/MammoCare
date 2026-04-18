// ========== ПЕРЕВОДЫ ==========
const translations = {
  ru: {
    nav_home: "Главная", nav_learn: "Обучение", nav_articles: "Статьи", nav_cycle: "Цикл", nav_clinics: "Клиники", nav_about: "О нас", nav_account: "Аккаунт",
    mob_menu: "Меню",
    home_welcome: "Добро пожаловать в MammoCare", home_desc: "Осознание сегодня - может спасти жизнь завтра",
    btn_cycle: "Трекер", btn_clinic: "Клиники", btn_self_exam: "Пройти самообследование",
    home_risk_label: "Ваш риск", recalc: "Пересчитать",
    stats_title: "Статистика рака груди", stats_kz: "🇰🇿 Казахстан", stats_kz_desc: "место по заболеваемости среди женщин", stats_world: "🌍 В мире", stats_world_desc: "случаев ежегодно (по данным ВОЗ)", stats_fact: "Раннее обнаружение повышает выживаемость до 98%",
    useful_info_title: "Полезная информация", info_self_title: "Самообследование", info_self_desc: "Делайте это раз в месяц. Самообследование занимает 5 минут.", info_age_title: "Скрининг", info_age_desc: "Маммография рекомендована женщинам старше 30 лет.", link_all_articles: "Читать все статьи →",
    articles_title: "Полезная информация",
    premium_banner_title: "Разблокируйте Premium!", premium_banner_desc: "Эксклюзивные уроки и персональные рекомендации", btn_learn_more: "Узнать больше",

    // Auth
    auth_login: "Вход", auth_register: "Регистрация", auth_email: "Email", auth_password: "Пароль", auth_password_req: "Пароль (мин. 8 символов, 1 цифра)",
    auth_name: "Имя", auth_confirm_password: "Подтвердите пароль", auth_remember: "Запомнить меня", auth_forgot: "Забыли пароль?",
    auth_terms_agree: "Я согласен с", auth_terms: "условиями использования", auth_and: "и", auth_privacy: "политикой конфиденциальности",
    auth_no_account: "Нет аккаунта?", auth_register_link: "Зарегистрироваться", auth_has_account: "Уже есть аккаунт?", auth_login_link: "Войти",
    auth_reset_desc: "Введите email для восстановления пароля", btn_reset_password: "Восстановить пароль", auth_back_login: "Вернуться ко входу",
    btn_login: "Войти", btn_register: "Зарегистрироваться",

    // Risk modal
    risk_welcome: "Добро пожаловать!", risk_subtitle: "Ответьте на вопросы для расчета риска",
    risk_age: "Ваш возраст", risk_weight: "Вес (кг)", risk_height: "Рост (см)", risk_family: "Наследственность", risk_smoke: "Курение", risk_symptoms: "Жалобы",
    opt_no: "Нет", opt_distant: "Дальние родственники", opt_close: "Мама/сестра",
    opt_no_smoke: "Не курю", opt_ex_smoke: "Бросила", opt_smoke: "Курю",
    opt_no_symptoms: "Нет", opt_discomfort: "Дискомфорт", opt_pain: "Уплотнения/боль",
    btn_calc: "Рассчитать", btn_skip: "Пропустить", btn_continue: "Продолжить",
    risk_low: "Низкий риск", risk_moderate: "Умеренный риск", risk_high: "Высокий риск",
    risk_adv_low: "Продолжайте здоровый образ жизни.", risk_adv_mod: "Рекомендована консультация врача.", risk_adv_high: "Срочно обратитесь к врачу.",

    // Self exam
    self_exam_title: "Самообследование", self_exam_video: "Видео: Как проводить самообследование", self_exam_intro: "Посмотрите видео перед началом",
    self_exam_step: "Шаг {current}/{total}", self_exam_no: "Нет", self_exam_yes: "Да",
    self_exam_alert_done: "Вы уже проходили тест сегодня", self_exam_result_urgent: "⚠️ Срочно к врачу",
    self_exam_result_concern: "❗ Есть подозрения", self_exam_result_ok: "✅ Всё нормально",
    self_exam_close: "Закрыть",

    // Achievement
    achievement_unlocked: "Достижение разблокировано!", btn_excellent: "Отлично!",

    // Premium
    premium_title: "Premium возможности", premium_desc: "Разблокируйте дополнительные функции!",
    premium_exclusive: "Эксклюзивные уроки и материалы", premium_recommendations: "Персональные рекомендации", premium_discount: "Скидки на маммографию до 30%",
    btn_later: "Позже",

    // Learning
    learn_title: "30-дневная программа", learn_desc: "Укрепите здоровье шаг за шагом",
    card_points: "Баллов", card_streak: "Дней подряд", label_progress: "Прогресс",
    achievements_title: "Достижения", btn_notifications: "Включить напоминания",
    lesson_open: "Доступно", lesson_locked: "Заблокировано", lesson_completed: "Пройдено",
    complete_lesson: "Завершить урок (+{xp} XP)",
    quiz_title: "Проверьте свои знания",

    // Cycle
    cycle_title: "Настройка трекера", cycle_menstrual: "Менструальный цикл", cycle_menopause: "Менопауза",
    cycle_date: "Дата последних месячных", cycle_menopause_date: "Дата наступления менопаузы",
    cycle_len: "Длина цикла (дни)", period_len: "Длина месячных (дни)",
    cycle_about_menopause: "О менопаузе", cycle_menopause_tip: "После менопаузы риск рака молочной железы увеличивается. Важно:",
    cycle_meno_mammo: "Регулярно проходить маммографию", cycle_meno_self: "Продолжать самообследование", cycle_meno_weight: "Поддерживать здоровый вес",
    today: "Сегодня", day: "День", till_period: "до месячных", till_ovulation: "до овуляции",
    exam_title: "Время для самообследования!", exam_desc: "Оптимальный период (5-7 день).",
    forecast: "Прогноз на 3 месяца",
    label_mode: "Режим", btn_save: "Сохранить", btn_reset: "Сброс", btn_done: "Готово",
    legend_period: "Месячные", legend_ovulation: "Овуляция", edit_settings: "Изменить настройки",

    // Days of week
    day_mon: "Пн", day_tue: "Вт", day_wed: "Ср", day_thu: "Чт", day_fri: "Пт", day_sat: "Сб", day_sun: "Вс",

    // Menopause
    menopause_title: "Менопауза", menopause_active: "Активный режим", menopause_recommendations: "Рекомендации для вас",
    menopause_mammo: "Маммография", menopause_mammo_desc: "После менопаузы рекомендуется проходить ежегодно",
    menopause_self: "Самообследование", menopause_self_desc: "Продолжайте делать ежемесячно",
    menopause_lifestyle: "Здоровый образ жизни", menopause_lifestyle_desc: "Контролируйте вес, занимайтесь спортом",
    menopause_reminder: "Напоминание о маммографии", menopause_reminder_text: "Проверьте, когда вы проходили последнюю маммографию.",
    menopause_duration_years: "Менопауза наступила {n} {word} назад",
    menopause_duration_months: "Менопауза наступила {n} мес. назад",
    menopause_recently: "Менопауза наступила недавно",

    // Clinics
    clinics_title: "Клиники маммографии", clinics_desc: "Найдите ближайший центр в Астане.",
    list: "Список", filter_all: "Все", filter_public: "Гос.", filter_private: "Частные",
    placeholder_search: "Поиск...",

    // About
    about_title: "О проекте MammoCare", about_desc: "Проект MammoCare был создан нашей командой девушек как ответ на одну из самых острых и недооценённых проблем здоровья женщин в Казахстане — высокий уровень заболеваемости и смертности от рака молочной железы.",
    mission_title: "Миссия", mission_desc: "Снизить смертность от рака молочной железы за счёт раннего выявления, цифрового мониторинга здоровья и доступной профилактики.",
    contacts_title: "Контакты",
    footer_about: "О нас",

    // Account
    acc_member_since: "С нами с", card_days_completed: "Дней пройдено", card_achievements: "Достижений",
    btn_change_password: "Изменить пароль", btn_logout: "Выйти",
    acc_not_logged_title: "Вы не авторизованы", acc_not_logged_desc: "Войдите в аккаунт, чтобы сохранять прогресс обучения и персональные данные",
    btn_login_register: "Войти / Регистрация",
    config: "Настройте",

    // AI Chat
    ai_placeholder: "Вопрос...",

    // Alerts
    alert_exam: "Отлично!", alert_next_lesson: "Урок пройден! +{xp} XP. Следующий через 24 часа.", alert_time_left: "Ждите 24 часа.", alert_cycle_reset: "Данные цикла сброшены.",
    alert_pass_change: "Функция изменения пароля: свяжитесь с support@mammocare.kz",
    alert_enter_menopause_date: "Введите дату наступления менопаузы",
    alert_enter_date: "Введите дату",
    alert_confirm_reset: "Сбросить всё?",
    alert_confirm_cycle_reset: "Сбросить настройки цикла?",
    alert_reset_sent: "Инструкции отправлены на email",
    alert_account_created: "Аккаунт создан!",
    alert_welcome: "Добро пожаловать!",
    alert_fill_all_fields: "Заполните все поля",
    alert_password_requirements: "Пароль: мин. 8 символов, 1 цифра",
    alert_passwords_not_match: "Пароли не совпадают",
    alert_accept_terms: "Примите условия",
    alert_email_registered: "Email уже зарегистрирован",
    alert_user_not_found: "Пользователь не найден",
    alert_wrong_password: "Неверный пароль"
  },
  kz: {
    nav_home: "Басты", nav_learn: "Оқыту", nav_articles: "Мақалалар", nav_cycle: "Цикл", nav_clinics: "Клиникалар", nav_about: "Біз туралы", nav_account: "Аккаунт",
    mob_menu: "Мәзір",
    home_welcome: "MammoCare қош келдіңіз", home_desc: "Бүгінгі саналылық - ертең өміріңізді құтқаруы мүмкін.",
    btn_cycle: "Трекер", btn_clinic: "Клиникалар", btn_self_exam: "Өзіндік тексеруді өту",
    home_risk_label: "Тәуекел", recalc: "Қайта есептеу",
    stats_title: "Сүт безі обыры статистикасы", stats_kz: "🇰🇿 Қазақстан", stats_kz_desc: "әйелдер арасындағы ауруыстық бойынша орын", stats_world: "🌍 Әлемде", stats_world_desc: "жыл сайын (ВОЗ мәліметі)", stats_fact: "Ерте анықтау өмірлік деңгейді 98%-ке дейін арттырады",
    useful_info_title: "Пайдалы ақпарат", info_self_title: "Өзіндік тексеру", info_self_desc: "Оны айына бір рет жасаңыз. Өзіндік тексеру 5 минут уақыт алады.", info_age_title: "Скрининг", info_age_desc: "Маммография 30 жастан бастап ұсынылады.", link_all_articles: "Барлық мақалаларды оқу →",
    articles_title: "Пайдалы ақпарат",
    premium_banner_title: "Premium-ды ашыңыз!", premium_banner_desc: "Эксклюзивті сабақтар мен жеке ұсыныстар", btn_learn_more: "Көбірек білу",

    // Auth
    auth_login: "Кіру", auth_register: "Тіркелу", auth_email: "Email", auth_password: "Пароль", auth_password_req: "Пароль (мін. 8 таңба, 1 сан)",
    auth_name: "Аты", auth_confirm_password: "Парольді растау", auth_remember: "Есте сақтау", auth_forgot: "Парольді ұмыттыңыз ба?",
    auth_terms_agree: "Мен келісемін", auth_terms: "пайдалану шарттарымен", auth_and: "және", auth_privacy: "құпиялылық саясатымен",
    auth_no_account: "Аккаунт жоқ па?", auth_register_link: "Тіркелу", auth_has_account: "Аккаунт бар ма?", auth_login_link: "Кіру",
    auth_reset_desc: "Парольді қалпына келтіру үшін email енгізіңіз", btn_reset_password: "Парольді қалпына келтіру", auth_back_login: "Кіруге оралу",
    btn_login: "Кіру", btn_register: "Тіркелу",

    // Risk modal
    risk_welcome: "Қош келдіңіз!", risk_subtitle: "Тәуекелді есептеу үшін сұрақтарға жауап беріңіз",
    risk_age: "Жасыңыз", risk_weight: "Салмақ (кг)", risk_height: "Бой (см)", risk_family: "Тұқым", risk_smoke: "Темекі шегу", risk_symptoms: "Шағымдар",
    opt_no: "Жоқ", opt_distant: "Алыс туыстар", opt_close: "Ана/әпке",
    opt_no_smoke: "Темекі шекпеймін", opt_ex_smoke: "Тастадым", opt_smoke: "Шегемін",
    opt_no_symptoms: "Жоқ", opt_discomfort: "Жайсыздық", opt_pain: "Түйін/ауру",
    btn_calc: "Есептеу", btn_skip: "Өткізу", btn_continue: "Жалғастыру",
    risk_low: "Төмен тәуекел", risk_moderate: "Орташа тәуекел", risk_high: "Жоғары тәуекел",
    risk_adv_low: "Денсаулықты сақтауды жалғастырыңыз.", risk_adv_mod: "Дәрігермен кеңесіңіз.", risk_adv_high: "Дәрігерге дереу жүгініңіз.",

    // Self exam
    self_exam_title: "Өзіндік тексеру", self_exam_video: "Видео: Өзіндік тексеру қалай жүргізіледі", self_exam_intro: "Бастамас бұрын видеоны көріңіз",
    self_exam_step: "Қадам {current}/{total}", self_exam_no: "Жоқ", self_exam_yes: "Иә",
    self_exam_alert_done: "Сіз бүгін тексеруден өттіңіз", self_exam_result_urgent: "⚠️ Дәрігерге дереу",
    self_exam_result_concern: "❗ Күдік бар", self_exam_result_ok: "✅ Бәрі жақсы",
    self_exam_close: "Жабу",

    // Achievement
    achievement_unlocked: "Жетістік ашылды!", btn_excellent: "Керемет!",

    // Premium
    premium_title: "Premium мүмкіндіктері", premium_desc: "Қосымша функцияларды ашыңыз!",
    premium_exclusive: "Эксклюзивті сабақтар мен материалдар", premium_recommendations: "Жеке ұсыныстар", premium_discount: "Маммографияға 30%-ке дейін жеңілдіктер",
    btn_later: "Кейінірек",

    // Learning
    learn_title: "30 күндік бағдарлама", learn_desc: "Қадам сайын денсаулығыңызды нығайтыңыз",
    card_points: "Ұпай", card_streak: "Күн қатары", label_progress: "Прогресс",
    achievements_title: "Жетістіктер", btn_notifications: "Еске салғызуларды қосу",
    lesson_open: "Қолжетімді", lesson_locked: "Блокталған", lesson_completed: "Өтілді",
    complete_lesson: "Сабақты аяқтау (+{xp} XP)",
    quiz_title: "Біліміңізді тексеріңіз",

    // Cycle
    cycle_title: "Трекерді баптау", cycle_menstrual: "Етеккір циклі", cycle_menopause: "Менопауза",
    cycle_date: "Соңғы етеккір күні", cycle_menopause_date: "Менопауза басталған күн",
    cycle_len: "Цикл ұзақтығы (күн)", period_len: "Етеккір ұзақтығы (күн)",
    cycle_about_menopause: "Менопауза туралы", cycle_menopause_tip: "Менопаузадан кейін сүт безі обырының қаупі артады. Маңызды:",
    cycle_meno_mammo: "Маммографиядан жыл сайын өту", cycle_meno_self: "Өзіндік тексеруді жалғастыру", cycle_meno_weight: "Денсаулықты сақтау",
    today: "Бүгін", day: "Күн", till_period: "етеккірге", till_ovulation: "овуляцияға",
    exam_title: "Өзіндік тексеру уақыты!", exam_desc: "Оңтайлы кезең (5-7 күн).",
    forecast: "3 айға болжам",
    label_mode: "Режим", btn_save: "Сақтау", btn_reset: "Тазалау", btn_done: "Дайын",
    legend_period: "Етеккір", legend_ovulation: "Овуляция", edit_settings: "Баптауларды өзгерту",

    // Days of week
    day_mon: "Дс", day_tue: "Сс", day_wed: "Ср", day_thu: "Бс", day_fri: "Жм", day_sat: "Сб", day_sun: "Жк",

    // Menopause
    menopause_title: "Менопауза", menopause_active: "Белсенді режим", menopause_recommendations: "Сіз үшін ұсыныстар",
    menopause_mammo: "Маммография", menopause_mammo_desc: "Менопаузадан кейін жыл сайын өту ұсынылады",
    menopause_self: "Өзіндік тексеру", menopause_self_desc: "Ай сайын жалғастырыңыз",
    menopause_lifestyle: "Денсаулықты сақтау", menopause_lifestyle_desc: "Вес бақылау, спортпен айналысу",
    menopause_reminder: "Маммография ескертуі", menopause_reminder_text: "Соңғы маммографияңызды тексеріңіз.",
    menopause_duration_years: "Менопауза {n} {word} бұрын басталды",
    menopause_duration_months: "Менопауза {n} ай бұрын басталды",
    menopause_recently: "Менопауза жақнада басталды",

    // Clinics
    clinics_title: "Маммография клиникалары", clinics_desc: "Астанадағы ең жақын орталықты табыңыз.",
    list: "Тізім", filter_all: "Барлық", filter_public: "Мемлекеттік", filter_private: "Жеке",
    placeholder_search: "Іздеу...",

    // About
    about_title: "MammoCare жобасы туралы", about_desc: "MammoCare жобасы біздің қыздар командасы Қазақстандағы әйелдер денсаулығының ең ауыр және бағаланбаған проблемаларының біріне - сүт безі обырының жоғары ауруыстығы мен өлім-жітіміне жауап ретінде жасалды.",
    mission_title: "Міндет", mission_desc: "Ерте анықтау, цифрлық денсаулық мониторингі және қолжетімді профилактика арқылы сүт безі обырынан өлім-жітімі азайту.",
    contacts_title: "Байланыстар",
    footer_about: "Біз туралы",

    // Account
    acc_member_since: "Бізбен", card_days_completed: "Өтілген күн", card_achievements: "Жетістіктер",
    btn_change_password: "Парольді өзгерту", btn_logout: "Шығу",
    acc_not_logged_title: "Сіз авторизацияланбадыңыз", acc_not_logged_desc: "Оқу прогрессін және жеке мәліметтерді сақтау үшін аккаунтқа кіріңіз",
    btn_login_register: "Кіру / Тіркелу",
    config: "Баптаңыз",

    // AI Chat
    ai_placeholder: "Сұрақ...",

    // Alerts
    alert_exam: "Керемет!", alert_next_lesson: "Сабақ аяқталды! +{xp} XP. Келесі 24 сағаттан кейін.", alert_time_left: "24 сағат күтіңіз.", alert_cycle_reset: "Цикл мәліметтері тазаланды.",
    alert_pass_change: "Парольді өзгерту функциясы: support@mammocare.kz арқылы байланысыңыз",
    alert_enter_menopause_date: "Менопауза басталған күнді енгізіңіз",
    alert_enter_date: "Күнді енгізіңіз",
    alert_confirm_reset: "Барлығын тазалау?",
    alert_confirm_cycle_reset: "Цикл баптауларын тазалау?",
    alert_reset_sent: "Нұсқаулар email-ге жіберілді",
    alert_account_created: "Аккаунт жасалды!",
    alert_welcome: "Қош келдіңіз!",
    alert_fill_all_fields: "Барлық өрістерді толтырыңыз",
    alert_password_requirements: "Пароль: мін. 8 таңба, 1 сан",
    alert_passwords_not_match: "Парольдер сәйкес келмейді",
    alert_accept_terms: "Шарттарды қабылдаңыз",
    alert_email_registered: "Бұл email тіркелген",
    alert_user_not_found: "Пайдаланушы табылмады",
    alert_wrong_password: "Пароль қате"
  },
  en: {
    nav_home: "Home", nav_learn: "Learn", nav_articles: "Articles", nav_cycle: "Cycle", nav_clinics: "Clinics", nav_about: "About", nav_account: "Account",
    mob_menu: "Menu",
    home_welcome: "Welcome to MammoCare", home_desc: "Awareness today can save your life tomorrow.",
    btn_cycle: "Tracker", btn_clinic: "Clinics", btn_self_exam: "Start self-exam",
    home_risk_label: "Your risk", recalc: "Recalculate",
    stats_title: "Breast Cancer Statistics", stats_kz: "🇰🇿 Kazakhstan", stats_kz_desc: "rank in female oncology", stats_world: "🌍 Worldwide", stats_world_desc: "cases annually (WHO)", stats_fact: "Early detection increases survival to 98%",
    useful_info_title: "Useful Info", info_self_title: "Self-Exam", info_self_desc: "Do this monthly. Self-exam takes 5 minutes.", info_age_title: "Screening", info_age_desc: "Mammography recommended after 30.", link_all_articles: "Read all articles →",
    articles_title: "Knowledge Base",
    premium_banner_title: "Unlock Premium!", premium_banner_desc: "Exclusive lessons and personalized recommendations", btn_learn_more: "Learn more",

    // Auth
    auth_login: "Login", auth_register: "Register", auth_email: "Email", auth_password: "Password", auth_password_req: "Password (min. 8 chars, 1 digit)",
    auth_name: "Name", auth_confirm_password: "Confirm password", auth_remember: "Remember me", auth_forgot: "Forgot password?",
    auth_terms_agree: "I agree with", auth_terms: "terms of service", auth_and: "and", auth_privacy: "privacy policy",
    auth_no_account: "No account?", auth_register_link: "Register", auth_has_account: "Have account?", auth_login_link: "Login",
    auth_reset_desc: "Enter email for password reset", btn_reset_password: "Reset password", auth_back_login: "Back to login",
    btn_login: "Login", btn_register: "Register",

    // Risk modal
    risk_welcome: "Welcome!", risk_subtitle: "Answer questions for risk assessment",
    risk_age: "Your age", risk_weight: "Weight (kg)", risk_height: "Height (cm)", risk_family: "Heredity", risk_smoke: "Smoking", risk_symptoms: "Symptoms",
    opt_no: "No", opt_distant: "Distant relatives", opt_close: "Mother/Sister",
    opt_no_smoke: "Non-smoker", opt_ex_smoke: "Ex-smoker", opt_smoke: "Smoker",
    opt_no_symptoms: "None", opt_discomfort: "Discomfort", opt_pain: "Lumps/Pain",
    btn_calc: "Calculate", btn_skip: "Skip", btn_continue: "Continue",
    risk_low: "Low Risk", risk_moderate: "Moderate Risk", risk_high: "High Risk",
    risk_adv_low: "Continue healthy lifestyle.", risk_adv_mod: "Consult your doctor.", risk_adv_high: "See a doctor urgently.",

    // Self exam
    self_exam_title: "Self-Exam", self_exam_video: "Video: How to do self-exam", self_exam_intro: "Watch video before starting",
    self_exam_step: "Step {current}/{total}", self_exam_no: "No", self_exam_yes: "Yes",
    self_exam_alert_done: "You already completed the test today", self_exam_result_urgent: "⚠️ See a doctor urgently",
    self_exam_result_concern: "❗ There are concerns", self_exam_result_ok: "✅ Everything is fine",
    self_exam_close: "Close",

    // Achievement
    achievement_unlocked: "Achievement Unlocked!", btn_excellent: "Excellent!",

    // Premium
    premium_title: "Premium Features", premium_desc: "Unlock additional features!",
    premium_exclusive: "Exclusive lessons and materials", premium_recommendations: "Personalized recommendations", premium_discount: "Mammography discounts up to 30%",
    btn_later: "Later",

    // Learning
    learn_title: "30-Day Program", learn_desc: "Strengthen your health step by step",
    card_points: "Points", card_streak: "Day streak", label_progress: "Progress",
    achievements_title: "Achievements", btn_notifications: "Enable notifications",
    lesson_open: "Available", lesson_locked: "Locked", lesson_completed: "Completed",
    complete_lesson: "Complete lesson (+{xp} XP)",
    quiz_title: "Test your knowledge",

    // Cycle
    cycle_title: "Tracker Setup", cycle_menstrual: "Menstrual Cycle", cycle_menopause: "Menopause",
    cycle_date: "Last period date", cycle_menopause_date: "Menopause date",
    cycle_len: "Cycle length (days)", period_len: "Period length (days)",
    cycle_about_menopause: "About Menopause", cycle_menopause_tip: "After menopause, breast cancer risk increases. Important:",
    cycle_meno_mammo: "Regular mammography", cycle_meno_self: "Continue self-exam", cycle_meno_weight: "Maintain healthy weight",
    today: "Today", day: "Day", till_period: "until period", till_ovulation: "until ovulation",
    exam_title: "Self-exam time!", exam_desc: "Optimal period (5-7 day).",
    forecast: "3-Month Forecast",
    label_mode: "Mode", btn_save: "Save", btn_reset: "Reset", btn_done: "Done",
    legend_period: "Period", legend_ovulation: "Ovulation", edit_settings: "Edit settings",

    // Days of week
    day_mon: "Mon", day_tue: "Tue", day_wed: "Wed", day_thu: "Thu", day_fri: "Fri", day_sat: "Sat", day_sun: "Sun",

    // Menopause
    menopause_title: "Menopause", menopause_active: "Active Mode", menopause_recommendations: "Recommendations for you",
    menopause_mammo: "Mammography", menopause_mammo_desc: "Annual after menopause",
    menopause_self: "Self-Exam", menopause_self_desc: "Continue monthly",
    menopause_lifestyle: "Healthy Lifestyle", menopause_lifestyle_desc: "Control weight, exercise",
    menopause_reminder: "Mammography Reminder", menopause_reminder_text: "Check when you had last mammography.",
    menopause_duration_years: "Menopause started {n} {word} ago",
    menopause_duration_months: "Menopause started {n} months ago",
    menopause_recently: "Menopause started recently",

    // Clinics
    clinics_title: "Mammography Clinics", clinics_desc: "Find the nearest center in Astana.",
    list: "List", filter_all: "All", filter_public: "Public", filter_private: "Private",
    placeholder_search: "Search...",

    // About
    about_title: "About MammoCare", about_desc: "MammoCare was created by our team as a response to one of the most acute and undervalued women's health issues in Kazakhstan — high breast cancer incidence and mortality rates.",
    mission_title: "Mission", mission_desc: "Reduce breast cancer mortality through early detection, digital health monitoring, and accessible prevention.",
    contacts_title: "Contacts",
    footer_about: "About",

    // Account
    acc_member_since: "With us since", card_days_completed: "Days completed", card_achievements: "Achievements",
    btn_change_password: "Change password", btn_logout: "Logout",
    acc_not_logged_title: "You are not logged in", acc_not_logged_desc: "Login to save learning progress and personal data",
    btn_login_register: "Login / Register",
    config: "Setup",

    // AI Chat
    ai_placeholder: "Question...",

    // Alerts
    alert_exam: "Great!", alert_next_lesson: "Lesson completed! +{xp} XP. Next in 24 hours.", alert_time_left: "Wait 24 hours.", alert_cycle_reset: "Cycle data reset.",
    alert_pass_change: "Password change: contact support@mammocare.kz",
    alert_enter_menopause_date: "Enter menopause date",
    alert_enter_date: "Enter date",
    alert_confirm_reset: "Reset everything?",
    alert_confirm_cycle_reset: "Reset cycle settings?",
    alert_reset_sent: "Instructions sent to email",
    alert_account_created: "Account created!",
    alert_welcome: "Welcome!",
    alert_fill_all_fields: "Fill all fields",
    alert_password_requirements: "Password: min. 8 chars, 1 digit",
    alert_passwords_not_match: "Passwords don't match",
    alert_accept_terms: "Accept terms",
    alert_email_registered: "Email already registered",
    alert_user_not_found: "User not found",
    alert_wrong_password: "Wrong password"
  }
};

let currentLang = 'ru';

function t(key, params) {
  let str = translations[currentLang]?.[key] || translations['ru']?.[key] || key;
  if (params) {
    Object.keys(params).forEach(k => str = str.replace(`{${k}}`, params[k]));
  }
  return str;
}

function getYearWordKazakh(n) {
  if (n === 1) return 'жыл';
  if (n >= 2 && n <= 4) return 'жыл';
  return 'жыл';
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.textContent = t(key);
    }
  });

  renderArticlesGrid();
  renderLearningGrid();
  if (cycleData) updateCycleUI();
  updateHomeStatus();
  updateAccountUI();
  updateMenopauseTranslations();
  updateRiskTranslations();
  updateAuthTranslations();
}

function updateMenopauseTranslations() {
  const statusEl = document.getElementById('menopause-status');
  if (statusEl) statusEl.textContent = t('menopause_active');
}

function updateRiskTranslations() {
  // Risk modal translations are handled via data-i18n attributes
}

function updateAuthTranslations() {
  // Auth modal translations are handled via data-i18n attributes
}

function setLanguage(lang) {
  currentLang = lang;
  saveLocal('appLang', lang);
  const flags = { ru: '🇷🇺', kz: '🇰🇿', en: '🇬🇧' };
  const flagEl = document.getElementById('current-lang-flag');
  if (flagEl) flagEl.textContent = flags[lang];
  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown) dropdown.classList.add('hidden');
  applyTranslations();
}
