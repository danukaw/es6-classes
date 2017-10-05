var React = require('react');
var ReactDOM = require('react-dom');

// Greeter React component -- container component

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import ComponentOne from './component/ComponentOne';
import ComponentTwo from './component/ComponentTwo';

// load foundations-sites
$(document).foundation();

require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <div>
    <ComponentOne count={66}/>
    <ComponentTwo count = {9999}/>
  </div>,
  document.getElementById('app')
);
