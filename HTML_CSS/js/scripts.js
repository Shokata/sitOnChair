document.addEventListener("DOMContentLoaded", function() {

  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function showDivs(n) {
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = x.length
    }
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
  }
  var prevBtn = document.querySelector(".main-slider-prev");
  var nextBtn = document.querySelector(".main-slider-next");

  prevBtn.addEventListener('click', function() {
    plusDivs(-1)
  });
  nextBtn.addEventListener('click', function() {
    plusDivs(1)
  });

  var boxSmall = document.querySelector('.main-content-box-small');
  var boxSmallHide = document.querySelector('.box-content')

  boxSmall.addEventListener('mouseover', function() {
    boxSmallHide.style.display = "none";
  })
  boxSmall.addEventListener('mouseout', function() {
    boxSmallHide.style.display = "block";
  })
  boxSmall.nextElementSibling.addEventListener('mouseover', function() {
    boxSmall.nextElementSibling.firstElementChild.nextElementSibling.style.display = "none";
  })
  boxSmall.nextElementSibling.addEventListener('mouseout', function() {
    boxSmall.nextElementSibling.firstElementChild.nextElementSibling.style.display = "block";
  })
  boxSmall.nextElementSibling.nextElementSibling.addEventListener('mouseover', function() {
    boxSmall.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.style.display = "none";
  })
  boxSmall.nextElementSibling.nextElementSibling.addEventListener('mouseout', function() {
    boxSmall.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.style.display = "block";
  })

})
