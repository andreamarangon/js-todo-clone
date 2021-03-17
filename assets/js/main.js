$(document).ready(function () {
  //al click su add aggiungiamo l'item
  $('#add').click(function () {
    var todoTitle = $('#todoTitle').val();
    //si azzera l'imput #todoTitle
    $('#todoTitle').val('');
    var template = $('#todo li').clone();
    template.children('span.title').text(todoTitle);
    //al click su .delete l'item viene rimosso dal documento
    template.children('span.delete').click(function () {
      $(this).parent().remove();
    });
    // Permettiamo la modifica di un todo già aggiunto.
    template.children('span.edit').click(function () {
      var titleDOM = $(this).siblings('span.title');
      var title = titleDOM.text();
      titleDOM.hide();
      $(this).siblings('input').val(title).show();
    });
    //al click su invio inseriamo la modifica
    template.children('input').keyup(function(e) {
      if (e.which == 13) {
        var title = $(this).val();
        $(this).hide();
        $(this).siblings('span.title').text(title).show();
      }
    });
    $('#todos').append(template);
  });
});
