//вывод данных на экран(таблицa)
function start(){
const DATA_MATERIAL = {
    'ПРОФИЛЬ': [
        ['ЗИПС-Z4.Звукоизоляционная бескаркасная облицовка (55 мм) для неровных стен ', 
            '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="длина проема,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) проема,мм">',
            '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
        ['ЗИПС-Z4.Звукоизоляционная бескаркасная облицовка (55 мм) для неровных стен ', 
            '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="длина проема,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) проема,мм">',
            '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
        ['ЗИПС-Z4.Звукоизоляционная бескаркасная облицовка (55 мм) для неровных стен ', 
            '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="длина проема,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) проема,мм">',
            '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
        ['ЗИПС-Z4.Звукоизоляционная бескаркасная облицовка (55 мм) для неровных стен ', 
            '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="длина проема,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) проема,мм">',
            '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
        ['ЗИПС-Z4.Звукоизоляционная бескаркасная облицовка (55 мм) для неровных стен ', 
            '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="длина проема,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) проема,мм">',
            '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
        ['ЗИПС-Z4.Звукоизоляционная бескаркасная облицовка (55 мм) для неровных стен ', 
            '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="длина проема,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) проема,мм">',
            '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
        ['ЗИПС-Z4.Звукоизоляционная бескаркасная облицовка (55 мм) для неровных стен ', 
            '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="длина проема,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) проема,мм">',
            '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
        ['ЗИПС-Z4.Звукоизоляционная бескаркасная облицовка (55 мм) для неровных стен ', 
            '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="длина проема,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) проема,мм">',
            '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
        ['ЗИПС-Z4.Звукоизоляционная бескаркасная облицовка (55 мм) для неровных стен ', 
            '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="длина проема,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) проема,мм">',
            '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
        ['ЗИПС-Z4.Звукоизоляционная бескаркасная облицовка (55 мм) для неровных стен ', 
            '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="длина проема,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) проема,мм">',
            '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
        ['ЗИПС-Z4.Звукоизоляционная бескаркасная облицовка (55 мм) для неровных стен ', 
            '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="длина проема,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) проема,мм">',
            '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
        ['ЗИПС-Z4.Звукоизоляционная бескаркасная облицовка (55 мм) для неровных стен ', 
            '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="длина проема,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) проема,мм">',
            '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
        ['ЗИПС-Z4.Звукоизоляционная бескаркасная облицовка (55 мм) для неровных стен ', 
            '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="длина проема,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) проема,мм">',
            '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
        ['ЗИПС-Z4.Звукоизоляционная бескаркасная облицовка (55 мм) для неровных стен ', 
            '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="длина проема,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) проема,мм">',
            '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
        ['ЗИПС-Z4.Звукоизоляционная бескаркасная облицовка (55 мм) для неровных стен ', 
            '<input type="text" id="lenX" class="input-table" placeholder="длина конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) конструкции,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="длина проема,мм">',
            '<input type="text" id="lenX" class="input-table" placeholder="ширина(высота) проема,мм">',
            '<nav class="menu-table"><ul><li><a href="#"><i class="fa fa-cogs"></i>настройки</a><ul><li><a href="#">сдвоенный профиль</a></li><li><a href="#">шаг профиля</a></li><li><a href="#">периметр вибростек</a></li><li><a href="#">высота удлинителя потолка</a></li></ul></ul></nav>'],
    ],
}

document.querySelector('.content').innerHTML = `<table class="data"></table>`
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
            <td>${DATA_MATERIAL[key][i][3]}</td>
            <td>${DATA_MATERIAL[key][i][4]}</td>
            <td>${DATA_MATERIAL[key][i][5]}</td>`
        document.querySelector('.data').appendChild(row)
        console.log(row);
    }
}
}
let button1 = document.getElementById("Z4");    //кнопка ввода размеров
button1.addEventListener("click", function () {
   start();
});


    
    