define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var Slide = require('component/slide');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function activate(index) {
    var $target = $('.slide')
      .removeClass('active')
      .filter('[data-index=' + index + ']')
      .remove()
      .appendTo('.slides')
    window.location.hash = index;
    setTimeout(function () {
      $target.addClass('active')
    }, 0);
  }

  function deactivate(index) {
    $('.slide').eq(index).removeClass('active');
  }

  function getCurrentIndex() {
    return parseInt($('.slides .slide').last().attr('data-index'), 10);
  }

  function initialize() {
    var $slides = $('.slide');
    $slides.each(function (i) {
      Slide.attachTo(this, {
        file: this.dataset.file,
        index: i,
        count: $slides.length
      });
    });

    activate(
      (window.location.hash ? parseInt(window.location.hash.slice(1), 10) : 1)
    );

    key('right', function () {
      var index = getCurrentIndex();
      if (index + 1 > $slides.length) {
        return;
      }
      activate(index + 1);
    });

    key('left', function () {
      var index = getCurrentIndex();
      if (index - 1 < 1) {
        return;
      }
      activate(index - 1);
    });
  }

});
