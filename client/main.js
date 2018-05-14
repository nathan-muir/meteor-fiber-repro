import { Random } from 'meteor/random';
import { Template } from 'meteor/templating';

import './main.html';

Template.hello.events({
  'click button.set'(event, instance) {
    // increment the counter when button is clicked
    var callId = `Set ${Random.id()}`;
    console.time(callId);
    Meteor.call("set", function(err, res){
      console.timeEnd(callId);
    });
  },
  'click button.unset'(event, instance) {
    // increment the counter when button is clicked
    var callId = `Unset ${Random.id()}`;
    console.time(callId);
    Meteor.call("unset", function(err, res){
      console.timeEnd(callId);
    });
  },
});

Meteor.subscribe("all");
