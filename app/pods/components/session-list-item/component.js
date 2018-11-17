import Ember from 'ember';

export default Ember.Component.extend({
  currentSessionId: null,
  session: null,
  classNames: ['session-list-item'],
  isCurrentSession: Ember.computed('currentSessionId', 'session.id', function() {
    return this.get('currentSessionId') === this.get('session.id');
  }),
  actions: {
    setCurrentSessionId: function(sessionId) {
      this.get('action')(sessionId);
    }
  }
});
