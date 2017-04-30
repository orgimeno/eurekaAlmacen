/// <reference path="app.ts" />
/// <reference path="productsController.ts" />

class Configuration {
    static $inject = ["$routeProvider", "$locationProvider"]

    constructor(private $routeProvider: ng.route.IRouteProvider, private $locationProvider: ng.ILocationProvider){
        this.createRoutes();

        this.$locationProvider.html5Mode({
            enabled: true, 
            requireBase: false
        });
    }

    private createRoutes = ():void => {
        this.$routeProvider
            .when('/', {
                templateUrl: '/partials/products.html',
                controller: ProductsController.esid
            })
    }
}

app.config(Configuration)