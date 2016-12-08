import React from 'react';

import SerializeState from '../component-enhancers/SerializeState.js';
import ProfileForm from '../containers/ProfileFormContainer.js';

const App = ({ props }) => (
  <div>
    { SerializeState(ProfileForm) }
  </div>
);

export default App;
