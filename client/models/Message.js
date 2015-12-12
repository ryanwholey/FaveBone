var Message = Backbone.Model.extend({
  default:{
    name: 'Ryan',
    message: 'nothing to say'
  },
  toFavorites: function() {
    this.trigger('toFavorites', this);
  }
});