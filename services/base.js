'use strict';

angular
	.module('titi')
  .factory('baseService', [baseService]);

function baseService() {
  var base = {};

  base.backendUrl = 'http://titicuidadores.com.br/_homolog';

  return base;
}
