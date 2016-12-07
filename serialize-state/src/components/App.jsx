import React from 'react';

import SerializeState from '../component-enhancers/SerializeState.jsx';
import DynamicProfileForm from '../containers/DynamicProfileForm.jsx';

const App = ({ props }) => (
  <div>
    { SerializeState(DynamicProfileForm) }
  </div>
);

export default App;
