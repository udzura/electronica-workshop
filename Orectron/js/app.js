'use strict';

const notifier = require('node-notifier');
const path = require('path');

(function() {
  var createNotification = function(title, message){
    notifier.notify({
      title: title,
      message: message,
      icon: path.join(__dirname, 'images/sushi.png'),
      sound: true,
      wait: false
    });
  };
  var handleNotification = function(event) {
    var title = document.getElementById("title").value,
        message = document.getElementById("message").value;
    createNotification(title, message);
  };

  document.getElementById("notifyButton").addEventListener("click", handleNotification);
})();
