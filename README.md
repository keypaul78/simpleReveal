# simpleReveal
Simple js to reveal elements in viewport, on scroll-resize-load page events

Just add 'reveal' class to your element and if you need a delay time just add a 'data-dealy=1' (s) attribute to your element.

SimpleReveal use requestAnimationFrame, if you need a full support add to your page a [polyfill for RAF](https://gist.github.com/paulirish/1579671).

###### Simple
```
<div class="reveal"></div>
```

###### With Delay
In the example 1000 = 1s, element will be showed after 1s when comes in the viewport.
```
<div class="reveal" data-delay="1000"></div>
```


By default 'reveal' class switch to 'revealed' class, when element is in viewport, so the element will be showed with a opactiy transition (0 to 1) and a scale transition (0.9 to 1).

###### Reveal Classes
```
.reveal {
    opacity:0;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    transition: all 0.5s;
}
.revealed {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity:1;
}
```


## DEMO
Just scroll down
http://www.roughdesign.it/stage/simpleReveal/
