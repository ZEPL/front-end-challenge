import React from 'react';

import { formChange } from '../actions';

const ProfileForm = React.createClass({
  handleNameChange(e) {
    this.props.dispatch(formChange({ userName: e.target.value }));
  },

  render() {
    let userName;
    return (
      <section>
        <h4>Profile Form</h4>
        <p>Hi my name is</p>
        <input
          value={ this.props.state.userName }
          onChange={ this.handleNameChange }/>
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
  }

});

export default ProfileForm;
