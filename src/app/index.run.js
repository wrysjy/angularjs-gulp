(function() {
  'use strict';

  angular
    .module('myfirstangular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
