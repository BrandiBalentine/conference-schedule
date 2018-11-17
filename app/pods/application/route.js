import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('/sessions.json');
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    let trackSessionMap = {};
    let sessionIdMap = {};
    model.Items.forEach(function(session){
      let sessionDetails = {title: session.Title, speakers: session.Speakers, description: session.Description};
      sessionIdMap[session.Id] = sessionDetails;
      let sessionData = {id: session.Id, title: session.Title, speakers: session.Speakers};
      if (trackSessionMap[session.Track.Title]) {
        trackSessionMap[session.Track.Title].push(sessionData);
      } else {
        trackSessionMap[session.Track.Title] = [sessionData];
      }
    });
    controller.set('trackSessionMap', trackSessionMap);
    controller.set('sessionIdMap', sessionIdMap);
    controller.set('currentTrack', Object.keys(trackSessionMap)[0]);
    controller.set('currentSessionId', trackSessionMap[controller.get('currentTrack')][0].id);
  }
});
