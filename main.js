// Находим и создаем неободимые переменные
const input = document.querySelector(".field__form__input");
const btn = document.querySelector(".field__form__btn");
const check = document.querySelector(".result__check__out");
const help = document.querySelector(".result__help__out");
const count = document.querySelector(".result__count__out");
const maxCount = document.querySelector(".result__count__out_max");
const container = document.querySelector('.result');
const errorMessage = document.querySelector('.error-message');
let item = 0;
let tries = 10;
let userNum;
let randomizeNum = function () {
    let randNum = 1 + Math.floor(Math.random() * 100);
    return randNum;
};
let randNum = randomizeNum();


// Функция сброса
function createCancelBtn() {
    // Создаем новый элемент
    const button = document.createElement('button');
    container.append(button);
    // Добавляем классы
    button.classList.add('gradient_knopka');
    button.classList.add('cancel');
    // Добавляем нужный текст          
    button.textContent = 'Начать заново';
    // Добавляем обработчик клика на сброс сразу после создания элемента
    document.querySelector('.cancel').onclick = function (evt) {
        evt.preventDefault();
        // Сбрасываем все значения на исходные
        userNum = input.value;
        check.textContent = "—";
        help.textContent = "—";
        count.textContent = 0;

        let cancelBtnFind = document.querySelector('.cancel');
        // Перезапускаем рандомное число
        cancelBtnFind.remove();
        let newRandomNum = randomizeNum();
        randNum = newRandomNum;
        btn.classList.remove('gradient_knopka_off');
        btn.disabled = false;
        item = 0;
        input.value = '';
        check.style.color = "black";
    }
};

// Добавляем нужный текст ошибки
function createErrorMessage() {               
        errorMessage.textContent = 'Вводимое число больше 100!';
};

// Добавляем обработчик клика по кнопке "Проверить"
btn.onclick = function (evt) {
    // Забираем значение импута после клика
    userNum = input.value;
    // Выполняем успешно проверку, если число в диапазоне от 1 до 100, а кол-во попыток < 10
    if (item < tries && userNum < 101 && userNum > 0) {
        evt.preventDefault();
        errorMessage.textContent = ''
        // ВНИМАНИЕ! Данная подсказка с загаданным числом
        // отображается в console.log специально для тестирования
        console.log('Для тестов: введенное число ' + userNum + ', загаданное число: ' + randNum);
        // Добавляем подсказки, если < или >
        if (userNum > randNum) {
            check.textContent = "Мимо!";
            help.textContent = "Попробуй меньше!";
            item++;
            count.textContent = item;
        } else if (userNum < randNum && userNum < 101 && userNum > 0) {
            check.textContent = "Мимо!";
            help.textContent = "Попробуй больше!";
            item++;
            count.textContent = item;
            // Добавляем поведение и возможность сброса при выйгрыше
        } else if (userNum == randNum) {
            check.textContent = "Поздравляю! Вы угадали число!";
            check.style.color = "purple";
            help.textContent = "В самый раз";
            item++;
            count.textContent = item;
            btn.disabled = true;
            btn.classList.add('gradient_knopka_off');
            createCancelBtn();
        } 
        // Добавляем поведение игры в случае, если попытки закончились
    } else if (item === tries) {
        check.textContent = "Увы, попытки кончились(";
        help.textContent = "Попробуем заново?";
        count.style.color = "purple";
        count.style.fontSize = "16px";
        maxCount.style.color = "purple";
        maxCount.style.fontSize = "16px";
        let cancelBtnFind = document.querySelector('.cancel');
        if (cancelBtnFind == null) {
            btn.classList.add('gradient_knopka_off');
            createCancelBtn();
        }
    } 
    // Добавляем предупреждение, если число больше 100
    if (userNum > 100) {

        createErrorMessage();

    } 
};