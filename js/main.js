$(document).ready(function () {
    
// console.log('jq dziala');

$('.accordion-item').click(function(){
    console.log($(this).hasClass('open'))

    console.log('klik');
if ($(this).hasClass('open')) {
    $(this).find('.accordion-content').slideToggle();
    $(this).removeClass('open')
    
}else {
    $(this).find('.accordion-content').slideToggle();

    $(this).addClass('open')
    
}
    // $(this).find('.accordion-content').slideToggle();
    // $(this).addClass('open')
    
})




});

