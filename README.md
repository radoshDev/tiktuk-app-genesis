Цей проект було створено за допомогою **React TypeScipt** з використанням **Redux** та **Redux Toolkit**.

## Логіка роботи

### Навігація
- ліворуч логотип сайту який веде до трендів
- праворуч відображається іконка залогіненого користувача, це фіктивний фунціонал

### Головна сторінка (/) - Трендові пости
- видяться по 5 постів, є з можливістю пагінації
- при кліку на іконку чи назву користувача переходить на сторінку цього користувача
- відео автоматично починає відтвоюватись при видимості 50%
- відео можна ставити на паузу
- у відео є можливість вмикати/вимикати звук, якщо на одному вимкути то інші теж будуть без звуку і навпаки

### Сторінка користувача (/account/:username)
- відображається інформацію про користувача (фото, ім'я, кількість фоловерів)
- відео блок виводить кожен item з кількістю переглядів і ковером.
- при наведенні курсора на відео відбуваєтся автоматичне завантаження і починається програвання
- при відведенні курсора повертається ковер відео.
- при натисканні на відео-елемент відкривається модальне вікно

## Не виконав
- адаптив під мобільну версію, бо не вистачило часу;
- покриття тестами, бо маю мало досвіду;
