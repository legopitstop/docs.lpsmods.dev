---
title: Markdown Flavor | Update Checker Documentation
description: Check to see if you have the latest version of a pack installed.
keywords: legopitstop,minecraft,website,updatechecker,updater,customizable,free,premium,json
---

# Markdown Flavor

Changelogs inside the JSON support [Markdown](https://www.markdownguide.org/). Powdered by [markedjs/marked](https://github.com/markedjs/marked). Since JSONS don't support line breaks you can instead add `\n` to define a line break or to enter down a line. This will come in handy because markdown needs it for formatting.

## Update Checker Markdown Support

| Element                                                                                                 | Support | Notes                                                                                                                             |
| ------------------------------------------------------------------------------------------------------- | :-----: | --------------------------------------------------------------------------------------------------------------------------------- |
| [Headings](https://www.markdownguide.org/basic-syntax#headings)                                         |   Yes   |                                                                                                                                   |
| [Paragraphs](https://www.markdownguide.org/basic-syntax/#paragraphs-1)                                  |   Yes   |                                                                                                                                   |
| [Line breaks](https://www.markdownguide.org/basic-syntax/#line-breaks)                                  |   Yes   |                                                                                                                                   |
| [Bold](https://www.markdownguide.org/basic-syntax#bold)                                                 |   Yes   |                                                                                                                                   |
| [Italic](https://www.markdownguide.org/basic-syntax#italic)                                             |   Yes   |                                                                                                                                   |
| [Blockquotes](https://www.markdownguide.org/basic-syntax#blockquotes-1)                                 |   Yes   | You can use >>> to create a multi-line blockquote. All text from the >>> to the end of the message will be included in the quote. |
| [Ordered Lists](https://www.markdownguide.org/basic-syntax#ordered-lists)                               |   Yes   |                                                                                                                                   |
| [Unordered Lists](https://www.markdownguide.org/basic-syntax#unordered-lists)                           |   Yes   |                                                                                                                                   |
| [Code](https://www.markdownguide.org/basic-syntax#code)                                                 |   Yes   |                                                                                                                                   |
| [Horizonal Rules](https://www.markdownguide.org/basic-syntax/#horizontal-rules)                         |   Yes   |                                                                                                                                   |
| [Links](https://www.markdownguide.org/basic-syntax/#links)                                              |   Yes   |                                                                                                                                   |
| [Images](https://www.markdownguide.org/basic-syntax/#images-1)                                          |   Yes   |                                                                                                                                   |
| [Tables](https://www.markdownguide.org/extended-syntax/#tables)                                         |   Yes   |                                                                                                                                   |
| [Fenced Codeblocks](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks)                  |   Yes   |                                                                                                                                   |
| [Syntax Highlighting](https://www.markdownguide.org/extended-syntax/#syntax-highlighting)               |   No    |                                                                                                                                   |
| [Footnotes](https://www.markdownguide.org/extended-syntax/#footnotes)                                   |   No    |                                                                                                                                   |
| [Heading ID's](https://www.markdownguide.org/extended-syntax/#heading-ids)                              |   No    |                                                                                                                                   |
| [Definition Lists](https://www.markdownguide.org/extended-syntax/#definition-lists)                     |   No    |                                                                                                                                   |
| [Strikethrough](https://www.markdownguide.org/extended-syntax/#strikethrough)                           |   Yes   | Two tildes (`~~word~~`) only.                                                                                                     |
| [Task Lists](https://www.markdownguide.org/extended-syntax/#task-lists)                                 |   Yes   |                                                                                                                                   |
| [Emoji (copy and paste)](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji)      |   Yes   |                                                                                                                                   |
| [Emoji (shortcpdes)](https://www.markdownguide.org/extended-syntax/#using-emoji-shortcodes)             |   No    |                                                                                                                                   |
| [Automatic URL Linking](https://www.markdownguide.org/extended-syntax/#automatic-url-linking)           |   Yes   |                                                                                                                                   |
| [Disabling URL Linking](https://www.markdownguide.org/extended-syntax/#disabling-automatic-url-linking) |   No    | Becomes inline code                                                                                                               |
| [HTML](https://www.markdownguide.org/basic-syntax/#html)                                                |   Yes   |                                                                                                                                   |
