let data = [
    {
        name: 'Mark',
        age: '21',
        game: 'RecRoom VR',
    },
    {
        name: 'Ray',
        age: '21',
        game: 'COD: Mobile',
    },
    {
        name: 'Nate',
        age: '21',
        game: 'COD: Modern Warefare 2',
    },
    {
        name: 'Kevin',
        age: '21',
        game: 'COD: Warzone',
    },
    {
        name: 'Teo',
        age: '21',
        game: 'GTA V',
    },
    {
        name: 'Jose',
        age: '20',
        game: 'COD: Modern Warefare 2',
    },
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old.' + ' He loves playing ' + item.game + '</div>'
});

info.innerHTML = details.join('\n');