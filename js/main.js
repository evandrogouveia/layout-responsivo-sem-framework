$(document).ready(function() {

/*=================  ACCORDION  ================= */
  $(".panel > h2").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
      .siblings(".content")
      .slideUp(200);
      $(".panel > h2 i")
      .removeClass("fa-arrow-up")
      .addClass("fa-arrow-down");
    } else {
      $(".panel > h2 i")
      .removeClass("fa-arrow-up")
      .addClass("fa-arrow-down");
      $(this)
      .find("i")
      .removeClass("fa-arrow-down")
      .addClass("fa-arrow-up");
      $(".panel > h2").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
      .siblings(".content")
      .slideDown(200);
    }
  });

  /*=================  SETA DO BANNER TOPO ================= */
  $('#seta').click(function() {
    $('html, body').animate({
      scrollTop: $('.background-1').offset().top
    }, 1000);
  });

  $('#telefone').mask('(00) 0000-00009');
  $('#telefone').blur(function(event) {
    if($(this).val().length == 15){ 
      $('#telefone').mask('(00) 00000-0009');
    } else {
      $('#telefone').mask('(00) 0000-00009');
    }
  });


  /*=================  VALIDAÇÃO FORMULÁRIO  ================= */
  $("#formularioContato").validate({
    rules:{
      campoNome:{
        required: true
      },
      campoEmail:{
        required: true
      },
      campoTelefone:{
        required: true
      },
      campoMensagem:{
        required: true
      }
    },

    messages:{
      campoNome:{
        required: "Digite o seu nome."
      },
      campoEmail:{
        required: "Digite o seu e-mail para contato."
      },
      campoTelefone:{
        required: "Digite o seu telefone para contato."
      },
      campoMensagem:{
        required: "Digite a sua mensagem."
      }
    }
  });

});//FIM DO READY

