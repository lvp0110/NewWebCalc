//вывод данных на экран(таблицa)
function start1(){
    const DATA_MATERIAL = {
        // 'ЗАГОЛОВОК': [
        //     ['КОНСТРУКЦИИ', 'ДЛИНА КОНСТРУКЦИИ', 'ШИРИНА КОНСТРУКЦИИ', 'НАСТРОЙКИ']
            
        // ]
        'ПРОФИЛЬ': [
            ['ЗИПС-3Ультра.Звукоизоляционная бескаркасная облицовка (55 мм) для неровных стен ', 
                '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции">',
                '<input type="text" id="lenX" class="input-table" placeholder="ширина конструкции">',
                '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
            // ['Звукоизоляционная каркасная облицовка с применением Виброфлекс-коннект-ПС (90 мм)', 
            //     '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции">',
            //     '<input type="text" id="lenX" class="input-table" placeholder="ширина конструкции">',
            //     '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
            // ['Каркасный звукоизоляционный потолок на подвесах Виброфлекс-Коннект ПП (100 мм)', 
            //     '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции">',
            //     '<input type="text" id="lenX" class="input-table" placeholder="ширина конструкции">',
            //    '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
            // ['Звукоизоляционный пол с применением Шумостоп-С2, К2 (1 слой)', 
            //     '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции">',
            //     '<input type="text" id="lenX" class="input-table" placeholder="ширина конструкции">',
            //     '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
       
        ],
       
    }
    
    document.querySelector('.content').innerHTML = `<table class="data1"></table>`
    for (key in DATA_MATERIAL) {
        let row = document.createElement('tr')
        // row.innerHTML = `<td colspan="5">${key}</td>` 
        document.querySelector('.data').appendChild(row)
        console.log(row);
        for (let i = 0; i < DATA_MATERIAL[key].length; i++) {
            let row = document.createElement('tr')
            row.innerHTML = `
                <td>${DATA_MATERIAL[key][i][0]}</td>
                <td>${DATA_MATERIAL[key][i][1]}</td>
                <td>${DATA_MATERIAL[key][i][2]}</td>
                <td>${DATA_MATERIAL[key][i][3]}</td>`
            document.querySelector('.data').appendChild(row)
            console.log(row);
        }
    }
    }
    let button2 = document.getElementById("3Ul");    //кнопка ввода размеров
    button2.addEventListener("click", function () {
       start1();
    });
    
    
        
        