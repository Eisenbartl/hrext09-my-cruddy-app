//localStorage interaction function
//get item
var getItem = function(key) {
  return window.localStorage.getItem(key);
}

//create
var createItem = function(key, value) {
  if (value !== '911') {
    return window.localStorage.setItem(key, value);
  }
  return alert('This number cannot be blocked!');
}

//update
var updateItem = function(key, value) {
  if (value !== '911') {
    return window.localStorage.setItem(key, value);
  }
  return alert(`Schnapsidy says 'My will shall not be circumvented! This number still cannot be blocked.'`)
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
    // set default output action
    let output = function() {
      text.html(`${textBox.val()}`);
      text.appendTo('.text-area');
      textBox.val('');
      console.log('class not found');
    }

    // iterate through local storage for a class
    for (let key in localStorage) {
      if($(this).hasClass(localStorage[key])) {
        output = function() {//reassign ouput response
          text.html('<p>You are temporarily blocked from contacting this person. You\'re welcome. Sincerely, Schnapsidy</p>');
          text.appendTo('.text-area');
          textBox.val('');
          console.log('class found');
        }
      }
    }
    output();
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
