//wrap divs in a <span> tag, add classes name & message to inner divs respectively
var MessageView = Backbone.View.extend({
  tagName: 'li',
  template: _.template('<span><div class="name"><%=name%></div><div class="message"><%=message%></div></span>'),
  render: function(){
   return this.$el.html(this.template(this.model.attributes));
  }
});