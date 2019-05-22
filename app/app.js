
//localStorage interaction function
//get item
var getItem = function(key) {
  return window.localStorage.getItem(key);
}

//create
var createItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//update
var updateItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//delete
var deleteItem = function(key) {
  return window.localStorage.removeItem(key);
}

//clear everything
var clearEverything = function() {
  return window.localStorage.clear();
}

var keyExists = function(key) {
  var currentValue = getItem(key);
  return currentValue !== null;
}


///////////////////////////////////////////
//event handlers for the buttons and ... possibly the inputboxes
//preventdefault on button clicks
//schnapsidy app section
$(document).ready(function() {
  $('#createButton').click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      //current key exists, do something error-handle-y
      alert('This already exists');
    } else {
      createItem(currentKey, currentValue);
      let getContact = $('<p></p>');
      getContact.html(`${currentKey}`);
      getContact.appendTo('.contacts');
    }
  });

  // add button
  $('#updateButton').click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      updateItem(currentKey, currentValue);
    } else {
      //current key doesnt exist, do stuff
    }
  });

// messaging section
  $('#contact').click(function() {
    let textBox = $('.text-box');
    let text = $('<p></p>');
  for (let key in localStorage) {
    if($(this).hasClass(localStorage[key])) {
      text.html('<p>You are currently blocked from contacting this person. You\'re welcome. Sincerely, Schnapsidy</p>');
      text.appendTo('.text-area');
      textBox.val('');
      console.log('class found');
      break;
    } else {
      text.html(`${textBox.val()}`);
      text.appendTo('.text-area');
      textBox.val('');
      console.log('class not found');
      break;
    } 
  }
})

});

// $('#contact').click(function() {
//   for (let key in localStorage) {
//     if($('#contact').hasClass(localStorage[key])) {
//       function x() {
//         text.html('<p>You are currently blocked from contacting this person. You\'re welcome. Sincerely, Schnapsidy</p>');
//         text.appendTo('.text-area');
//         textBox.val('');
//         console.log('class found');
//       }
//       return x();
//     } else {
//       function y() {
//         text.html(`${textBox.val()}`);
//         text.appendTo('.text-area');
//         textBox.val('');
//         console.log('class not found');
//       }
//       return y();
//     } 
//   }
// })
