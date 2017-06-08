var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to="/?location=SiliconValley">Silicon Valley, California</Link>
        </li>
        <li>
          <Link to="/?location=Seattle">Seattle, Washington</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Example;
