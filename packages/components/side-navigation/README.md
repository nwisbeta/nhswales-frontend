# Side Navigation

## Guidance
<!-- TODO: Add guidance -->
Find out more about the Side Navigation component and when to use it in the[NHS digital service manual] 

## Quick start example

<!-- TODO: Add preview -->
[Preview the Side Navigation component]

### HTML markup

```html
<nav class="nhsuk-side-navigation" role="navigation" aria-label="Pages in this guide">
  <h2 class="nhsuk-u-visually-hidden">Side Navigation</h2>
  <ol class="nhsuk-side-navigation__list">
    <li class="nhsuk-side-navigation__item" aria-current="page">
      <span class="nhsuk-side-navigation__current">What is AMD?</span>
    </li>
    <li class="nhsuk-side-navigation__item">
      <a class="nhsuk-side-navigation__link" href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/symptoms/">Symptoms</a>
    </li>
    <li class="nhsuk-side-navigation__item">
      <a class="nhsuk-side-navigation__link" href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/getting-diagnosed/">Getting diagnosed</a>
    </li>
    <li class="nhsuk-side-navigation__item">
      <a class="nhsuk-side-navigation__link" href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/treatment/">Treatments</a>
    </li>
    <li class="nhsuk-side-navigation__item">
      <a class="nhsuk-side-navigation__link" href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/living-with-amd/">Living with AMD</a>
    </li>
  </ol>
</nav>
```

### Nunjucks macro

```
{% from 'components/side-navigation/macro.njk' import sideNavigation %}

{{ sideNavigation({
  items: [
    {
      href: "https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/",
      text: "What is AMD?"
    },
    {
      href: "https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/symptoms/",
      text: "Symptoms"
    },
    {
      href: "https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/getting-diagnosed/",
      text: "Getting diagnosed"
    }
    ,
    {
      href: "https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/treatment/",
      text: "Treatments"
    }
    ,
    {
      href: "https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/living-with-amd/",
      text: "Living with AMD"
    }
  ]
}) }}
```

### Nunjucks arguments

The Side Navigation Nunjucks macro takes the following arguments:

| Name                    | Type     | Required  | Description  |
| ------------------------|----------|-----------|--------------|
| **items**               | array    | Yes       | Array of items in the Side Navigation. |
| **items.[].href**       | string   | Yes       | Href value of an item in the Side Navigation. |
| **items.[].text**       | string   | Yes       | Text value of an item in the Side Navigation. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
