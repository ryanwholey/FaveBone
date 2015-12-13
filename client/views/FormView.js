//input field = #messageInput, submit button = #messageSubmit
var FormView = Backbone.View.extend({
  el: '#form',
  initialize: function(){
    this.$('#messageSubmit').on('click', this.submit.bind(this));
  },
  submit: function(){
    var name = 'ryan';
    var message = this.$('#messageInput').val();
    this.$('#messageInput').val('');
    this.collection.add(new Message({name:name, message:message}));
  }
});