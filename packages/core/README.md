# Core

Core contains all the building blocks (page layout and the responsive grid) and fundamental styles (such as colours and typography) needed for NHS websites and services. These styles are required for all of the components to work.

Core also is the home of powerful `sass` features such as variables, mixins, functions and maps.

## Page layout

### Fixed-width container

```html
<div class="nhsuk-width-container">
  <main class="nhsuk-main-wrapper" id="maincontent">
    <!-- Grid items -->
  </main>
</div>
```

### Fluid-width container

```html
<div class="nhsuk-width-container-fluid">
  <main class="nhsuk-main-wrapper" id="maincontent">
    <!-- Grid items -->
  </main>
</div>
```

## Grid items

### Full width

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-full">
    <!-- Component -->
  </div>
</div>
```

### Three-quarters

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-three-quarters">
    <!-- Component -->
  </div>
</div>
```

### One-half

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-one-half">
    <!-- Component -->
  </div>
</div>
```

### Two-thirds

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">
    <!-- Component -->
  </div>
</div>
```

### One-third

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-one-third">
    <!-- Component -->
  </div>
</div>
```

### One-quarter

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-one-quarter">
    <!-- Component -->
  </div>
</div>
```

### Nested grid items

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">
    <!-- Component -->
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-one-half">
        <!-- Component -->
      </div>
      <div class="nhsuk-grid-column-one-half">
        <!-- Component -->
      </div>
    </div>

  </div>
</div>
```

### Example page layout

```html
<!-- Header -->
<div class="nhsuk-width-container">
  <main class="nhsuk-main-wrapper" id="maincontent">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-three-quarters">
        <!-- Components -->
      </div>
    </div>
  </main>
</div>
<!-- Footer -->
```

## Utilities

### Clearfix

Automatically clear an elements child elements.

```html
<div class="nhsuk-u-clear"></div>
```

### Bold font weight

```html
<p class="nhsuk-u-font-weight-bold"></p>
```

### Grid overrides

By default all grid elements will go to 100% width on screen sizes below tablet. These utilities can force
custom widths on all screen sizes.

```
nhsuk-u-[grid-size]
```

```html
<div class="nhsuk-grid-column-one-half nhsuk-u-one-half"></div>
```

### Normal font weight

```html
<p class="nhsuk-u-font-weight-normal"></p>
```

### Secondary text colour

```html
<p class="nhsuk-u-secondary-text-color"></p>
```

### Reading width

Add a maximum width to large pieces of content, to improve readability. 

```html
<div class="nhsuk-u-reading-width">
  <!-- Component -->
</div
```

### Remove top and bottom margins

```html
<h1 class="nhsuk-u-top-and-bottom"></h1>
```

### Spacing overrides

```html
class="nhsuk-u-margin-[direction]-[spacing]"
```

#### Remove bottom margin

```html
<h1 class="nhsuk-u-margin-bottom-0"></h1>
```

#### Remove all margins

```html
<h1 class="nhsuk-u-margin-0"></h1>
```

#### Custom margins

```html
<h1 class="nhsuk-u-margin-top-1"></h1>
```

### Prevent text wrapping

Prevent long anchor links from line breaking on smaller screens.

```html
<a class="nhsuk-u-nowrap"></a>
```

### Visually hidden

Hide elements visually but keep it in the DOM, useful for screen readers.

```html
<span class="nhsuk-u-visually-hidden"></span>
```

## Typography

### Lede text

```html
<h1>Live Well</h1>
<p class="nhsuk-lede-text">Advice, tips and tools to help you make the best choices about your health and wellbeing.</p>
```

### Font

The NHS Wales font should actually be Agency, but we don't have an easy way to distribute it, so we use Roboto instead.

## Breakpoints

```
mobile: 320px
tablet: 641px
desktop: 769px
large-desktop: 990px
```

### Media queries (using [sass-mq](https://github.com/sass-mq/sass-mq))

`mq()` is a Sass mixin that helps you compose media queries in an elegant way.

`mq()` takes up to three optional parameters:

- `$from`: inclusive `min-width` boundary
- `$until`: exclusive `max-width` boundary
- `$and`: additional custom directives

```scss
.responsive {
  // Apply styling to mobile and upwards
  @include mq($from: mobile) {
    color: red;
  }
  // Apply styling up to devices smaller than tablets (exclude tablets)
  @include mq($until: tablet) {
    color: blue;
  }
  // Same thing, in landscape orientation
  @include mq($until: tablet, $and: '(orientation: landscape)') {
    color: green;
  }
  // Apply styling to print media
  @include mq($media-type: print) {
    color: orange;
  }
}
```

## Colour variables

### Primary

```scss
$color_nhswales-blue: #2C3E72;
$color_nhswales-white: #ffffff;
$color_nhswales-black: #262626;
$color_nhswales-aqua: #0D91BD;
$color_nhswales-red: #da291c;
$color_nhswales-yellow: #F8CA4D;
$color_nhswales-purple: #663488;
```

### Secondary

```scss
$color_nhsuk-pale-yellow: #fff9c4;
$color_nhsuk-warm-yellow: #F8CA4D;
$color_nhsuk-aqua-green: #00A499;
```

### Greyscale

```scss
$color_nhswales-grey-1: #616061;
$color_nhswales-grey-2: #BEC3D3;
$color_nhswales-grey-3: #D3D6E1;
$color_nhswales-grey-4: #E8EAEF;
$color_nhswales-grey-5: #FBF9F9;
```
