const {URLSearchParams} = require('url');

function generateQueryString(params) {
    const qs = new URLSearchParams(params);
    return `${qs}`.replace(/\+/g, '%20');
}




// console.log(`http://localhost:3000/?${qs.toString()}`);
//i jeśli dajemy backtick
// console.log(`http://localhost:3000/?${qs}`);

//zastosowanie funkcji
console.log(`http://localhost:3000/?${generateQueryString({
    name: 'Bartek & Kuba?',
})}`);
