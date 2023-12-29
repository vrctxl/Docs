---
sidebar_position: 1
---

# Static Whitelist

Static whitelists are similar to the built-in whitelist of the main ACL.  They contain a list of VRChat display names that is checked when access is requested.

Multiple static whitelists can be used together to further organize names, and a static whitelist can be added to multiple access control objects.

:::warning Display names must be exact

Any names entered must exactly match a player's display name, including casing and special characters.  Beware of unicode look-alike characters in
some players' names.  It's recommended to copy their display name text from the VRChat website.

:::

## Configuration

![Static whitelist inspector window](/img/unity/access-static-whitelist-prefab.png)

### Bulk Operations

The bulk operations field makes it convenient to manage large lists of player names.  Paste a newline-separated list of players' **display names** into
the text field, and then commit them with one of the following actions:

* **Add Names**: Adds all of the names to the existing user list.  If any duplicates are present, they will be filtered out automatically.
* **Replace Existing**: Removes all existing names from the user list before adding new ones, so the user list will exactly match what was entered.

### User List

Names can be individually added to the user list using the **Add Element** button, and names can be individually removed with the corresponding **X** button
to the right of each entry.

## Public API

### Network Sync

This object is **not** network synced.

### Inherited API

* EventBase Public API
* [AccessControlUserSource Public API](./custom-whitelist.md#public-api)

### Properties

#### <ApiProperty return="string[]" property="UserList" get={true} set={true} />

> Gets or sets the current array of display names associated with this static whitelist. The static whitelist will grant access to any name contained in this list.
