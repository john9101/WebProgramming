function solveProblem() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    var delta = b * b - 4 * a * c;
    if (delta > 0) {
        var x1 = (-b + Math.sqrt(delta) / (2 * a));
        var x2 = (-b - Math.sqrt(delta) / (2 * a));
        document.getElementById("result").value = "x1 = " + x1 + "\nx2 = " + x2;
    }else if(delta == 0){
        var x = -b / (2 * a);
        document.getElementById("result").value = "x = " + x;
    }else{
        document.getElementById("result").value = "no solution";
    }
}