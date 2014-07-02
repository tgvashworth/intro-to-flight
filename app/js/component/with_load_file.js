define(function (require) {

  'use strict';

  /**
   * Module exports
   */

  return WithLoadFile;

  /**
   * Module function
   */

  function WithLoadFile() {
    this.loadFile = function (file) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', file, true);
        xhr.onload = function () {
          resolve(xhr.responseText);
        };
        xhr.onerror = function (why) {
          reject(why);
        };
        xhr.send();
      });
    };
  }

});
