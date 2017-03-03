'use strict';

angular
	.module('titi')
  .factory('baseService', [baseService]);

function baseService() {
  var base = {};

  base.backendUrl = 'http://titicuidadores.com.br/_prd';

  return base;
}
