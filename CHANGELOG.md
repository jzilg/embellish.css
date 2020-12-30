# Changes to embellish.css

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
