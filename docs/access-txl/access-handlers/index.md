# Access Handlers

Access handlers are class extensions that can be hooked into the access control flow that get checked before other
access control rules or whitelists.  They can be useful for making access control conditional on an external
state, like a lock status, or to delegate access checking to an external access control system.

An access handler implementation extends the `AccessControlHandler` base class from CommonTXL, and overrides
the virtual method `_CheckAccess`, returning one of the following values:

* Allow
* Deny
* Pass

A return value of `Allow` or `Deny` terminate the access check immediately, ignoring any other access handlers,
whitelists, or access rules.  A return value of `Pass` will move onto the next handler or rules, essentially
making no statement on the player's access.

## Public API

### Network Sync

This object is **not** network synced.

### Inherited API

* EventBase Public API

### Events

AccessControlHandler extends the CommonTXL EventBase class, so other scripts can register interest in the following events:

| Event | Description |
|---|---|
| **EVENT_REVALIDATE** | Emitted by an access handler implementation when access for any player has potentially changed. |

### Methods

#### <ApiMethod return="AccessHandlerResult" method="_CheckAccess" params={["VRCPlayerAPI", "player"]} />

> Returns whether access is allowed, denied, or if the check should be passed to the next handler or remaining rule set
> for the given player.