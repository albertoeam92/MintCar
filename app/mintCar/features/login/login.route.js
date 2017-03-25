angular
    .module("mintCar.login")
    .config(loginConfig);

function loginConfig($stateProvider){
    $stateProvider.state({
        name: "login",
        url: "/login",
        templateUrl: "/mintCar/features/login/login.html",
        controller: "LoginCtrl",
        controllerAs: "LoginVM"
    })

}