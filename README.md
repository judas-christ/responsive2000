# Breaks 2000

> A simple responsive elements script. Inspired by https://github.com/kumailht/responsive-elements but simpler and without any dependencies.

## Usage

Add breakpoints to responsive elements

```html
<div data-breaks="320,480,768,1280">...</div>
```

Add CSS styles for the sizes

```css
.\>320 {
	background-color: peachpuff;
}

.\>768 {
	background-color: aliceblue;
}
```

Add breaks2000 script to page

```html
<script src="https://unpkg.com/breaks2000"></script>
```

or if you prefer to self-host

```html
<script src="/path/to/breaks2000.min.js"></script>
```

Call initialization function on page load

```js
breaks2000.init();
```

When adding elements to page call

```js
breaks2000.update();
```

If, for some reason, breaks2000 has to be deactivated on a page call

```js
breaks2000.uninit();
```

## Browser support

Modern browsers and optionally IE8.

## Change Log

### 2.3.0

* UMD bundle
* unpkg CDN example

### 2.2.0

* ES6 module support
* CJS module support

### 2.1.2

* Bower support

### 2.1.1

* Bugfixes

### 2.1.0

* Added optional `uninit()` function for removing breaks2000.

### 2.0.0

* Class names changed from `gt-[size]`/`lt-[size]` to `>[size]`/`<[size]`. *This is a breaking change from 1.0.0*

## License

Released under MIT License.
