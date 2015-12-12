var Messages = Backbone.Collection.extend({
  model : Message,
  initialize: function() {
    this.on('toFavorites', function(message) {
      this.trigger('toAdd', message);
    }.bind(this));
  }
});