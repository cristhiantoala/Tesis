function puntero(e) {
    var hoy = new Date();
    var fecha = hoy.getFullYear() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getDate();
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds()+ ',' + hoy.getMilliseconds()+":";
    var fechaYHora = fecha + ' ' + hora;
    var x = e.clientX;
    var y = e.clientY;
    var coor = fechaYHora+" "+"Mouse moved to "+"(" + x + ", " + y + ")";
    movMouse.push(coor);
    document.getElementById("coordenadas").value = movMouse;        
    }
function clicks(ev) {
    evento = ev || window.event;
    pulsado = evento.button;
    var hoy = new Date();
    var fecha = hoy.getFullYear() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getDate();
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds()+ ',' + hoy.getMilliseconds()+":";
    var fechaYHora = fecha + ' ' + hora;
    var x = ev.clientX;
    var y = ev.clientY;
    if (pulsado==0){
        pulsado="Button.left"
        var clck = fechaYHora+" "+"Mouse clicked at "+"(" + x + ", " + y + ")"+" with "+pulsado;
        movMouse.push(clck);
        var auxmovMouse=movMouse.join("\\r\\n")
        document.getElementById("coordenadas").value = auxmovMouse
    }
    if (pulsado==2){
        pulsado="Button.right"
        var clck = fechaYHora+" "+"Mouse clicked at "+"(" + x + ", " + y + ")"+" with "+pulsado;
        movMouse.push(clck);
        var auxmovMouse=movMouse.join("\\r\\n")
        document.getElementById("coordenadas").value = auxmovMouse
        document.getElementById("coordenadas").value = movMouse;
    }
}