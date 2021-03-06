var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hasHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

//load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

//App css
require('style!css!applicationStyles')

ReactDOM.render(
	<Router history={hasHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About}/>
			<Route path="example" component={Example}/>
			<IndexRoute component={Weather}/>
		</Route>
	</Router>,
	document.getElementById('app')
);
