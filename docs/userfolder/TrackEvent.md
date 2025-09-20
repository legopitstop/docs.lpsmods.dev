---
title: TrackEvent | UserFolder Documentation
description: This is a simple library that allows you to read, write and create files within your own folder inside the user folder `C:/User/USER/.python/PACKAGE_ID`
---

# TrackEvent

The track event returned by trackcommand

## Parameters

| Name     | Type            | Description                 |
| -------- | --------------- | --------------------------- |
| `member` | zipfile.ZipInfo | The Zip.Info or filename    |
| `count`  | int             | The current member of total |
| `total`  | int             | The total number of members |
