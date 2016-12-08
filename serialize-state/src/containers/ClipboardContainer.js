// Container for Clipboard component

import React from 'react';
import { connect } from 'react-redux';
import ClipboardView from '../components/Clipboard';

let Clipboard = connect()(ClipboardView);

export default Clipboard;
