let salary = 3000;

let caja = document.querySelector("#resultado");

switch (true) {
    case (salary < 1000):
        caja.innerHTML = "Tu salario es bajo";
        break;
    case (salary > 1000 && salary < 1500):
        caja.innerHTML = "Tu salario es normal, tirando a bajo";
        break;
    case (salary > 1500 && salary < 2000):
        caja.innerHTML = "Tu salario es alto";
        break;
    case (salary > 2000):
        caja.innerHTML = "Tu salario bastante alto :)";
        break;
    default:
        alert("Error");

}