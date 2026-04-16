#!/usr/bin/env python3
"""Add i18n system to MammoCare - only translations object, NO structural changes"""

with open('/workspace/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Check if translations already exist
if 'const translations' in content:
    print("Translations already exist, skipping...")
    exit(0)

# 1. Find where </script> appears after feather-icons and add translations there
# The translations will be appended at the end of the first script block

translations_js = '''
// ========== TRANSLATIONS (i18n) ==========
const translations = {
  ru: {
    nav_home: "Главная", nav_learn: "Обучение", nav_articles: "Статьи",
    nav_cycle: "Цикл", nav_clinics: "Клиники", nav_about: "О нас",
    nav_account: "Аккаунт", nav_menu: "Меню",
    auth_login: "Вход", auth_email: "Email", auth_password: "Пароль",
    auth_remember: "Запомнить меня", auth_forgot: "Забыли пароль?",
    auth_login_btn: "Войти", auth_no_account: "Нет аккаунта?",
    auth_register_link: "Зарегистрироваться",
    auth_name: "Имя", auth_confirm_password: "Подтвердите пароль",
    auth_terms: "Я согласен с условиями и политикой",
    auth_register_btn: "Зарегистрироваться", auth_have_account: "Уже есть аккаунт?",
    auth_login_link: "Войти", auth_reset_title: "Введите email",
    auth_reset_btn: "Восстановить", auth_back_login: "Назад",
    achievement_unlocked: "Достижение!", achievement_great: "Отлично!",
    premium_title: "Premium", premium_unlock: "Разблокируйте!",
    premium_exclusive: "Уроки и материалы", premium_personal: "Рекомендации",
    premium_discount: "Скидки до 30%", premium_later: "Позже",
    risk_welcome: "Добро пожаловать!", risk_questions: "Ответьте на вопросы",
    risk_age: "Ваш возраст", risk_weight: "Вес (кг)", risk_height: "Рост (см)",
    risk_family: "Наследственность", risk_family_none: "Нет",
    risk_family_distant: "Дальние", risk_family_close: "Мама/сестра",
    risk_smoke: "Курение", risk_no_smoke: "Не курю", risk_quit: "Бросила", risk_yes_smoke: "Курю",
    risk_symptoms: "Жалобы", risk_symptoms_none: "Нет", risk_symptoms_discomfort: "Дискомфорт",
    risk_symptoms_pain: "Уплотнения/боль",
    risk_calculate: "Рассчитать", risk_skip: "Пропустить", risk_continue: "Продолжить",
    risk_recalculate: "Пересчитать", risk_your_risk: "Ваш риск",
    home_welcome: "Добро пожаловать в MammoCare",
    home_awareness: "Осознание сегодня - может спасти жизнь завтра.",
    home_tracker: "Трекер", home_clinics_btn: "Клиники",
    home_cycle_day: "День цикла", home_cycle_placeholder: "Настройте",
    home_next_period: "След. месячные", home_period_countdown: "До месячных",
    home_progress: "Прогресс", home_xp: "XP", home_start_course: "Начните курс",
    home_stats: "Статистика рака груди",
    home_kz_rank: "место по заболеваемости среди женщин",
    home_kz_cases: "новых случаев ежегодно",
    home_world_cases: "случаев ежегодно (ВОЗ)",
    home_world_fact: "Каждую 8-ю женщину затрагивает",
    home_survival: "Раннее обнаружение повышает выживаемость до 98%",
    home_info: "Полезная информация",
    home_selfexam_btn: "Пройти самообследование",
    home_read_all: "Читать все статьи →",
    self_exam: "Самообследование",
    self_exam_video_title: "Видео: Как проводить",
    self_exam_step: "Шаг", self_exam_of: "из",
    self_exam_yes: "Да", self_exam_no: "Нет",
    self_exam_result_normal: "Все в порядке",
    self_exam_result_warning: "Есть подозрения",
    self_exam_result_alert: "К врачу!",
    self_exam_close: "Закрыть",
    learn_title: "30-дневная программа",
    learn_subtitle: "Укрепите здоровье",
    learn_progress: "Прогресс", learn_complete: "Завершено",
    articles_title: "Статьи", articles_read_time: "мин",
    cycle_title: "Трекер цикла",
    cycle_period: "Период", cycle_ovulation: "Овуляция",
    cycle_fertile: "Фертильные", cycle_exam: "Осмотр",
    cycle_predict: "Предсказать", cycle_save: "Сохранить", cycle_reset: "Сбросить",
    cycle_menopause: "Менопауза", cycle_start: "Начало",
    cycle_length: "Длина", cycle_days: "дней",
    cycle_calendar: "Календарь",
    cycle_mon: "Пн", cycle_tue: "Вт", cycle_wed: "Ср", cycle_thu: "Чт",
    cycle_fri: "Пт", cycle_sat: "Сб", cycle_sun: "Вс",
    clinics_title: "Клиники", clinics_desc: "Карта Астаны",
    clinics_list: "Список", clinics_search: "Поиск...", clinics_all: "Все",
    about_title: "О нас", about_mission: "Миссия",
    about_mission_text: "Мы боремся с раком груди.",
    about_goal: "Цель", about_goal_text: "Раннее выявление спасает.",
    about_contact: "Контакты", about_address: "Астана, Казахстан",
    account_title: "Аккаунт", account_since: "С нами с",
    account_points: "Очки", account_streak: "Серия", account_level: "Уровень",
    account_days_learning: "дней обучения", account_achievements: "Достижения",
    account_settings: "Настройки", account_logout: "Выйти",
    notif_enable: "Включить уведомления", notif_enabled: "Уведомления включены",
    notif_not_supported: "Браузер не поддерживает",
    notif_denied: "Измените настройки браузера",
    notif_success: "Отлично!", notif_welcome: "Уведомления включены!",
    notif_exam_reminder: "Не забудьте о самообследовании!",
    close: "Закрыть", cancel: "Отмена", ok: "ОК"
  },
  kz: {
    nav_home: "Басты бет", nav_learn: "Оқу", nav_articles: "Мақалалар",
    nav_cycle: "Цикл", nav_clinics: "Клиникалар", nav_about: "Біз туралы",
    nav_account: "Аккаунт", nav_menu: "Мәзір",
    auth_login: "Кіру", auth_email: "Email", auth_password: "Құпия сөз",
    auth_remember: "Есте сақтау", auth_forgot: "Құпия сөзді ұмыттыңыз ба?",
    auth_login_btn: "Кіру", auth_no_account: "Аккаунт жоқ па?",
    auth_register_link: "Тіркелу",
    auth_name: "Аты", auth_confirm_password: "Растау",
    auth_terms: "Шарттарға келісемін",
    auth_register_btn: "Тіркелу", auth_have_account: "Аккаунт бар ма?",
    auth_login_link: "Кіру", auth_reset_title: "Email енгізіңіз",
    auth_reset_btn: "Қалпына келтіру", auth_back_login: "Артқа",
    achievement_unlocked: "Жетістік!", achievement_great: "Керемет!",
    premium_title: "Premium", premium_unlock: "Ашыңыз!",
    premium_exclusive: "Сабақтар", premium_personal: "Ұсыныстар",
    premium_discount: "30% жеңілдік", premium_later: "Кейінірек",
    risk_welcome: "Қош келдіңіз!", risk_questions: "Сұрақтарға жауап беріңіз",
    risk_age: "Жасыңыз", risk_weight: "Салмақ (кг)", risk_height: "Бой (см)",
    risk_family: "Тұқым қуаты", risk_family_none: "Жоқ",
    risk_family_distant: "Алыс", risk_family_close: "Ана/Әпке",
    risk_smoke: "Шылым", risk_no_smoke: "Шекпеймін", risk_quit: "Тастадым", risk_yes_smoke: "Шегемін",
    risk_symptoms: "Шағымдар", risk_symptoms_none: "Жоқ", risk_symptoms_discomfort: "Дискомфорт",
    risk_symptoms_pain: "Қатулар/Ауру",
    risk_calculate: "Есептеу", risk_skip: "Өткізу", risk_continue: "Жалғастыру",
    risk_recalculate: "Қайта есептеу", risk_your_risk: "Қауіп",
    home_welcome: "MammoCare қолданыңыз",
    home_awareness: "Бүгінгі саналылық - өмірді сақтайды.",
    home_tracker: "Трекер", home_clinics_btn: "Клиникалар",
    home_cycle_day: "Цикл күні", home_cycle_placeholder: "Баптаңыз",
    home_next_period: "Келесі айлық", home_period_countdown: "Айлыққа дейін",
    home_progress: "Үдеріс", home_xp: "XP", home_start_course: "Бастаңыз",
    home_stats: "Сүт безі обыры статистикасы",
    home_kz_rank: "әйелдердегі аурушаңдық",
    home_kz_cases: "жаңа жағдай жыл сайын",
    home_world_cases: "жағдай жыл сайын (ДДҰ)",
    home_world_fact: "Әрбір 8-ші әйелге",
    home_survival: "Ерте анықтау 98%-ке дейін",
    home_info: "Пайдалы ақпарат",
    home_selfexam_btn: "Өзіндік тексеру өткізу",
    home_read_all: "Барлық мақалалар →",
    self_exam: "Өзіндік тексеру",
    self_exam_video_title: "Видео: Қалай тексеру",
    self_exam_step: "Қадам", self_exam_of: "із",
    self_exam_yes: "Иә", self_exam_no: "Жоқ",
    self_exam_result_normal: "Бәрі жақсы",
    self_exam_result_warning: "Күдік бар",
    self_exam_result_alert: "Дәрігерге!",
    self_exam_close: "Жабу",
    learn_title: "30 күндік бағдарлама",
    learn_subtitle: "Денсаулықты нығайтыңыз",
    learn_progress: "Үдеріс", learn_complete: "Аяқталды",
    articles_title: "Мақалалар", articles_read_time: "мин",
    cycle_title: "Цикл трекері",
    cycle_period: "Айлық", cycle_ovulation: "Овуляция",
    cycle_fertile: "Фертилді", cycle_exam: "Тексеру",
    cycle_predict: "Болжау", cycle_save: "Сақтау", cycle_reset: "Бастаптай",
    cycle_menopause: "Менопауза", cycle_start: "Бастау",
    cycle_length: "Ұзындығы", cycle_days: "күн",
    cycle_calendar: "Күнтізбе",
    cycle_mon: "Дс", cycle_tue: "Сс", cycle_wed: "Ср", cycle_thu: "Бс",
    cycle_fri: "Жм", cycle_sat: "Сб", cycle_sun: "Жк",
    clinics_title: "Клиникалар", clinics_desc: "Астана картасы",
    clinics_list: "Тізімі", clinics_search: "Іздеу...", clinics_all: "Барлығы",
    about_title: "Біз туралы", about_mission: "Миссия",
    about_mission_text: "Біз обырмен күресуеміз.",
    about_goal: "Мақсат", about_goal_text: "Ерте анықтау сақтайды.",
    about_contact: "Байланыс", about_address: "Астана, Қазақстан",
    account_title: "Аккаунт", account_since: "Бізбен",
    account_points: "Ұпай", account_streak: "Серия", account_level: "Деңгей",
    account_days_learning: "күн оқу", account_achievements: "Жетістіктер",
    account_settings: "Баптаулар", account_logout: "Шығу",
    notif_enable: "Ескертулерді қосу", notif_enabled: "Қосылды",
    notif_not_supported: "Браузер қолдамайды",
    notif_denied: "Баптауларды өзгертіңіз",
    notif_success: "Тамаша!", notif_welcome: "Ескертулер қосылды!",
    notif_exam_reminder: "Тексеруді ұмытпаңыз!",
    close: "Жабу", cancel: "Болдырмау", ok: "Жарайды"
  },
  en: {
    nav_home: "Home", nav_learn: "Learn", nav_articles: "Articles",
    nav_cycle: "Cycle", nav_clinics: "Clinics", nav_about: "About",
    nav_account: "Account", nav_menu: "Menu",
    auth_login: "Login", auth_email: "Email", auth_password: "Password",
    auth_remember: "Remember me", auth_forgot: "Forgot password?",
    auth_login_btn: "Sign In", auth_no_account: "No account?",
    auth_register_link: "Register",
    auth_name: "Name", auth_confirm_password: "Confirm password",
    auth_terms: "I agree to terms and policy",
    auth_register_btn: "Register", auth_have_account: "Have account?",
    auth_login_link: "Sign In", auth_reset_title: "Enter email",
    auth_reset_btn: "Reset", auth_back_login: "Back",
    achievement_unlocked: "Achievement!", achievement_great: "Great!",
    premium_title: "Premium", premium_unlock: "Unlock!",
    premium_exclusive: "Lessons & materials", premium_personal: "Recommendations",
    premium_discount: "30% off", premium_later: "Later",
    risk_welcome: "Welcome!", risk_questions: "Answer questions",
    risk_age: "Your age", risk_weight: "Weight (kg)", risk_height: "Height (cm)",
    risk_family: "Heredity", risk_family_none: "No",
    risk_family_distant: "Distant", risk_family_close: "Mom/Sister",
    risk_smoke: "Smoking", risk_no_smoke: "Non-smoker", risk_quit: "Quit", risk_yes_smoke: "Smoker",
    risk_symptoms: "Symptoms", risk_symptoms_none: "None", risk_symptoms_discomfort: "Discomfort",
    risk_symptoms_pain: "Lumps/Pain",
    risk_calculate: "Calculate", risk_skip: "Skip", risk_continue: "Continue",
    risk_recalculate: "Recalculate", risk_your_risk: "Your risk",
    home_welcome: "Welcome to MammoCare",
    home_awareness: "Awareness today - can save life tomorrow.",
    home_tracker: "Tracker", home_clinics_btn: "Clinics",
    home_cycle_day: "Cycle Day", home_cycle_placeholder: "Configure",
    home_next_period: "Next Period", home_period_countdown: "Until period",
    home_progress: "Progress", home_xp: "XP", home_start_course: "Start course",
    home_stats: "Breast Cancer Statistics",
    home_kz_rank: "in disease incidence among women",
    home_kz_cases: "new cases annually",
    home_world_cases: "cases annually (WHO)",
    home_world_fact: "1 in 8 women affected",
    home_survival: "Early detection increases survival to 98%",
    home_info: "Useful Information",
    home_selfexam_btn: "Start Self-Exam",
    home_read_all: "Read all articles →",
    self_exam: "Self-Exam",
    self_exam_video_title: "Video: How to do exam",
    self_exam_step: "Step", self_exam_of: "of",
    self_exam_yes: "Yes", self_exam_no: "No",
    self_exam_result_normal: "All good",
    self_exam_result_warning: "Some concerns",
    self_exam_result_alert: "See doctor!",
    self_exam_close: "Close",
    learn_title: "30-day program",
    learn_subtitle: "Strengthen health",
    learn_progress: "Progress", learn_complete: "Completed",
    articles_title: "Articles", articles_read_time: "min",
    cycle_title: "Cycle Tracker",
    cycle_period: "Period", cycle_ovulation: "Ovulation",
    cycle_fertile: "Fertile", cycle_exam: "Exam",
    cycle_predict: "Predict", cycle_save: "Save", cycle_reset: "Reset",
    cycle_menopause: "Menopause", cycle_start: "Start",
    cycle_length: "Length", cycle_days: "days",
    cycle_calendar: "Calendar",
    cycle_mon: "Mo", cycle_tue: "Tu", cycle_wed: "We", cycle_thu: "Th",
    cycle_fri: "Fr", cycle_sat: "Sa", cycle_sun: "Su",
    clinics_title: "Clinics", clinics_desc: "Astana Map",
    clinics_list: "List", clinics_search: "Search...", clinics_all: "All",
    about_title: "About Us", about_mission: "Mission",
    about_mission_text: "We fight breast cancer.",
    about_goal: "Goal", about_goal_text: "Early detection saves.",
    about_contact: "Contact", about_address: "Astana, Kazakhstan",
    account_title: "Account", account_since: "With us since",
    account_points: "Points", account_streak: "Streak", account_level: "Level",
    account_days_learning: "days learning", account_achievements: "Achievements",
    account_settings: "Settings", account_logout: "Logout",
    notif_enable: "Enable notifications", notif_enabled: "Notifications enabled",
    notif_not_supported: "Browser doesn't support",
    notif_denied: "Change browser settings",
    notif_success: "Great!", notif_welcome: "Notifications enabled!",
    notif_exam_reminder: "Don't forget self-exam!",
    close: "Close", cancel: "Cancel", ok: "OK"
  }
};

let currentLang = localStorage.getItem('mammocare_lang') || 'ru';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mammocare_lang', lang);
  applyTranslations();
  updateLangFlag();
}

function t(key) {
  return translations[currentLang]?.[key] || translations['ru']?.[key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' && el.type !== 'submit' && el.type !== 'button') {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  document.documentElement.lang = currentLang;
}

function updateLangFlag() {
  const flags = { ru: '🇷🇺', kz: '🇰🇿', en: '🇬🇧' };
  const flagEl = document.getElementById('current-lang-flag');
  if (flagEl) flagEl.textContent = flags[currentLang];
}

// Auto-apply translations on load
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateLangFlag();
});
'''

# Find the end of the script section (before </body>) and add translations there
# We need to add them before the last script block

# Find </body> and insert translations before it
pos = content.rfind('</body>')
if pos != -1:
    content = content[:pos] + '\n<script>' + translations_js + '</script>\n' + content[pos:]
else:
    # If no </body>, add before </html>
    pos = content.rfind('</html>')
    if pos != -1:
        content = content[:pos] + '\n<script>' + translations_js + '</script>\n' + content[pos:]

# Add data-i18n attributes to key text elements
# Navigation
content = content.replace('>Главная<', ' data-i18n="nav_home">Главная<')
content = content.replace('>Обучение<', ' data-i18n="nav_learn">Обучение<')
content = content.replace('>Статьи<', ' data-i18n="nav_articles">Статьи<')
content = content.replace('>Цикл<', ' data-i18n="nav_cycle">Цикл<')
content = content.replace('>Клиники<', ' data-i18n="nav_clinics">Клиники<')
content = content.replace('>О нас<', ' data-i18n="nav_about">О нас<')
content = content.replace('>Аккаунт<', ' data-i18n="nav_account">Аккаунт<')

# Save
with open('/workspace/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("i18n system added! Only translations and data-i18n attributes, no structural changes.")
