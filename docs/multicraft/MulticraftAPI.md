---
title: MulticraftAPI | multicraft Documentation
description: Interact with your Minecraft server from hosts that use Multicraft using Python
keywords: legopitstop,python,minecraft,server,pypi,multicraft,minecraftserver,pythonpackage
---

# MulticraftAPI

## Parameters

| name         | type | default value                                                | description |
| ------------ | ---- | ------------------------------------------------------------ | ----------- |
| `url`        | str  |                                                              |             |
| `user`       | str  |                                                              |             |
| `key`        | str  |                                                              |             |
| `user_agent` | str  | `multicraft (https://github.com/legopitstop/multicraft-py/)` |             |

## Methods

### `set_user_agent`

Set the User-Agent string to be used for all requests.

#### Parameters

| Name  | Type | Description                               |
| ----- | ---- | ----------------------------------------- |
| `str` |      | A string specifying the User-Agent header |

### `get_current_user`

Get the current user

### `get_user_role`

Get the users role

#### Parameters

| Name        | Type | Description                                    |
| ----------- | ---- | ---------------------------------------------- |
| `user_id`   | int  | The id of the user to get                      |
| `server_id` | int  | The id of the server that this user belongs to |

### `set_user_role`

Sets the users role

#### Parameters

| Name        | Type | Description                                    |
| ----------- | ---- | ---------------------------------------------- |
| `user_id`   | int  | The id of the user to set                      |
| `server_id` | int  | The id of the server that this user belongs to |
| `role`      | Role | The role to set                                |

### `get_user_ftp_access`

Get the users ftp access

#### Parameters

| Name        | Type | Description                                    |
| ----------- | ---- | ---------------------------------------------- |
| `user_id`   | int  | The id of the user to get                      |
| `server_id` | int  | The id of the server that this user belongs to |

### `set_user_ftp_access`

Sets the users ftp access

#### Parameters

| Name        | Type | Description                                    |
| ----------- | ---- | ---------------------------------------------- |
| `user_id`   | int  | The id of the user to set                      |
| `server_id` | int  | The id of the server that this user belongs to |
| `mode`      | Mode | The mode to set                                |

### `get_user_id`

Get the users id from name

#### Parameters

| Name   | Type | Description          |
| ------ | ---- | -------------------- |
| `name` | str  | The name of the user |

### `get_own_api_key`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ``   |      |             |

### `list_players`

Get a list of all players

#### Parameters

| Name        | Type | Description          |
| ----------- | ---- | -------------------- |
| `server_id` | int  | The id of the server |

### `get_player`

Get the player from id

#### Parameters

| Name        | Type | Description                 |
| ----------- | ---- | --------------------------- |
| `player_id` | int  | The id of the player to get |

### `find_players`

Get player from field-value

#### Parameters

| Name        | Type      | Description          |
| ----------- | --------- | -------------------- |
| `server_id` | int       | The id of the server |
| `field`     | list[str] | The field to match   |
| `value`     | list[str] | The value to match   |

### `update_player`

Update this player

#### Parameters

| Name        | Type      | Description                    |
| ----------- | --------- | ------------------------------ |
| `player_id` | int       | The id of the player to update |
| `field`     | list[str] | The field to update            |
| `value`     | list[str] | The value to update            |

### `create_player`

Create a new player

#### Parameters

| Name         | Type | Description                                   |
| ------------ | ---- | --------------------------------------------- |
| `server_id`  | int  | The id of the server to create the player for |
| `name`       | str  | The name of the player to create              |
| `op_command` | int  | The op command, defaults to 0                 |

### `delete_player`

Remove a player

#### Parameters

| Name        | Type | Description                    |
| ----------- | ---- | ------------------------------ |
| `player_id` | int  | The id of the player to remove |

### `assign_player_to_user`

Assign a player to a user

#### Parameters

| Name        | Type | Description                    |
| ----------- | ---- | ------------------------------ |
| `player_id` | int  | The id of the player to assign |
| `user_id`   | int  | The id of the user to assign   |

### `list_commands`

Get a list of all commands

#### Parameters

| Name        | Type | Description          |
| ----------- | ---- | -------------------- |
| `server_id` | int  | The id of the server |

### `find_commands`

Get command from field-value

#### Parameters

| Name        | Type      | Description          |
| ----------- | --------- | -------------------- |
| `server_id` | int       | The id of the server |
| `field`     | list[str] | The field to match   |
| `value`     | list[str] | The value to match   |

### `get_command`

Get the command from id

#### Parameters

| Name         | Type | Description                  |
| ------------ | ---- | ---------------------------- |
| `command_id` | int  | The id of the command to get |

### `update_command`

Update this command

#### Parameters

| Name         | Type      | Description                     |
| ------------ | --------- | ------------------------------- |
| `command_id` | int       | The id of the command to update |
| `field`      | list[str] | The field to update             |
| `value`      | list[str] | The value to update             |

### `create_command`

Create a new command

#### Parameters

| Name        | Type | Description                                    |
| ----------- | ---- | ---------------------------------------------- | ------------------ |
| `server_id` | int  | The id of the server to create the command for |
| `name`      | str  | The name of the command                        |
| `role`      | Role | The role of the command                        |
| `chat`      | str  | The chat command to run                        |
| `response`  | str  | The response text                              |
| `run`       |      | str                                            | The command to run |

### `delete_command`

Remove a command

#### Parameters

| Name         | Type | Description                     |
| ------------ | ---- | ------------------------------- |
| `command_id` | int  | The id of the command to remove |

### `list_servers_by_owner`

Get a list of all servers that this user owns

#### Parameters

| Name      | Type | Description        |
| --------- | ---- | ------------------ |
| `user_id` | int  | The id of the user |

### `list_servers_by_connection`

### `update_server`

Update this server

#### Parameters

| Name        | Type      | Description                    |
| ----------- | --------- | ------------------------------ |
| `server_id` | int       | The id of the server to update |
| `field`     | list[str] | The field to update            |
| `value`     | list[str] | The value to update            |

### `start_server`

Start this server

#### Parameters

| Name        | Type | Description                   |
| ----------- | ---- | ----------------------------- |
| `server_id` | int  | The id of the server to start |

### `stop_server`

Stop this server

#### Parameters

| Name        | Type | Description                  |
| ----------- | ---- | ---------------------------- |
| `server_id` | int  | The id of the server to stop |

### `restart_server`

Restart this server

#### Parameters

| Name        | Type | Description                     |
| ----------- | ---- | ------------------------------- |
| `server_id` | int  | The id of the server to restart |

### `kill_server`

Kill this server

#### Parameters

| Name        | Type | Description                  |
| ----------- | ---- | ---------------------------- |
| `server_id` | int  | The id of the server to kill |

### `send_console_command`

Send this command to console

#### Parameters

| Name        | Type | Description                                 |
| ----------- | ---- | ------------------------------------------- |
| `server_id` | int  | The id of the server to send the command to |
| `command`   | str  | The command to run                          |

### `run_command`

Run a command from id

#### Parameters

| Name         | Type | Description                                                 |
| ------------ | ---- | ----------------------------------------------------------- |
| `server_id`  | int  | The id of the server that this command belongs to           |
| `command_id` | int  | The id of the command to run                                |
| `run_for`    | int  | The id of the player to run this command for, defaults to 0 |

### `clear_server_log`

Clear the server log history

#### Parameters

| Name        | Type | Description                       |
| ----------- | ---- | --------------------------------- |
| `server_id` | int  | The id of the server log to clear |

### `clear_server_chat`

Clear the server chat history

#### Parameters

| Name        | Type | Description                        |
| ----------- | ---- | ---------------------------------- |
| `server_id` | int  | The id of the server chat to clear |

### `get_server`

Get the server from id

#### Parameters

| Name        | Type | Description                 |
| ----------- | ---- | --------------------------- |
| `server_id` | int  | The id of the server to get |

### `get_server_status`

Get the server's status

#### Parameters

| Name          | Type | Description                                                                  |
| ------------- | ---- | ---------------------------------------------------------------------------- |
| `server_id`   | int  | The id of the server                                                         |
| `player_list` | bool | Whether or not it should include a list of online players, defaults to False |

### `get_server_log`

Get the server's log

#### Parameters

| Name        | Type | Description          |
| ----------- | ---- | -------------------- |
| `server_id` | int  | The id of the server |

### `get_server_chat`

Get the server's chat

#### Parameters

| Name        | Type | Description          |
| ----------- | ---- | -------------------- |
| `server_id` | int  | The id of the server |

### `get_server_resources`

Get the server's resources

#### Parameters

| Name        | Type | Description          |
| ----------- | ---- | -------------------- |
| `server_id` | int  | The id of the server |

### `list_schedules`

Get a list of all schedules

#### Parameters

| Name        | Type | Description          |
| ----------- | ---- | -------------------- |
| `server_id` | int  | The id of the server |

### `find_schedules`

Get schedule from field-value

#### Parameters

| Name        | Type      | Description          |
| ----------- | --------- | -------------------- |
| `server_id` | int       | The id of the server |
| `field`     | list[str] | The field to match   |
| `value`     | list[str] | The value to match   |

### `update_schedules`

Update this schedule

#### Parameters

| Name          | Type      | Description                      |
| ------------- | --------- | -------------------------------- |
| `schedule_id` | int       | The id of the schedule to update |
| `field`       | list[str] | The field to update              |
| `value`       | list[str] | The value to update              |

### `get_schedule`

Get the schedule from id

#### Parameters

| Name          | Type | Description                   |
| ------------- | ---- | ----------------------------- |
| `scheudle_id` | int  | The id of the schedule to get |

### `create_schedule`

Create a new schedule

#### Parameters

| Name        | Type              | Description                                                         |
| ----------- | ----------------- | ------------------------------------------------------------------- |
| `server_id` | int               | The id of the server to create the schedule for                     |
| `name`      | str               | The name of the schedule                                            |
| `ts`        | datetime.datetime | The datetime to run this schedule                                   |
| `command`   | int               | The id of the command to run for this schedule                      |
| `interval`  | int               | Time (in seconds) before it runs this schedule again, defaults to 0 |
| `status`    | ScheduleStatus    | The schedule's status, defaults to ScheduleStatus.scheduled         |
| `_for`      | int               | The player to run this schedule for, defaults to 0                  |

### `delete_schedule`

Remove a schedule

#### Parameters

| Name          | Type | Description                      |
| ------------- | ---- | -------------------------------- |
| `schedule_id` | int  | The id of the schedule to remove |

### `get_database_info`

Get info about the database

#### Parameters

| Name        | Type | Description                                   |
| ----------- | ---- | --------------------------------------------- |
| `server_id` | int  | The id of the server to get the database from |

### `create_database`

Create a new database (Limit of one database per server)

#### Parameters

| Name        | Type | Description                                                                   |
| ----------- | ---- | ----------------------------------------------------------------------------- |
| `server_id` | int  | The id of the server to create the database for                               |
| `name`      | str  | The name of the database (Autogenerated for some hosts), defaults to None     |
| `password`  | str  | The password of the database (Autogenerated for some hosts), defaults to None |

### `change_database_password`

Change the database password

#### Parameters

| Name          | Type | Description                                                                                              |
| ------------- | ---- | -------------------------------------------------------------------------------------------------------- |
| `server_id`   | int  | The id of the server that the database belongs to                                                        |
| `database_id` | int  | The id of the database (For some hosts this is the same as the server id), defaults to server_id if None |
| `password`    | str  | The new password for the database (Autogenerated for some hosts), defaults to None                       |

### `delete_database`

Remove a database

#### Parameters

| Name          | Type | Description                                                                                              |
| ------------- | ---- | -------------------------------------------------------------------------------------------------------- |
| `server_id`   | int  | The id of the server that this database belongs to                                                       |
| `database_id` | int  | The id of the database (For some hosts this is the same as the server id), defaults to server_id if None |

### `start_server_backup`

Starts a backup of the server

#### Parameters

| Name        | Type | Description                    |
| ----------- | ---- | ------------------------------ |
| `server_id` | int  | The id of the server to backup |

### `get_server_backup_status`

Get the backup status of the server

#### Parameters

| Name        | Type | Description          |
| ----------- | ---- | -------------------- |
| `server_id` | int  | The id of the server |
