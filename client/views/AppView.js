var AppView = Backbone.View.extend({
  el: '#app',
  initialize: function(){
    this.views = [];
    this.views.push(new MessagesView({collection: this.model.messages}));
    this.views.push(new FavoritesView({collection: this.model.favorites}));
    this.views.push(new FormView({collection: this.model.messages}));
    this.render();
  },
  render: function(){
    this.$el.append(this.views.map(function(view){return view.render()}));
  }
});