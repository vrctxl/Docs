---
sidebar_position: 1
---

# Access Grant Controller

![Access Grant Controller](/img/unity/access-grant-screenshot.png)

The Access Grant Controller is a combination controller and UI control for managing a Dynamic Whitelist.

The prefab allows existing "admin" players in a world to securely grant persistent access to other players in
the instance.  The access could be to the same admin access control (admins creating other admins), or it could
be to another access control that represents a different role (e.g. admins creating DJs).

Using both the default Access Grant Controller and Dynamic Whitelist, any players added through this mechanism will
persist for the lifetime of the instance and cannot be removed.  However, they can be removed via external scripting
by using the Dynamic Whitelist's API.

## Configuration

![Access Grant Controller inspector window](/img/unity/access-grant-prefab.png)

### Options

#### Grant ACL

> An optional Access Control object that checks who can exercise the "grant" and "deny" buttons on the control.  If this field is not set,
> it will attempt to use the access control object from the underlying Dynamic Whitelist prefab.
>
> Likewise, if the underlying dynamic whitelist does not have an access control object, it will attempt to take the one from the grant controller.
> If multiple grant controllers reference the same whitelist in this case, which access control gets used is ambiguous.
>
> If neither the Access Grant Controller nor the Dynamic Whitelist have an access control object, the grant controller will be inoperable.

#### Dynamic List

> The dyanmic whitelist being controlled by this control.

#### Request

> An internal object for letting world players initiate a request for access.  This should be automatically setup.

#### Grant Users Can Request

> When enabled, admin users (who can grant or deny) can also request access to the managed list.  By default, they will not be able to request access.

## Public API

### Network Sync

This object is network synced.

### Inherited API

* EventBase Public API

### Events

DynamicWhitelistGrant extends the CommonTXL EventBase class, so other scripts can register interest in the following events:

| Event | Description |
|---|---|
| **EVENT_REQUEST_CHANGE** | Emitted whenever a new player requests access through the controller. |

### Properties

#### <ApiProperty return="int" property="CurrentRequest" get={true} />

> Gets the player ID of the player that requested access.

### Methods

#### <ApiMethod return="void" method="_Grant" />

> Grants access to the currently requesting player and then clears the request.

#### <ApiMethod return="void" method="_Deny" />

> Clears the current request.
