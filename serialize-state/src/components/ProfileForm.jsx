import React from 'react';

import { formChange } from '../actions';
import { MARVEL, DC, SPIDEY, HULK, BATMAN, SUPERMAN } from '../constants';

const ProfileForm = React.createClass({

  handleNameChange(e) {
    this.props.dispatch(formChange({ userName: e.target.value }));
  },

  handleComicChange(e) {
    this.props.dispatch(formChange({ comic: e.target.value, superHeroes: [] }));
  },

  handleSuperheroChange(e) {
    let newSuperHeroes;
    let heroInAction = e.target.value;
    if (!e.target.checked) {
      newSuperHeroes = this.props.state.superHeroes.splice(this.props.state.superHeroes.indexOf(heroInAction), 1);
    } else {
      newSuperHeroes = this.props.state.superHeroes.concat([heroInAction]);
    }
    this.props.dispatch(formChange({ superHeroes: newSuperHeroes }));
  },

  render() {
    let userName;
    return (
      <section>
        <h4>Profile Form</h4>
        <p>Hi my name is</p>
        <input
          onChange={ this.handleNameChange }
          value={ this.props.state.userName } />
        <p>and I love</p>
        <div>
          <input
            checked={ this.props.state.comic == MARVEL }
            name="comic"
            value={ MARVEL }
            type="radio"
            onChange={ this.handleComicChange } />Marvel
          <ul>
            <li>
              <input
                checked={ this.props.state.superHeroes.indexOf(SPIDEY) != -1 }
                disabled={ this.props.state.comic !== MARVEL }
                type="checkbox"
                onChange={ this.handleSuperheroChange }
                value={ SPIDEY } />
              Spiderman
            </li>
            <li>
              <input
                checked={ this.props.state.superHeroes.indexOf(HULK) != -1 }
                type="checkbox"
                onChange={ this.handleSuperheroChange }
                disabled={ this.props.state.comic !== MARVEL }
                value={ HULK } />
              Hulk
            </li>
          </ul>
        </div>
        <div>
          <input
            type="radio"
            name="comic"
            value={ DC }
            checked={ this.props.state.comic == DC }
            onChange={ this.handleComicChange } /> DC
          <ul>
            <li>
              <input
                type="checkbox"
                onChange={ this.handleSuperheroChange }
                checked={ this.props.state.superHeroes.indexOf(BATMAN) != -1 }
                disabled={ this.props.state.comic !== DC }
                value={ BATMAN } />
              Batman
            </li>
            <li>
              <input
                type="checkbox"
                onChange={ this.handleSuperheroChange }
                checked={ this.props.state.superHeroes.indexOf(SUPERMAN) != -1 }
                disabled={ this.props.state.comic !== DC }
                value={ SUPERMAN } />
              Superman
            </li>
          </ul>
        </div>
      </section>
    );
  }

});

export default ProfileForm;
