var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About page</Link>
      <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example page</Link>
    </div>
  );
};

module.exports = Nav;
