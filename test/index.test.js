var Adapter = require('../');
var models = require('./models.json');
var should = require('should');  // eslint-disable-line

describe('sails-scuttlebutt', function() {

  before(function(done) {

    Adapter.registerDatastore({
      "schema": false,
      "filePath": ".tmp/",
      "dir": "./test/fixtures",
      "adapter": "scuttlebutt_tests",
      "identity": "test"
    }, models, done);

  });

  it('should load userTable fixture data', function(done) {

    Adapter.find('test', {
      using: 'userTable',
      criteria: {
        where: {}
      }
    }, function(err, data) {

      if (err) { return done(err); }

      data.length.should.be.exactly(2);
      done();

    });

  });

  it('should load thingsTable fixture data', function(done) {

    Adapter.find('test', {
      using: 'userTable',
      criteria: {
        where: {}
      }
    }, function(err, data) {

      if (err) { return done(err); }

      data.length.should.be.exactly(2);
      done();

    });

  });

});
