import React from 'react';
import * as Presentational from 'app/components/presentational';
import { mount } from 'enzyme';
import { expect } from 'chai';
import state from 'test/state.json';

describe('Presentational Component', () => {
  describe('Welcome', () => {
    const component = mount(
      <Presentational.Welcome loggedUserName={state.session.loggedUser.name} />
    );

    it('exists', () => {
      expect(component.find('div.home-page')).to.have.length(1);
    });
    it('renders a welcome message', () => {
      expect(component.find('h1')).to.have.length(1)
      .to.have.text(`Welcome ${state.session.loggedUser.name}!`);
    });
  });

  describe('Loading', () => {
    const component = mount(<Presentational.Loading />);

    it('exists', () => {
      expect(component.find('div.cssload-container')).to.have.length(1);
    });

    it('renders a loading spinner', () => {
      expect(component.find('div.cssload-container div.side-bar.loading-side-bar'))
      .to.have.length(1);
      expect(component.find('div.cssload-container div.cssload-whirlpool'))
      .to.have.length(1);
    });
  });
});
