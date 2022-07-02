const express = require('express');

const PORT = 3000;
const ADDRESS = 'localhost';

const app = express();

app.all('/ciekawy', (req, res) => {
    /**
     *     proxy ukrywa ip, w niektórych przypadkach można odzyskać oryginalne IP
     *     Znajduje się ono w tablicy req.ips
     * */
    console.log(req.ips);
    console.log(req.hostname);
    console.log(req.ip);


    /**
     * url - jest z node i daje nam ścieżkę
     * originalUrl -  jest z expressa i daje nam znormalizowaną
     *                i zawierającą ścieżkę pierwotną (nawet po przekierowaniach)
     * path - jest to ścieżka która może zawierać nasze zmienne (variables)
     *
     * */
    const { url, originalUrl, path} = req;
    console.log({url, originalUrl, path});
    /**
     * protocol - zwraca nam http albo https
     * secure - jeśli połączenie jest http da nam false albo https to true
     *
     * */
    console.log(req.protocol);
    console.log(req.secure);
    res.end();
});


app.all('/', (req, res) => {
    /**
     * np. http://127.0.0.1/?name=MegaK&etap=express
     * / przed znakiem zapytania jest dopisywany jeśli zapomnimy
     *
     * nie możemy też dać w URL takiego czegoś:
     * http://127.0.0.1/?name=Bartek & Kuba
     * lub
     * http://127.0.0.1:3000/?question= what is love?
     * aby zamienić te wartości zmiennych po znaku '=' należy użyć do ich zmiany:
     * encodeURIComponent('Bartek & Kuba')
     * 'Bartek%20%26%20Kuba'
     * dekodowanie:
     * decodeURIComponent('Bartek%20%26%20Kuba')
     * niestety powyższe encode i decode są legacy więc nie są już używane
     * należy używać URLSearchParams do tworzenia
     * */

    /**
     * żeby stworzyć query z parametrami najlepiej użyć URLSearchParams
     * const qs = new URLSearchParams
     * qs.set('name', 'Bartek & Kuba');
     * qs.toString();
     * http://127.0.0.1:3000/?${gs.toString}
     * http://127.0.0.1:3000/?name=Bartek+%26+Kuba
     * URLSearchParams jest w module URL noda
     * */

    //do odbierania zmiennych służy nam req.query:
    //użyliśmy http://127.0.0.1:3000/?name=Bartek+%26+Kuba%3F
    console.log(req.query);
    //{ name: 'Bartek & Kuba?' } u mnie działa na tej wersji noda bez plusów

    /**
     * ta metoda jest przydatna aby pobrać nagłówki przesłane przez clienta np. ciasteczka, ale są prostsze metody :)
     * */
    req.get('cookie');
    res.end();
});


app.listen(PORT, ADDRESS, () => {
    console.log(`serwer nasłuchuje na http://${ADDRESS}:${PORT}`);
});
