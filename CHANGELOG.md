# Changes to embellish.css

## 6.1.1 (April 04, 2021)

### Fixes

* Fix vertical alignment of `[type="radio"]` and `[type="checkbox"]` with their labels.
* Add distinction of `:focus` and `:focus-visible` for `<a>`.

## 6.1.0 (March 25, 2021)

### Features

* Reset `margin` for `<input>`, `<select>`, `<button>` and `<textarea>` in Safari.
* Set `background-color` to white for some rare browser which does not have that default.
* Increase size of `[type="checkbox"]`, `[type="radio"]` and `range-thumb`.

### Fixes

* Fix focus style for `<a>`.

## 6.0.0 (February 05, 2021)

### Breaking Changes

* Remove support for `<dialog>`. Applied styling was not very significant and the element itself is not implemented by all browsers.
* Update styling of `<fieldset>` and `<legend>` to be closer to the default browser styling.

### Features
* Add `padding: 1.5em` and `white-space: pre-wrap` to `<pre><code></code></pre>` blocks.

## 5.0.0 (December 30, 2020)

### Breaking Changes

* Remove styling for `<caption>`. You can use a `<h3>` inside of the `<caption>` if you want to maintain the style.

## 4.0.1 (July 30, 2020)

### Fixes

* Add `height: auto` for `img`. Now Images with a height property will be rendered correct if the viewport width is smaller than the width of the Image.

## 4.0.0 (June 04, 2020)

### Breaking Changes

* Styles all types of text form inputs
* Removes most `:not` selectors and addresses all inputs by `type` attr
* Update style of `select[multiple]` and `select[size]`
* Independent CSS Classes for `select` and `textarea`

### Features

* Add style for `optgroups`
* Add style for `input[type="submit"]` and `input[type="reset"]`

## 3.0.0 (March 23, 2020)

### Breaking Changes

* Add CHANGELOG.md

### Fixes

* Fix styling for `<table>` without `<thead>` or `<th>`
