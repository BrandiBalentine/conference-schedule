import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['tab'],
  isCurrentTrack: Ember.computed('currentTrack', 'track', function() {
    return this.get('currentTrack') === this.get('track');
  }),
  actions:{
    changeTrack: function(track) {
      this.get('action')(track);
    }
  }
});
