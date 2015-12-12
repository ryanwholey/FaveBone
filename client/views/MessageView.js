var MessageView = Backbone.View.extend({
  tagName: 'li',
  events: {
    "click":"handleClick"
  },
  handleClick: function (){
    this.model.click();
  },
  template: _.template('<span><div class="name"><%=name%>: </div><div class="message"><%=message%></div><span>'),
  render: function(){
    // console.log('rendering...')
    return this.$el.html(this.template(this.model.attributes));
  }
});