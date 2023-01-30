//how to capture id when click using jquery?
$('div').on('click',function(ev){
    ev.stopPropagation()
    checkEl = $(this).attr('id');
    localStorage.setItem('id',checkEl)
});




