# Audio Override Manager

The **Audio Override Manager** is a component responsible for handling different **Audio Override Zones**.

![Audio Override Manager](/img/unity/playeraudio/overridemanager-1.png)

:::warning

There can only be one Audio Override Manager in a scene!

:::

## Configuration

#### Default Zone

> The default zone that is used when players are not in any specific zone.  
> Used to set up default settings.

#### Override Zones

> Override Zones is a list of Audio Override Zones that you have in your world.

### Debug Options

#### Debug State

> A debug state object that will peridocally capture a snapshot of internal state of the object.


## Public API

### Network Sync

This object is **not** network synced.

### Inherited API

* UdonSharpBehaviour Public API

### Properties

#### <ApiProperty return="AudioOverrideZone" property="defaultZone" />

> Get the default AudioOverrideZone

#### <ApiProperty return="AudioOverrideZone[]" property="overrideZones" />

> Get the list of linked AudioOverrideZones

#### <ApiProperty return="AudioOverrideDebug" property="debugState" />

> Returns the debugState

### Methods

#### <ApiMethod return="void" method="_SetDebugState" params={["AudioOverrideDebug", "state"]} />

> Sets the debug state object at runtime, replacing the previous debug state if it exists.  Passing `null` will unasign
> any current debug state.

#### <ApiMethod return="void" method="_UpdateZoneData" />

> Updates zone data

#### <ApiMethod return="void" method="_PlayerEnterZone" params={["AudioOverrideZone", "zone", "VRCPlayerApi", "player"]} />

> Called when a player enters a zone

#### <ApiMethod return="void" method="_PlayerLeaveZone" params={["AudioOverrideZone", "zone", "VRCPlayerApi", "player"]} />

> Called when a player leaves a zone

#### <ApiMethod return="void" method="_RebuildLocal" />

> Rebuild local

#### <ApiMethod return="AudioOverrideZone" method="_FindActiveZone" params={["VRCPlayerApi", "player"]} />

> Find active zone of a player.
> Returns `null` when the player is not in any override zones.
