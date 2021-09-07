# **Agile Note Taker**
This is a note taking application built with Node.js and Express.js. It allows users to save notes to be used later, and the notes can be deleted once they're no longer needed. It uses Express routes to handle the retrieval, saving, and deleting of notes from a JSON file. It uses a seperate router to handle the static pages(index.html and notes.html.) This application is currently hosted on Heroku, and you can also run it locally if you clone the repository to your computer.

---
![Screenshot of Application](https://github.com/lukecp5/note-taker/blob/main/public/assets/screenshot.png?raw=true)
---
## **Table of Contents**
* [Installation](#installation)
* [Usage](#usage)
* [Technologies Used](#technologies-used)
* [License](#installation)
* [Contributing](#installation)
* [Contact](#contact)
---

## Installation
This applicaton require no installation as it is hosted on a [Heroku Server](https://agile-note-taker.herokuapp.com/).

If you would like to run the server locally, run these commands to install the application on your computer:
```
git clone git@github.com:lukecp5/note-taker.git
cd note-taker
npm install
```
---


## Usage
To use this application, simply navigate to it's Heroku Server: [https://agile-note-taker.herokuapp.com/](https://agile-note-taker.herokuapp.com/). Click get started to start taking notes. You can add a new note by clicking the plus button in the top right-hand corner. After writing your note, you can save it by clicking the save icon in the top right-hand corner. After being saved, the note will be listed along with your other notes in the left column on the page. You can click on the note's title at any point to retrieve the contents of the respective note. To delete a note that you have saved, simply click the delete button next to the note you would like to delete. 

Alternatively, if you decide to run it locally, you will use Node.js to run the application once you have it cloned and all of the depencies installed. Enter this command inside the note-taker directory:
  `npm start`

After starting the server, navigate to http://localhost:3001/ and you will be presented with the note taker landing page. Follow the intructions above for usage of the application.

---


## Technologies Used
- JavaScript
  - Node.js
    - Express
    - UUID
    - fs
    - path
- Heroku Server
- HTML
- CSS
- JSON
- Bootstrap
- Font Awesome Icons

---

## Contributing
 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

--- 

## Contact
LinkedIn: [@luke-poirrier](https://www.linkedin.com/in/luke-poirrier)  
Email: [Luke@LukePoirrier.com](mailto:Luke@LukePoirrier.com)  
Portfolio: [LukePoirrier.com](http://lukepoirrier.com)  



