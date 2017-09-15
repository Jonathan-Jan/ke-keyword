# ke-keyword

A not usefull directive to auto create a link from a word

## Installation
```
npm install https://github.com/Jonathan-Jan/ke-keyword
```

## Features

 * "Automatic" creation of an \<a> html element referencing a pre-defined page
 * That's all
 * What are you doing here ?

## Quick exemple
here's a quick exemple of how to use ke-keyword

### js
First, you have to notice that keKeyword use a global variable named _keyWords where you should store matching map between keyword and link.
```javascript
let _keyWords = {};
```

Add a keyword to the map
```javascript
_keyWords['Tour Eiffel'] = 'https://fr.wikipedia.org/wiki/Tour_Eiffel'
```

Your HTML
```html
<ke-keyword>Tour Eiffel</ke-keyword>
```

Result
```html
<a href='https://fr.wikipedia.org/wiki/Tour_Eiffel'>Tour Eiffel</a>
```

## No Test ?
Nope... Sorry

## License

MIT - see LICENSE.md.