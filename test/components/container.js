import React from 'react';
import * as Container from 'app/components/container';
import { mount } from 'enzyme';
import { expect } from 'chai';
import state from 'test/state.json';

describe('Container Component', () => {
  describe('MessageEntry', () => {
    const component = mount(
      <Container.MessageEntry message={state.room.messages[0]} roomName={state.room.name} />
    );
    it('exists', () => {
      expect(component.find('div.message-entry')).to.have.length(1);
    });
    it('renders author\'s avatar', () => {
      expect(component.find('img')).to.have.attr('src', state.room.messages[0].user.avatarURL);
    });
    it('renders author\'s name', () => {
      expect(component.find('span.message-author-name'))
      .to.have.text(state.room.messages[0].user.name);
    });
    it('renders the message date', () => {
      expect(component.find('a.message-date')).to.have.text(state.room.messages[0].date);
    });
    it('renders a message', () => {
      expect(component.find('p.message-text')).to.have.text(state.room.messages[0].text);
    });
  });
});
