---
sidebar_position: 3
---

# Dynamic Whitelist

Dynamic whitelists allow players to be added to the whitelist at runtime, and the list will be persisted and synced, such that players 
will still retain access even if they leave the instance and rejoin.  The package comes with two controls for adding players, although 
it's possible to write your own controls to manage a dynamic whitelist as well.

## Usage

The dynamic whitelist prefab is mainly a wrapper around the CommonTXL SyncPlayerList -- the component that's keeping a list of names
synced across all users in the instance.  As such, there isn't much to configure on the Dynamic Whitelist itself, and there's a few
key settings on the SyncPlayerList that will influence its behavior.

This whitelist is intended to be managed by other systems in your world.  AccessTXL ships with two such prefabs:
* [Access Grant Controller](../access-prefabs/access-grant-controller.md)
* [Access Keypad Controller](../access-prefabs/access-keypad-controller.md)

Check each prefab for more information on how and when to use them.  In short, the Access Grant control provides a way for existing
"admin" players in the world to securely grant "admin" access to other players in the world, which will persist for the lifetime of
the instance.  The Access Keypad Controller provides a more familiar 10-digit keypad for granting self-access with a passcode, but
the system is less secure than access grant.

It's also possible to write your own systems that keep the dynamic whitelist updated.  Check what's available in the public API.

## Configuration

![Dynamic whitelist inspector window](/img/unity/access-dynamic-whitelist-prefab.png)

### Dynamic User List

#### User List

> A default list of display names to sync across the network.  It's generally better to use other whitelists like the [Static Whitelist](./static-whitelist.md)
> for giving access to a default set of users, but there may be niche uses.  A custom component would be able to remove some of these
> names later during runtime.

#### Synced Player List

> A reference to the underlying SyncPlayerList.  The prefab includes both components on the same object, so this will be auto-filled.

### Sync Player List

Check documentation for Sync Player List for a more expansive overview of the options.  However, here are a few key options that are most
relevant to the dynamic whitelist.

#### Max Player Count

> The max number of players that can be synced in the list.  The default value of 100 should be way more than needed in most cases, but
> by default players are also persistent even after they leave the instance, so it is possible to continue adding players and exceed
> the world cap.

#### Remove Players On Leave

> When selected, a player will be removed from the list when the leave the instance.  When they rejoin, they'll need to be re-added by
> the same mechanisms that got them added in the first place.

#### Access Control

> Important for the [Access Grant](../access-prefabs/access-grant-controller.md) prefab.  This is the Access Control object that determines 
> if a player in the world has the authority to add someone to the whitelist.  It may the same Access Control that the dynamic whitelist 
> is also a part of (e.g., admin adds another player to the admin list).  It can also be different (e.g., admin adds another player to a DJ access list).

#### Allow Ownership Transfer

> This should normally be enabled, and needs to be enabled for both of the access prefabs.  When disabled, an external script needs to
> control ownership of this list in order to make changes to it.

## Public API

### Network Sync

The Sync Player List component on this object is network synced.

### Inherited API

* EventBase Public API
* [AccessControlUserSource Public API](./custom-whitelist.md#public-api)
* [AccessControlUserList Public API](./static-whitelist.md#public-api)

### Methods

#### <ApiMethod return="bool" method="_AddPlayer" params={["VRCPlayerApi", "player"]} />

> Adds the given player to the synced list.  Returns true if the player was added or already existed in the list.  Returns false if
> the player could not otherwise be added, e.g. if the list is at capacity or the access check failed.

#### <ApiMethod return="bool" method="_RemovePlayer" params={["VRCPlayerApi", "player"]} />

> Removes the given player from the synced list.  Returns true if the player was removed from the list.  Returns false if the player
> was already missing from the list, or if the remove failed, e.g. because the access check failed.
