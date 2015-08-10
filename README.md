# jquery-dom-filter-text
Filter DOM nodes based on text input values.

**Options:**

- **filterTarget:** Elements you want to filter. The filter also works on the children nodes of the elements.
- **filterProperty:** Property you want to filter. It can be 'id', 'class' or other node properties. It can even be plain html text.
- **caseSensitive:** Self explaining.

Example:
```
<ul id='fruits'>
  <li>Apple</li>
  <li>Banana</li>
  <li>Pear</li>
  <li>Orange</li>
  <li>Pitaya</li>
</ul>

var input = $("input[type='text']").domFilterText({
  filterTarget: $('#fruits'),
  filterProperty: 'html',
  caseSensitive: false
});
```

Then you are able to filter the fruits based on the text you type in the input box.
Enjoy.
