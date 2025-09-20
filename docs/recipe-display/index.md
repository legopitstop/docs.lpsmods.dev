---
title: Recipe Display Documentation
description: Easily create a webpage that will display all your recipes!
---

# Recipe Display

Easily create a webpage that will display all your recipes!

## Links

- <Icon name="home" /> [Website](https://legopitstop.github.io/Minecraft-Recipe-Display/)
- <Icon name="code" /> [Source Code](https://github.com/legopitstop/Minecraft-Recipe-Display)

## Getting Started

1. First you must create a JSON file that will contain all the recipes. [read more](syntax.md)
1. Now you need to upload the JSON file and all its resources to GitHub or your website of choice.
1. Get the JSON url from the place that you uploaded the JSON to. Make sure it is just the raw data/file. The url will usually end in `.json`
1. Finally go to the [main page](https://legopitstop.github.io/Minecraft-Recipe-Display/index.html). at the end of the url add `?json=<JSON URL>`, but replace `<JSON URL>` with the url from the step above. Example full url: `https://legopitstop.github.io/Minecraft-Recipe-Display/index.html?json=./examples/recipes.json`
1. Refresh the tab with the new url to see your loaded recipes.

## Debugging

If there is any syntax errors with the JSON use developer tools, press `F12`, and navigate to the "Console" tab. If there is any issues they will be in red or yellow.
