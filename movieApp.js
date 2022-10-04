"use strict;"

let $form = $('form');
$form.submit(function(e) {
  e.preventDefault();
  console.log('test');
  updateDOM();
});

let $reviewContainer = $('.review-container');
$reviewContainer.on('click', 'button', removeDOM);
/**Grabs data from input fields*/
function getData() {
  let $formData = $('form input');
  return $formData;
}

/** */
function updateDOM() {
  console.log('dom');
  let $formData = getData();
  let movieTitle = $formData.eq(0).val()
  let movieRating = $formData.eq(1).val();
  $('.review-container')
    .append($('<div>')
    .append(`<p>Movie Title: ${movieTitle}</p>`)
    .append(`<p>Movie Rating: ${movieRating}</p>`)
    .append("<button>Remove</button>"));
  $formData.eq(0).val('');
  $formData.eq(1).val('');
}

/** */
function removeDOM() {
  $(this).parent().remove();
}