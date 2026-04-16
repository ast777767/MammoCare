#!/usr/bin/env python3
"""Add data-i18n attributes to HTML elements"""

with open('/workspace/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Navigation
content = content.replace('>Главная<', ' data-i18n="nav_home">Главная<')
content = content.replace('>Обучение<', ' data-i18n="nav_learn">Обучение<')
content = content.replace('>Статьи<', ' data-i18n="nav_articles">Статьи<')
content = content.replace('>Цикл<', ' data-i18n="nav_cycle">Цикл<')
content = content.replace('>Клиники<', ' data-i18n="nav_clinics">Клиники<')
content = content.replace('>О нас<', ' data-i18n="nav_about">О нас<')
content = content.replace('>Аккаунт<', ' data-i18n="nav_account">Аккаунт<')
content = content.replace('<h2 class="text-xl font-bold">Меню</h2>', '<h2 class="text-xl font-bold" data-i18n="nav_menu">Меню</h2>')

# Auth Modal
content = content.replace('<h2 id="auth-modal-title" class="text-xl font-bold">Вход</h2>', '<h2 id="auth-modal-title" class="text-xl font-bold" data-i18n="auth_login">Вход</h2>')
content = content.replace('<label class="block text-gray-700 font-medium mb-2">Email</label>', '<label class="block text-gray-700 font-medium mb-2" data-i18n="auth_email">Email</label>')
content = content.replace('<label class="block text-gray-700 font-medium mb-2">Пароль</label>', '<label class="block text-gray-700 font-medium mb-2" data-i18n="auth_password">Пароль</label>')
content = content.replace('>Запомнить меня<', ' data-i18n="auth_remember">Запомнить меня<')
content = content.replace('>Забыли пароль?<', ' data-i18n="auth_forgot">Забыли пароль?<')
content = content.replace('>Войти<', ' data-i18n="auth_login_btn">Войти<')
content = content.replace('>Нет аккаунта?<', ' data-i18n="auth_no_account">Нет аккаунта?<')
content = content.replace('>Зарегистрироваться<', ' data-i18n="auth_register_link">Зарегистрироваться<')

content = content.replace('<label class="block text-gray-700 font-medium mb-2">Имя</label>', '<label class="block text-gray-700 font-medium mb-2" data-i18n="auth_name">Имя</label>')
content = content.replace('<label class="block text-gray-700 font-medium mb-2">Подтвердите пароль</label>', '<label class="block text-gray-700 font-medium mb-2" data-i18n="auth_confirm_password">Подтвердите пароль</label>')
content = content.replace('<span>Я согласен с <a href="#" class="text-primary hover:underline">условиями использования</a> и <a href="#" class="text-primary hover:underline">политикой конфиденциальности</a></span>', '<span data-i18n="auth_terms">Я согласен с условиями использования и политикой конфиденциальности</span>')
content = content.replace('>Уже есть аккаунт?<', ' data-i18n="auth_have_account">Уже есть аккаунт?<')
content = content.replace('>Войти<', ' data-i18n="auth_login_link">Войти<')
content = content.replace('<p class="text-gray-600 mb-4">Введите email для восстановления пароля</p>', '<p class="text-gray-600 mb-4" data-i18n="auth_reset_title">Введите email для восстановления пароля</p>')
content = content.replace('>Восстановить пароль<', ' data-i18n="auth_reset_btn">Восстановить пароль<')
content = content.replace('>Вернуться ко входу<', ' data-i18n="auth_back_login">Вернуться ко входу<')

# Achievement Modal
content = content.replace('>Достижение разблокировано!<', ' data-i18n="achievement_unlocked">Достижение разблокировано!<')
content = content.replace('>Отлично!<', ' data-i18n="achievement_great">Отлично!<')

# Premium Modal
content = content.replace('>Premium возможности<', ' data-i18n="premium_title">Premium возможности<')
content = content.replace('>Разблокируйте дополнительные функции!<', ' data-i18n="premium_unlock">Разблокируйте дополнительные функции!<')
content = content.replace('>Эксклюзивные уроки и материалы<', ' data-i18n="premium_exclusive">Эксклюзивные уроки и материалы<')
content = content.replace('>Персональные рекомендации<', ' data-i18n="premium_personal">Персональные рекомендации<')
content = content.replace('>Скидки на маммографию до 30%<', ' data-i18n="premium_discount">Скидки на маммографию до 30%<')
content = content.replace('>Позже<', ' data-i18n="premium_later">Позже<')

# Risk Modal
content = content.replace('>Добро пожаловать!<', ' data-i18n="risk_welcome">Добро пожаловать!<')
content = content.replace('>Ответьте на вопросы для расчета риска<', ' data-i18n="risk_questions">Ответьте на вопросы для расчета риска<')
content = content.replace('<label class="block text-sm font-medium text-gray-700 mb-1">Ваш возраст</label>', '<label class="block text-sm font-medium text-gray-700 mb-1" data-i18n="risk_age">Ваш возраст</label>')
content = content.replace('<label class="block text-sm font-medium text-gray-700 mb-1">Вес (кг)</label>', '<label class="block text-sm font-medium text-gray-700 mb-1" data-i18n="risk_weight">Вес (кг)</label>')
content = content.replace('<label class="block text-sm font-medium text-gray-700 mb-1">Рост (см)</label>', '<label class="block text-sm font-medium text-gray-700 mb-1" data-i18n="risk_height">Рост (см)</label>')
content = content.replace('<label class="block text-sm font-medium text-gray-700 mb-1">Наследственность</label>', '<label class="block text-sm font-medium text-gray-700 mb-1" data-i18n="risk_family">Наследственность</label>')
content = content.replace('<label class="block text-sm font-medium text-gray-700 mb-1">Курение</label>', '<label class="block text-sm font-medium text-gray-700 mb-1" data-i18n="risk_smoke">Курение</label>')
content = content.replace('<label class="block text-sm font-medium text-gray-700 mb-1">Жалобы</label>', '<label class="block text-sm font-medium text-gray-700 mb-1" data-i18n="risk_symptoms">Жалобы</label>')
content = content.replace('>Рассчитать<', ' data-i18n="risk_calculate">Рассчитать<')
content = content.replace('>Пропустить<', ' data-i18n="risk_skip">Пропустить<')
content = content.replace('>Продолжить<', ' data-i18n="risk_continue">Продолжить<')

# Home Section
content = content.replace('>Добро пожаловать в MammoCare<', ' data-i18n="home_welcome">Добро пожаловать в MammoCare<')
content = content.replace('>Осознание сегодня - может спаси жизнь завтра.<', ' data-i18n="home_awareness">Осознание сегодня - может спасти жизнь завтра.<')
content = content.replace('>Трекер<', ' data-i18n="home_tracker">Трекер<')
content = content.replace('>Клиники<', ' data-i18n="home_clinics_btn">Клиники<')
content = content.replace('<span class="font-medium text-gray-700">День цикла</span>', '<span class="font-medium text-gray-700" data-i18n="home_cycle_day">День цикла</span>')
content = content.replace('<span class="font-medium text-gray-700">Настройте</span>', '<span class="font-medium text-gray-700" data-i18n="home_cycle_placeholder">Настройте</span>')
content = content.replace('<span class="font-medium text-gray-700">След. месячные</span>', '<span class="font-medium text-gray-700" data-i18n="home_next_period">След. месячные</span>')
content = content.replace('<span class="font-medium text-gray-700">Прогресс</span>', '<span class="font-medium text-gray-700" data-i18n="home_progress">Прогресс</span>')
content = content.replace('>Начните курс<', ' data-i18n="home_start_course">Начните курс<')
content = content.replace('>Статистика рака груди<', ' data-i18n="home_stats">Статистика рака груди<')
content = content.replace('>место по заболеваемости среди женщин<', ' data-i18n="home_kz_rank">место по заболеваемости среди женщин<')
content = content.replace('>новых случаев ежегодно<', ' data-i18n="home_kz_cases">новых случаев ежегодно<')
content = content.replace('>случаев ежегодно (по данным ВОЗ)<', ' data-i18n="home_world_cases">случаев ежегодно (по данным ВОЗ)<')
content = content.replace('>Каждую 8-ю женщину затрагивает диагноз<', ' data-i18n="home_world_fact">Каждую 8-ю женщину затрагивает диагноз<')
content = content.replace('>Раннее обнаружение повышает выживаемость до 98%<', ' data-i18n="home_survival">Раннее обнаружение повышает выживаемость до 98%<')
content = content.replace('>Полезная информация<', ' data-i18n="home_info">Полезная информация<')
content = content.replace('>Пройти самообследование<', ' data-i18n="home_selfexam_btn">Пройти самообследование<')
content = content.replace('>Читать все статьи →<', ' data-i18n="home_read_all">Читать все статьи →<')
content = content.replace('>Пересчитать<', ' data-i18n="risk_recalculate">Пересчитать<')
content = content.replace('>Ваш риск<', ' data-i18n="risk_your_risk">Ваш риск<')

# Premium Banner
content = content.replace('>Разблокируйте Premium!<', ' data-i18n="premium_banner_title">Разблокируйте Premium!<')
content = content.replace('>Эксклюзивные уроки и персональные рекомендации<', ' data-i18n="premium_banner_desc">Эксклюзивные уроки и персональные рекомендации<')
content = content.replace('>Узнать больше<', ' data-i18n="premium_banner_btn">Узнать больше<')

# Learn Section
content = content.replace('>30-дневная программа<', ' data-i18n="learn_title">30-дневная программа<')
content = content.replace('>Укрепите здоровье шаг за шагом<', ' data-i18n="learn_subtitle">Укрепите здоровье шаг за шагом<')
content = content.replace('>Прогресс<', ' data-i18n="learn_progress">Прогресс<')
content = content.replace('>Завершено<', ' data-i18n="learn_complete">Завершено<')

# Cycle Section
content = content.replace('>Трекер цикла<', ' data-i18n="cycle_title">Трекер цикла<')
content = content.replace('>Период<', ' data-i18n="cycle_period">Период<')
content = content.replace('>Овуляция<', ' data-i18n="cycle_ovulation">Овуляция<')
content = content.replace('>Фертильные дни<', ' data-i18n="cycle_fertile">Фертильные дни<')
content = content.replace('>Осмотр<', ' data-i18n="cycle_exam">Осмотр<')
content = content.replace('>Предсказать<', ' data-i18n="cycle_predict">Предсказать<')
content = content.replace('>Сохранить<', ' data-i18n="cycle_save">Сохранить<')
content = content.replace('>Сбросить<', ' data-i18n="cycle_reset">Сбросить<')
content = content.replace('>Менопауза<', ' data-i18n="cycle_menopause">Менопауза<')
content = content.replace('>Начало<', ' data-i18n="cycle_start">Начало<')
content = content.replace('>Длина цикла<', ' data-i18n="cycle_length">Длина цикла<')
content = content.replace('>дней<', ' data-i18n="cycle_days">дней<')
content = content.replace('>Календарь<', ' data-i18n="cycle_calendar">Календарь<')

# Clinics Section
content = content.replace('>Клиники<', ' data-i18n="clinics_title">Клиники<')
content = content.replace('>Карта Астаны<', ' data-i18n="clinics_desc">Карта Астаны<')
content = content.replace('>Список<', ' data-i18n="clinics_list">Список<')
content = content.replace('>Поиск...<', ' data-i18n="clinics_search">Поиск...<')
content = content.replace('>Все<', ' data-i18n="clinics_all">Все<')

# About Section
content = content.replace('>О нас<', ' data-i18n="about_title">О нас<')
content = content.replace('>Миссия<', ' data-i18n="about_mission">Миссия<')
content = content.replace('>Мы боремся с раком груди.<', ' data-i18n="about_mission_text">Мы боремся с раком груди.<')
content = content.replace('>Цель<', ' data-i18n="about_goal">Цель<')
content = content.replace('>Раннее выявление спасает жизни.<', ' data-i18n="about_goal_text">Раннее выявление спасает жизни.<')
content = content.replace('>Контакты<', ' data-i18n="about_contact">Контакты<')
content = content.replace('>Астана, Казахстан<', ' data-i18n="about_address">Астана, Казахстан<')

# Account Section
content = content.replace('>Аккаунт<', ' data-i18n="account_title">Аккаунт<')
content = content.replace('>С нами с<', ' data-i18n="account_since">С нами с<')
content = content.replace('>Очки<', ' data-i18n="account_points">Очки<')
content = content.replace('>Серия<', ' data-i18n="account_streak">Серия<')
content = content.replace('>Уровень<', ' data-i18n="account_level">Уровень<')
content = content.replace('>дней обучения<', ' data-i18n="account_days_learning">дней обучения<')
content = content.replace('>Достижения<', ' data-i18n="account_achievements">Достижения<')
content = content.replace('>Настройки<', ' data-i18n="account_settings">Настройки<')
content = content.replace('>Выйти<', ' data-i18n="account_logout">Выйти<')

# Self Exam Modal
content = content.replace('<h2 class="text-xl font-bold mb-4">Самообследование</h2>', '<h2 class="text-xl font-bold mb-4" data-i18n="self_exam">Самообследование</h2>')
content = content.replace('>Видео: Как проводить самообследование<', ' data-i18n="self_exam_video_title">Видео: Как проводить самообследование<')

# Articles Section
content = content.replace('>Статьи<', ' data-i18n="articles_title">Статьи<')
content = content.replace('>мин<', ' data-i18n="articles_read_time">мин<')

# Save
with open('/workspace/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("data-i18n attributes added successfully!")
