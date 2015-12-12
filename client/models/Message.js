var Message = Backbone.Model.extend({
  default:{
    name: 'Ryan',
    message: 'nothing to say'
  },
  click: function(){
    this.trigger('clicked', this);
  }
});