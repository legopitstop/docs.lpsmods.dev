---
title: Functions | UserFolder
description: This is a simple library that allows you to read, write and create files within your own folder inside the user folder `C:/User/USER/.python/PACKAGE_ID`
keywords: legopitstop,python,pypi,folder,easy,filemanagment,pythonpackage,userfolder
---

# Functions

## get_user

The root user. If not defined it will create a user

### Parameters

| Name     | Type | Description                                          |
| -------- | ---- | ---------------------------------------------------- |
| `create` | bool | If no user can be found create one, defaults to True |

## get_config

The root config. If not defined it will create the config

### Parameters

| Name     | Type | Description                                            |
| -------- | ---- | ------------------------------------------------------ |
| `create` | bool | If no config can be found create one, defaults to True |

## get_session_storage

The root session storage. If not defined it will create one

### Parameters

| Name     | Type | Description                                             |
| -------- | ---- | ------------------------------------------------------- |
| `create` | bool | If no storage can be found create one, defaults to True |

## get_cache

The root cache. If not defined it will create one.

### Parameters

| Name     | Type | Description                                           |
| -------- | ---- | ----------------------------------------------------- |
| `create` | bool | If no cache can be found create one, defaults to True |

## get_local_storage

The root local storage. If not defined it will create one

### Parameters

| Name     | Type | Description                                             |
| -------- | ---- | ------------------------------------------------------- |
| `create` | bool | If no storage can be found create one, defaults to True |
