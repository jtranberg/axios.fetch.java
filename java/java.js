axios
.get('https://swapi.dev/api/starships/').then((res) => {
    console.log(res.data);
})
.catch((err) => {
    console.log('IN CATCH CALL BACK!!')
    console.log(err);
});