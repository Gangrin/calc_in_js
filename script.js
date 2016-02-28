function count(e)  {
    var a = document.getElementById("dzialanie");
    if (e.keyCode === 13) {
	e.preventDefault();
	calc(a.value);
	a.value = "";
    }
}

function calc(val)  {
    var sum = val.indexOf("+");
    var sub = val.indexOf("-");
    var multi = val.indexOf("*");
    var divi = val.indexOf("/");
    var pot = val.indexOf("^");
    var pier = val.indexOf("sqrt");

    var res;

    if (sum > 0) {
	res = sum;
    } else if (sub > 0) {
	res = sub;
    } else if (multi > 0) {
	res = multi;
    } else if (divi > 0) {
	res = divi;
    } else if (pot > 0) {
	res = pot;
    } else if (pier > 0) {
	res = pier;
    }

    var w = res; //bo w javascript wszystko liczy się od zera
    var e = (res + 1);
    if (pier > 0) {
    	e = res + 4;
    }
    var x = val.substring(0,w);
    x = parseFloat(x);
    var y = val.substring(e);
    y = parseFloat(y);

    var all = 0

        if (sum > 0) {
	all = x + y;
    } else if (sub > 0) {
	all = x - y;
    } else if (multi > 0) {
	all = x * y;
    } else if (divi > 0) {
	all = x / y;
    } else if (pot > 0) {
	all = Math.pow(x,y);
    } else if (pier > 0) {
	all = Math.pow(x, 1/y);
    }

    var operation = document.getElementById("operation");
    operation.innerHTML = val + " = ";
    var result = document.getElementById("result");
    //result.innerHTML = all.toFixed(10);
    
    
    
    var cc = all.toFixed(10);
    var tempcc = cc.split(".");
    	if (parseInt(tempcc[1], 10) === 0) {
    		cc = tempcc[0]
    	} 

	result.innerHTML = cc;
}
