{
    // let niz = [3, 6, 3,2, 8, 3, 12, 1, 86, 43, 5]

    // let m = niz[0]
    // niz.forEach(el => {
    //     if (el < m) {
    //         m = el
    //     }
    // })
    // console.log(m);
}

{
    let studenti = [{ ime: 'Ana', prezime: 'Petrovic', index: 123 },
    { ime: 'Mika', prezime: 'Markovic', index: 127 },
    { ime: 'Marko', prezime: 'Petrovic', index: 543 },
    { ime: 'Jelena', prezime: 'Jovanovic', index: 345 }]

    console.log(studenti[2].ime);
    console.log(studenti[2]);

    let imena = studenti.map(student => { return student.ime; })
    let pos = imena.indexOf('Marko');
    studenti[pos].prezime = 'Jovic'

    let index = studenti.findIndex(student => student.ime == 'Marko')

    studenti.forEach(student => {
        if (student.ime == 'Marko')
            student.prezime = 'Jovic'
    })


    studenti.forEach(student => {
        student.prosecnaOcena = Math.ceil(Math.random() * 10)
    })
    console.log(studenti);


    let polozili = studenti.filter(student => student.prosecnaOcena > 5)
    console.log(polozili);
}