'use strict';

angular.module('myApp.home', ['ngRoute','myApp.modal', 'ngAnimate'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: '../app/partial/home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', function($scope,MapFactory) {
        $scope.toggleMap1 = function() {
            $(".map1").toggle();
            var prop = MapFactory.initMap();
            var map = new google.maps.Map(document.getElementById("googleMap1"),prop);
            var marker = new google.maps.Marker({
                position: prop.center,
                map: map,
                title: 'NGOAbroad'
            });
        };

        $scope.toggleMap2 = function() {
            $(".map2").toggle();
            var prop = MapFactory.initMap();
            var map = new google.maps.Map(document.getElementById("googleMap2"),prop);
            var marker = new google.maps.Marker({
                position: prop.center,
                map: map,
                title: 'NGOAbroad'
            });
        };

        $scope.toggleMap3 = function() {
            $(".map3").toggle();
            var prop = MapFactory.initMap();
            var map= new google.maps.Map(document.getElementById("googleMap3"),prop);
            var marker = new google.maps.Marker({
                position: prop.center,
                map: map,
                title: 'NGOAbroad'
            });
        };
    })

    .factory('MapFactory', function () {
        return {
            initMap : function() {
                var event = {lat: 55.680021, lng: 12.562763};
                var mapProp =  {
                    center:event,
                    zoom:15,
                    mapTypeId:google.maps.MapTypeId.ROADMAP
                };
                return mapProp;
            }
        }
    });