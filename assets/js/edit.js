   jQuery(document).ready(function($) {

    $(function() {
        $( "#sortable_box" ).sortable({ 
            placeholder: "ui-placeholder",
            revert: 150,
            cursor: 'move',
            start: function(e, ui){
            ui.placeholder.height(ui.helper.outerHeight());
        }
        });
        $( "#sortable_side" ).sortable({ 
            placeholder: "ui-placeholder",
            revert: 150,
            cursor: 'move',
            start: function(e, ui){
            ui.placeholder.height(ui.helper.outerHeight());
            }
        });
        $( "#sortable_social" ).sortable({ 
            revert: 150,
            cursor: 'move',
        });
        $('section, aside').hover(
			function () {
                  $( this ).addClass( "section-hovered" );
               }, 
            function () {
                  $( this ).removeClass( "section-hovered" );
               }
            );
    });

    });