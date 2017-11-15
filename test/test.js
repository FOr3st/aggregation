const chai = require('chai');
const axios = require('axios');
const mockData = require('./mockData');
const testApp = require('./testApp');

const expect = chai.expect;
const users = mockData.users;
const customers = mockData.customers;
const countries = mockData.countries;

describe('GET requests', function(){
  let server;
  let serverAddress;

  before(function() {
    server = testApp.listen(process.env.PORT || 3002);
    serverAddress = `http://localhost:${server.address().port}`;
  });

  after(function() {
    server.close();
  });

  it('Check users all: /api/users', function(done) {
    axios.get(serverAddress + '/api/users')
      .then(result => {
        expect(result.data).to.deep.equal(users);
        done();
      })
      .catch(e => done(e));
  });

  it('Check user 1: /api/users/1', function(done) {
    axios.get(serverAddress + '/api/users/1')
      .then(result => {
        expect(result.data).to.deep.equal(users[0]);
        done();
      })
      .catch(e => done(e));
  });

  it('Check resources - all customers and user 2: /api/resources?user=api/users/2&customers=api/customers', function(done) {
    axios.get(serverAddress + '/api/resources?user=api/users/2&customers=api/customers')
      .then(result => {
        const expectedResult = {user: users[1], customers: customers};
        expect(result.data).to.deep.equal(expectedResult);
        done();
      })
      .catch(e => done(e));
  });

  it('Check resources - all countries: /api/resources?countries=api/countries', function(done) {
    axios.get(serverAddress + '/api/resources?countries=api/countries')
      .then(result => {
        const expectedResult = {countries: countries};
        expect(result.data).to.deep.equal(expectedResult);
        done();
      })
      .catch(e => done(e));
  });

  it('Check resources - all users, all customers and country 3: /api/resources?user=api/users&customers=api/customers&country=api/countries/3', function(done) {
    axios.get(serverAddress + '/api/resources?user=api/users&customers=api/customers&country=api/countries/3')
      .then(result => {
        const expectedResult = {user: users, customers: customers, country: countries[2]};
        expect(result.data).to.deep.equal(expectedResult);
        done();
      })
      .catch(e => done(e));
  });
});
