---
sidebar_position: 4
---

# Custom Whitelist

You can create your own whitelist logic by writing a new U# script that extends either the `AccessControlUserSource` base class, or
one of the other whitelist source classes. 

Review the public API below for what needs to be implemented to have a valid whitelist.

## Public API

### Inherited API

* EventBase Public API

### Events

AccessControl extends the CommonTXL EventBase class, so other scripts can register interest in the following events:

| Event | Description |
|---|---|
| **EVENT_REVALIDATE** | Emitted by a whitelist implementation when access for any player has potentially changed. |

### Methods

#### <ApiMethod return="bool" method="_ContainsAnyPlayerInWorld" />

> Returns true if the whitelist contains the display name of any player currently present in the world.  If anything has 
> happened that could change the result of this call for any name, the whitelist should emit an `EVENT_REVALIDATE` event 
> so that any listening scripts can re-check a name if necessary.
>
> The result of this method should be cacheable.  If anything has happened that could change the result of this call for any name,
> the whitelist should emit an `EVENT_REVALIDATE` event so that any listening scripts can re-check a name if necessary.

#### <ApiMethod return="bool" method="_ContainsName" params={["string", "name"]} />

> Returns true if the whitelist contains the given player's display name.  It is up to the whitelist implementation as to what
> qualifies as a contained name, and does not need to be limited to an explicit list.
>
> The result of this method should be cacheable.  If anything has happened that could change the result of this call for any name,
> the whitelist should emit an `EVENT_REVALIDATE` event so that any listening scripts can re-check a name if necessary.

#### <ApiMethod return="bool" method="_ContainsPlayer" params={["VRCPlayerAPI", "player"]} />

> Returns true if the whitelist contains the given player's display name.  It is up to the whitelist implementation as to what
> qualifies as a contained name, and does not need to be limited to an explicit list.
>
> The result of this method should be cacheable.  If anything has happened that could change the result of this call for any name,
> the whitelist should emit an `EVENT_REVALIDATE` event so that any listening scripts can re-check a name if necessary.

