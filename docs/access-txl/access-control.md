---
sidebar_position: 2
---

# Access Control

The main **AccessControl** prefab is actually distributed through the **CommonTXL** package, allowing the
core access control capabilities to be used by all of the TXL components without requiring all of the additional
scripts and assets included in the AccessTXL package.

For more information on interacting with the access control object via scripting, check the [Public API](#public-api).

For interacting with the access control object via Udon Graph, check the [Graph API](#graph-api).

## Adding to Scene

A **prefab** is distirbuted with the CommonTXL runtime and is located at:

```
Packages/TXL - CommonTXL/Runtime/Prefabs/AccessControl.prefab
```

Draging this prefab into your scene will create a default AccessControl setup that permits **instance owners** and
**instance masters** only.

## Configuration

![AccessControl inspector window](/img/unity/access-control-prefab.png)

### Access options

#### Allow Instance Owner

> Grants access to the player who created (owns) the instance.  Not applicable to group or public instances.

#### Allow Master

> Grants access to the current instance master.  An instance will always have one master, but can be any player in the instance.

#### Restrict Master if Owner Present

> Only allows master to have access if the instance owner is not present in the world.

#### Allow First Join

> Grants access to the player who joined the world first.  Can be used as a substitute for instance owner in group or public instances.

#### Restrict First Join if Owner Present

> Only allows the first joined played to have access if the instance owner is not present in the world.

#### Allow Whitelist

> Enables checking the built-in whitelist or any added whitelist sources.

#### Allow Everyone

> Usually for testing, allows all players to have access without needing to change the rest of the configuration.

### Default Options

#### Enforce

> When disabled, all access checks pass.

:::info What's the difference between "Allow Everyone" and "Enforce"?

The "Allow Everyone" option can still be overridden by access handlers (see further down).  When "Enforce" is disabled, no checks, including access handlers, are run at all.  The check will always pass.

:::

#### Debug Logging

> Writes some diagnostic info to the VRC log file.

### Optional Components

#### Debug Log

> Writes some diagnostic info to a DebugLog component from CommonTXL.

#### Debug State

> Continuously updates some internal state info in a DebugState component from CommonTXL.

### Access Whitelist

#### User Whitelist

> An internal whitelist containing a list of VRChat display names.

#### Whitelist Sources

> A list of other user source objects, which could include other [static whitelists](./whitelist-sources/static-whitelist.md), 
> [remote whitelists](./whitelist-sources/remote-whitelist.md), or [dynamic whitelists](./whitelist-sources/dynamic-whitelist.md).

:::tip Whitelist sources can be shared

It's possible to share the same whitelist source component across multiple Access Control objects.  This can be useful for creating
a group of users and assigning it to multiple Access Control objects that represent different roles.

:::

### Access Handlers

> A list of access handler objects that will be checked before other whitelists or rules.  Access handlers are checked in the
> order presented in this list, and other handlers can be added later via an API method, which will be appended after this list.

## Public API

### Network Sync

This object is network synced.  The following data is synced:

* First joined player

Generally, each client maintains its own view of the world, and any changes on the AccessControl object will only affect the local
client.  Some of the optional components that can be used are synced separately.

### Inherited API

* EventBase Public API

### Events

AccessControl extends the CommonTXL EventBase class, so other scripts can register interest in the following events:

| Event | Description |
|---|---|
| **EVENT_VALIDATE** | Emitted whenever a player's access might have changed.  Any subscriber should re-check access whenever this event is received. |
| **EVENT_ENFORCE_UPDATE** | Emitted when the **enforce** option is changed. |

### Methods

#### <ApiMethod return="void" method="_AddAccessHandler" params={["AccessControlHandler", "accessHandler"]} />

> Adds a new access handler to the access control configuration, if it has not already been added.  Access handlers will be checked in the order
> they were added and have a chance to allow or deny access to a player before other checks are made.

#### <ApiMethod return="void" method="_AddUserSource" params={["AccessControlUserSource", "source"]} />

> Adds a new whitelist source to the access control configuration, if it has not already been added.  The AccessControl object will automatically
> hook itself into the source's `EVENT_REVALIDATE` event, so that the entire AccessControl object will be refreshed when the source requests it.

#### <ApiMethod return="void" method="_Enforce" params={["bool", "state"]} />

> Sets whether access checks will be enforced or not.  Causes both `EVENT_VALIDATE` and `EVENT_ENFORCE_UPDATE` events to be emitted.

#### <ApiMethod return="bool" method="_HasAccess" params={["VRCPlayerApi", "player"]} />

> Checks if the given player is granted access by the current access control configuration.  This takes into account all options, whitelists,
> and handlers.

#### <ApiMethod return="bool" method="_LocalHasAccess" />

> A version of the `_HasAccess` check for the local player.

#### <ApiMethod return="bool" method="_LocalWhitelisted" />

> A faster version of the `_PlayerWhitelisted` check for the local player.

#### <ApiMethod return="bool" method="_PlayerWhitelisted" params={["VRCPlayerApi", "player"]} />

> Checks specifically if the given player is part of the AccessControl's internal whitelist, or allowed access via any of the attached
> whitelist sources.  This is not the same as an access check, as it does not consider other access options or handlers.

#### <ApiMethod return="void" method="_Validate" />

> Instructs the AccessControl object to refresh all of its cached state (mainly related to the local player) and emit an 
> `EVENT_VALIDATE` event after.

## Graph API

The default Access Control prefab comes with a dedicated child object called `GraphAPI`, which has a script component specifically for
using the Access Control object from Udon Grpah.

![AccessControl inspector window](/img/unity/access-control-hierarchy.png)

All API methods have been exposed so that arguments are set in advance as variables, and return values are retrieved after from variables.

### Example

The following example listens for an Interact event and branches on whether the local player has access or not, according to the supplied
graph API objects, which is an Udon Behavior.

![AccessControl inspector window](/img/unity/access-control-graph-example-1.png)

### Methods

#### _AddUserSource

* SetProgramVariable: `aclUserSourceArg` (UdonBehaviour)
* SendCustomEvent: `_AddUserSource`

#### _Enforce

* SetProgramVariable: `enforceArg` (bool)
* SendCustomEvent: `_Enforce`

#### _HasAccess

* SetProgramVariable: `accessPlayerArg` (VRCPlayerApi)
* SendCustomEvent: `_HasAccess`
* GetProgramVariable: `playerHasAccessReturn` (bool)

#### _LocalHasAccess

* SendCustomEvent: `_LocalHasAccess`
* GetProgramVariable: `localHasAccessReturn` (bool)

#### _LocalWhitelisted

* SendCustomEvent: `_LocalWhitelisted`
* GetProgramVariable: `localWhitelistedReturn` (bool)

#### _PlayerWhitelisted

* SetProgramVariable: `whitelistPlayerArg` (VRCPlayerApi)
* SendCustomEvent: `_PlayerWhitelisted`
* GetProgramVariable: `playerWhitelistedReturn` (bool)

#### _Validate

* SendCustomEvent: `_Validate`
