const express = require('express');
const app = express();
const PORT = 3000;
const IPADDRESS = 'localhost';

//parametry ścieżek

app.get('/', (req, res) => {
    res.send('Hi!');
});

// app.get('/article/:articleName', (req, res) => {
//     res.send('Treść Artykułu!');
// });
//
// // nie możemy tak zrobić, ponieważ weźmie nam wcześniejszą ścieżkę, którą jest /:articleName
// app.get('/article/new', (req, res) => {
//     res.send('Pobieram formularz do dodawania artykułów!');
// });

//żeby powyższy routing działał należy odwrócić kolejność:

app.get('/article/new', (req, res) => {
    //send nam wysyła i zamyka połączenie, czyli robi to samo co res.write, res.end
    res.send('Pobieram formularz do dodawania artykułów!');
    /**
     * res.send():
     * 1. Ustawia nagłówek Content-Type automatycznie w zależności, co wyślemy
     * 2. Ustawia nagłówek Content-Length automatycznie
     * 3. Ustawia nagłówki związanie z podstawowym cachingiem
     * 4. Konwertuje dane, jeśli to potrzebna
     * 5. Przesyła dane
     * 6. Kończy połączenie
     * */
});

// po znaku zapytania jest to treść opcjonalna, dodaje się ją, aby nasz link był ładny
app.get('/article/:articleName?', (req, res) => {
    res.send('dodatkowa Treść');
});

//http://localhost:3000/article/233/maj-jest-naj
// app.get('/article/:id/:articleName', (req, res) => {
//     //jak odebrać parametry:
//     console.log(req.params);
//     const {id, articleName} = req.params;
//     res.send(`Treść artykułu ${articleName} ${id}`);
// });


//możemy odsyłać JSON'a
app.get('/article/:id/:articleName', (req, res) => {

    res.json({
        id: req.params.id,
        content: 'Lorem ipsum dolor sit amet, consectetur adipis...'
    });
});


//przekierowanie, czyli nie pytaj nas tylko kogoś innego
app.get('/inny/:id', (req, res) => {
    /**
     *     rodzaje przekierowań możemy zobaczyć na https://http.cat/
     *     301 - przekierowanie trwałe
     *     302 - przekierowanie tymczasowe
     *     303 - w tym momencie należy przejść na ten adres, ale może się to zmienić, przy metodzie innej niż GET
     *     307 - przekierowanie tymczasowe podobne co 302, ale używane przy innej metodzie niż GET
     * */

    // res.location('https://www.megak.pl/');
    // res.status(301);
    // res.end();

    //lepszym użyciem jest res.redirect
    res.redirect(301,'https://www.megak.pl/');

    //aby odwołać się do poprzedniej strony która nasz przeniosła należy użyć 'back'
    //res.redirect('back');
});


app.listen(PORT, IPADDRESS, () => {
    console.log(`serwer działa na http://${IPADDRESS}:${PORT}`);
});