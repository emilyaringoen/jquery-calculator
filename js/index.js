$(document).ready(function() {
    //define variables for later
    var a = 0
    var b = 0
    var currentOp = ''
    var total = 0


    //add numbers to calculator screen
    $('span').click(function(event) {
        var text = $(event.target).text()
        var re = /[0-9]/g
        if (text.match(re)) {
            if (($('#screen').text()).length < 14 && $('#screen').text() !== "ERROR" && total === 0) {
                $('#screen').append(text)
            }
        }
    })

    //access operators
    $('.operator').click(function() {
        var operator = $(event.target).text()
        //save operator and number proceeding operator
        if (operator !== '=' && currentOp === '' && operator !== 'C') {
            currentOp = operator
            a = $('#screen').text()
            $('#screen').append(operator)
        }
        //save number following operator
        else if (operator === '=') {
            var stringText = $('#screen').text()
            var indexOp = stringText.indexOf(currentOp)
            b = stringText.slice(indexOp + 1, stringText.length + 1)

        }
        //if second operator is entered present error message
        else {
            $('#screen').text('ERROR')
        }
    })


    //clear screen text when C is clicked
    $('#clear').click(function() {
        $('#screen').text('')
        a = 0
        b = 0
        total = 0
        currentOp = ''
    })

    //functionalize equals button
    $('#equals').click(function() {
        switch (currentOp) {
            case '+':
                total = (parseInt(a) + parseInt(b));
                break;
            case '-':
                total = (a - b);
                break;
            case '÷':
                if (b === '0') {
                    total = 'null'
                    break;
                } else {
                    total = (a / b).toFixed(5);
                }
                break;
            case 'x':
                total = (a * b);
                break;
            default:
                total = 'ERROR'
                break;
        }

        $('#screen').text(total)
    })


})
