var App = Backbone.Model.extend({

  initialize : function(){
    this.messages = this.attributes.messages;
    this.favorites = this.attributes.favorites;

    this.listenTo(this.messages, 'clacked', function(e){
      this.favorites.add(e);
    });
  }

});