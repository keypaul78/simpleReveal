# simpleReveal
Simple js to reveal element in viewport, on scroll-resize-load page events

Just add 'reveal' class to your element and if you need a delay time just add a 'data-dealy=1' (s) attribute to your element.

SIMPLE
```
<div class="reveal"></div>
```

WITH DELAY (in the example 1 = 1s)
```
<div class="reveal" data-delay="1"></div>
```


By default 'reveal' class switch to 'revealed' class, when element is in viewport, so the element will be showed with a opactiy transition (0 to 1) and a scale transition (0.9 to 1).
