import React from "react";

const Q8 = () => {
  return (
    <div style={{ padding: "0rem", textAlign: "start" }}>
      <p>
        <strong className="title">WordPress Plugin Development</strong>
        <br />
        <br />
        <strong className="title">
          1. Create a WordPress plugin that adds a shortcode <code>[greeting]</code> which outputs "Welcome to My Site!" when used in posts or pages:
        </strong>
      </p>
      <p>Follow these steps to create the WordPress plugin:</p>
      <ol>
        <li>
          <strong>Create the Plugin File</strong>
          <ul>
            <li>
              Navigate to the <code>wp-content/plugins/</code> directory of your WordPress installation.
            </li>
            <li>
              Create a new folder for your plugin, for example, <code>greeting-plugin</code>.
            </li>
            <li>
              Inside this folder, create a PHP file named <code>greeting-plugin.php</code>.
            </li>
          </ul>
        </li>

        <li>
          <strong>Add the Plugin Header</strong>
          <ul>
            <li>
              Open the <code>greeting-plugin.php</code> file and add the following code to define the plugin:
            </li>
            <pre>
              {`<?php`}
              <br />
              {`/*`}
              <br />
              {`  Plugin Name: Greeting Plugin`}
              <br />
              {`  Plugin URI: http://example.com/`}
              <br />
              {`  Description: A simple plugin to display a greeting message using a shortcode.`}
              <br />
              {`  Version: 1.0`}
              <br />
              {`  Author: Your Name`}
              <br />
              {`  Author URI: http://example.com/`}
              <br />
              {`  License: GPL2`}
              <br />
              {`*/`}
              <br />
              <br />
              {`// Register the [greeting] shortcode`}
              <br />
              {`function greeting_shortcode() {`}
              <br />
              {`  return "Welcome to My Site!";`}
              <br />
              {`}`}
              <br />
              {`add_shortcode('greeting', 'greeting_shortcode');`}
              <br />
              {`?>`}
            </pre>
          </ul>
        </li>
        <li>
          <strong>Activate the Plugin</strong>
          <ul>
            <li>Go to the WordPress admin dashboard.</li>
            <li>Navigate to "Plugins" and find the "Greeting Plugin" in the list.</li>
            <li>Click "Activate" to enable the plugin.</li>
          </ul>
        </li>
        <li>
          <strong>Use the Shortcode</strong>
          <ul>
            <li>
              You can now use the <code>[greeting]</code> shortcode in any post or page, and it will output <strong>"Welcome to My Site!"</strong>.
            </li>
          </ul>
        </li>
      </ol>
      <br /> <br />
      <p>
        <strong className="title">2. What is the difference between a WordPress post and a page?</strong>
      </p>
      <p>A WordPress post is typically used for time-sensitive content like blog articles, news, or updates. Posts are organized by categories and tags, and they appear in reverse chronological order on your blog page. Posts usually have a comment section and are associated with a specific publication date.</p>
      <p>A WordPress page, on the other hand, is used for static content that is not time-sensitive, such as an "About Us" or "Contact" page. Pages are hierarchical, meaning they can have parent-child relationships, and they do not use categories or tags. Pages are typically not part of the blog stream and are often used for content that is meant to be more permanent and structured.</p>
    </div>
  );
};

export default Q8;
