---
sidebar_position: 1
---

# Forwarding Access Handler

The Forwarding Access Handler is an included access handler that forwards an access check to one or more listed access control objects.  This
allows chaining multiple access control objects to be used in a parent / child or other kinds of relationships.

When an access request is forwarded, the handler will `Allow` access if any of the forward controls allow access for the given player.  If none
of the controls allow access, the handler will `Pass` the check to the next handler or remaining access control rules.

This handler also serves as a simple example implementation for access handlers, so would be a good reference to look at when implementing
your own custom handlers.

## Configuration

![Forwarding access handler inspector window](/img/unity/access-forwarding-handler.png)

### Forward Acls

A list of access control objects to check for player access.  Controls will be checked in order, but order will not have any impact on the result
returned by the handler.

## Public API

### Network Sync

This object is **not** network synced.

### Inherited API

* EventBase Public API
* [AccessControlHandler Public API](./index.md#public-api)
