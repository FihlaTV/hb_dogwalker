//all js goes here
$( document ).ready(function() {

    // BUSINESS FORMS
    // business_update route. disable/enable inputs on update form
    $( '#business_form_update').on( 'submit', function(evt) {
        
        if ($('#business_form_update input').prop('disabled')){
            
            evt.preventDefault();
            $('#business_form_update :input').prop( 'disabled', false );
            $('#business_form_update input[type=submit]').val( 'Submit changes' );
        } 
    });

    //@todo validate that state is 2 characters



});