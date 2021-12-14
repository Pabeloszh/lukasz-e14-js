// 1. WYPISZ ZMIENNE
// var o nazwie zmiennaVar równe 4
// let o nazwie zmiennaLet równe "idk"
// const o nazwie zmiennaConst równe "statyczna"
function zmienne(){
    // piszesz tutaj



    // olewasz
    if(zmiennaVar !== 4) console.log("Zmienna var źle")
    if(zmiennaLet !== "idk") console.log("Zmienna let źle")
    if(zmiennaConst !== "statyczna") console.log("Zmienna const źle")
}

// 2. OPERACJE LICZBOWE
// dodaj do liczba 2
// różnica liczba i 5
// iloczyn liczba i 3
// iloraz liczba i 22
// reszta z dzielenia przez 2
function liczby(){
    let liczba = 25
    
    // suma

    if(liczba !== 27) console.log("suma źle")

    //odejmij 

    if(liczba !== 22) console.log("różnica źle")

    //iloczyn

    if(liczba !== 66) console.log("iloczyn źle")

    //iloraz

    if(liczba !== 1) console.log("reszta źle")
}

// 3. Warunki
function warunki(){
    let liczba = 14

    // napisz warunek jeśli liczba jest mniejsza od 20 to console.log('mniejsza od 20') jeśli nie to console.log('błąd')

    // napisz warunek jeśli liczba jest większa od 10 to console.log('większa od 10') jeśli nie to console.log('błąd')

    // napisz warunek jeśli liczba jest większa od 10 i mniejsza od 20 to console.log('większa od 10 i mniejsza od 20') jeśli nie to console.log('błąd')

    // napisz warunek jeśli liczba istnieje to console.log('liczba istnieje') jeśli nie to console.log('błąd')

    // napisz warunek jeśli liczba nie równa się 15 to console.log('nie równa się 15) jeśli nie to console.log('błąd')

}

// 4. Tablice
function tablice(){
    //zrób zmienną const tablica która ma w sobie liczby 3,2,1,0

    if(!tablica && tablica.length !== 4) console.log('tablica źle')

    //dodaj do tablicy na koniec liczbę 7

    if(!tablica && tablica[4] !== 7) console.log('koniec tablicy źle')

    //do zmiennej ostatnia przypisz ostatni element tablicy (NIE PO INDEX)

    if(!ostatni && ostatni !== 7) console.log('ostatni element źle')

    //dodaj do tablicy na początek liczbę 1

    if(!tablica && tablica[0] !== 1) console.log('początek tablicy źle')

    //do zmiennej pierwsza przypisz pierwszy element tablicy (NIE PO INDEX)

    if(!pierwsza && pierwsza !== 1) console.log('ostatni element źle')
}


// 5. pętle

let idk = [2,3,4,5,6,7]

// napisz pętle iterującą się po idk w której będzie console.log do każdej liczby console.log(*nazwa pętli*, *liczba*)

//for

//foreach

//while

//do while

// 6. funkcje
// napisz funckję o nazwie funckjaPierwsza która przyjmuje jako parametr zmienną niesamowitaZmienna (która jest równa 6) sprawdza czy liczba jest większa od 5, jeśli tak niech zwraca true jeśli nie to false

if(!(funckjaPierwsza(niesamowitaZmienna))) console.log('funkcja źle')

zmienne()
liczby()
warunki()
tablice()