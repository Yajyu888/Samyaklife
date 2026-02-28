# Removing the "Under Construction" Banner

When the website design is complete, remove the banner as follows:

1. **Delete the CSS file:** `assets/css/under-construction.css`

2. **On every HTML page**, remove these two things:
   - In `<head>`: the line  
     `<link rel="stylesheet" href="assets/css/under-construction.css" />`
   - On `<body>`: remove the class `has-under-construction-banner` (leave any other classes, e.g. `class="is-preload"`).
   - Right after `<body ...>`: delete the line  
     `<div id="under-construction-banner">Under Construction – We're Building Something Meaningful.</div>`

**Quick find:** Search the project for `under-construction` to find all occurrences.
