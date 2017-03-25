angular
    .module("mintCar.addVehicle")
    .config(addVehicleConfig);

function addVehicleConfig($stateProvider){
    $stateProvider.state({
        name: "addVehicle",
        url: "/addVehicle",
        templateUrl: "/mintCar/features/addVehicle/addVehicle.html",
        controller: "AddVehicleCtrl",
        controllerAs: "AddVehicleVM"
    })

}