#!/usr/bin/env python3
"""Add data-i18n attributes to ALL translatable elements"""

with open('/workspace/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Navigation - desktop
content = content.replace('>Главная<', ' data-i18n="nav_home">Главная<')
content = content.replace('>Обучение<', ' data-i18n="nav_learn">Обучение<')
content = content.replace('>Статьи<', ' data-i18n="nav_articles">Статьи<')
content = content.replace('>Цикл<', ' data-i18n="nav_cycle">Цикл<')
content = content.replace('>Клиники<', ' data-i18n="nav_clinics">Клиники<')
content = content.replace('>О нас<', ' data-i18n="nav_about">О нас<')
content = content.replace('>Аккаунт<', ' data-i18n="nav_account">Аккаунт<')

# Mobile menu
content = content.replace('>Меню<', ' data-i18n="mob_menu">Меню<')

# Home section
content = content.replace('>Добро пожаловать в MammoCare<', ' data-i18n="home_welcome">Добро пожаловать в MammoCare<')
content = content.replace('>Осознание сегодня - может спаси жизнь завтра.<', ' data-i18n="home_desc">Осознание сегодня - может спасти жизнь завтра.<')
content = content.replace('>Трекер<', ' data-i18n="btn_cycle">Трекер<')
content = content.replace('>Клиники<', ' data-i18n="btn_clinic">Клиники<')
content = content.replace('>Ваш риск<', ' data-i18n="home_risk_label">Ваш риск<')
content = content.replace('>Пересчитать<', ' data-i18n="recalc">Пересчитать<')

# Stats
content = content.replace('>Статистика рака груди<', ' data-i18n="stats_title">Статистика рака груди<')
content = content.replace('>место по заболеваемости среди женщин<', ' data-i18n="stats_kz_desc">место по заболеваемости среди женщин<')
content = content.replace('>случаев ежегодно (по данным ВОЗ)<', ' data-i18n="stats_world_desc">случаев ежегодно (по данным ВОЗ)<')
content = content.replace('>Раннее обнаружение повышает выживаемость до 98%<', ' data-i18n="stats_fact">Раннее обнаружение повышает выживаемость до 98%<')

# Useful info
content = content.replace('>Полезная информация<', ' data-i18n="useful_info_title">Полезная информация<')
content = content.replace('>Самообследование<', ' data-i18n="info_self_title">Самообследование<')
content = content.replace('>Делайте это раз в месяц. Самообследование занимает 5 минут.<', ' data-i18n="info_self_desc">Делайте это раз в месяц. Самообследование занимает 5 минут.<')
content = content.replace('>Скрининг<', ' data-i18n="info_age_title">Скрининг<')
content = content.replace('>Маммография рекомендована женщинам старше 30 лет.<', ' data-i18n="info_age_desc">Маммография рекомендована женщинам старше 30 лет.<')
content = content.replace('>Читать все статьи →<', ' data-i18n="link_all_articles">Читать все статьи →<')

# Cards
content = content.replace('>День цикла<', ' data-i18n="card_cycle_day">День цикла<')
content = content.replace('>Настройте<', ' data-i18n="config">Настройте<')
content = content.replace('>След. месячные<', ' data-i18n="card_next">След. месячные<')
content = content.replace('>До месячных<', ' data-i18n="till_period">До месячных<')
content = content.replace('>Прогресс<', ' data-i18n="card_progress">Прогресс<')
content = content.replace('>Начните курс<', ' data-i18n="card_start_learning">Начните курс<')

# Articles
content = content.replace('>Полезная информация<', ' data-i18n="articles_title">Полезная информация<')

# Learn section
content = content.replace('>30-дневная программа<', ' data-i18n="learn_title">30-дневная программа<')
content = content.replace('>Укрепите здоровье шаг за шагом<', ' data-i18n="learn_desc">Укрепите здоровье шаг за шагом<')
content = content.replace('>Доступно<', ' data-i18n="lesson_open">Доступно<')
content = content.replace('>Заблокировано<', ' data-i18n="lesson_locked">Заблокировано<')
content = content.replace('>Пройдено<', ' data-i18n="lesson_completed">Пройдено<')

# Cycle section
content = content.replace('>Настройка трекера<', ' data-i18n="cycle_title">Настройка трекера<')
content = content.replace('>Менструальный цикл<', ' data-i18n="cycle_menstrual">Менструальный цикл<')
content = content.replace('>Менопауза<', ' data-i18n="cycle_menopause">Менопауза<')
content = content.replace('>Дата последних месячных<', ' data-i18n="cycle_date">Дата последних месячных<')
content = content.replace('>Дата наступления менопаузы<', ' data-i18n="cycle_menopause_date">Дата наступления менопаузы<')
content = content.replace('>Длина цикла (дни)<', ' data-i18n="cycle_len">Длина цикла (дни)<')
content = content.replace('>Длина месячных (дни)<', ' data-i18n="period_len">Длина месячных (дни)<')
content = content.replace('>О менопаузе<', ' data-i18n="cycle_about_menopause">О менопаузе<')
content = content.replace('>После менопаузы риск рака молочной железы увеличивается. Важно:<', ' data-i18n="cycle_menopause_tip">После менопаузы риск рака молочной железы увеличивается. Важно:<')
content = content.replace('>Регулярно проходить маммографию<', ' data-i18n="cycle_meno_mammo">Регулярно проходить маммографию<')
content = content.replace('>Продолжать самообследование<', ' data-i18n="cycle_meno_self">Продолжать самообследование<')
content = content.replace('>Поддерживать здоровый вес<', ' data-i18n="cycle_meno_weight">Поддерживать здоровый вес<')
content = content.replace('>Сегодня<', ' data-i18n="today">Сегодня<')
content = content.replace('>День<', ' data-i18n="day">День<')
content = content.replace('>Прогноз на 3 месяца<', ' data-i18n="forecast">Прогноз на 3 месяца<')
content = content.replace('>Месячные<', ' data-i18n="legend_period">Месячные<')
content = content.replace('>Овуляция<', ' data-i18n="legend_ovulation">Овуляция<')
content = content.replace('>Изменить настройки<', ' data-i18n="edit_settings">Изменить настройки<')
content = content.replace('>Время самообследования!<', ' data-i18n="exam_title">Время самообследования!<')
content = content.replace('>Оптимальный период (5-7 день).<', ' data-i18n="exam_desc">Оптимальный период (5-7 день).<')

# Clinics section
content = content.replace('>Клиники маммографии<', ' data-i18n="clinics_title">Клиники маммографии<')
content = content.replace('>Найдите ближайший центр в Астане.<', ' data-i18n="clinics_desc">Найдите ближайший центр в Астане.<')
content = content.replace('>Список<', ' data-i18n="list">Список<')
content = content.replace('>Все<', ' data-i18n="filter_all">Все<')
content = content.replace('>Гос.<', ' data-i18n="filter_public">Гос.<')
content = content.replace('>Частные<', ' data-i18n="filter_private">Частные<')

# About section
content = content.replace('>О проекте MammoCare<', ' data-i18n="about_title">О проекте MammoCare<')
content = content.replace('>Миссия<', ' data-i18n="mission_title">Миссия<')
content = content.replace('>Снизить смертность от рака молочной железы<', ' data-i18n="mission_desc">Снизить смертность от рака молочной железы<')
content = content.replace('>Контакты<', ' data-i18n="contacts_title">Контакты<')

# Account section
content = content.replace('>Привет,<', ' data-i18n="acc_welcome">Привет,<')
content = content.replace('>Участник<', ' data-i18n="acc_user">Участник<')

# Risk modal
content = content.replace('>Добро пожаловать!<', ' data-i18n="risk_welcome">Добро пожаловать!<')
content = content.replace('>Ответьте на вопросы для расчета риска<', ' data-i18n="risk_subtitle">Ответьте на вопросы для расчета риска<')
content = content.replace('>Ваш возраст<', ' data-i18n="risk_age">Ваш возраст<')
content = content.replace('>Вес (кг)<', ' data-i18n="risk_weight">Вес (кг)<')
content = content.replace('>Рост (см)<', ' data-i18n="risk_height">Рост (см)<')
content = content.replace('>Наследственность<', ' data-i18n="risk_family">Наследственность<')
content = content.replace('>Курение<', ' data-i18n="risk_smoke">Курение<')
content = content.replace('>Жалобы<', ' data-i18n="risk_symptoms">Жалобы<')
content = content.replace('>Нет<', ' data-i18n="opt_no">Нет<')
content = content.replace('>Дальние родственники<', ' data-i18n="opt_distant">Дальние родственники<')
content = content.replace('>Мама/сестра<', ' data-i18n="opt_close">Мама/сестра<')
content = content.replace('>Не курю<', ' data-i18n="opt_no_smoke">Не курю<')
content = content.replace('>Бросила<', ' data-i18n="opt_ex_smoke">Бросила<')
content = content.replace('>Курю<', ' data-i18n="opt_smoke">Курю<')
content = content.replace('>Дискомфорт<', ' data-i18n="opt_discomfort">Дискомфорт<')
content = content.replace('>Уплотнения/боль<', ' data-i18n="opt_pain">Уплотнения/боль<')
content = content.replace('>Рассчитать<', ' data-i18n="btn_calc">Рассчитать<')
content = content.replace('>Пропустить<', ' data-i18n="btn_skip">Пропустить<')
content = content.replace('>Продолжить<', ' data-i18n="btn_continue">Продолжить<')

# Self exam
content = content.replace('>Видео: Как проводить самообследование<', ' data-i18n="self_exam_video">Видео: Как проводить самообследование<')
content = content.replace('>Посмотрите видео перед началом<', ' data-i18n="self_exam_intro">Посмотрите видео перед началом<')

# Alerts
content = content.replace('>Отлично!<', ' data-i18n="alert_exam">Отлично!<')

# Save
with open('/workspace/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

count = content.count('data-i18n=')
print(f"Added {count} data-i18n attributes!")
