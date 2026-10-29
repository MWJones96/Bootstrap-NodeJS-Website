# Bootstrap Node.js Website

A personal website built with Node.js, Express, Handlebars and Bootstrap 4, written in 2020.

## Overview

The site is rendered on the server by Express using Handlebars templates, styled with Bootstrap. It has three pages, a navigation bar linking to a résumé, GitHub, LinkedIn and Stack Overflow, and an `app.yaml` for deployment to Google App Engine.

## Features

- **Home** (`/`): shows the latest xkcd comic, fetched on each request with the [`xkcd`](https://www.npmjs.com/package/xkcd) package, above a short biography whose age figure is calculated at request time.
- **Projects** (`/projects`): renders a card for each project in `projects.json`, sorted newest first by month and year. Each card shows an image, description and either a "View on GitHub" button or a note explaining why the source is not public.
- **Contact** (`/contact`): static contact details.
- Responsive layout through Bootstrap's grid and collapsing navbar.

## Tech stack

- Node.js 12 (`engines` in `package.json`)
- Express 4 and express-handlebars 3
- Bootstrap 4.4, jQuery and Popper.js, loaded from CDNs
- Font Awesome 4.7 icons
- Google App Engine flexible environment for hosting

## Getting started

### Prerequisites

Node.js 12 and npm.

### Install and run

```sh
npm install
npm start
```

`npm start` runs `node server.js`, which listens on port 8080. Visit `http://localhost:8080`.

The home page needs internet access to fetch the xkcd comic.

## Deployment

`app.yaml` targets the App Engine flexible environment with a single manually scaled instance (1 CPU, 0.5 GB memory). With the Google Cloud SDK configured for a project:

```sh
gcloud app deploy
```

## Adding a project

Add an entry to the `projects` array in `projects.json`:

```json
{"title": "Name", "img": "image.png", "desc": "Description.", "gh": "https://github.com/...", "year": "MM/YYYY"}
```

Put the image in `img/`, which is served at the site root. Leave `gh` empty and set `no_gh_desc` to show a note instead of the GitHub button.

## Project structure

```
server.js                     Express app: routes, Handlebars setup and static files
projects.json                 Project data rendered on /projects
views/layouts/main.handlebars Page shell: Bootstrap includes and navbar
views/home.handlebars         Home page with the xkcd comic and biography
views/projects.handlebars     Project cards
views/contact.handlebars      Contact page
img/                          Project images, served statically
img/crop.py                   Helper script that pads an image to 512x512 (uses Pillow)
app.yaml                      Google App Engine configuration
```

## Status

No longer maintained. The content reflects 2020, and the résumé link points to an external file that may no longer exist.

## Acknowledgements

- [xkcd](https://xkcd.com) by Randall Munroe, via the `xkcd` npm package
- [Bootstrap](https://getbootstrap.com) and [Font Awesome](https://fontawesome.com)
