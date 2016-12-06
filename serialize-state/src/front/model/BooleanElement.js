import React, { Component } from 'react';
import RadioComponent from '../components/tree/RadioComponent';
import CheckboxComponent from '../components/tree/CheckBoxComponent';
import Uuid from '../services/Uuid';

class BooleanElement {
  constructor(name, type, label, checked, children) {
    this.key = Uuid.getUuid()();
    this.name = name || '';
    this.type = type || 'radio';
    this.label = label || '';
    this.checked = checked || false;
    this.children = Object.assign([], children);
  }
  
  static traverseForRadio(key, elements, target, comparer = (value, element) => value === element.key) {
    const traverseStack = elements.map(node => node);
    const result = [];

    while(traverseStack.length > 0) {
      let current = traverseStack.shift();
      
      if (target.name == current.name && target.type === 'radio') {
        current.checked = false;
      }

      if (comparer(key, current)) {
        current.setBasicInfoUsingByElement(target);
        result.push(current);
      } else {
        if (current.children) {
          current.children.forEach(child => traverseStack.push(child));
        }
      }
    }
  }
  
  static traverseForCheckbox(key, elements, target, comparer = (value, element) => value === element.key) {
    const traverseStack = elements.map(node => node);
    const result = [];

    while(traverseStack.length > 0) {
      let current = traverseStack.shift();

      if (comparer(key, current)) {
        current.setBasicInfoUsingByElement(target);
        result.push(current);
      } else {
        if (current.children) {
          current.children.forEach(child => traverseStack.push(child));
        }
      }
    }
  }
  
  static traverse(key, elements, target, comparer = (value, element) => value === element.key) {
    if (target.type === 'radio') {
      return BooleanElement.traverseForRadio(key, elements, target, comparer);
    } else {
      return BooleanElement.traverseForCheckbox(key, elements, target, comparer);
    }
  }
  
  toJson() {
    const element = {
      name: this.name,
      type: this.type,
      checked: this.checked,
    };
    
    if (Boolean(this.children) && this.children.length > 0) {
      element.children = {};
      this.children.forEach(child => Object.assign(element.children, child.toJson()));
    }
    
    const json = {};
    json[this.label] = element;
    
    return json;
  }

  setBasicInfoUsingByElement(element) {
    this.name = element.name;
    this.type = element.type;
    this.label = element.label;
    this.checked = element.checked;
  }

  createCheckbox() {
    if (this.children) {
      return (
        <CheckboxComponent key={this.key} model={this} name={this.name} label={this.label} checked={this.checked}>
          {this.children.map(child => child.create())}
        </CheckboxComponent>
      );      
    } else {
      return (
        <CheckboxComponent key={this.key} model={this} name={this.name} label={this.label} checked={this.checked} />
      );
    }
  }

  createRadio() {
    if (this.children) {
      return (
        <RadioComponent key={this.key} model={this} name={this.name} label={this.label} checked={this.checked}>
          {this.children.map(child => child.create())}
        </RadioComponent>
      );
    } else {
      return (
        <RadioComponent key={this.key} model={this} name={this.name} label={this.label} checked={this.checked} />
      );
    }
  }
  
  create() {
    if (this.type === 'radio') {
      return this.createRadio();
    } else {
      return this.createCheckbox();
    }
  }
}

export default BooleanElement;
