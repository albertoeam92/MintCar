angular
    .module("mintCar.newUser")
    .config(newUserConfig);

function newUserConfig($stateProvider){
    $stateProvider.state({
        name: "newUser",
        url: "/newUser",
        templateUrl: "/mintCar/features/newUser/newUser.html",
        controller: "NewUserCtrl",
        controllerAs: "NewUserVM"
    })

}