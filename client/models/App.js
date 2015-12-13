var App = Backbone.Model.extend({ 
  initialize: function(){
    this.messages = this.attributes.messages;
    this.favorites = this.attributes.favorites; 
  }

});