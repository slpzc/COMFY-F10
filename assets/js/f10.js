// !ТО, ЧТО ДОБАВИЛ/ИЗМЕНИЛ Я - СТАВЛЮ РЯДОМ КОММЕНТАРИЙ ВИДА "!!!"

var app = new Vue({
    el: "#app",
    data() {
        return {
            active: true,
            currNav: 1,
            steep: 0,
            navElements: [{
                    id: 0,
                    title: 'Профиль',
                    status: true,
                },

                {
                    id: 1,
                    title: 'Рулетка',
                    img: './assets/img/ticket.svg',
                    unique: true,
                    status: undefined,
                },

                {
                    id: 2,
                    title: 'Магазин',
                    img: './assets/img/cash.svg',
                    unique: true,
                    status: undefined,
                },

                {
                    id: 3,
                    title: 'Одежда',
                    status: false,
                },

                {
                    id: 4,
                    title: 'Форбс',
                    status: false,
                },

                {
                    id: 5,
                    title: 'Помощь',
                    status: undefined,
                },
            ],
            rollStore: [ ],
            rollSettings: { // !!!
                // цена рулетки
                rollPrice: 200,
                // айтемы для рулетки 
                rollItems: [
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'bmw730',
                        name: 'Bmw 730', // полный нэйм, отображающийся в выигрыше
                        price: 22000,
                    },
                    {
                        uid: 4,
                        type: 2, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'money-bag',
                        name: 'Деньги', // полный нэйм, отображающийся в выигрыше
                        price: false,
                        count: 1000,
                    },
                    {
                        uid: 1, // unicalIDentificator: 1- car, moto, 2-exp, 3-vip, 4-money, 5-lic, 6-food, 7-CCoins
                        type: 2, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'free-icon-vip-3791579', // тайтл, отображающийся в рулетке
                        name: 'VIP', // полный нэйм, отображающийся в выигрыше
                        price: false,
                    },
                    {
                        uid: 4,
                        type: 2, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'money-bag',
                        name: 'Деньги', // полный нэйм, отображающийся в выигрыше
                        price: false,
                        count: 20000,
                    },
                    {
                        uid: 5,
                        type: 1, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'license',
                        name: 'Лицензии', // полный нэйм, отображающийся в выигрыше
                        price: false,
                    },
                    {
                        uid: 4,
                        type: 2, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'money-bag',
                        name: 'Деньги', // полный нэйм, отображающийся в выигрыше
                        price: false,
                        count: 40000,
                    },
                    // ЕДА И КОМФИ КОИНЫ ТУТ!
                ],
                otherPrizesRoll: [
                    {
                        uid: 7,
                        type: 2,
                        title: 'CCOINS',
                        name: 'Comfy Coins',
                        count: 50
                    },
                    {
                        uid: 7,
                        type: 2,
                        title: 'CCOINS',
                        name: 'Comfy Coins',
                        count: 70
                    },
                    {
                        uid: 7,
                        type: 2,
                        title: 'CCOINS',
                        name: 'Comfy Coins',
                        count: 90
                    },
                    {
                        uid: 7,
                        type: 2,
                        title: 'CCOINS',
                        name: 'Comfy Coins',
                        count: 110
                    },
                    {
                        uid: 7,
                        type: 2,
                        title: 'CCOINS',
                        name: 'Comfy Coins',
                        count: 130
                    },
                    {
                        uid: 7,
                        type: 2,
                        title: 'CCOINS',
                        name: 'Comfy Coins',
                        count: 150
                    },
                    {
                        uid: 7,
                        type: 2,
                        title: 'CCOINS',
                        name: 'Comfy Coins',
                        count: 170
                    },
                    {
                        uid: 7,
                        type: 4,
                        title: 'CCOINS',
                        name: 'Comfy Coins',
                        count: 190
                    },
                    {
                        uid: 7,
                        type: 4,
                        title: 'CCOINS',
                        name: 'Comfy Coins',
                        count: 210
                    },
                    {
                        uid: 7,
                        type: 4,
                        title: 'CCOINS',
                        name: 'Comfy Coins',
                        count: 230
                    },
                    {
                        uid: 7,
                        type: 4,
                        title: 'CCOINS',
                        name: 'Comfy Coins',
                        count: 250
                    },
                    {
                        uid: 7,
                        type: 4,
                        title: 'CCOINS',
                        name: 'Comfy Coins',
                        count: 270
                    },
                    {
                        uid: 7,
                        type: 4,
                        title: 'CCOINS',
                        name: 'Comfy Coins',
                        count: 290
                    },
                    {
                        uid: 7,
                        type: 4,
                        title: 'CCOINS',
                        name: 'Comfy Coins',
                        count: 310
                    },
                    {
                        uid: 7,
                        type: 4,
                        title: 'CCOINS',
                        name: 'Comfy Coins',
                        count: 330
                    },
                    {
                        uid: 7,
                        type: 4,
                        title: 'CCOINS',
                        name: 'Comfy Coins',
                        count: 340
                    }
                ],
                carsPrizes: [
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'bmw730',
                        name: 'Bmw 730', // полный нэйм, отображающийся в выигрыше
                        price: 22000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'carrera19',
                        name: 'Porsche carrera 19', // полный нэйм, отображающийся в выигрыше
                        price: 35000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'cayen19',
                        name: 'Porsche cayen', // полный нэйм, отображающийся в выигрыше
                        price: 27000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'charger20',
                        name: 'Dodge Charger', // полный нэйм, отображающийся в выигрыше
                        price: 14000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'evo10',
                        name: 'Mitsubishi evo10', // полный нэйм, отображающийся в выигрыше
                        price: 5000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'ff50',
                        name: 'Ferrari ff50', // полный нэйм, отображающийся в выигрыше
                        price: 50000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'fordgt17',
                        name: 'Ford gt', // полный нэйм, отображающийся в выигрыше
                        price: 40000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'fordraptor',
                        name: 'Ford raptor 2', // полный нэйм, отображающийся в выигрыше
                        price: 23000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'g63',
                        name: 'Mercedes g63', // полный нэйм, отображающийся в выигрыше
                        price: 40000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'panamera',
                        name: 'Porsche Panamera', // полный нэйм, отображающийся в выигрыше
                        price: 23000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'gle53',
                        name: 'Mercedes gle53', // полный нэйм, отображающийся в выигрыше
                        price: 20000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'gt63',
                        name: 'Mercedes gt63s', // полный нэйм, отображающийся в выигрыше
                        price: 25000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'gtr17',
                        name: 'Nissan GT-R', // полный нэйм, отображающийся в выигрыше
                        price: 15000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'rrover17',
                        name: 'Range Rover 2017', // полный нэйм, отображающийся в выигрыше
                        price: 38000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'rs6',
                        name: 'Audi rs6', // полный нэйм, отображающийся в выигрыше
                        price: 20000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'urus',
                        name: 'Lamborghini urus', // полный нэйм, отображающийся в выигрыше
                        price: 50000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'wraith',
                        name: 'Rolls Royce wraith', // полный нэйм, отображающийся в выигрыше
                        price: 50000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: '18rs7',
                        name: 'Audi rs7', // полный нэйм, отображающийся в выигрыше
                        price: 15000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: '2019m5',
                        name: 'BMW m5 f90', // полный нэйм, отображающийся в выигрыше
                        price: 30000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'amggt16',
                        name: 'Mercedes amg gt', // полный нэйм, отображающийся в выигрыше
                        price: 27000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'bentayga',
                        name: 'Bentley bentayga', // полный нэйм, отображающийся в выигрыше
                        price: 30000
                    },
                    {
                        uid: 2,
                        type: 3, // существует 4 типа: 1 - серое, 2 - зеленое, 3 - оранжевое, 4 - красное
                        title: 'bentley20',
                        name: 'Bentley continental gt', // полный нэйм, отображающийся в выигрыше
                        price: 30000
                    },
                ],
                // сколько раз чел прокручивает рулетку
                rollX: 1,
                // то, что выиграл юзер
                winObject: false,
                // Блокирование кнопок: открывает ли чел рулетку 
                rolOpening: false,
                // активный слайд выигрыша
                activeSlide: 0,
                audio: {
                    rolling: false,
                    win: false
                }
            },
            userInfo: [{ // !!!
                lvl: 21,
                forbes: [{
                    status: false,
                    seat: 12,
                }],
                name: 'Alisher',
                surname: 'Antonov',
                money: 1200,
                bank: 1200,
                coins: 1500, // !!!
                vip: true,
                musc: [{
                    gun: 0,
                    driver: 0,
                    eas: 0,
                    cook: 0,
                    musc: 0,
                }],

                house: [{
                        holder: 3,
                        class: 'A',
                        houseName: 'Дом №464',
                        price: 12000000,
                    },

                    {
                        holder: 3,
                        class: 'Comfotable',
                        houseName: 'Квартира №464',
                        price: 120000,
                    }
                ],

                cars: [{
                    holder: 3,
                    carName: 'BMW M5',
                    probeg: 101000,
                    price: 120000,
                }, ],

                flat: {
                    holder: 3,
                    class: 'Comfortable',
                    houseName: 'Квартира №464',
                    price: 599999,
                }
            }],

            forbesInfo: [{
                    name: 'User',
                    surname: 'User',
                    money: 5000
                },

                {
                    name: 'YEEEE',
                    surname: 'User',
                    money: 502
                },

                {
                    name: 'SMALL',
                    surname: 'User',
                    money: 50
                },

                {
                    name: 'BIG CH',
                    surname: 'User',
                    money: 5000235235235235
                },

                {
                    name: 'User',
                    surname: 'User',
                    money: 5000789
                },

            ],

            notify: [{
                status: '',
                seen: false,
                title: '',
                src: './assets/img/done.svg',
            }, ],

            questionsAll: [{
                you: 'Что делаешь?',
                he: 'Рассказываю сказки об принцессе из Диснея'
            }, ],

            clothesAll: [{
                    src: './assets/img/black.png',
                    price: '1200',
                    title: 'Одежда ебанная',
                    subTitle: 'Редкий лут, дрыхлый',
                },

                {
                    src: './assets/img/black.png',
                    price: '200',
                    title: 'Одежда ебанная',
                    subTitle: 'Редкий лут, дрыхлый',
                },

                {
                    src: './assets/img/black.png',
                    price: '100',
                    title: 'Одежда ебанная',
                    subTitle: 'Редкий лут, дрыхлый',
                },

                {
                    src: './assets/img/black.png',
                    price: '120',
                    title: 'Одежда ебанная',
                    subTitle: 'Редкий лут, дрыхлый',
                },


                {
                    src: './assets/img/black.png',
                    price: '120',
                    title: 'Одежда ебанная',
                    subTitle: 'Редкий лут, дрыхлый',
                },

                {
                    src: './assets/img/black.png',
                    price: '120',
                    title: 'Одежда ебанная',
                    subTitle: 'Редкий лут, дрыхлый',
                },

                {
                    src: './assets/img/black.png',
                    price: '120',
                    title: 'Одежда ебанная',
                    subTitle: 'Редкий лут, дрыхлый',
                },


                {
                    src: './assets/img/black.png',
                    price: '120',
                    title: 'Одежда ебанная',
                    subTitle: 'Редкий лут, дрыхлый',
                },
            ],
            modalInteract:  false
        }
    },
    methods: { // !!!
        // !!!СТРЕЛКА
        addToInventory(i){
            // твоё действие на добавление в инвентарь
                this.rollStore.splice(this.rollStore.indexOf(i), this.rollStore.indexOf(i) + 1)
                this.modalInteract = false
        },
        sellItem(i){
            // твоё действие на удаление
            this.rollStore.splice(this.rollStore.indexOf(i), this.rollStore.indexOf(i) + 1)
            this.modalInteract = false
        },
        interactItem(item){
            this.modalInteract = item
        },
        setNameItem(n){
            switch (n){
                case 1:
                    return 'Автомобиль'
                    break;
            }
        },
        changeArrow(step) {
            if (step === '-') {

            } else if (step === '+') {

            }
        },
        getImgUrl(pet) {
            return "./assets/img/" + pet + ".png"
        },

        changeStatus(element) {
            let i = 0;

            for (i; i < this.navElements.length; i++) {
                this.navElements[i].status = false;
            }

            element.status == false ? element.status = true : element.status = false;
            this.currNav = element.id;
        },

        arrowUp() {
            this.steep++;
        },

        arrowDown() {

            if (this.steep > !3) {
                this.steep--;
            }
        },

        closeMenu() {
            mp.trigger('f10:menu:destroy');
        },
        sendQuestionBtn() {
            setTimeout(() => {
                if (this.helpText != '' && this.helpText.length > 3) {
                    this.notify[0].seen = true;
                    this.notify[0].src = './assets/img/done.svg';
                    this.notify[0].status = 'Успешно';
                    this.notify[0].title = 'Ваше сообщение отправлено и на него скоро ответят!';

                    setTimeout(() => {
                        this.questionsAll.push({
                            you: `${this.helpText}`,
                            he: `Админ еще не ответил на этот вопрос!`,
                        });
                    }, 700);

                } else {
                    this.notify[0].seen = true;
                    this.notify[0].src = './assets/img/exit-ic.svg';
                    this.notify[0].status = 'Неудача';
                    this.notify[0].title = 'Слишком мало символов, распишите более подробнее';
                }
            }, 500);
        },

        // !!!
        RollOpen(method) {
            if (this.userInfo[0].coins < this.rollOptions.price) { // Проверяем, есть ли коины у чела
                return;
            }
            this.rollSettings.rolOpening = true; // блокируем кнопки
            this.rollSettings.audio.rolling = new Audio('../assets/sound/Untitleds.mp3');
            this.rollSettings.audio.win = new Audio('../assets/sound/win.mp3')
            if (this.rollSettings.rollItems.length > 300) { // некоторая проверка, чтобы не убить производительность
                this.rollSettings.rollItems.length = 5
            }
            this.createItemsToRoll() // создаём призы

            // Создаём переменные, чтобы с ними потом работать
            let price = this.rollOptions.price
            let count = this.rollSettings.rollX
            let itemSet = {
                width: this.$refs.rItem.offsetWidth,
                height: this.$refs.rItem.offsetHeight
            }
            // проверяем метод открытия. 1 - обычное открытие 2 - фаст открытие
            if (method === 1) {
                console.log('снять со счёта игрока', price)
                this.userInfo[0].coins -= price
                this.RollMethodF(itemSet, count, true)
            } else if (method === 2) {
                console.log('снять со счёта игрока', price)
                this.userInfo[0].coins -= price
                this.RollMethodF(itemSet, count, false)
            }
        },
        RollMethodF(itemSet, count, scrollToItems) {
            let th = this; // сохраняем контекст приложения
            if (count == 3) { // проверяем количество открытий: x1, x3, x5, x10
                // Создаём объект выигрышей в виде чисел
                let winProp = {
                    first: th.getRandom(10, th.rollSettings.rollItems.length),
                    second: th.getRandom(10, th.rollSettings.rollItems.length),
                    third: th.getRandom(10, th.rollSettings.rollItems.length)
                }
                // Создаём еще объект с призами
                let winItems = [
                    th.rollSettings.rollItems[winProp.first],
                    th.rollSettings.rollItems[winProp.second],
                    th.rollSettings.rollItems[winProp.third]
                ]
                console.log('ЧЕЛУ ВЫПАЛО')
                console.log(winItems)
                // Проверяем: это фаст открытие или обычное
                if (scrollToItems) {
                    this.rollSettings.audio.rolling.play();
                    this.smoothTo(winProp.first, 500, 'anim', true)
                    this.smoothTo(winProp.second, 500, 'anim', true)
                    this.smoothTo(winProp.third, 500, 'anim', true)
                    setTimeout(() => {
                        th.rollSettings.winObject = winItems
                        th.rollStore.push(...winItems)


                    }, 1500);
                } else {
                    this.rollSettings.audio.rolling.pause()
                    this.rollSettings.audio.rolling.currentTime = 0.0
                    this.rollSettings.audio.win.play()
                    th.rollSettings.winObject = winItems
                    th.rollStore.push(...winItems)
                }
            } else if (count == 1) {
                let winProp = th.getRandom(10, th.rollSettings.rollItems.length)
                let winItem = th.rollSettings.rollItems[winProp]
                console.log(winItem)
                if (scrollToItems) {
                    this.rollSettings.audio.rolling.play();
                    this.smoothTo(winProp, 1000, 'anim')
                    setTimeout(() => {
                        this.rollSettings.audio.rolling.pause()
                        this.rollSettings.audio.rolling.currentTime = 0.0
                        this.rollSettings.audio.win.play()
                        th.rollSettings.winObject = winItem
                        th.rollStore.push(winItem)
                    }, 1000);
                } else {
                    this.rollSettings.audio.win.play()
                    th.rollSettings.winObject = winItem
                    th.rollStore.push(winItem)
                }
            } else if (count === 5) {
                let winProp = {
                    first: th.getRandom(10, th.rollSettings.rollItems.length),
                    second: th.getRandom(10, th.rollSettings.rollItems.length),
                    third: th.getRandom(10, th.rollSettings.rollItems.length),
                    fourth: th.getRandom(10, th.rollSettings.rollItems.length),
                    fifth: th.getRandom(10, th.rollSettings.rollItems.length)
                }
                let winItems = [
                    th.rollSettings.rollItems[winProp.first],
                    th.rollSettings.rollItems[winProp.second],
                    th.rollSettings.rollItems[winProp.third],
                    th.rollSettings.rollItems[winProp.fourth],
                    th.rollSettings.rollItems[winProp.fifth]
                ]
                console.log('ЧЕЛУ ВЫПАЛО')
                console.log(winItems)
                if (scrollToItems) {
                    this.rollSettings.audio.rolling.play();
                    this.smoothTo(winProp.first, 500, 'anim', true)
                    this.smoothTo(winProp.second, 500, 'anim', true)
                    this.smoothTo(winProp.third, 500, 'anim', true)
                    this.smoothTo(winProp.fourth, 500, 'anim', true)
                    this.smoothTo(winProp.fifth, 500, 'anim', true)
                    setTimeout(() => {
                        this.rollSettings.audio.rolling.pause()
                        this.rollSettings.audio.rolling.currentTime = 0.0
                        this.rollSettings.audio.win.play()
                        th.rollSettings.winObject = winItems
                    }, 2500);
                    th.rollStore.push(...winItems)
                } else {
                    this.rollSettings.audio.win.play()
                    th.rollSettings.winObject = winItems
                    th.rollStore.push(...winItems)
                }
            } else if (count === 10) {
                let winProp = {
                    first: th.getRandom(10, th.rollSettings.rollItems.length),
                    second: th.getRandom(10, th.rollSettings.rollItems.length),
                    third: th.getRandom(10, th.rollSettings.rollItems.length),
                    fourth: th.getRandom(10, th.rollSettings.rollItems.length),
                    fifth: th.getRandom(10, th.rollSettings.rollItems.length),
                    sixth: th.getRandom(10, th.rollSettings.rollItems.length),
                    seventh: th.getRandom(10, th.rollSettings.rollItems.length),
                    eighth: th.getRandom(10, th.rollSettings.rollItems.length),
                    ninth: th.getRandom(10, th.rollSettings.rollItems.length),
                    tenth: th.getRandom(10, th.rollSettings.rollItems.length),
                }
                let winItems = [
                    th.rollSettings.rollItems[winProp.first],
                    th.rollSettings.rollItems[winProp.second],
                    th.rollSettings.rollItems[winProp.third],
                    th.rollSettings.rollItems[winProp.fourth],
                    th.rollSettings.rollItems[winProp.fifth],
                    th.rollSettings.rollItems[winProp.sixth], // забей, мне уже лень поправлять автоподстановку слов
                    th.rollSettings.rollItems[winProp.seventh],
                    th.rollSettings.rollItems[winProp.eighth],
                    th.rollSettings.rollItems[winProp.ninth],
                    th.rollSettings.rollItems[winProp.tenth],
                ]
                console.log('ЧЕЛУ ВЫПАЛО')
                console.log(winItems)
                if (scrollToItems) {
                    this.rollSettings.audio.rolling.play();
                    this.smoothTo(winProp.first, 500, 'anim', true)
                    this.smoothTo(winProp.second, 500, 'anim', true)
                    this.smoothTo(winProp.third, 500, 'anim', true)
                    this.smoothTo(winProp.fourth, 500, 'anim', true)
                    this.smoothTo(winProp.fifth, 500, 'anim', true)
                    this.smoothTo(winProp.sixth, 500, 'anim', true) //
                    this.smoothTo(winProp.seventh, 500, 'anim', true)
                    this.smoothTo(winProp.eighth, 500, 'anim', true)
                    this.smoothTo(winProp.ninth, 500, 'anim', true)
                    this.smoothTo(winProp.tenth, 500, 'anim', true)
                    setTimeout(() => {
                        this.rollSettings.audio.rolling.pause()
                        this.rollSettings.audio.rolling.currentTime = 0.0
                        this.rollSettings.audio.win.play()
                        th.rollSettings.winObject = winItems
                    }, 5000);
                    th.rollStore.push(...winItems)
                } else {
                    this.rollSettings.audio.win.play()
                    th.rollSettings.winObject = winItems
                    th.rollStore.push(...winItems)
                }
            }
            this.rollSettings.rolOpening = false
            // принципы DRY соблюдены.
        },
        createItemsToRoll() {
            // Создаём айтемы/призы для рулетки
            for (let index = 0; index < 10; index++) {
                this.rollSettings.rollItems.push(this.rollSettings.rollItems[Math.floor(Math.random() * this.rollSettings.rollItems.length)])
            }
        },
        mountedPrizes(){
            let car = Math.floor(Math.random() * 99)
            let i = 6;
            for (let index = 0; index < 25; index++) {
                this.rollSettings.rollItems.push(this.rollSettings.rollItems[Math.floor(Math.random() * this.rollSettings.rollItems.length)])
                this.rollSettings.rollItems[this.rollSettings.rollItems.length-1].index = this.rollSettings.rollItems.length
                console.log(this.rollSettings.rollItems[this.rollSettings.rollItems.length-1].index)
            }
            if(car === 99){
                this.rollSettings.rollItems.push(this.rollSettings.carsPrizes[Math.floor(Math.random() * this.rollSettings.carsPrizes.length)])
                console.log('пушнул, чекай')
            }
            let vip = Math.floor(Math.random() * 2)
            vip === 1 ? this.rollSettings.rollItems.push(this.rollSettings.otherPrizesRoll[Math.floor(Math.random() * this.rollSettings.otherPrizesRoll.length)]) : false
        },
        prizeinteract(met, card) {
            // Интерактирование с призами: забрал/продал
            // card передаётся в случае, если чел открывал несколько раз: x3, x5, x10
            // met определяет: продал чел приз или забрал: 1 - забрал, 2 - продал
            if (card) {
                console.log('ЧЕКНИ ТАЧКИ')
                console.log(card)
                if (met === 1) {
                    console.log('юзер взял тачку выше')
                    console.log('меняю вью')
                    this.rollSettings.activeSlide++
                    if (!this.rollOptions.winView) {
                        this.rollSettings.activeSlide = 0
                        this.rollSettings.winObject = false
                    }
                } else if (met === 2) {
                    console.log('юзер ПРОДАЛ тачку выше')
                    console.log('меняю вью')
                    this.rollSettings.activeSlide++

                    this.userInfo[0].coins += card.price



                    if (!this.rollOptions.winView) {
                        this.rollSettings.activeSlide = 0
                        this.rollSettings.winObject = false
                    }
                }
            } else {
                if (met == 1) {
                    console.log('Юзер забрал приз. Приз находится в rollSettings.winObject')
                    // ..твой код
                    this.rollSettings.winObject = false
                } else if (met == 2) {
                    console.log('Юзер продал приз. При находится в rollSettings.winObject')
                    console.log(this.rollSettings.winObject)
                    // ..твой код
                    this.userInfo[0].coins += this.rollSettings.winObject.price
                    this.rollSettings.winObject = false
                }
            }

        },
        getRandom(min, max) {
            // ну, тут просто генирим рандомное число
            return Math.floor(Math.random() * ((max-3) - min) + min)
        },
        smoothTo(to, time, type, reset) {
            // скроллим до элементов
            // to - число айтема
            // time - время, за которое проскроллится рулетка до айтема
            // type - определяем тип скролла: anim - дефолтный/нормальный, fast - быстрый
            // reset - нужно ли сбрасывать рулетку до начального положения
            if (type == 'anim') {
                $('.roll__roll').animate({
                    left: -((to * 118) - 248)
                    // !left: -((x * 118) - 238)
                }, time)
                if (reset) {
                    $('.roll__roll').css({
                        left: 0
                    }, 0)
                }
            } else if (type == 'fast') {
                $('.roll__roll').css({
                    left: -((to * 118) - 248)
                    // !left: -((x * 118) - 238)
                }, 0)
            }
        }
    },
    mounted() {
        this.mountedPrizes()

        for (let i = 0; i < this.forbesInfo.length; i++) {
            if (this.forbesInfo[i].name == this.userInfo[0].name && this.forbesInfo[i].surname == this.userInfo[0].surname) {
                this.userInfo[0].forbes[0].status = true;
                return this.userInfo[0].forbes[0].seat = i + 1;
            } else {
                this.userInfo[0].forbes[0].status = false;
            }
        }
        console.log(this.profileOptions.showArrow())
    },
    computed: { // !!!
        // компьютед для рулетки
        rollOptions() {
            // цена, которая зависит от количества прокруток: rollX
            let price = this.rollSettings.rollPrice * this.rollSettings.rollX
            // нужно ли показывать экран выигрыша
            let winView = this.rollSettings.activeSlide == this.rollSettings.winObject.length ? false : true
            // Проверяем: если это массив - значит показываем активный слайд выигрыша, если нет - нихуя не показываем
            let howView = Array.isArray(this.rollSettings.winObject) ? this.rollSettings.activeSlide : false
            // возвращаем вычисления
            return {
                price,
                winView,
                howView,
            }
        },
        forbersSort() {
            return this.forbesInfo.sort(function (a, b) {
                return b.money - a.money;
            });
        },
        profileOptions() {
            //this.userInfo[0].house.length
            let houses = () => {
                if (this.userInfo[0].house.length == 0) {
                    return {
                        show: false,
                        step: false
                    }
                } else if (this.userInfo[0].house.length != 0) {
                    return {
                        show: true,
                        step: 1
                    }
                }
            };
            let cars = () => {
                if (this.userInfo[0].cars.length == 0) {
                    return {
                        show: false,
                        step: false
                    }
                } else if (this.userInfo[0].cars.length != 0) {
                    if (this.userInfo[0].house.length != 0) {
                        return {
                            show: true,
                            step: 2
                        }
                    } else {
                        return {
                            show: true,
                            step: 1
                        }
                    }

                }
            };
            let showArrow = () => {
                if (houses().show) {
                    if (cars().show) {
                        return {
                            show: false,
                            step: cars().step
                        }
                    } else {
                        return {
                            show: false,
                            step: houses().step
                        }
                    }
                } else {
                    if (cars().show) {
                        return {
                            show: false,
                            step: cars().step
                        }
                    } else {
                        return {
                            show: false,
                            step: 0
                        }
                    }
                }
            }
            return {
                houses,
                cars,
                showArrow
            }

        }
    },

})