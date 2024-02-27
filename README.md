# Проект розробки кіберфізичної системи для управління спортзалом та його клієнтами.

## Функціональні вимоги

### Реєстрація користувача

1. Користувач може реєструватися у додатку, вказавши особисті дані: ім'я, прізвище, електронну адресу, номер телефону
   тощо.
2. Тренер може реєструватися у додатку, вказавши особисті дані: ім'я, прізвище, електронну адресу, номер телефону тощо.
3. Адміністратор може реєструватися у додатку, вказавши особисті дані: ім'я, прізвище, електронну адресу, номер телефону тощо.
4. Система повинна перевіряти унікальність електронної адреси та номера телефону користувача під час реєстрації.

### Вибір та придбання абонементу

1. Користувач може переглядати доступні абонементи спортзалу.
2. Користувач може обрати бажаний абонемент та придбати його, виконавши відповідні дії у додатку.
3. Система повинна забезпечити можливість оплати абонементу онлайн через різні платіжні системи.

### Запис на тренування

1. Користувач може переглядати розклад тренувань у спортзалі.
2. Користувач може обрати бажане тренування та записатися на нього через додаток.
3. Система повинна відображати кількість вільних місць на кожне тренування та управляти записами користувачів.

### Створення програми тренуваннь

1. Тренер може створювати програму тренувань.
2. Тренер може створювати нові вправи якщо їх ще немає в системі
3. Тренер може редагувати вправи.
4. Тренер може видаляти вправи.

### Перегляд розкладу тренувань
1. Користувач може відмічати виконані вправи зазначаючи вагу, кількість повторів тощо.
2. Розклад повинен відображати інформацію про час початку та закінчення тренування, вид тренування, ім'я тренера,
   кількість вільних місць тощо.
### Використання датчиків та IoT
1. Відстеження наявності обладнання: Система може використовувати датчики для відстеження наявності та розміщення обладнання в спортзалі, що дозволить користувачам переглядати актуальну інформацію про доступність обладнання та забезпечити краще планування тренувань.

2. Моніторинг середовища: Датчики можуть вимірювати рівень шуму, температуру, вологість повітря та інші параметри середовища в спортзалі. Ця інформація може бути відображена в додатку для забезпечення комфортних умов для тренувань.

3. Відстеження використання обладнання: Датчики можуть фіксувати використання обладнання користувачами, що дозволить адміністраторам спортзалу виявити найпопулярніші або найменше використовувані предмети та оптимізувати їх розміщення.

4. Система безпеки: Використання датчиків руху та камер для забезпечення безпеки в спортзалі. Це може включати виявлення неправомірного доступу або попередження про небезпечні ситуації.



### Сповіщення

1. Система повинна надсилати сповіщення користувачам про найближчі тренування, на які вони записані.
2. Користувачі можуть налаштовувати способи отримання сповіщень (наприклад, через електронну пошту, SMS, додаток).

### Отримання статистики

1. Користувачі можуть переглядати свою статистику відвідувань спортзалу, таку як кількість відвідувань за певний період
   часу, тривалість тренувань тощо.
2. Адміністратори можуть отримувати зведену статистику відвідувань спортзалу для аналізу та прийняття управлінських
   рішень.
3. Аналітика тренувань: Датчики можуть вимірювати різні показники під час тренувань, такі як пульс, кількість калорій, вагу, що дозволить користувачам відстежувати свій прогрес та вдосконалювати свої тренувальні програми.

### Серверна частина
1. Автентифікація та авторизація користувачів.
2. Зберігання та управління даними.
3. Реалізація бізнес-логіки.
4. Інтеграція з платіжними системами.
5. Надійність та масштабованість.
6. Захист.


--------------------------------------------------------------------------
# Лабораторні роботи

## ЛР1
Третій рівень.
### Фабричний метод (Factory Method)

Так як суть даного патерна полягає в створені інтерфейсу для створення однорідних обєктів з можливістюю зміни типів цих обєктів,
реалізацію даної фабрики можна продемонструвати на прикладі реалізації обєкту щомісячного абонемента.

В коді (code1.ts) продемонстровано створення фабричного методу createMembership, який приймає тип абонемента і повертає
відповідний об'єкт абонемента на основі вибору користувача.

### Абстрактна фабрика (Abstract Factory)

За допомогою абстрактної фабрики можна створювати сімейства об'єктів, які відповідають певному інтерфейсу, і замінювати
їх без необхідності змінювати клієнтський код.

Реалізацію даного патерна можна продемонструвати на створенні груп вправ які можуть бути розділені на різні групи в
залежності від типів мязів але матимуть споріднений інтерфейс (code2.ts).

І тепер, якщо хочемо додати новий тип вправи, нам просто потрібно створити новий клас для цієї вправи та відповідну
фабрику для створення цього типу вправи. При цьому клієнтський код не потребує жодних змін, оскільки він взаємодіє лише
з абстрактними інтерфейсами.

------------

## ЛР2
Третій рівень.
### Прототип (Prototype). Будівельник (Builder).
   В рамках вирішення задачі створення програм тренувань (клас TrainingProgram) потрібно реалізувати можливість їх як самостійного створення так і створення нового на основі вже існуючого. Для цього потрібно застосувати два патерни Прототип та Будівельник.

   Будівельник для створення обєкта програми тренувань (клас TrainingProgramBuilder) повинен імплементувати інтерфейс Builder в якому вимагається реалізація додавання вправ методом addExercise() та отримання обєкта методом getResult(): TrainingProgram.

Конкретна реалізація прототипу (клас TrainingProgramPrototype) має імплементувати інтерфейс Proto що буде вимагати реалізації метода clone(). Цей метод і є можливістю для створення обєктів на основі вже існуючого обєкту TrainingProgram.





 

-------

## ЛР3
Третій рівень.
### Стратегія (Strategy).
Патерн стратегія дозволяє визначати набір алгоритмів, упаковувати їх у відповідні класи і зробити їх взаємозамінними. Це дозволяє змінювати алгоритми незалежно від клієнтів, які з ними взаємодіють.
Спосіб вирішення задачі, коли ви маєте кілька різних алгоритмів або підходів до вирішення одного й того ж завдання, і ви хочете змінювати їх використання в залежності від контексту.

Патерн використаєм для реалізації стратегій визначення оплати абонементів для користувачів спортзалу.(code1.ts)

### Спостерігач (Observer).
Основна особливість патерну Спостерігач полягає в тому, що він дозволяє створювати взаємодію між об'єктами, де один об'єкт (суб'єкт) надсилає повідомлення про зміни свого стану всім своїм спостерігачам. Це дозволяє створювати локальні та децентралізовані системи, де об'єкти можуть взаємодіяти один з одним без прямого зв'язку.

У проекті використаєм патерн Спостерігача для надсилання сповіщень користувачам про найближчі тренування.(code2.ts)

### Команда (Command).
Патерн Команда допомагає зробити дії (команди) у коді більш гнучкими. Він відокремлює запити на виконання від об'єктів, що їх виконують. Можна створювати нові дії, не змінюючи вже існуючий код. 

Використаєм патерн при реалізації команд для відмічання виконаних вправ та відміни цих відміток.(code3.ts)

Завдяки патерну Команда, можна додавати нові дії без необхідності змінювати вже існуючий код інвокера або інших класів.
дозволяє обгортати операції або запити в об'єкти, а потім передавати ці об'єкти в код, який знає, як з ними працювати
----- 
## ЛР4
Третій рівень.
### Макрокоманди.
Патерн "Макрокоманда" є розширенням патерну "Команда". Він дозволяє групувати набір команд у велику команду, яку можна виконати як одну операцію. Основна ідея полягає в тому, щоб створити об'єкт-макрокоманду, який містить список команд. Коли макрокоманда виконується, вона виконує всі команди у своєму списку послідовно.

в проекті можна примінити при додавані нових тренувань в календар.  з перевіркою чи на цей час нема існуючих, і якщо вони є запропонувати скасувати існуюче або нове (code1.ts)

### Шаблонний метод (Template Method).
Цей паттерн дозволяє визначити загальну структуру алгоритму в базовому класі, а потім дозволяє підкласам перевизначити певні частини цього алгоритму без зміни загальної структури.
використовуємо патерн "Шаблонний метод", щоб визначити загальну структуру створення програми тренувань у базовому класі, а потім перевизначаємо окремі кроки у підкласах відповідно до конкретних потреб кожного типу тренування. (code2.ts)

## ЛР5
Третій рівень.
- Ітератор (Iterator).
- Стан (State).
- Ланцюжок Обов'язків (Chain of responsibility).

## ЛР6
Третій рівень.
- Інтерпретатор (Interpreter).
- Посередник (Mediator).

## ЛР7
Третій рівень.
- Зберігач (Memento).
- Відвідувач (Visitor).

## ЛР8
Третій рівень.
- Фасад (Facade).
- Замісник (Проксі).
- Міст (Bridge). 