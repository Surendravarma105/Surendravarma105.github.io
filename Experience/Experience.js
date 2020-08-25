

const Data = [];

setTimeout(() => {

    fetch('https://www.metaweather.com/api/location/2487956/')
    .then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
        const Today = data.consolidated_weather[0].weather_state_name;
        Data.push(data);
        console.log(`Today Temperature in ${data.title} is ${Today}`);
    })
    .catch(error => {
        return error;
    })

});

setTimeout(() => {
    console.log(Data);

    const apitestdiv = document.querySelector('.Apitest');

    const html = `<h1>Today min Temperature in ${Data[0].title} is ${Data[0].consolidated_weather[2].min_temp}</h1>
        <h1>Today max Temperature in ${Data[0].title} is ${Data[0].consolidated_weather[2].max_temp}</h1>`

apitestdiv.insertAdjacentHTML('beforeend',`${html}`);

},10000);





