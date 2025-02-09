---
sidebar_position: 2
---

# Remote Whitelist

Remote whitelists use VRChat's string downloading API to download and parse a text file containing display names.  
The whitelist needs to be provided the URL to download from, and it can be set to download on world start and at a regular interval to refresh the list.

Remote whitelists can be programmatically requested to update.  The optional access control field on the object is used to 
control this access.  It does not indicate which access control object is using the data in the remote whitelist.

Remote whitelists can be pre-populated with a list of display names, similar to the build-in whitelist in the main access control object.  
This list is replaced by the downloaded data when it's successfully pulled.

The object is setup to be able to parse multiple formats of display names.

## Configuration

![Static whitelist inspector window](/img/unity/access-remote-whitelist-prefab.png)

### Remote Loading

#### Remote Source

> The remote data source for this whitelist.  Supported sources are:
> * **URL**: The remote whitelist downloads its data directly from a URL.
> * **Remote List**: The remote whitelist receives its data from another remote whitelist.

#### Remote String URL

> A URL to the remote endpoint that will provide the expected text data.
> Only applicable if `Remote Source` is set to `URL`.

#### Remote User List

> Another remote user list object.  This remote list will subscribe to any data downloads received by the referenced list.
> Only applicable if `Remote Source` is set to `Remote List`.

#### Remote String Format

> The expected format of the downloaded text.  The currently supported formats are:
> * **Newline**: The entire response a list of display names with each name on its own line.
> * **JSON Array**: The response is a complex JSON structure containing an array of display names or data objects.  Selecting this format enabled additional options for locating the names within the document.

#### JSON Object Path

> When the remote string format is **JSON Array**, the object path tells the whitelist where the relevant array is within the object hierarchy.
> Multiple levels are separated by a forward slash `/`.
> 
> Leave this field blank if the top-level item in the JSON document is the target array.

#### JSON Entry Path

> When the remote string format is **JSON Array**, the entry path tells the whitelist how to find a display name that's nested within an object hierarchy.
> This can be used to parse a response where an array of complex objects is returned, and the display name is a field within each object.
>
> Leave this field blank if the target array is an array of strings containing display names.

### Validation

#### Data Validator

> An optional [Data Validator](../validation/data-validator.md) that can be used to modify the downloaded string data or validate
> that it hasn't been tampered with.
> 
> See specifically the [Digest Data Validator](../validation/digest-data-validator.md) for an out of the box validation solution.

### Refresh Options

:::info

Refresh options are only available of the `Remote Source` is set to `URL`.

:::

#### Refresh on Start

> When enabled, the remote URL will be loaded and parsed for the local player when they join the instance.  Leave disabled to control
> when or if the remote URL is loaded.

#### Start Delay

> When Refresh on Start is enabled, the start delay is the number of seconds to wait before making the remote load call.  You can use
> this as a crude way to change loading priority when multiple string loaders are present.

#### Enable Sync Refresh

> When enabled, a method on the whitelist can be invoked to reload the URL, and simultaneously trigger all players in the world to also
> reload the URL.

#### Access Control

> An optional Access Control object to control which players can programatically call the sync refresh method.  If none is provided, any
> player's client can trigger the reload.
>
> This component is unrelated to the Access Control objects that the whitelist is a part of, although it can be the same component.

#### Enable Periodic Refresh

> When enabled, the remote URL will be reloaded automatically at a set interval.

#### Refresh Period

> The interval, in seconds, between each automatic reload of the remote URL.

### Default Whitelist

#### User Whitelist

> A list of player display names to pre-populate the whitelist with.  Once the remote URL is successfully loaded, this list will be overwritten.

### Debug Options

#### Debug Log

> An optional Debug Log.  When set, some diagnostic info will be written to the log.

#### VRC Logging

> When enabled, some diagnostic info will be written to the VRChat log.

## Document Examples

Here are a few different examples of valid whitelist documents and their corresponding settings (mainly related to JSON)

<details>
  <summary>Newline Example</summary>
  * **Remote String Format**: `Newline`

  ```
  DisplayName1
  DisplayName2
  DisplayName3
  ```
</details>

<details>
  <summary>JSON Array Example 1</summary>
  * **Remote String Format**: `JSON Array`
  * **JSON Object Path**:
  * **JSON Entry Path**:
  
  ```
  [
    "DisplayName1",
    "DisplayName2",
    "DisplayName3"
  ]
  ```
</details>

<details>
  <summary>JSON Array Example 2</summary>
  * **Remote String Format**: `JSON Array`
  * **JSON Object Path**: `names`
  * **JSON Entry Path**:
  
  ```
  {
    "names": [
      "DisplayName1",
      "DisplayName2",
      "DisplayName3"
    ]
  }
  ```
</details>

<details>
  <summary>JSON Array Example 3</summary>
  * **Remote String Format**: `JSON Array`
  * **JSON Object Path**: `embedded/names`
  * **JSON Entry Path**:
  
  ```
  {
    "embedded": {
      "names": [
        "DisplayName1",
        "DisplayName2",
        "DisplayName3"
      ]
    },
    "other": {
      "foo": 1,
      "bar": 2
    }
  }
  ```
</details>

<details>
  <summary>JSON Array Example 4</summary>
  * **Remote String Format**: `JSON Array`
  * **JSON Object Path**: `users`
  * **JSON Entry Path**: `display`
  
  ```
  {
    "users": [
      {
        "display": "DisplayName1",
        "color": "green",
        "index": 1
      },
      {
        "display": "DisplayName2",
        "color": "blue",
        "index": 2
      },
      {
        "display": "DisplayName3",
        "color": "red",
        "index": 3
      }
    ]
  }
  ```
</details>

## Public API

### Network Sync

This object is network synced.  The network sync is only used for signaling all players to reload the remote URL.  The downloaded display names
are kept locally.

### Inherited API

* EventBase Public API
* [AccessControlUserSource Public API](./custom-whitelist.md#public-api)

### Properties

#### <ApiProperty return="string[]" property="UserList" get={true} set={true} />

> Gets or sets the current array of display names associated with this static whitelist. The static whitelist will grant access to any name contained in this list.

:::warning

The contents of the returned array should not be modified.

:::

### Methods

#### <ApiMethod return="void" method="_LoadJsonArrayData" params={["string", "data"]} />

> Parses a string of raw JSON data as if it was downloaded from a URL with the **JSON Array** string format set, and replaces the current
> set of cached display names with the new set.  The existing `JSON Object Path` and `JSON Entry Path` values are used when parsing the data.

:::tip Manual Loading

If you already have a separate script downloading data from a URL, especially a more complex JSON document where the display name list is just
one part, disable refresh options and have that script call this method with the downloaded JSON data.

:::

#### <ApiMethod return="void" method="_LoadNewlineData" params={["string", "data"]} />

> Parses a string of newline-separated display names as if it was downloaded from a URL with the **Newline** string format set, and replaces
> the current set of cached display names with the new set.

#### <ApiMethod return="void" method="_LocalRefresh" />

> Causes the remote URL to be reloaded for the local client only.

#### <ApiMethod return="void" method="_SyncRefresh" />

> Causes the remote URL to be reloaded for the local client, and signals all remote clients to also reload the URL.
