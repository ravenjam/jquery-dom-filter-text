# jquery-dom-filter-text
Filter DOM nodes based on text input values.

Example:
```
<ul id='fruits'>
  <li>Apple</li>
  <li>Banana</li>
  <li>Pear</li>
  <li>Orange</li>
  <li>Pitaya</li>
</ul>

var input = $("input[type='text']").domFilterText($('#fruits'));
```
Then you are able to filter the fruits based on the text you type in the input box.
Enjoy.
