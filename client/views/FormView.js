var FormView = Backbone.View.extend({
  el: '#form',
  initialize: function(){
    this.$('#messageSubmit').on('click', function(){
      var name = "ryan";
      var message = this.$('#messageInput').val();
      this.$('#messageInput').val('');
      this.submit(name,message);
    }.bind(this));
  },
  submit:function(name, message){
    this.collection.add(new Message({name:name, message: message}));
  }
});