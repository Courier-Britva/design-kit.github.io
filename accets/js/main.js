const container = document.getElementsByClassName('Courier-britva-switch');
const arrays = Array.from(container)

document.getElementById('courier_britva').onclick = function() {
    arrays.forEach(x => x.classList.toggle('display-none'));
}

////////////////////////////////////////////////////////////////////////
// В этом скрипте я просто меняю режим отображения тестового задания, //
// к самим заданиям прямого отношения он не имеет :0                  //
////////////////////////////////////////////////////////////////////////