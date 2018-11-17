import Ember from 'ember';

export default Ember.Controller.extend({
  currentTrack: null,
  trackSessionMap: null,
  sessionIdMap: null,
  currentSessionId: null,
  currentSession: Ember.computed('currentSessionId', 'sessionIdMap', function() {
    return this.get('sessionIdMap')[this.get('currentSessionId')];
  }),
  sessions: Ember.computed('currentTrack', 'trackSessionMap', function() {
    return this.get('trackSessionMap')[this.get('currentTrack')];
  }),

  actions: {
    changeTrack: function(track) {
      this.set('currentTrack', track);
      this.set('currentSessionId', this.get('trackSessionMap')[this.get('currentTrack')][0].id);
    },

    setCurrentSessionId: function(sessionId) {
      this.set('currentSessionId', sessionId);
    }
  }
});
