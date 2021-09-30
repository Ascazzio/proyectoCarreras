screenChanger = (fase) => {
    let arrFases = ["1", "2", "3"];
    
    arrFases = arrFases.filter(val => !fase.includes(val));
    document.getElementById(fase).style.display = "block";

    for (let f of arrFases) {
        document.getElementById(f).style.display = "none";
    }
}