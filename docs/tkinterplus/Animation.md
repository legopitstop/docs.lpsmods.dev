---
title: Animation Class | TkinterPlus Documentation
description: TkinterPlus is a Python UI library that adds more widgets to Tkinter
---

# Animation Class

Universal tkinter animations for Widgets, and Canvas items

## Parameters

| Name      | Type           | Description                                                   |
| --------- | -------------- | ------------------------------------------------------------- |
| `widget`  | tkinter.Widget | The widget to bind the animation to.                          |
| `TagOrId` | str            | The tkinter.Canvas item tag or id. WIDGET must be the canvas. |

## Methods

- [hide](#hide)
- [show](#show)
- [toggle](#toggle)
- [animate](#animate)
- [clear_queue](#clear_queue)
- [delay](#delay)
- [dequeue](#dequeue)
- [finish](#finish)
- [queue](#queue)
- [stop](#stop)
- [fade_in](#fade_in)
- [fade_out](#fade_out)
- [fade_to](#fade_to)
- [fade_toggle](#fade_toggle)
- [slide_down](#slide_down)
- [slide_up](#slide_up)
- [slide_toggle](#slide_toggle)

### `hide`

Hide the matched widgets.

#### Parameters

| Name          | Type     | Description                                                                            |
| ------------- | -------- | -------------------------------------------------------------------------------------- |
| `duration`    | int      | A string or number determining how long the animation will run.                        |
| `easing`      | str      | A string indicating which easing function to use for the transition.                   |
| `donecommand` | Callable | A function to call once the animation is donecommand, called once per matched element. |

### `show`

Display the matched widgets.

#### Parameters

| Name          | Type     | Description                                                                            |
| ------------- | -------- | -------------------------------------------------------------------------------------- |
| `duration`    | int      | A string or number determining how long the animation will run.                        |
| `easing`      | str      | A string indicating which easing function to use for the transition.                   |
| `donecommand` | Callable | A function to call once the animation is donecommand, called once per matched element. |

### `toggle`

Display or hide the matched widgets.

#### Parameters

| Name          | Type     | Description                                                                            |
| ------------- | -------- | -------------------------------------------------------------------------------------- |
| `duration`    | int      | A string or number determining how long the animation will run.                        |
| `easing`      | str      | A string indicating which easing function to use for the transition.                   |
| `donecommand` | Callable | A function to call once the animation is donecommand, called once per matched element. |

### `animate`

Perform a custom animation of a set of CSS kw.

#### Parameters

| Name              | Type     | Description                                                                            |
| ----------------- | -------- | -------------------------------------------------------------------------------------- |
| `duration`        | int      | A string or number determining how long the animation will run.                        |
| `easing`          |          | A string indicating which easing function to use for the transition.                   |
| `queue`           | bool     |                                                                                        |
| `stepcommand`     | Callable |                                                                                        |
| `progresscommand` | Callable |                                                                                        |
| `donecommand`     | Callable | A function to call once the animation is donecommand, called once per matched element. |

### `clear_queue`

Remove from the queue all iteduration that have not yet been run.

#### Parameters

| Name   | Type | Description                                                                            |
| ------ | ---- | -------------------------------------------------------------------------------------- |
| `name` | str  | A string containing the name of the queue. Defaults to fx, the standard effects queue. |

### `delay`

Set a timer to delay execution of subsequent iteduration in the queue.

#### Parameters

| Name       | Type | Description                                                                                        |
| ---------- | ---- | -------------------------------------------------------------------------------------------------- |
| `duration` | int  | An integer indicating the number of milliseconds to delay execution of the next item in the queue. |
| `name`     | str  | A string containing the name of the queue. Defaults to fx, the standard effects queue.             |

### `dequeue`

Execute the next function on the queue for the matched widgets.

#### Parameters

| Name   | Type | Description                                                                            |
| ------ | ---- | -------------------------------------------------------------------------------------- |
| `name` | str  | A string containing the name of the queue. Defaults to fx, the standard effects queue. |

### `finish`

Stop the currently-running animation, remove all queued animations, and donecommand all animations for the matched widgets.

#### Parameters

| Name    | Type | Description                                        |
| ------- | ---- | -------------------------------------------------- |
| `queue` | str  | The name of the queue in which to stop animations. |

### `queue`

Show or manipulate the queue of functions to be executed on the matched widgets.

#### Parameters

| Name   | Type | Description                                                                            |
| ------ | ---- | -------------------------------------------------------------------------------------- |
| `name` | str  | A string containing the name of the queue. Defaults to fx, the standard effects queue. |

### `stop`

Stop the currently running animation on the matched widgets.

#### Parameters

| Name          | Type | Description                                                                                       |
| ------------- | ---- | ------------------------------------------------------------------------------------------------- |
| `stop_queue`  | bool | A Boolean indicating whether to remove queued animation as well. Defaults to false.               |
| `jump_to_end` | bool | A Boolean indicating whether to donecommand the current animation immediately. Defaults to false. |

### `fade_in`

Display the matched widgets by fading them to opaque.

#### Parameters

| Name          | Type     | Description                                                                                                               |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| `duration`    | int      | A string or number determining how long the animation will run.                                                           |
| `easing`      | str      | A string indicating which easing function to use for the transition.                                                      |
| `donecommand` | Callable | A function to call once the animation is donecommand, called once per matched element.                                    |
| `queue`       | bool     | A Boolean indicating whether to place the animation in the effects queue. If false, the animation will begin immediately. |

### `fade_out`

Hide the matched widgets by fading them to transparent.

#### Parameters

| Name          | Type     | Description                                                                                                               |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| `duration`    | int      | A string or number determining how long the animation will run.                                                           |
| `easing`      | str      | A string indicating which easing function to use for the transition.                                                      |
| `donecommand` | Callable | A function to call once the animation is donecommand, called once per matched element.                                    |
| `queue`       | bool     | A Boolean indicating whether to place the animation in the effects queue. If false, the animation will begin immediately. |

### `fade_to`

Adjust the opacity of the matched widgets.

#### Parameters

| Name          | Type     | Description                                                                            |
| ------------- | -------- | -------------------------------------------------------------------------------------- |
| `opacity`     | float    | A number between 0 and 1 denoting the target opacity.                                  |
| `duration`    | int      | A string or number determining how long the animation will run.                        |
| `easing`      | str      | A string indicating which easing function to use for the transition.                   |
| `donecommand` | Callable | A function to call once the animation is donecommand, called once per matched element. |

### `fade_toggle`

Display or hide the matched widgets by animating their opacity.

#### Parameters

| Name          | Type     | Description                                                                                                               |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| `duration`    | int      | A string or number determining how long the animation will run.                                                           |
| `easing`      | str      | A string indicating which easing function to use for the transition.                                                      |
| `donecommand` | Callable | A function to call once the animation is donecommand, called once per matched element.                                    |
| `queue`       | bool     | A Boolean indicating whether to place the animation in the effects queue. If false, the animation will begin immediately. |

### `slide_down`

Display the matched widgets with a sliding motion.

#### Parameters

| Name          | Type     | Description                                                                                                               |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| `duration`    | int      | A string or number determining how long the animation will run.                                                           |
| `easing`      | str      | A string indicating which easing function to use for the transition.                                                      |
| `donecommand` | Callable | A function to call once the animation is donecommand, called once per matched element.                                    |
| `queue`       | bool     | A Boolean indicating whether to place the animation in the effects queue. If false, the animation will begin immediately. |

### `slide_up`

Hide the matched widgets with a sliding motion.

#### Parameters

| Name          | Type     | Description                                                                                                               |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| `duration`    | int      | A string or number determining how long the animation will run.                                                           |
| `easing`      | str      | A string indicating which easing function to use for the transition.                                                      |
| `donecommand` | Callable | A function to call once the animation is donecommand, called once per matched element.                                    |
| `queue`       | bool     | A Boolean indicating whether to place the animation in the effects queue. If false, the animation will begin immediately. |

### `slide_toggle`

Display or hide the matched widgets with a sliding motion.

#### Parameters

| Name          | Type     | Description                                                                                                               |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| `duration`    | int      | A string or number determining how long the animation will run.                                                           |
| `easing`      | str      | A string indicating which easing function to use for the transition.                                                      |
| `donecommand` | Callable | A function to call once the animation is donecommand, called once per matched element.                                    |
| `queue`       | bool     | A Boolean indicating whether to place the animation in the effects queue. If false, the animation will begin immediately. |
