/// <reference path="app.ts" />

class ProductsController implements ng.IController{
    static $inject = ['$log']
    static esid = 'productsController'    

    constructor(private $log:ng.ILogService){
        $log.debug("Products controller working")
    }
}

app.controller(ProductsController.esid, ProductsController)