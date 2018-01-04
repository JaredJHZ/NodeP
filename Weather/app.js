const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand : true,
            alias : 'address',
            describe : 'Address to fetch weather for',
            string : true
        }
    })
    .help()
    .alias('help','h')
    .argv;
var address = argv.a;

address = encodeURIComponent(address);

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+address,
    json: true
},(error,response,body)=>{
    (error===true) ? console.log("Unable to connect to google servers") : console.log("Coordenates:");
    if(body.status==='ZERO_RESULTS')
    {
        console.log("Address not found");
    }else if(body.status === 'OK'){
        console.log("Adress: "+ body.results[0].formatted_address);
        console.log("Latitude: "+body.results[0].geometry.location.lat+" Longitude: "+body.results[0].geometry.location.lng);
    }
})