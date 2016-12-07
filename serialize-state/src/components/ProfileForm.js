import React from 'react';

import { formChange } from '../actions';
import { MARVEL, DC, SPIDEY, HULK, BATMAN, SUPERMAN } from '../constants';

const ProfileForm = React.createClass({

  // handles username change
  handleNameChange(e) {
    this.props.dispatch(formChange({ userName: e.target.value }));
  },

  // handles change in seleted comic family
  handleComicChange(e) {
    this.props.dispatch(formChange({ comic: e.target.value, superHeroes: [] }));
  },

  // handles superhero change
  handleSuperheroChange(event) {
    let hero = event.target.value;
    let indexOfHero = this.props.state.superHeroes.indexOf(hero);
    let newSuperHeroes;

    if (indexOfHero == -1) { // hero not present in list
      newSuperHeroes = this.props.state.superHeroes.concat([hero]);
    } else {
      newSuperHeroes = this.props.state.superHeroes.splice(indexOfHero, 1);
    }

    this.props.dispatch(formChange({ superHeroes: newSuperHeroes }));
  },

  render() {
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
