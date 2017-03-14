/* ****************************************************** */
/*
/* Routes aplication config.
/* 
/* Utilizado diretiva uiRouter do AngularJs.     
/*   
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
myVariableApp.config(function($stateProvider) {
  $stateProvider
    .state('index', {
      url: "",
        onEnter: function () {            
            $('html, body').animate({
                scrollTop: $("#home").offset().top
            })
        }
    })  
    .state('home', {
      url: "/home",
        onEnter: function () {            
            $('html, body').animate({
                scrollTop: $("#home").offset().top
            })
        }
    })
    .state('sobre-nos', {
      url: "/sobre-nos",
        onEnter: function () {            
            $('html, body').animate({
                scrollTop: $("#sobrenos").offset().top
            })
        }
    })
    .state('frota', {
      url: "/frota",
        onEnter: function () {            
            $('html, body').animate({
                scrollTop: $("#frota").offset().top
            })
        }
    })
    .state('fale-conosco', {
      url: "/fale-conosco",
        onEnter: function () {            
            $('html, body').animate({
                scrollTop: $("#faleconosco").offset().top
            })
        }
    })    
});