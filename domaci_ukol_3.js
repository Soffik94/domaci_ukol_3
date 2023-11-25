const dtoIn = {
    count: 50,
    age: {
        min: 19,
        max: 35
    }
}
//pole možných pohlaví
const gender = ["male", "female"];

// pole možných úvazků
const workload = [10, 20, 30, 40, 50];

//objekt možných příjmení
let surnames = [
    "Daněk", "Daniel", "Danihel", "Daniš", "Danko", "Daňhel", "David", "Davídek", "Demeter",
    "Dědek", "Dědič", "Denk", "Dittrich", "Diviš", "Dlouhý", "Dobeš", "Dobiáš", "Dobrovolný",
    "Dobrý", "Dočekal", "Dočkal", "Dohnal", "Dohnálek", "Dokoupil", "Dolák", "Dolanský", "Doleček",
    "Dolejš", "Dolejší", "Doležal", "Doležel", "Donát", "Dopita", "Doseděl", "Doskočil", "Dosoudil",
    "Dostál", "Dostálek", "Došek", "Doubek", "Doubrava", "Douda", "Douša", "Dráb", "Drábek", "Dragoun",
    "Drahoš", "Drápal", "Drbal", "Drbohlav"
];

//objekt možných jmen
let names = [
    'Abadon', 'Abdon', 'Ábel', 'Abelard', 'Abigail', 'Abiha', 'Abraham', 'Abrahám', 'Absolon',
    'Absolón', 'Adalbert', 'Adam', 'Adéla', 'Adin', 'Adina', 'Adolf', 'Adrian', 'Adrián', 'Adriana',
    'Adrien', 'Adriena', 'Agáta', 'Agaton', 'Aglaja', 'Achil', 'Achiles', 'Aida', 'Alan', 'Alban',
    'Albert', 'Albín', 'Albína', 'Albrecht', 'Aldo', 'Alen', 'Alena', 'Aleš', 'Alex', 'Alexandr',
    'Alexandra', 'Alexej', 'Alfons', "Patrik", "Bohdan", "Libor", "Kamil", "Petr", "Josef", "Evelína", "Roman"
];

let count = dtoIn.count;
const main = (dtoIn) => {
        const minAge = dtoIn.age.min;
        const maxAge = dtoIn.age.max;
        const randomName = names[Math.floor(Math.random() * 50)];
        const randomSurname = surnames[Math.floor(Math.random() * 50)];
        const getRandomDate = (minAge, maxAge) => {
            let now = new Date();
            let minDate = new Date(now.getFullYear() - maxAge - 1, now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
            let maxDate = new Date(now.getFullYear() - minAge, now.getMonth(), now.getDate(), 0, 0, 0, 0);
            let randomDate = minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime());
            let date = new Date(randomDate);
            date = new Date(date.toDateString());
            date = date.toISOString();
            return date;
        }
        return {
            gender: gender[Math.floor(Math.random() * 2)],
            birthdate: getRandomDate(minAge, maxAge),
            name: randomName,
            surname: randomSurname,
            workload: workload[Math.floor(Math.random() * workload.length)],
        }
    }
    let dtoOut = [];
    while (count > 0) {
    dtoOut.push(main(dtoIn));
    count -= 1;
}

console.log(dtoOut);












