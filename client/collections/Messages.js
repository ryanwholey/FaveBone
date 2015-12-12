var Messages = Backbone.Collection.extend({
  model : Message,
  initialize: function(){
    this.on('clicked', function(e){
      this.trigger('clacked', e);
    }.bind(this));
  }
});