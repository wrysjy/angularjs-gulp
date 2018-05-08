(function() {
  'use strict';

  angular
    .module('myfirstangular')
    .controller('AboutController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $http, $interval, $rootScope) {
    var vm = this;
    vm.myvalue = '';
    

    var requestitem = function(){
        $http({
          method: 'GET',
          url: 'http://127.0.0.1:8181/api/product/'
        }).then(function successCallback(response) {
            console.log('success');
            console.log(response);
            vm.myvalue = response.data;


        }, function errorCallback(response) {
            console.log('error');
            alert('api error');

      });
    };

    var myinterval = '';
    vm.showitem = function(){
        requestitem();

        myinterval = $interval(requestitem, 2000);
    };

    vm.hideitem = function(){
        vm.myvalue = '';

        $interval.cancel(myinterval);
    };

    $rootScope.$on("$stateChangeStart",
    function (event, toState, toParams, fromState, fromParams) {
        console.log('$stateChangeStart');
        $interval.cancel(myinterval);
    });
    

  }

})();
