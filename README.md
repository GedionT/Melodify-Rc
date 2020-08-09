# Melodify

- www.melodify.tech
- [Hear your sites](melodi-fy.web.app)

Ever wondered what a website content might sound like?
Melodify was a weekend project built to do just that. Enter a URL of your
choosing and Melodify will scrape the website and play you the sound along
with a music sheet.

# Design Concept

The UI is a simplistic design with a minimal interface. It was initally designed on
Figma which can be found on this link here: [Initial Design](https://www.figma.com/file/K1mzN5JjbL7pdGzwYnuzIh/Melodify?node-id=6%3A6)

# Inspiration

Audio logic inspiration [JS Piano](https://www.freecodecamp.org/news/javascript-piano-keyboard/).
Since the logic used by the website above uses key-presses to make sounds synthetically, we customized
the logic on the playKeyboard.js file to fit our needs with several array manipulation.

# Frontend

Frontend is made using HTML, CSS, Angular (now React), and Bootstrap.
The sound is generated mathematically on the client machine by using math functions
after a scraped content is received from the backend scrapper

# Backend

Backend runs on Node.js deployed on Heroku.
To run this project on your local machine

open terminal:

    git clone https://www.github.com/GedionT/Melodify-Rc.git

    cd Melodify

    npm install

    npm start
