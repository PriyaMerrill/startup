# CS 260 Notes

This file represents what I have learned about web programming.

I love web programming

- [My startup](https://startup.cs260.click)
- [My simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

Interesting things I have learned about AWS

## HTML

- **Every page has the same basic skeleton**: 
    - '<!DOCTYPE html>` tells the browser to use modern HTML5 rules
    - `<head>` holds metadata- nothing visible
    - `<body>` holds everything the user sees
- **HTML comments are '<!-- like this -->'**
- **semantic landmarks over divs**: <header> is top intro content, <nav> is links around, <main> is page's content, <footer> is metadata about the page
- **label for ="id" matched to an <input id="id"> conects the two** clicking the label focuses the input and screen readers announce the field's purpose
- **'<ul>' vs '<ol>'** using <ul> cause any item could be done first, its just a collection
- **<progress value ='x' max='y'>** HTML element for showing partial completion toward a goal, cooler for progress indicating
- **<section>** groups a distinct and self contained chunk of content that has its own heading. Im using it to separate conceptually different groupings even if they're both lists
- This phase is structure and placeholders only, just visible placements for where stuff will go
- **'<table>' is for table style data** rows and columns where each column is something consistent across rows
- **'<thead>' and '<tbody>'** split a table into its header rows and its data rows. keeps the label row different from content that is not a part of the table
- **<caption>** describes what the table is for. shows above the table
- **<img src=> alt=""** src points to the image file. I found it eaiest to have it be in the project folder. alt is text that shows up if the image doesn't load. 
- **Sizing images in HTML with no CSS** set just the width attribute on img
- I will change how I deal with images when we get to CSS phase
- **span** a basic inline container. I used it to group text I will go back to later. There is nothing specifc to tag right now. generic for just one line
- **button type** button vs submit. submit triggers submissions. button does nothing on its own.
- **forms** any place the user types something in and adds it uses the same <form> + <label> + <input> + submit<button> pattern

## CSS
- Bootstrap's <link> only resets the base elements. Components (navbar, cards, buttons) need classes.
- Your own styles.css link goes after Bootstrap's so your rules win.
- A <link> tag belongs in the <head> and never in a .css file, and the script tag goes before </body>.
- Bootstrap's grid is flexbox, and col-md-6 means "half width from tablet size up, stacked on phones".
- An unclosed </div> won't always show an error, but it can quietly break layouts.
- An imported font has to be linked in the HTML, or font-family just falls back to the next option.

## React
- The big idea of this is that right now the browser loads a different .html file for each page
- With React there is just one html and JavaScript swaps which compeonent shows up based on the url
- each page becomes a function that returns JSX
- JSX is HTML written inside JavaScript

**steps I plan to take**
- Clone simon css and deploy
- set up Vite in startup
- Redo Bootstrap
- Make React work
- Make the App component
- Reorganize everything into Vite layout
- Stub the components and the router
- Move the real HTML into each component; router
- Convert each view
- Deploy

- React turns the site into a one page app with one index.html and JavaScript fills it in
- Every page is just a component swapped into that one div
- index.jsx is the bridge; it finds the root dive and renders App into it
- Vite is what builds everything
- Vite is a dev dependency cause it never ships to the browser
- React and Bootstrap are regular dependencies because they do ship to the browser
- node modules and dist go in gitignore cause they arent soure code
- JSX is html inside JavaScript
- There are some renames when swithing html to jsx
- React only controls what's inside the root div
- Files in public/ are copied and then served from the site roo
- Bootstrap is imported from node modules in app jsx instead of a CDN, Vite bundles it together and that version is pinned in package.json
- Component names have to be capatilized
- NavLink adds the active class on its own
- A * route catches any unknown URL
- The server now needs the built bundle and not raw files so deploy script changes
- Porting is doing one page at a time
