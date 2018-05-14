import { Random } from 'meteor/random';
import { Template } from 'meteor/templating';

import './main.html';

Template.hello.events({
  'click button.set'(event, instance) {
    // increment the counter when button is clicked
    var callId = `Set ${Random.id()}`;
    console.time(callId);
    Meteor.apply("set", [], { noRetry: true }, function (err, res) {
      if (err) {
        console.error('set failed', err);
      }
      console.timeEnd(callId);
    });
  },
  'click button.unset'(event, instance) {
    // increment the counter when button is clicked
    var callId = `Unset ${Random.id()}`;
    console.time(callId);
    Meteor.call("unset", [], { noRetry: true }, function (err, res) {
      if (err) {
        console.error('unset failed', err);
      }
      console.timeEnd(callId);
    });
  },
});

Meteor.subscribe("all");
