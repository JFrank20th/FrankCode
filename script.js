// campos de letras y numeros
const letters = document.getElementById("letters");
const numbers = document.getElementById("numbers");
// botones
const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const cn = document.getElementById("cn");
const j0 = document.getElementById("j0");
const cl = document.getElementById("cl");


//Funciones
const fnA1 = () => {
    if (numbers.innerHTML == "" && letters.innerHTML == "") {
        letters.innerHTML = "A"
        return "ok";
    }
    if (numbers.innerHTML != " " && letters.innerHTML == "ABCDEFGHIJ") {
        numbers.innerHTML = "1"
    }
    if (numbers.innerHTML != " " && letters.innerHTML != "ABCDEFGHIJ") {
        alert("faltan letras")
    }
};
const fnB2 = () => {
    if (numbers.innerHTML == "" && letters.innerHTML == "A") {
        letters.innerHTML += "B"
    }
    if (numbers.innerHTML == "1" && letters.innerHTML == "ABCDEFGHIJ") {
        numbers.innerHTML += "2"
        return "ok";
    }
    if (numbers.innerHTML != "12" && letters.innerHTML == "ABCDEFGHIJ") {
        alert("faltan numeros")
        return "ok";
    }
    if (numbers.innerHTML == "" && letters.innerHTML != "AB") {
        alert("Faltan letras")
    }
};
const fnC3 = () => {
    if (numbers.innerHTML == "" && letters.innerHTML == "AB") {
        letters.innerHTML += "C"
    }
    if (numbers.innerHTML == "12" && letters.innerHTML == "ABCDEFGHIJ") {
        numbers.innerHTML += "3"
        return "ok";
    }
    if (numbers.innerHTML != "123" && letters.innerHTML == "ABCDEFGHIJ") {
        alert("faltan numeros")
        return "ok";
    }
    if (numbers.innerHTML == "" && letters.innerHTML != "ABC") {
        alert("Faltan letras")
    }
};
const fnD4 = () => {
    if (numbers.innerHTML == "" && letters.innerHTML == "ABC") {
        letters.innerHTML += "D"
    }
    if (numbers.innerHTML == "123" && letters.innerHTML == "ABCDEFGHIJ") {
        numbers.innerHTML += "4"
        return "ok";
    }
    if (numbers.innerHTML != "1234" && letters.innerHTML == "ABCDEFGHIJ") {
        alert("faltan numeros")
        return "ok";
    }
    if (numbers.innerHTML == "" && letters.innerHTML != "ABCD") {
        alert("Faltan letras")
    }

};
const fnE5 = () => {
    if (numbers.innerHTML == "" && letters.innerHTML == "ABCD") {
        letters.innerHTML += "E"
    }
    if (numbers.innerHTML == "1234" && letters.innerHTML == "ABCDEFGHIJ") {
        numbers.innerHTML += "5"
        return "ok";
    }
    if (numbers.innerHTML != "12345" && letters.innerHTML == "ABCDEFGHIJ") {
        alert("faltan numeros")
        return "ok";
    }
    if (numbers.innerHTML == "" && letters.innerHTML != "ABCDE") {
        alert("Faltan letras")
    }
};
const fnF6 = () => {
    if (numbers.innerHTML == "" && letters.innerHTML == "ABCDE") {
        letters.innerHTML += "F"
    }
    if (numbers.innerHTML == "12345" && letters.innerHTML == "ABCDEFGHIJ") {
        numbers.innerHTML += "6"
        return "ok";
    }
    if (numbers.innerHTML != "123456" && letters.innerHTML == "ABCDEFGHIJ") {
        alert("faltan numeros")
        return "ok";
    }
    if (numbers.innerHTML == "" && letters.innerHTML != "ABCDEF") {
        alert("Faltan letras")
    }
};
const fnG7 = () => {
    if (numbers.innerHTML == "" && letters.innerHTML == "ABCDEF") {
        letters.innerHTML += "G"
    }
    if (numbers.innerHTML == "123456" && letters.innerHTML == "ABCDEFGHIJ") {
        numbers.innerHTML += "7"
        return "ok";
    }
    if (numbers.innerHTML != "1234567" && letters.innerHTML == "ABCDEFGHIJ") {
        alert("faltan numeros")
        return "ok";
    }
    if (numbers.innerHTML == "" && letters.innerHTML != "ABCDEFG") {
        alert("Faltan letras")
    }
};
const fnH8 = () => {
    if (numbers.innerHTML == "" && letters.innerHTML == "ABCDEFG") {
        letters.innerHTML += "H"
    }
    if (numbers.innerHTML == "1234567" && letters.innerHTML == "ABCDEFGHIJ") {
        numbers.innerHTML += "8"
        return "ok";
    }
    if (numbers.innerHTML != "12345678" && letters.innerHTML == "ABCDEFGHIJ") {
        alert("faltan numeros")
        return "ok";
    }
    if (numbers.innerHTML == "" && letters.innerHTML != "ABCDEFGH") {
        alert("Faltan letras")
    }
};
const fnI9 = () => {
    if (numbers.innerHTML == "" && letters.innerHTML == "ABCDEFGH") {
        letters.innerHTML += "I"
    }
    if (numbers.innerHTML == "12345678" && letters.innerHTML == "ABCDEFGHIJ") {
        numbers.innerHTML += "9"
        return "ok";
    }
    if (numbers.innerHTML != "123456789" && letters.innerHTML == "ABCDEFGHIJ") {
        alert("faltan numeros")
        return "ok";
    }
    if (numbers.innerHTML == "" && letters.innerHTML != "ABCDEFGHI") {
        alert("Faltan letras")
    }
};
const fnJ0 = () => {
    if (numbers.innerHTML == "" && letters.innerHTML == "ABCDEFGHI") {
        letters.innerHTML += "J"
        return "ok";
    }
    if (numbers.innerHTML == "123456789" && letters.innerHTML == "ABCDEFGHIJ") {
        numbers.innerHTML += "0"
        return "ok";
    }
    if (numbers.innerHTML != "1234567890" && letters.innerHTML == "ABCDEFGHIJ") {
        alert("faltan numeros")
        return "ok";
    }
    if (numbers.innerHTML == "" && letters.innerHTML != "ABCDEFGHIJ") {
        alert("Faltan letras")
    }
};
const fnCn = () => {
    numbers.innerHTML ="";
};

const fnCl = () => {
    letters.innerHTML ="";
};


//eventos
a1.onclick = () => {
    fnA1();
};
b2.onclick = () => {
    fnB2();
};
c3.onclick = () => {
    fnC3();
};
d4.onclick = () => {
    fnD4();
};
e5.onclick = () => {
    fnE5();
};
f6.onclick = () => {
    fnF6();
};
g7.onclick = () => {
    fnG7();
};
h8.onclick = () => {
    fnH8();
};
i9.onclick = () => {
    fnI9();
};
cn.onclick = () => {
    fnCn();
};
j0.onclick = () => {
    fnJ0();
};
cl.onclick = () => {
    fnCl();
};
