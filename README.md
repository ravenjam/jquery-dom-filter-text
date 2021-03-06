# jquery-dom-filter-text
Filter DOM nodes based on text input values.

## Options:

- **filterTarget:** Elements you want to filter. The filter also works on the children nodes of the elements. Default is `document.body`.
- **filterProperty:** Property you want to filter. It can be 'id', 'class' or other node properties. It can even be plain html text. Default is `html`.
- **caseSensitive:** Self explaining. Default is `false`.

## How to use it:
Include 'jquery-dom-filter-text.js' or 'jquery-dom-filter-text.min.js'.

```html
<input type='text'>

<ul id='fruits'>
  <li>Apple</li>
  <li>Banana</li>
  <li>Pear</li>
  <li>Orange</li>
  <li>Pitaya</li>
</ul>
```
```javascript
var input = $("input[type='text']").domFilterText({ filterTarget: $('#fruits') });
```

Then you are able to filter the fruits based on the fruit you entered in the input box.

Enjoy.

## License
[The MIT License (MIT)](http://opensource.org/licenses/MIT)
