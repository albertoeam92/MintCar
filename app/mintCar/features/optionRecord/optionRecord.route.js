angular
    .module("mintCar.optionRecord")
    .config(optionRecordConfig);

function optionRecordConfig($stateProvider){
    $stateProvider.state({
        name: "optionRecord",
        url: "/optionRecord",
        templateUrl: "/mintCar/features/optionRecord/optionRecord.html",
        controller: "OptionRecordCtrl",
        controllerAs: "OptionRecordVM"
    })

}