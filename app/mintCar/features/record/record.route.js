angular
    .module("mintCar.record")
    .config(recordConfig);

function recordConfig($stateProvider){
    $stateProvider.state({
        name: "record",
        url: "/record",
        templateUrl: "/mintCar/features/record/record.html",
        controller: "RecordCtrl",
        controllerAs: "RecordVM"
    })

}