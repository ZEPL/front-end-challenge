import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/front/App.jsx';

describe('ReactSkelApp', () => {
  describe('AppTest', () => {
    it('app-test-message', (done) => {
      const should = require('chai').should();
      const component = shallow(<App message="Hello World" />);
      
      component.should.to.not.be.null;

      done();
    });
  });
});