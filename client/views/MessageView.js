//wrap divs in a <span> tag, add classes name & message to inner divs respectively
var MessageView = Backbone.View.extend({
  tagName: 'li',
  events: {
    "click": "handleClick"
  },
  template: _.template('<span><div class="name"><%=name%>: </div><div class="message"><%=message%></div><span>'),
  handleClick: function () {
    this.model.toFavorites();
  },
  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});