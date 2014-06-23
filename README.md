# bootstrap3-lightbox

Bootstrap 3 Lightbox from [ashleydw](https://github.com/ashleydw/lightbox) packaged for Meteor.js


## To install

```sh
$ mrt add bootstrap3-lightbox
```

## Usage via data attributes

Set up your markup as in the example below. I use it primarily for images so the example reflects that.

```html
<template name="temName">
.
.
.
<a href="path-to-large-image" data-toggle="lightbox">
  <img src="path-to-thumbnail" alt="alt-text" class="img-responsive" />
</a>
.
.
.
</template>
```

## Usage via JavaScript

```html
<template name="temName">
.
.
.
<a href="path-to-large-image" id="my-lightbox">
  <img src="path-to-thumbnail" alt="alt-text" class="img-responsive" />
</a>
.
.
.
</template>
```

Using jQuery initiate the control as datetime picker after the template has been rendered.

```js
Template.tempName.rendered = function() {
    $('#my-lightbox').ekkoLightbox(options);
}
```
For more details please visit the [original author's GitHub page](http://ashleydw.github.io/lightbox/).
