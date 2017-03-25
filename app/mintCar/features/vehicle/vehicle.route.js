angular
    .module("mintCar.vehicle")
    .config(vehicleConfig);

function vehicleConfig($stateProvider){
    $stateProvider.state({
        name: "vehicle",
        url: "/vehicle",
        templateUrl: "/mintCar/features/vehicle/vehicle.html",
        controller: "VehicleCtrl",
        controllerAs: "VehicleVM"
    })

}