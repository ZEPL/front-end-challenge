import React from 'react';

import SerializeState from '../component-enhancers/SerializeState.js';
import DynamicProfileForm from '../containers/DynamicProfileForm.js';

const App = ({ props }) => (
  <div>
    { SerializeState(DynamicProfileForm) }
  </div>
);

export default App;
