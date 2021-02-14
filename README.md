# Reproduction

`npx @11ty/eleventy --serve`

Open in browser

Notice the text on the page that says "Image should be here" there should be an image below

The image is rendered using an async shortcode but its not working

I have a include inside an if statement (dummy for demonstration)
the same happens with for loops as well

nested-partial.njk
```
{% if true %}
{% include "image.njk" %}
{% endif %}
```