(function (){
    'use strict';

    var lunchCheckApp = angular.module('LunchCheck', []);

    lunchCheckApp.controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        console.log("I am inside the controller function");
        // lunchMenuInput - textbox input

        $scope.checkLunchMenuInput = function(){

            var lunchMenuInputMessage = $scope.lunchMenuInput;
            var number = getNumberOfCommmaSeparatedValues(lunchMenuInputMessage);

            if(number > 3)
            {
                $scope.messageClass = "warning";
                $scope.message = "Too much!";
                $scope.inputBoxBorderStyle="inputWarning1";
            }
            else if(number > 0 && number <= 3)
            {
                $scope.messageClass = "success";
                $scope.message = "Enjoy!";
                $scope.inputBoxBorderStyle="inputSuccess1";
            }
            else
            {
                $scope.messageClass = "danger";
                $scope.message = "Please enter data first";
                $scope.inputBoxBorderStyle="inputError1";
            }

        };
    }

    function getNumberOfCommmaSeparatedValues(input){
        if(stringIsNullOrEmpty(input)){
            return 0;
        }

        var result = input.split(",");
        var numOfNonEmptyValues = 0;

        for (var i=0; i< result.length; i++) 
        {
            if(!stringIsNullOrEmpty(result[i])) numOfNonEmptyValues++;
        }
        return numOfNonEmptyValues;
    };

    function stringIsNullOrEmpty(value){
        return value === undefined || value === null || value.trim().length === 0;
    };
    

})();