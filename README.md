# City Navigator

This is a project for Mobile Computing course at Karlsruhe Institute of Technology.
The app shows you the transport stations nearby, distance to them, direction (only on mobile) and provides a link to Google Maps if you tap on station tile.

Live Demonstration: https://nomorehumor.github.io/City-Navigator/

This project uses Google Maps API (Nearby and Distance Matrix) to retrieve the information about transport stations around you
The access to Google API is provided through a custom API that you can find here: https://github.com/nomorehumor/City-Navigator-Gateway

The example above uses API that is hosted on a free server, so it might need some time until the stations are shown, in order to spin the instance up.

If you run the instance of API Gateway locally, you can change the API address in `src/config.json` file.

### Running locally

Run `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
