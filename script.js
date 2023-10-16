 function cal(){
    var opr1 = document.getElementById('first').value;
    var opr2  = document.getElementById('second').value;
    var ope = document.getElementById("ope").value;
    // alert(opr1);
    // alert(opr2);
    if (ope == "+" ){
        var result = parseInt(opr1) + parseInt(opr2);
    }
    if (ope == "-" ){
        var result = parseInt(opr1) - parseInt(opr2);
    }
    if (ope == "*" ){
        var result = parseInt(opr1) * parseInt(opr2);
    }
    if (ope == "/" ){
        var result = parseInt(opr1) / parseInt(opr2);
    }
    if (ope == "%" ){
        var result = parseInt(opr1) % parseInt(opr2);
    }
    document.getElementById("result").value = result


    // var ope = document.getElementById('ope').value;
    // alert(ope);
 }