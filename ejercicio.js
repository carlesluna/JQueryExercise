$(function () {

    function ordenar(numero) {
        var n = numero.split('');
        n.sort();
        return n.join('');
    }
    function ordenarReves(numero) {
        var n = numero.split('');
        n.sort();
        n.reverse();
        return n.join('');
    }
    function darVuelta(resta) {
        var n = resta.split('');
        n.reverse();
        return n.join('');
    }

    $('#calcular').click(function () {

        var numero = $('#numero').val();
        var res, resta, numUp, numDown;

        if (numero < 0) {
                alert ("Por favor introduce un número positivo");
                document.location.reload();
                return;
        }

        if (numero.length !== 3) {
            alert ("El número debe tener tres cifras");
            document.location.reload();
            return;
        }
        if (numero.charAt(0) === numero.charAt(1) ||
                numero.charAt(0) === numero.charAt(2) ||
                numero.charAt(2) === numero.charAt(1)) {
                alert("Las cifras no pueden repetirse");
                document.location.reload();
                return;
        }



        numDown = ordenarReves(numero);
        res = `<tr><td id="cellLeft">El número ordenado de mayor a menor es: </td><td id="cellRight">${numDown}</td></tr>`;
        numUp = ordenar(numero);
        res += `<tr><td id="cellLeft">El número ordenado de menor a mayor es: </td><td id="cellRight">${numUp}</td></tr>`;
        resta = numDown-numUp;
        res += `<tr><td id="cellLeft">La resta es: </td><td id="cellRight">${resta}</td></tr>`;
        numUpa = darVuelta(resta.toString());
        res += `<tr><td id="cellLeft">Dado la vuelta es: </td><td id="cellRight">${numUpa}</td></tr>`;
        res += `<tr><td id="cellLeft">La suma es de estos dos últimos es:</td><td id="cellRightResult">${parseInt(resta)+parseInt(numUpa)}</td></tr>`;

        $("#reload").click(function() {
          document.location.reload();
        });

        $("#resultado").html(res);

        $("#milochentaynueve").html(`<h1> Siempre devuelve 1089 !! </h1>`);

    });

});
