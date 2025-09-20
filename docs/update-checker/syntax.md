---
title: Syntax | Update Checker Documentation
description: Check to see if you have the latest version of a pack installed.
---

# Syntax

| Name          | Type                    | Description                                                                          | Example Value              |
| ------------- | ----------------------- | ------------------------------------------------------------------------------------ | -------------------------- |
| `homepage`    | string                  | The link under homepage is the link the user will be shown when the mod is outdated. | `https://lpsmods.dev`      |
| `promos`      | [Promos](#promos)       | A map of minecraft versions that contain the recomdend or latest version             | `{"1.20-latest": "1.0.0"}` |
| `<mcversion>` | [MCVersion](#mcversion) |                                                                                      | `{"1.0.0": "changelog"}`   |

Additional Properties for premium users

| Name                  | Type                        | Description                                                                                                       |
| --------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `premium_badge`       | boolean                     | The premium badge is a diamond on the top left corner that users can click to see how to make their link premium. |
| `premium:description` | [description](#description) | The style description for the page.                                                                               |
| `premium:style`       | [style](#style)             | The style properties for the page.                                                                                |

## Promos

| Name          | Type       | Description                                                              | Example                    |
| ------------- | ---------- | ------------------------------------------------------------------------ | -------------------------- |
| `<mcversion>` | modversion | mcversion must end in `-recommended` ex: "1.13-recommended":"1.3.5-pre1" | `{"1.20-latest": "1.0.0"}` |

## MCVersion

| Name           | Type   | Description                                          | Example                 |
| -------------- | ------ | ---------------------------------------------------- | ----------------------- |
| `<modversion>` | string | The changelog for the modversion. Supports markdown! | `{"1.0.0":"changelog"}` |

## description

| Name      | Type                          | Description                                                                   |
| --------- | ----------------------------- | ----------------------------------------------------------------------------- |
| `title`   | string                        | The text that shows up in the tab view. Will add 'Update Checker' at the end. |
| `theme`   | string or [theme](#theme)     |                                                                               |
| `favicon` | string or [favicon](#favicon) | Choose one of the preset favicons to use or define your own.                  |

### theme

| Name        | Type                                | Description                                                                                                                    |
| ----------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`      | enum[url, preset, base64, animated] | The type to use. for type 'base64' you can use this [converter](https://emn178.github.io/online-tools/base64_encode_file.html) |
| `animation` | [animation](#animation)             | Create an animated background.                                                                                                 |
| `value`     | string                              | The value to use.                                                                                                              |

#### animation

| Name        | Type                    | Description                                            |
| ----------- | ----------------------- | ------------------------------------------------------ |
| `type`      | enum[scroll]            | The type of animation to use.                          |
| `speed`     | integer                 | The speed of the scrolling. In seconds                 |
| `direction` | [direction](#direction) | The direction the scrolling goes                       |
| `repeat`    | boolean                 | When true it will repeat the texture to fill the page. |
| `resize`    | boolean                 | When true it will resize the image to 256px squared    |

#### direction

| Name         |
| ------------ |
| `^`          |
| `v`          |
| `<`          |
| `>`          |
| `up`         |
| `down`       |
| `left`       |
| `right`      |
| `up-left`    |
| `up-right`   |
| `left-up`    |
| `right-up`   |
| `down-left`  |
| `down-right` |
| `left-down`  |
| `right-down` |

### favicon

| Name    | Type                                | Description                                                                                                              |
| ------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `type`  | enum[url, preset, base64, animated] | The type to use. for type 'base64' you can use this [converter](https://www.base64encoder.io/image-to-base64-converter/) |
| `value` | string                              | The value to use.                                                                                                        |

## style

| Name               | Type                                | Default | Description                   |
| ------------------ | ----------------------------------- | ------- | ----------------------------- |
| `color`            | string                              | #ffffff | The color for the text.       |
| `background_color` | string                              | #000000 | The color for the background. |
| `border_color`     | string                              | #000000 | The color for the borders.    |
| `border_radius`    | integer                             | 20      | The radius for the border     |
| `button`           | [Button Style](#button-style)       |         | Style for the button.         |
| `scrollbar`        | [Scrollbar Style](#scrollbar-style) |         | Style for the scrollbar.      |

### Button Style

| Name               | Type                                    | Default | Description                                       |
| ------------------ | --------------------------------------- | ------- | ------------------------------------------------- |
| `color`            | string                                  | #000000 | The color for the text.                           |
| `background_color` | string                                  | #777777 | The color for the background.                     |
| `border_radius`    | integer                                 | 10      | The radius for the border                         |
| `hoverEvent`       | [Button hoverEvent](#button-hoverevent) |         | Properties for the button when you hover over it. |

#### Button hoverEvent

| Name               | Type    | Default | Description                   |
| ------------------ | ------- | ------- | ----------------------------- |
| `color`            | string  | #000000 | The color for the text.       |
| `background_color` | string  | #555555 | The color for the background. |
| `border_radius`    | integer | 10      | The radius for the border     |

### Scrollbar Style

| Name     | Type                          | Description              |
| -------- | ----------------------------- | ------------------------ |
| `slider` | [Slider Style](#slider-style) | The style for the slider |
| `track`  | [Track Style](#track-style)   | The style for the track  |

#### Slider Style

| Name               | Type                                    | Default | Description                             |
| ------------------ | --------------------------------------- | ------- | --------------------------------------- |
| `background_color` | string                                  | #777777 | The color for the background.           |
| `border_radius`    | integer                                 | 10      | The radius for the border               |
| `hoverEvent`       | [Slider hoverEvent](#slider-hoverevent) |         | The style when hovering over the slider |

#### Track Style

| Name               | Type                                    | Default | Description                            |
| ------------------ | --------------------------------------- | ------- | -------------------------------------- |
| `background_color` | string                                  | #777777 | The color for the background.          |
| `border_radius`    | integer                                 | 10      | The radius for the border              |
| `hoverEvent`       | [Slider hoverEvent](#slider-hoverevent) |         | The style when hovering over the track |

#### Slider hoverEvent

| Name               | Type    | Default | Description                   |
| ------------------ | ------- | ------- | ----------------------------- |
| `background_color` | string  | #555555 | The color for the background. |
| `border_radius`    | integer | 10      | The radius for the border     |
