---
sidebar_position: 2
---

# Access Keypad Controller

![Access Grant Controller](/img/unity/access-keypad-screenshot.png)

The Access Keypad Controller implements a traditional 10-digit keypad.  The keypad is canvas-based and uses your laser for entry, so there's
much less chance for pressing the wrong buttons by mistake.

The keypad can be configured for three kinds of actions.  The first is executing an arbitrary udon script function when a corresponding code is
entered.  Optionally, the player's ID can also be passed to the receiving function.  Any number of these actions can be added to a single keypad.

The second action is that the keypad can be configured to populate a dynamic whitelist with the local player when the correct code is entered.
This is a common use for keypads in general, but it is less secure than alternatives such as the Access Grant Controller, both because the code itself
may leak, but also because the client must be trusted not to bypass any security.  It cannot be verified by a third party, as is the case with the
grant controller.

The third action is that the keypad can be configured to toggle objects locally.  More more advanced toggle scenarios, use the function call
action with TXL's GroupToggle or a similar general purpose toggle script.

A single keypad can support multiple actions simultaneously.

## Configuration

![Access Grant Controller inspector window](/img/unity/access-keypad-prefab.png)

### Dynamic Whitelists

#### Code

> A numeric code.

#### Dynamic Whitelist

> A dynamic whitelist.  The dynamic whitelist should be configured **without** an Access Control object on it, or the player entering the code will
> be unable to propagate themselves to the dynamic list.
>
> When the corresponding code is entered, the player's name will be added to the whitelist and synced across all players.

### Function Calls

#### Code

> A numeric code.

#### Target Script

> An udon behaviour component.  This can either be a U# script or an udon graph.

#### Function Name

> The name of a public U# method to call, or the name of a message that an udon graph is configured to respond to.

#### Player Field Name

> Optional.  Should be the name of a public `VRCPlayerApi` variable on a U# script, or a `VRCPlayerApi` variable on an udon graph.
> When provided, the corresponding field will be set to the local player before the function is called.

### Object Toggles

#### Code

> A numeric code.

#### Object

> The game object to enable or disable.

#### Action

> Whether to always enable, always disable, or toggle the object state back and forth.

## Public API

### Network Sync

This object is **not** network synced.

### Methods

#### <ApiMethod return="void" method="_SubmitCode" params={["string", "code"]} />

> Checks the given code against all available actions and executes any matches.
