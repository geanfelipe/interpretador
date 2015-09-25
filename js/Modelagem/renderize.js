var renderize = function(id,field){
    $("#"+id).html(field);
    $('.ui.dropdown').dropdown();
    multipleSelect();
    
};