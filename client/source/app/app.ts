/// <reference path="../../../node_modules/@types/angular/index.d.ts" />

class App {
    static $inject = ["ngRoute"]
    static esid = 'eureka'
}

const app = angular.module(App.esid, App.$inject)
