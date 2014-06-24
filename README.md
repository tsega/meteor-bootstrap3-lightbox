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

Then delegate calls to `data-toggle="lightbox"`. I'm suprised that this needed. Normally, I would put this code in the `rendered` template helper method but because of the way the new [Blaze templating engine works](https://github.com/meteor/meteor/wiki/Using-Blaze#rendered-callback-only-fires-once), this method will not be called everytime. However, adding a normal client side script does the job. So create a new JavaScript file, e.g. `client/js/client.js` and add the following.

```javascript
$(document).ready(function ($) {
    // delegate calls to data-toggle="lightbox"
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox();
    });
});
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

Create a new JavaScript file, e.g. `client/js/client.js` and add the following.

```js
$(document).ready(function ($) {
    // delegate calls to data-toggle="lightbox"
    $(document).delegate('#my-lightbox', 'click', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox();
    });
});
```
The only difference between the two approaches above is the selector that's being used to delegate the click event. For more details please visit the [original author's GitHub page](http://ashleydw.github.io/lightbox/).
