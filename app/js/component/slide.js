define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');
  var marked = require('marked/marked.min');
  var withLoadFile = require('component/with_load_file');

  marked.setOptions({
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });

  /**
   * Module exports
   */

  return defineComponent(Slide, withLoadFile);

  /**
   * Module function
   */

  function Slide() {
    this.attributes({
      file: null,
      index: null,
      count: null
    });

    this.after('initialize', function () {
      this.$node
        .attr('data-index', this.attr.index + 1)
        .attr('data-count', this.attr.count);

      this.loadFile(this.attr.file)
        .then(function (markdown) {
          var $inner = $($('#tmpl-slide').text());
          $inner.find('.slide-scroll-container').html(marked(markdown));
          this.$node.prepend(
            $inner
          );
        }.bind(this)).catch(function (why) {
          console.error(why.stack);
        });
    });
  }

});
