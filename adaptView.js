define([
  ], function() {
  
    var FilterView = Backbone.View.extend({
  
      tagName: 'form',
  
      className: 'dialog-user-management',
  
      events: {
        'change select': 'onFormChange'
      },
  
      initialize: function() {
        this.render();
      },
      onFormChange: function() {
        var tenantNames = this.tenantSelect.getValue();
        if (tenantNames.length) {
          attributeMap.tenantName = tenantNames;
        }
      },
  
      render: function() {
        var template = Handlebars.templates['dialogUserManagement'];
        this.$el.html(template({
          tenants: this.model.get('globalData').allTenants.toJSON()
        }));
        return this;
      },
  
      postRender: function() {
        this.tenantSelect = this.$('[name="tenantName"]').selectize({
          maxItems: null
        })[0].selectize;
        this.tenantSelect.setValue('');
      },
    });
  
    return FilterView;
  
  });