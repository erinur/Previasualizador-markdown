$(document).ready(function() {

    const cargaTexto = () => {
      $.ajax({
        url: "./src/textoEditor.txt",
        dataType: "text",
        success : function (data) {
          $("#editor").val(data);
          var text = $('#editor').val();
        $('#preview').html(app(text));
        $('code').addClass('language-javascript'); 
        $('pre').addClass('language-javascript');
        Prism.highlightAll();
        }
      });
    }
    
    const modificaTexto = () => {
      $('#editor').keyup(function(){
        var text = $('#editor').val(); 
        $('#preview').html(app(text));
        $('code').addClass('language-javascript'); 
        $('pre').addClass('language-javascript');
        Prism.highlightAll();
      });
    }

    function resize () {
      var editor = $('#editor')[0];
      editor.style.height = 'auto';
      editor.style.height = editor.scrollHeight+'px';

  }
    
    const app = (text) => {
      var rawMarkup = (text) => {
        marked.use({breaks: true});
        resize();
        return marked.parse(text);}
      return rawMarkup(text);
    }
  
    cargaTexto();
    modificaTexto();

    $('.maximize-input').click(function() {
      $('#input').css({'width': '99vw', 'max-width':'99vw', 'height': '95vh'}); 
      $('#output').css({'display': 'none'});
      $('.maximize').css({'visibility': 'hidden'});
      $('.minimize').css({'visibility': 'visible'});
    })

    $('.maximize-output').click(function() {
      $('#output').css({'width': '99vw', 'max-width':'99vw', 'height': '95vh'});
      $('#input').css({'display': 'none'});
      $('.maximize').css({'visibility': 'hidden'});
      $('.minimize').css({'visibility': 'visible'});
    })

    $('.minimize').click(function(){
      $('#input').css({'width': '50%', 'height': 'unset'});
      $('#output').css({'width': '50%', 'height': 'unset'});
      $('#input').css({'display': 'flex'});
      $('#output').css({'display': 'flex'});
      $('.maximize').css({'visibility': 'visible'});
      $('.minimize').css({'visibility': 'hidden'});
    })

})