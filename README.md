# P5) San Francisco Night Life

## Description:
This is single page application (SAP) using Google Map API to show the San Francisco Bay Area area. The markers display many of the Restaurants, Club, and disco in the area.

## Technology Used:
This tiny project built with [Google Map API](https://developers.google.com/maps/) and [Knockoutjs](http://knockoutjs.com) and [foursquare](https://developer.foursquare.com) API on this project.

## Functionality:
Program statically display some of my favorite location in San Francisco Bay Area and show a marker for each one. If user clicks on marker program retrieves some more information from third party library in this case `foursquare` and display to a user.


### Prerequisites Courses to Finish this Project
1. Google Maps APIs (UD864)
     + Course built by [Google](https://www.udacity.com/course/google-maps-apis--ud864)
2. JavaScript Design Patterns (UD989)
     + Course built by [Udacity](https://www.udacity.com/course/javascript-design-patterns--ud989)
3. Responsive Images (Ud110)
     + Intro to AJAX [udacity](https://www.udacity.com/course/intro-to-ajax--ud110)

#### Autocomplete Functionality:

This program have autocomplete search function for better user experience.

![search](https://github.com/JeffShomali/P5-San-Francisco-Night-Life/blob/master/src/images/search.gif?raw=true")

#### Filter function
![search](https://github.com/JeffShomali/P5-San-Francisco-Night-Life/blob/master/src/images/filter.gif?raw=true")

#### Download
`git clone https://github.com/JeffShomali/P5-San-Francisco-Night-Life.git`

or [download](https://github.com/JeffShomali/P5-San-Francisco-Night-Life/archive/master.zip) directly

#### Install and usage
Install with [bower](http://bower.io)

open `src` directory and run `bower install` then open `index.html`


#### For usage optimized version (optional)

run `npm install -g grunt` to install grunt globally

run `npm install `to install grunt tasks

run `npm install grunt-inline-css --save-dev` to install inline css

run `npm install grunt-contrib-htmlmin --save-dev` to install htmlmin

run `grunt` to build app properly

open `src` directory and open `index.html`
