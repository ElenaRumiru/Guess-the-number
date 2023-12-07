#### 0. Техническое задание

1. Сгенерировать случайное число между 1 и 100.
2. Начать запись количества попыток игрока угадать число. Начать с 1.
3. Предоставить попытку угадать игроку загаданное число.
4. Вводимый диапазон 1 до 1000, но если больше 100 выводить предупреждение.
5. Как только попытка угадать была отправлена, выводить счетчик попыток
6. Далее, проверить было ли это число верным.
7. Если число верное:
    7.1. Показать поздравительное сообщение.
    7.2. Оградить игрока от дальнейшей возможности ввода чисел (это испортит игру).
    7.3. Предоставить возможность для перезапуска игры.
8. Если число не верное и есть попытки:
    8.1. Сказать игроку, что он не угадал.
    8.2. Разрешить ему использовать ещё попытку.
    8.3. Повысить число попыток на 1.
    8.4. Если число попыток делится на 3 без остатка - получает подсказку число больше или меньше
9. Если число не верное и попыток нет: Сказать игроку, что игра окончена.
    9.1. Оградить игрока от дальнейшей возможности ввода чисел (это испортит игру).
    9.2. Предоставить возможность для перезапуска игры без перезагрузки страницы.
    9.3. Во время перезапуска игры убедиться, что игровая логика и пользовательский интерфейс полностью сбросились на начальные значения и далее перейти обратно к пункту 1.

#### 1. Архитектура

Игра достаточно элементарная, поэтому была реализована в 4 функциональный файла:

1. index.html - разметка страницы, подключение css и js файлов
2. reset.css -  стандартный сброс значений браузера
3. style.css - стилизация станицы
4. main.js - весь функционал игры

#### 2. Для разработчиков

Если запустить консоль, вы можете увидеть загаданное число и протестировать поведение игры.

Благодарю за внимание!