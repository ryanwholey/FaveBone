var MessagesView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function() {
    this.$el.empty();
    return this.$el.append(['<h1>Messages</h1>'].concat(this.collection.models.map(function(message){
      return new MessageView({model: message}).render();
    })));
  }
});