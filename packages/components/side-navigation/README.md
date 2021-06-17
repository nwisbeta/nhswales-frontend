# Side Navigation

## Guidance
<!-- TODO: Add guidance -->
Find out more about the Side Navigation component and when to use it in the[NHS digital service manual] 

## Quick start example

<!-- TODO: Add preview -->
[Preview the Side Navigation component]

### HTML markup

```html
<div class="nhsuk-side-navigation-container" >
  {{ sideNavigation({
    items: [
      { id: "about" },
      { id: "features" }
    ]
  }) }}
  <div class="nhsuk-side-navigation-options">
    <ul class="nhsuk-side-navigation__list">
      <li class="nhsuk-side-navigation__item">
        <a class="nhsuk-side-navigation__link" href="#about">About</a>
      </li>
      <li class="nhsuk-side-navigation__item">
        <a class="nhsuk-side-navigation__link" href="#features">Features</a>
      </li>
    </ul>
  </div>

  <div class="nhsuk-side-navigation__sections">
    <section class="nhsuk-side-navigation__section" id="about">
      <h2>About</h2>
      <p>Lorem ipsum dolor...</p>
    </section>
    <section class="nhsuk-side-navigation__section" id="features">
      <h2>Features</h2>
      <p>Lorem ipsum ...</p>
    </section>
  </div>
</div>
```

### Nunjucks macro

```html
{% from 'components/side-navigation/macro.njk' import sideNavigation %}

<div class="nhsuk-side-navigation-container" >
  {{ sideNavigation({
    items: [
      { id: "about" },
      { id: "features" }
    ]
  }) }}

  <div class="nhsuk-side-navigation__sections">
    <section class="nhsuk-side-navigation__section" id="about">
      <h2>About</h2>
      <p>Lorem ipsum dolor...</p>
    </section>
    <section class="nhsuk-side-navigation__section" id="features">
      <h2>Features</h2>
      <p>Lorem ipsum ...</p>
    </section>
  </div>
</div>
```

### Nunjucks arguments

The Side Navigation Nunjucks macro takes the following arguments:

| Name                    | Type     | Required  | Description  |
| ------------------------|----------|-----------|--------------|
| **items**               | array    | Yes       | Array of items in the Side Navigation. |
| **items.[].id**       | string   | Yes       | Id value of a section to point to. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
