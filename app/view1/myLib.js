/**
 * Created by goekh on 28.08.2017.
 */

var myLib = angular.module("myLib",[]);

myLib.directive("wiki",function () {
   return{
       scope: {
           page: "@page"
       },
    template: '<a href="https://de.wikipedia.org/wiki">{{page}}</a>'
   };
});
