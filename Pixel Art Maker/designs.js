// Select color input
// Select size input
var height;
var width;
var color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    event.preventDefault();
    height=$('#inputHeight').val();//to get values at the time the button submit is clicked
    width=$('#inputWeight').val();
    makeGrid(height,width);
    

})
function makeGrid(i, j) {
    //To clear the table rows
    $('tr').remove();

// Your code goes here!

    //using nested loops
    for(var x = 1; x <= i; x++){
        $('#pixelCanvas').append('<tr id=table' + x + '></tr>');
        for(var y = 1; y <= j; y++){
            $('#table' + x).append('<td></td>');
        }
    }

    //Passing color to the table cells
    $('td').click(function addcolor(){
        color = $('#colorPicker').val();

        if ($(this).attr('styles')){
            $(this).removeAttr('styles')
        } else {
            $(this).attr('styles','background-color' + color);
        }
    })
}
