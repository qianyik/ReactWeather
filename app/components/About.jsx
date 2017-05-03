var React = require('react');

$('p')

var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React.</p>
      <p>Here are the tools that I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
          - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
          - I used Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
