import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import initialState from '../../src/states';
import Clipboard from '../../src/components/Clipboard';

function setup() {
  const props = {
    ...initialState,
  };
  const enzymeWrapper = shallow(<Clipboard {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('components', () => {
  describe('Clipboard', () => {
    it('Clipboard rendered', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('#clipboard-input').length).toBe(1);
    });
  });
});
