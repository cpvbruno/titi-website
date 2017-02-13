'use strict';

angular
	.module('titi')
  .factory('helperService', ['baseService', helperService]);

function helperService(baseService) {
  var helper = {};
	helper.cpfCheck = cpfCheck;

  helper.regex = {
    CEP: /^[0-9]{5}[-][0-9]{3}/,
    phone: /^[(][0-9]{2}[)] [0-9]{4}[0-9]?[-][0-9]{4}/,
    year: /^[0-9]{4}/
  };

  helper.backendUrl = baseService.backendUrl;

	function cpfCheck() {
			"user_strict";

			function r(r) {
					for (var t = null, n = 0; 9 > n; ++n) t += r.toString().charAt(n) * (10 - n);
					var i = t % 11;
					return i = 2 > i ? 0 : 11 - i
			}

			function t(r) {
					for (var t = null, n = 0; 10 > n; ++n) t += r.toString().charAt(n) * (11 - n);
					var i = t % 11;
					return i = 2 > i ? 0 : 11 - i
			}
			var n = "CPF Inválido",
					i = "CPF Válido";
			this.gera = function() {
					for (var n = "", i = 0; 9 > i; ++i) n += Math.floor(9 * Math.random()) + "";
					var o = r(n),
							a = n + "-" + o + t(n + "" + o);
					return a
			}, this.valida = function(o) {
					for (var a = o.replace(/\D/g, ""), u = a.substring(0, 9), f = a.substring(9, 11), v = 0; 10 > v; v++)
							if ("" + u + f == "" + v + v + v + v + v + v + v + v + v + v + v) return n;
					var c = r(u),
							e = t(u + "" + c);
					return f.toString() === c.toString() + e.toString() ? i : n
			}
	}

  helper.UFOptions = [
    {
      sigla: "AC",
      name: "Acre"
    },
    {
      sigla: "AL",
      name: "Alagoas"
    },
    {
      sigla: "AM",
      name: "Amazonas"
    },
    {
      sigla: "AP",
      name: "Amapá"
    },
    {
      sigla: "BA",
      name: "Bahia"
    },
    {
      sigla: "CE",
      name: "Ceará"
    },
    {
      sigla: "DF",
      name: "Distrito Federal"
    },
    {
      sigla: "ES",
      name: "Espírito Santo"
    },
    {
      sigla: "GO",
      name: "Goiás"
    },
    {
      sigla: "MA",
      name: "Maranhão"
    },
    {
      sigla: "MG",
      name: "Minas Gerais"
    },
    {
      sigla: "MS",
      name: "Mato Grosso do Sul"
    },
    {
      sigla: "MT",
      name: "Mato Grosso"
    },
    {
      sigla: "PA",
      name: "Pará"
    },
    {
      sigla: "PB",
      name: "Paraíba"
    },
    {
      sigla: "PE",
      name: "Pernambuco"
    },
    {
      sigla: "PI",
      name: "Piauí"
    },
    {
      sigla: "PR",
      name: "Paraná"
    },
    {
      sigla: "RJ",
      name: "Rio de Janeiro"
    },
    {
      sigla: "RN",
      name: "Rio Grande do Norte"
    },
    {
      sigla: "RO",
      name: "Rondônia"
    },
    {
      sigla: "RR",
      name: "Roraima"
    },
    {
      sigla: "RS",
      name: "Rio Grande do Sul"
    },
    {
      sigla: "SC",
      name: "Santa Catarina"
    },
    {
      sigla: "SE",
      name: "Sergipe"
    },
    {
      sigla: "SP",
      name: "São Paulo"
    },
    {
      sigla: "TO",
      name: "Tocantins"
    }
  ];

  helper.orgaoEmissorOptions = [
    {
      id: 'COREN',
      name: 'COREN'
    },
    {
      id: 'CREFITO',
      name: 'CREFITO'
    },
    /*{
      id: 'CRM',
      name: 'CRM'
    },*/
    {
      id: 'OUTRO',
      name: 'CUIDADOR'
    },
		{
			id: 'CREF',
			name: 'CREF'
		}
  ];

  helper.partnerOptions = [
    {
      id: '1',
      name: 'Auxiliar/Técnico enfermagem'
    },
    {
      id: '2',
      name: 'Enfermeiro Cuidador'
    },
    {
      id: '3',
      name: 'Cuidador'
    },
		{
			id: '7',
			name: 'Assessor Familiar Cuidador'
		},
		{
			id: '8',
			name: 'Acompanhante Cuidador'
		},
    {
      id: '4',
      name: 'Fisioterapeuta Cuidador'
    },
		    {
		      id: '5',
		      name: 'Terapeuta Ocupacional'
		    },
    		{
			id: '6',
			name: 'Educador Físico'
		},
		{
      id: '0',
      name: 'Todos'
    }
  ];

  helper.periodoOptions = [
    {
      id: '1',
      name: 'Diurno'
    },
    {
      id: '2',
      name: 'Noturno'
    }
  ];

  helper.perfilEspecialistaOptions = [
    {
      id: '2',
      name: 'Pediatria'
    },
    {
      id: '4',
      name: 'Adulto'
    },
    {
      id: '5',
      name: 'Idoso'
    }
  ];

  helper.habilidadeOptions = [
    {
      id: '3',
      name: 'Alta Complexidade'
    },
    {
      id: '2',
      name: 'Média Complexidade'
    },
    {
      id: '1',
      name: 'Baixa Complexidade'
    }
  ];

  helper.linkOptions = [
	  {
      href: '#/users/login/partners',
      title: 'Área do Cuidador',
			type: 2
    },
    {
      href: '#/users/login/customers',
      title: 'Área do Paciente',
			type: 3
    },
    {
      href: '#/#titi',
      title: 'O que é TITI?',
			type: 0
    },
    /*{
      href: '#/contact',
      title: 'Contato',
			type: 0
    }*/
    /*{
      href: '#/faq',
      title: 'Dúvidas frequentes',
			type: 0
    },
    {
      href: '#/terms-of-use',
      title: 'Termos de uso',
			type: 0
    }*/
  ];

  return helper;
}
