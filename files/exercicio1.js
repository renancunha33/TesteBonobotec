$(document).ready(function(){
$("#selectAll").click( function(){

    var all = this;
    $(this).closest('table').find('input[type="checkbox"]').prop('checked', all.checked);

});
$("#selectAll2").click( function(){

    var all = this;
    $(this).closest('table').find('input[type="checkbox"]').prop('checked', all.checked);

});
$("#add").click(function(){
        $("#formAdd").append('<div id="newdiv" class="form-group  animated fadeInRight"><input  class="form-control" ><select class="form-control"><option value="" disabled selected>Selecionar</option></select></div>');
    });
	$("#remove").click(function(){
       $("#newdiv").remove();
    });
});