function addLineToTable() {
    data.forEach(function (customer) {
        let $tr = $('<tr>');
        for (let property in customer) {
            if (typeof customer[property] === "object") {
                for (let subProperty in customer[property]) {
                    let $td = $('<td>');
                    $td.text(customer[property][subProperty]).appendTo($tr);
                }
            } else {
                let $td = $('<td>');
                $td.text(customer[property]).appendTo($tr);
            }
        }
        $tr.appendTo('tbody');
    });
}

$(document).ready(function () {
    addLineToTable()
    var t = $('#data').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
    $('#addStudent').on( 'click', function () {
        t.row.add( [
            $('#userId').val(),
            $('#lastName').val(),
            $('#firstName').val(),
            $('#email').val(),
            $('#genre').val(),
            $('#phoneNumber').val(),
            $('#country').val(),

        ]);
    });
    $('#data tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            t.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );

    $('#remove').click( function () {
        t.row('.selected').remove().draw( false );
    } );
});
