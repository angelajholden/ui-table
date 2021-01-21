# UI Table :honeybee:

A mobile friendly and accessible table.

---

## Resources

-   https://jsonplaceholder.typicode.com/
-   https://jsonplaceholder.typicode.com/users
-   https://developer.mozilla.org/en-US/docs/Web/CSS/clip
-   https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
-   https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
-   https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#scoping_rows_and_columns
-   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

---

## Get Started

```bash
git clone git@github.com:angelajholden/ui-table.git

npm install
```

---

### Grunt

Run `grunt` on the terminal to compile SCSS and JS.

---

### Live Reload

Listens on `port: 8000` by default. Double check the grunt terminal output to be sure.

```bash
http://127.0.0.1:8000
```

---

### Source Folders

Edit SCSS and JavaScript in the Components directory. Add scripts and styles as needed.

```
components/
|__ scripts/
    |__ main.js

|__ scss/
    |__ _variables.scss
    |__ _normalize.scss
    |__ _main.scss
    |__ styles.scss
```

---

### Compiled Folders

Grunt will compile your SCSS and JavaScript like this.

```
dist/
|__ js/
    |__ scripts.js
    |__ scripts.min.js
    |__ scripts.min.js.map

|__ css/
    |__ styles.css
    |__ styles.map.css
```

---

### Heroku

Deployed to Heroku as a `php` app.

```php
<?php
/*
To deploy static HTML projects, we need to let Heroku think this is a PHP app
If you don't need this, delete index.php and change the name of home.html to index.html
*/
include_once('home.html');
?>
```

Cheers!  
Angela :two_hearts:
