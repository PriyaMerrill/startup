# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 3.224.102.255

AWS EC2 Server Setup
Server Information
- **Instance ID:** i-01d466c51b0397e84
- **Instance Type:** t2.micro
- **Region:** US East (N. Virginia) us-east-1
- **AMI Used:** ami-018f3a022e128a6b2 (Class AMI with Ubuntu, Node.js, Caddy, PM2)



## Caddy

What is Caddy
- Web server that automatically handles HTTPS certificates
- Replaces Apache/Nginx for simple web hosting
- Automatically gets SSL certificates from Let's Encrypt

Key Configuration (Caddyfile)
- Configuration file: `/etc/caddy/Caddyfile`
- Edit with: `sudo nano /etc/caddy/Caddyfile`
- Replace `:80` with your domain name for HTTPS
- Use subdomains for different apps (e.g., `startup.habitflow.link`)


## HTML


Basic Structure
- HTML uses tags with angle brackets: `<tagname>content</tagname>`
- Most tags have opening and closing versions
- Self-closing tags like `<img>` and `<br>` don't need closing tags

Key Elements
- `<nav>` - Navigation section for links
- `<aside>` - Sidebar content
- `<header>` - Top section of page
- `<footer>` - Bottom section of page
- `<section>` - Main content areas

Links and Images
- Links: `<a href="URL">Link text</a>`
- Images: `<img src="URL" width="200" alt="description">`
- Always include `alt` attribute for accessibility

Lists and Tables
- Unordered lists: `<ul>` with `<li>` items
- Tables: `<table>` with `<tr>` (rows) and `<td>` (cells)
- Add new table rows by copying the `<tr>` structure

Display Tips
- Use `<br>` for line breaks
- Put elements in `<div>` to make them stack vertically
- `width` attribute controls image size


Common Input Types
- `<input type="text" placeholder="hint text">` - Text input with placeholder
- `<input type="checkbox">` - Checkboxes for multiple selections
- `<input type="radio" name="group">` - Radio buttons (same name = grouped)
- `<input type="color" value="#ff0000">` - Color picker with default color

Select Dropdowns
- `<select>` with `<option>` elements for choices
- `<optgroup label="category">` groups related options together

Key Attributes
- `placeholder` - hint text in input fields
- `value` - sets default values (hex codes for colors)
- `name` - groups radio buttons together
- `label` - always pair with inputs for accessibility

Tips
- Radio buttons with same `name` act as one group
- Color inputs use hex codes (#ff0000 = red)
- Optgroups organize dropdown options into categories

Basic Media Tags
- `<img src="url" alt="description">` - Images
- `<audio src="url" controls>` - Audio with controls
- `<video src="url" controls>` - Video with controls
- `<svg>` - Vector graphics in HTML
- `<canvas>` - 2D drawing (needs JavaScript)

Key Attributes
- `alt` - Image description (required)
- `controls` - Show play/pause buttons
- `src` - File path (relative or absolute)
- `crossorigin="anonymous"` - For external domains


## CSS


## React Part 1: Routing


## React Part 2: Reactivity

