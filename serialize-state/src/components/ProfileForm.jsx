import React from 'react';

const ProfileForm = () => (
  <section>
    <h4>Comic Form</h4>
    <p>Hi my name is</p>
    <input/>
    <p>and I love</p>
    <div>
      <input type="radio" name="comic" value="marvel" />Marvel
      <ul>
        <li><input type="checkbox" name="character" value="spidey" />Spiderman</li>
        <li><input type="checkbox" name="character" value="hulk" />Hulk</li>
      </ul>
    </div>
    <div>
      <input type="radio" name="comic" value="dc" /> DC
      <ul>
        <li><input type="checkbox" name="character" value="batman" />Batman</li>
        <li><input type="checkbox" name="character" value="superman" />Superman</li>
      </ul>
    </div>
  </section>
);

export default ProfileForm;
