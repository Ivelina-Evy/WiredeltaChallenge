# WiredeltaChallenge — (based on the seed for AngularJS apps)

Documentation for running and using the application, plus a list of libraries and frameworks used:

##Tools and frameworks
DE and Code Editor: WebStorm
Program Languages: HTML5, CSS, JS
Libraries and Frameworks: jQuery, Angular, Bootstrap
Plugins: GoogleMap, Google Fonts

##Description:
The navigation is inspired by a Bootstrap template. It has only two active menu items (Logo - used also as a Home page, and Contact Us).

The Home page is designed as follows:
	A carousel (with right and left navigation items) is used as a fullscreen background.
Each image (of the three) is used as a board on which an upcoming event is
displayed. An event has a title and short description. Below the text there is
a clickable button that opens an event's application form. The application form
is within a modal. The modal is divided by two (grid system used): on the right
side is the app form, and on the left side -  an embedded YouTube video. The
application form has: input fields, radio buttons, check boxes, textarea. Two
buttons - "Submit" and "Close" are used respectively to to submit the form as
the form validation is shown in the console, and to close the window.
	There is information about the event's time and place with a link to the location
of the venue office (a Google map showing up), below the "Join Us" button t.

The Contact Us page is designed as follows:
	A bootstrap panel with information about designer's name, email address
and tel.

Font pair used: for headers: Montserrat, and paragraphs: Cardo serif.

The web application is mobile responsive. Bootstrap grid system and media
queries are used to provide an optimal viewing and navigation experience.

## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

### Prerequisites

You need git to clone the repository (https://github.com/Ivelina-Evy/WiredeltaChallenge.git).

You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone WiredeltaChallenge
```
git clone https://github.com/Ivelina-Evy/WiredeltaChallenge.git
cd WiredeltaChallenge
```

### Install Dependencies

```
npm install
```

### Run the Application

The simplest way to start the app is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.


## Directory Layout

```
app/                    --> all of the source files for the application
  img                   --> image resources
  app.css               --> default stylesheet
  partial/              --> directory for the partial views
   contact              --> directory for the contact view and logic
    contact.html        --> the contact view layout
    contact.js          --> the contact view logic
   home                 --> directory for the home view and logic
    home.html           --> the home view layout
    home.js             --> the home view logic
   modal                --> directory for the modal view and logic
    modal.html          --> the modal view layout
    modal.js            --> the modal view logic
   navigation           --> directory for the navigation view and logic
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
```

Have fun