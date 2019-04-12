A GSK icon implementation using [Material Design Components](https://material.io/components/) and [Web Components](https://www.webcomponents.org/introduction).

## Icon Code Sources

Base
https://github.com/AuthX/material-components-web-components/blob/develop/packages/icon/src/mwc-icon.ts

GSK Customization
https://github.com/gsk-tech/one-platform-web-components/blob/docs/packages/icon/src/gsk-one-icon-module.ts


## How to Use

### Installation

#### Getting started

* When you're ready to use gsk-one-icon in a project, install it via [npm](https://www.npmjs.com/). To run the project in the browser, a module-compatible toolchain is required. 

  1. Ensure the webcomponents polyfills are included in your HTML page

      - Install webcomponents polyfills

          ```npm i @webcomponents/webcomponentsjs```

      - Add webcomponents polyfills to your HTML page

          ```html 
          <script src="@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
          ```

  1. Add gsk-one-icon to your project:
  
      - Install via NPM

        ```npm i @gsk-platforms/gsk-one-icon```

      - Import the gsk-one-icon definition into your HTML page:

        ```html
        <script type="module" src="@gsk-platforms/gsk-one-icon/gsk-one-icon-module"></script>
        ```

      - Or into your module script:

        ```js
        import "@gsk-platforms/gsk-one-icon/gsk-one-icon-module"
        ```
        
  1. Use the icon in your project
        
        ```>
        ```

### Variants

# Variants

There are no variants available to use currently. 

 


For demo's on how to use the gsk-one-icon, see the icon sample page [here](../demo/demo.html) or run the project on your local machine, <http://localhost:8090/#icon>. 

### Styles

# Styling

The GSK Web Components use CSS variables to reach through the shadow root of the element to be able to style your gsk-one-icon the way you want to. Learn more about CSS Variables [here](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).

We follow the [Material Theming](https://material.io/design/material-theming/overview.html) pattern with all of the GSK components.

## Overriding your theme

In order to override the default values that are preset, you can include them within 2 style tags. See below for an example.

```html
<style>
	
    :host {
        --gsk-theme-primary: ##362bff;
        --gsk-theme-on-primary: #FFFFFF;
    }

</style>
```

In the example, you can see that the GSK Theme Primary and GSK Theme On Primary variables being overridden and applied at the root level of the component. You can also override the styling from within your styling language of choice by calling the :host selector. The :host selector selects the shadow host of the shadow DOM. See more documentation on the MDN web docs [here](<https://developer.mozilla.org/en-US/docs/Web/CSS/:host()>).



### Events




## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Icon**(): [Icon](_gsk_one_icon_module_.icon.md)

*Overrides UpdatingElement.__constructor*

*Defined in [gsk-one-icon-module.ts:17](https://github.com/gsk-tech/one-platform-web-components/blob/d71a5e8/packages/icon/src/gsk-one-icon-module.ts#L17)*

**Returns:** [Icon](_gsk_one_icon_module_.icon.md)

___

## Properties



___

## Accessors

<a id="styles"></a>

### `<Static>` styles

**get styles**(): `CSSResult`

*Overrides Icon.styles*

*Defined in [gsk-one-icon-module.ts:12](https://github.com/gsk-tech/one-platform-web-components/blob/d71a5e8/packages/icon/src/gsk-one-icon-module.ts#L12)*

**Returns:** `CSSResult`

___

## Methods

<a id="createrenderroot"></a>

###  createRenderRoot

▸ **createRenderRoot**(): `ShadowRoot`

*Inherited from Icon.createRenderRoot*

**Returns:** `ShadowRoot`

___

<a id="render-1"></a>

###  render

▸ **render**(): `TemplateResult`

*Inherited from Icon.render*

**Returns:** `TemplateResult`

___

<h2></h2>
Authored by GSK

To Author these docs, explore here
https://material-components.github.io/material-components-web-catalog/#/
