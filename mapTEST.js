var movies = [
    {
        name: "Rocky",
        rating: "PG",
        year: "1990"
    },
    {
        name: "Rocky II",
        rating: "PG-13",
        year: "1994"
    }
];


document.map(movies, function (elementOrValue, indexOrKey) {
    console.log(elementOrValue);
});