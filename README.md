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

------------

## ЛР2
Третій рівень.
### Прототип (Prototype). Будівельник (Builder).
   В рамках вирішення задачі створення програм тренувань (клас TrainingProgram) потрібно реалізувати можливість їх як самостійного створення так і створення нового на основі вже існуючого. Для цього потрібно застосувати два патерни Прототип та Будівельник.

   Будівельник для створення обєкта програми тренувань (клас TrainingProgramBuilder) повинен імплементувати інтерфейс Builder в якому вимагається реалізація додавання вправ методом addExercise() та отримання обєкта методом getResult(): TrainingProgram.

Конкретна реалізація прототипу (клас TrainingProgramPrototype) має імплементувати інтерфейс Proto що буде вимагати реалізації метода clone(). Цей метод і є можливістю для створення обєктів на основі вже існуючого обєкту TrainingProgram.

-------

-------

## ЛР3
Третій рівень.
### Стратегія (Strategy).
(code1.ts)

В рамках виконання задачі реалізації стратегій визначення оплати абонементів для користувачів спортзалу застосуєм патерн Стратегія. Має бути створений інтерфейс (клас MembershipPriceContext), який на основі типу (enum MembershipPeriodType) буде підбирати відповідну стратегію обрахунку та повертати ціну (метод getPrice()). 

Тож для цього потрібно реалізувати сімейство схожих алгоритмів на основі інтерфейсу (MembershipStrategy) який забовязує реалізувати метод (calculatePrice(): number;).

### Спостерігач (Observer).
(code2.ts)

Для виконання задачі, в ході якої потрібно реалізувати надсилання сповіщень користувачам про найближчі тренування, потрібно застосувати патерн Спостерігач. Для цього реалізуєм інтерфейс спостерігача (Announcement), який вимагатиме реалізацію надсилання сповіщень (метод update(training: string): void). Клас користувача (клас User) повинен імплементувати інтерфейс спостерігача та реалізовувати його методи.
Далі в реалізованому роскладі тренувань (клас TrainingSchedule) організувати автоматичне оповіщення користувачів при створені нового тренування (метод setTraining()) за допомогою методу notifyUsers().

### Команда (Command).
(code3.ts)

Для виконання задачі на реалізацію функціонала взаємодії з вправами, а саме для реалізації відміток про виконання вправ (check/uncheck) використати патерн Команда.
На основі інтерфейсу Command, який забовязує реалізацію методу виконання команди (execute(): void;), створити дві команди (клас MarkExerciseCommand) та (клас UndoMarkExerciseCommand) які реалізовують потрібну логіку.
А також реалізувати клас інвокер (клас CommandInvoker), для керування командами, який повинен вміти вибирати потрібну команду (метод setCommand()) та виконувати її (метод executeCommand())

----- 

---
## ЛР4
Третій рівень.
### Макрокоманди.
(code1.ts)

> NOTE: "Патерн "Макрокоманда" є розширенням патерну "Команда". Він дозволяє групувати набір команд у велику команду, яку можна виконати як одну операцію. Основна ідея полягає в тому, щоб створити об'єкт-макрокоманду, який містить список команд. Коли макрокоманда виконується, вона виконує всі команди у своєму списку послідовно."


В ході виконання звдання, яке передбачає реалізацію додавання нових тренувань (клас Training) в календар з перевіркою чи на цей час нема існуючих, і якщо вони є запропонувати скасувати існуюче або нове, для виконання застосувати патерн Макрокоманди.

Реалізувати макрокоманду (клас AddTrainingCommand) яка імплементує інтерфейс команди (Command), що вимагає описати метод виконання макрокоманди (метод execute()), в цьому методі організувати логіку відповідно умови задачі. Різні команди реалізуємо в сервісі тренувань (класс TrainingService), що буде відповідати за розклад тренувань та дії з ними. Це мають бути команди для додавання (метод addTraining()), видалення (метод deleteTraining()) та перевірки доступності (метод checkAvailability()).

### Шаблонний метод (Template Method).
(code2.ts)

> NOTE: "Цей паттерн дозволяє визначити загальну структуру алгоритму в базовому класі, а потім дозволяє підкласам перевизначити певні частини цього алгоритму без зміни загальної структури."

Використати патерн "Шаблонний метод", щоб визначити загальну структуру створення програми тренувань в базовому класі ( клас Training). Вони повині створюватись по одному шаблону що визначає створення вправ для розігріву (метод createWarmUp()), основного стеку (метод createMainWorkout()) та  завершуального (метод createCoolDown()).Таким чином, наслідуючи клас шаблон, надалі можна буде створювати нові класи конкретних тренувань перевизначаючи ці методи відповідно до конкретних потреб кожного типу тренування. Описати програми тренувань для кардіо (клас CardioTraining) та підйому ваг (клас WeightliftingTraining) які будуть наслідувати клас шаблон.

-----

----

## ЛР5
Третій рівень.
### Ітератор (Iterator).
(code1.ts)

> NOTE: "цей патерн буде корисний якщо у вас є складна структура даних, і ви хочете приховати від клієнта деталі її реалізації, або коли потрібно мати кілька варіантів перебору колекцій"

В рамках виконання задачі реалізації колекцї вправ використати патерн Ітератор, для додавання інкапсульованого перебору колекції.
Реалізувати інтерфейс ітератора (Iterator) з абстрактними методами next() та hasNext() та конкретний ітератор (клас ExerciseIterator) на його основі.
Реалізувати колекцію вправ (клас ExerciseCollection) яка імплементує інтерфейс IterableCollection, що в свою чергу  забезпечить обовязкову реалізацію методу createIterator(), також додати можливість додавання (метод addExercise()) та  видалення (метод deleteExercise()) вправ з колекції.

### Стан (State).
(code2.ts)

Використати патерн Стан для реалізації стану клубного абонемента, створити інтерфейс State який має два абстракитних методи applyState() - метод який примінить логіку зміни стана та getName() для перевірки поточного стану. Стан абонемента моє три варіанта і всі вони повині імплементувати інтерфейс State і реалізовувати потрібну логіку у необхадних методах: активний  (клас ActiveState), призупинений (клас SuspendedState) та неактивний (клас ExpiredState). Це має функціонувати в контексті вже реалізованого абонемента (клас Membership) за допомогою методів setState() та applyState().

### Ланцюжок Обов'язків (Chain of responsibility).
(code3.ts)

Для виконання задачі реалізації реєстраційної логіки застосувати застосувати шаблон Ланцюжок Обов'язків. Реалізувати наступну логіку: 1й крок реєстрація (клас RegistrationHandler), 2й авторизація (клас AuthorizationHandler), 3й (клас DisclaimerHandler) якщо користувач не підписав дисклеймер надати таку можливість інакше пропустити, 4й крок налаштування профілю (клас ProfileSetupHandler)якшо користувач робить авторизацію вперше інакше пропустити , 5й (клас StartUseHandler).

Створити базовий клас обробника подій (клас Handler) для наслідування конкретними реалізаціями подій, який забовяже реалізацію  метода setSuccessor() -  визначатиме наступну подію в ланцюжку виконання, та також методу handle() для її виконання. 

---

---

## ЛР6
Третій рівень.
### Інтерпретатор (Interpreter).
(code1.ts)


В рамках задаічі "організації сповіщень", створити зручний шаблонізатор який буде генерувати оповіщення для відправки користувачу на основі динамічних даних. Шаблони мають бути у вигляді текста з динамічними змінними {{variable}}, які будуть замінені на конкретні значення з контексту.
Використати патерн Інтерпритатор.
Створити інтерфейс виразу Expression, який описує метод для інтепритації (метод interpret()). На основі інтерфейсу реалізувати конкретні вирази для інтерпритації зміних (клас VariableExpression) та тексту (клас TextExpression). Створити парсер (клас TemplateParser) та описати метод parse() який буде приймати контекст і шаблон та повертати готове повідомлення.



### Посередник (Mediator).
(code2.ts)

В рамках задаічі "організації сповіщень", створити базову систему надсилання сповіщень використавши патерн Медіатор.
Створити інтерфейс медіатора (Mediator), який забовяже реалізувати метод для звязку notify(). Створити конкретний медіатор (клас GymMediator) на основі інтерфейса, він повинен створювати всі обєкти, які будуть взаємодіяти між собою (класи Admin, Client) за допомогою медіатора а також логіку методу взаємодії notify(). Також всі обєкти повині мати базову структуру (клас BaseMediatorComponent) яка забезпечить звязок з медіатором.

---

---

## ЛР7
Третій рівень.
### Зберігач (Memento).
(code1.ts)

В рамках задачі створення програми тренувань викорисати патерн "Зберігач" для збереження стану програми тренувань (клас TrainingProgram) перед кожним редагуванням, дозволяючи відновити попередній стан при необхідності.
Реалізувати зберігач (клас TrainingProgramMemento) який буде відповідати за збереження конкретного стану програми тренувань. Реалізувати опікуна (клас Caretaker) який буде зберігати стек збережиних стстанів за допомогою метода addMemento(), також повертати потрібний стан методом getMemento().
В класі програми тренувань TrainingProgram реалізувати функціонал  зберіганя стану через "Зберігач" (метод save()) , отримання стану (метод getState()) та оновлення стану (метод setState())

### Відвідувач (Visitor).
(code2.ts)

В рамках задачі "збір аналітичних даних" використати патерн Відвідувач для реалізації функціоналу зі збору даних про використання тренажерів (класи CardioMachine, StrengthMachine).
Описати інтерфейс Equipment для обладнання що забезпечить реалізацію передачі аналітичних даних (метод accept()).
Реалізувати інтерфейс Equipment у класах тренажерів.
Створити Відвідувач (клас UsageAnalyticsVisitor) для збору аналітичних даних з відповідними методами (методи visitCardioMachine(), visitStrengthMachine()).

---

---


## ЛР8
Третій рівень.
### Фасад (Facade).
(code1.ts)

В рамках задачі "збір аналітичних даних" застосувати патерн Фасад для реалізації загального інтерфейсу збору аналітики з підсистем.
Для існуючих підсистем (класи UserManagement, SubscriptionManagement, TrainingManagement, EquipmentAnalytics) реалізувати фасад (клас GymReportsFacade) який забезпечить:
 - перевірку користувача на наявність реєстрації та тип підписки (метод registarationAndSubscribeType())
 - перевірити чи користувач записаний на тренування та згенерувати рапорт по стану обладнання (метод bookTrainingAndGenerateReport)


### Замісник (Проксі) та Міст (Bridge).
(code1.ts)

В рамках попередньої задачі використати патерн Проксі (клас GymReportsProxy) для фасаду GymReportsFacade. Проксі додає додаткову логіку яка перевіряє роль користувача і надає доступ до виконання відповідно до наступних правил: 
- перевірку користувача на наявність реєстрації - тільки адмін
- перевірити чи користувач записаний на тренування та згенерувати рапорт по стану обладнання - адмін та  тренер


Для коректного створення проксі використаєм паттерн Міст. Винесем методи фасаду GymReportsFacade в абстракцію (інтерфейс GymReports). та зімплементуєм його і в фасад (клас GymReportsFacade) і в проксі (клас GymReportsProxy)

