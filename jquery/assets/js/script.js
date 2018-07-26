$(document).ready(function(){
    $('button').on('click', function(){
        let bodyClass = this.id.split('-')[1];
        $('#text').removeClass().addClass(bodyClass);
        $('[id|="style"]').on('dblclick', function(){
            $('button').removeClass('red');
            $(this).addClass('red');
        });
    });
});