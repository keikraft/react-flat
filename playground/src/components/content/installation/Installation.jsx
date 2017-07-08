import React from 'react';

function Installation() {
  return (
    <div className="installation-page">
      <h2>Installation</h2>
      <p>React-Flat is available as an npm package.</p>
      <h2>npm</h2>
      <p>To install and save in your <code>package.json</code> dependencies, run:</p>
      <pre>
        <code>npm install -s react-flat</code>
      </pre>
      <h2>Roboto Font</h2>
      <p>React-Flat library was designed with the <a href="http://www.google.com/fonts/specimen/Roboto">Roboto</a> font in mind. So be sure to follow these instructions.</p>
      <h2>Icon Font</h2>
      <p>In order to use the font <code>Icon</code> component, or to use icon names (ligatures) directly in components that support them,<br />
      you must first add the <a href="https://material.io/icons/">Material</a> icons font. Here are some instructions on how to do so.</p>
    </div>
  );
}

export default Installation;