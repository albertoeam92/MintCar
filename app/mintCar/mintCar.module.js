angular
    .module("mintCar",[
        "ui.router",

        "mintCar.login",
        "mintCar.newUser",
        "mintCar.vehicle",
        "mintCar.addVehicle",
        "mintCar.record",
        "mintCar.optionRecord"

        
    ])

    .config(mintCarConfig);

function mintCarConfig($urlRouterProvider){
    $urlRouterProvider.otherwise("/login");

}