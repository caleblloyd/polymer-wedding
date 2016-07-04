# Polymer Wedding

I wrote this web application using Polymer with the goal of making a beautiul, functional, and mobile-friendly personal wedding website.  I hope that others find this useful in learning to use Polymer and building their own personalized wedding websites!

Some features of the app:
- Condensing Header
- Animations between pages
- HTML5 PushState Routing
- Offline Caching via Service Worker

Thanks to the Polymer team for all of their hard work and the excellent polymer-cli.  And thanks to Maggie for saying yes!

### Live Demo

https://maggieandcaleb.com

### Setup

##### Prerequisites

Install [polymer-cli](https://github.com/Polymer/polymer-cli) and bower:

    npm install -g polymer-cli bower

##### Clone the app and download dependencies

    bower install

### Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

    polymer serve --open


### Build

This command performs HTML, CSS, and JS minification on the application
dependencies, and generates a service-worker.js file with code to pre-cache the
dependencies based on the entrypoint and fragments specified in `polymer.json`.
The minified files are output to the `build/unbundled` folder, and are suitable
for serving from a HTTP/2+Push compatible server.

In addition the command also creates a fallback `build/bundled` folder,
generated using fragment bundling, suitable for serving from non
H2/push-compatible servers or to clients that do not support H2/Push.

    polymer build

### Test the build

This command serves the minified version of the app in an unbundled state, as it would
be served by a push-compatible server:

    polymer serve build/unbundled

This command serves the minified version of the app generated using fragment bundling:

    polymer serve build/bundled

### Extend

You can extend the app by adding more elements that will be demand-loaded
e.g. based on the route, or to progressively render non-critical sections
of the application.  Each new demand-loaded fragment should be added to the
list of `fragments` in the included `polymer.json` file.  This will ensure
those components and their dependencies are added to the list of pre-cached
components (and will have bundles created in the fallback `bundled` build).
