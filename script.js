var select = document.getElementById('choose');
var seatsClicked = document.querySelectorAll('.row .seats');
var number = document.querySelector('.number');
var total = document.querySelector('.total');


  function shtoTotalin() {
    let selectedSeats = document.querySelectorAll('.row .seats.selected');
    number.innerText = selectedSeats.length;
    total.innerText = selectedSeats.length * select.value;
  }

  for (var i = 0; i < seatsClicked.length; i++) {
    seatsClicked[i].addEventListener('click', function (e) {
        if(!event.target.classList.contains('occupied')) {
          event.target.classList.toggle('selected');
          shtoTotalin();
        }
    })
  }

  select.addEventListener('change', function (e) {
    selectedSeats = event.target.value;
    shtoTotalin();
  })
