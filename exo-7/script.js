console.log("exercice 7");
var order = true;

function getData() {

    return data; // data is defined in DATA.js file
}

function addLineToTable() {
    data.forEach(function (customer) {
        let $tr = $('<tr>');
        let $buttonRemove = $('<button>');
        $buttonRemove.attr('class', 'remove');
        for (let property in customer) {
            if (typeof customer[property] === "object") {
                for (let subProperty in customer[property]) {
                    let $td = $('<td>');
                    $td.text(customer[property][subProperty]).attr('contenteditable', 'true').appendTo($tr);
                }
            } else {
                let $td = $('<td>');
                $td.text(customer[property]).attr('contenteditable', 'true').appendTo($tr);
            }

        }
        $buttonRemove.text('supprimer');
        $buttonRemove.appendTo($tr);
        $tr.appendTo('tbody');


    });
    $('.remove').on('click', event => {
        removeStudent();
    });

}

function page(rowsShown) {
    $('#data tbody tr').hide();
    $('#data tbody tr').slice(0, rowsShown).show();
    $('#nav a:first').addClass('active');
    $('#nav a').bind('click', function () {

        $('#nav a').removeClass('active');
        $(this).addClass('active');
        var currPage = $(this).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).css('display', 'table-row').css('opacity', '1');
    });


}

function pager() {
    $('#data').before('<div id="nav"></div>');
    $('#nav').attr('class', 'd-flex justify-content-center')
    var rowsShown = 50;
    var rowsTotal = $('#data tbody tr').length;
    var numPages = rowsTotal / rowsShown;
    for (i = 0; i < numPages; i++) {
        var pageNum = i + 1;
        $('#nav').append('<a href="#" rel="' + i + '">' + pageNum + '</a> ');
        $('#nav a').attr('class', 'm-2');
    }
    page(rowsShown);

}

function sortTable() {
    console.clear();
    console.log(order);

    tbody = $('table').find('tbody');


    tbody.find('tr').sort(function (a, b) {
        if (order) {

            return $('td:first + td', a).text().localeCompare($('td:first + td', b).text());
        } else {
            return $('td:first + td', b).text().localeCompare($('td:first + td', a).text());

        }

    }).appendTo(tbody);
    order = !order;
    $('#nav').remove();
    pager();

}

function search() {
    $("#searchInput").keyup(function () {
        //split the current value of searchInput
        var data = this.value.split(" ");
        //create a jquery object of the rows
        var jo = $("tbody").find("tr");
        if (this.value == "") {
            $('#nav').remove();
            pager();
            return;
        }
        //hide all the rows
        jo.hide();

        //Recusively filter the jquery object to get results.
        jo.filter(function () {
            var $t = $(this);
            for (var d = 0; d < data.length; ++d) {
                var show = false;
                $t.find('td').each(function () {
                    let value = $(this).text().toLowerCase();
                    if (value.includes(data[d].toLowerCase())) {
                        show = true;
                    }

                });
                return show;
            }
            return false;
        })
        //show the rows that match.
            .show();

    }).focus(function () {
        this.value = "";
        $(this).css({
            "color": "black"
        });
        $(this).unbind('focus');
    }).css({
        "color": "#C0C0C0"
    });
}

function addUser() {
    $('tbody > tr').remove();
    $('#nav').remove();
    let $id = $('#userId').val();
    let $lastName = $('#lastName').val();
    let $firstName = $('#firstName').val();
    let $email = $('#email').val();
    let $genre = $('#genre').val();
    let $number = $('#phoneNumber').val();
    let $country = $('#country').val();
    var newItem = {};
    newItem.id = $id;
    newItem.name = {};
    newItem.name.last = $lastName;
    newItem.name.first = $firstName;
    newItem.email = $email;
    newItem.gender = $genre;
    newItem.phone = $number;
    newItem.country = $country;
    data.push(newItem);
    addLineToTable();
    pager();
    // $('.remove').on('click', event => {
    //     removeStudent();
    // })

}

function removeStudent() {
    $(event.currentTarget).closest('tr').remove();
    $('#nav').remove();
    pager();
}

function exportTableToCSV($table, filename) {

    var $rows = $table.find('tr:has(td),tr:has(th)'),

        // Temporary delimiter characters unlikely to be typed by keyboard
        // This is to avoid accidentally splitting the actual contents
        tmpColDelim = String.fromCharCode(11), // vertical tab character
        tmpRowDelim = String.fromCharCode(0), // null character

        // actual delimiter characters for CSV format
        colDelim = '","',
        rowDelim = '"\r\n"',

        // Grab text from table into CSV formatted string
        csv = '"' + $rows.map(function (i, row) {
            var $row = jQuery(row), $cols = $row.find('td,th');

            return $cols.map(function (j, col) {
                var $col = jQuery(col), text = $col.text();

                return text.replace(/"/g, '""'); // escape double quotes

            }).get().join(tmpColDelim);

        }).get().join(tmpRowDelim)
            .split(tmpRowDelim).join(rowDelim)
            .split(tmpColDelim).join(colDelim) + '"',



        // Data URI
        csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);

    console.log(csv);

    if (window.navigator.msSaveBlob) { // IE 10+
        //alert('IE' + csv);
        window.navigator.msSaveOrOpenBlob(new Blob([csv], {type: "text/plain;charset=utf-8;"}), "csvname.csv")
    }
    else {
       $(this).attr({ 'download': filename, 'href': csvData, 'target': '_blank' });
    }
}
$(document).ready(function () {
    addLineToTable();
    pager();
    search();
    $('#sortName').on('click', event => {
        sortTable();
    });
    $('#addStudent').on('click', event => {
        addUser()
    });
    // This must be a hyperlink
    $("#export").click(function (event) {
        exportTableToCSV.apply(this, [jQuery('#data'), 'export.csv']);
        window.location.reload();
    });


});
