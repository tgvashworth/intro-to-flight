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
      $target.addClass('active');
      document.title = $target.find('h1, h2, h3, h4, h5, h6').first().text();
    }, 0);
  }

  function getCurrentIndex() {
    return parseInt($('.slide').last().attr('data-index'), 10);
  }

  function next() {
    var index = getCurrentIndex();
    if (index + 1 > $('.slide').length) {
      return;
    }
    activate(index + 1);
  }

  function previous($slides) {
    var index = getCurrentIndex();
    if (index - 1 < 1) {
      return;
    }
    activate(index - 1);
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

    window.onhashchange = function () {
      activate(
        (window.location.hash ? parseInt(window.location.hash.slice(1), 10) : 1)
      );
    };

    key('right, space', next);
    key('left', previous);
  }

});
