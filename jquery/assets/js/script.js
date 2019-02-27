// $(document).ready(function(){
//     $('button').on('click', function(){
//         let bodyClass = this.id.split('-')[1];
//         $('#text').removeClass().addClass(bodyClass);
//         $('[id|="style"]').on('dblclick', function(){
//             $('button').removeClass('red');
//             $(this).addClass('red');
//         });
//     });
// });

$(document).ready(function(){
    $('.mm-listitem:eq(0)').addClass('nav-heading');
    $('.mm-listitem').on('click', function(){
        $('.mm-listview > *').removeClass('nav-heading');
        $(this).addClass('nav-heading');
    })
});