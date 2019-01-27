// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function selectRegion()
{
    var selectedRegion = $("button").val();
    console.log(selectedRegion);
    switch(selectedRegion){
        case 'eun1':
        document.getElementById('myBtn').val = 'eun1';
        document.getElementById('myBtn').innerHTML = 'EUNE';
        break;
        case 'euw1':
        document.getElementById('myBtn').val = 'euw1';
        document.getElementById('myBtn').innerHTML = 'EUW';
        break;
        case 'na1':
        document.getElementById('myBtn').val = 'na1';
        document.getElementById('myBtn').innerHTML = 'NA';
        break;
    }
}