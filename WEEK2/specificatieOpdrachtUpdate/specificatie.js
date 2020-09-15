let studentNummer = 30183;
let studentKlas   = 'MD2Aa';
let studentArray = [];

function maakStudent(studentNummer, studentKlas) {
    let studentInfo = {
        nummer : studentNummer,
        klas : studentKlas
    };
    studentArray.push(studentInfo);

    localStorage.setItem('StudentenArrayInfo', studentArray);
}


