# Audio Player Override List

The **Audio Player Override List** is a component responsible for doing stuff like Microphones with a pickup trigger

![Audio Player Overide List](/img/unity/playeraudio/playeroverridelist-1.png)

Here when microphone is held, it broadcasts voice to default zone and to the Front Of House zone.

## Configuration

#### Pickup Trigger

> The pickup object to check for to enable this override list.

### Zones

![Audio Player Overide List Editor - Local Zone](/img/unity/playeraudio/playeroverridelist-2.png)

A list of zones, order does matter!

### Profiles

![Audio Player Overide List Editor - Local Zone](/img/unity/playeraudio/playeroverridelist-3.png)

A list of profiles for each zone, order does matter!

### Zone Enabled

![Audio Player Overide List Editor - Local Zone](/img/unity/playeraudio/playeroverridelist-4.png)

A list of toggles for each zone, order does matter!

### Debug Options

![Audio Player Overide List Editor - Debug Options](/img/unity/playeraudio/debugoptions.png)

#### Debug Log

> The debug log object that any logging should be directed to.

#### VRC Logging

> Writes a copy of any logged messages to the VRChat log.

## Public API

### Network Sync

This object is **not** network synced.

### Inherited API

* UdonSharpBehaviour Public API

### Properties

#### <ApiProperty return="PickupTrigger" property="pickupTrigger" />

> Gets or sets the PickupTrigger component that automatically registers hooks into pickup trigger events to bind to a player.

#### <ApiProperty return="const int" property="EVENT_BOUND_PLAYER_CHANGED" />

> Gets the constant value representing the event for when the bound player changes.

#### <ApiProperty return="AudioOverrideZone[]" property="zones" />

> Gets or sets the array of `AudioOverrideZone` objects that define different audio zones.

#### <ApiProperty return="AudioOverrideSettings[]" property="profiles" />

> Gets or sets the array of `AudioOverrideSettings` profiles corresponding to each zone.

#### <ApiProperty return="bool[]" property="zoneEnabled" />

> Gets or sets the array indicating whether each zone is enabled.

#### <ApiProperty return="DebugLog" property="debugLog" />

> Gets or sets the debug logging interface used by this class.

#### <ApiProperty return="bool" property="vrcLogging" />

> Gets or sets whether VRChat-specific logging is enabled.

### Methods

#### <ApiMethod return="void" method="_EnsureInit" params={[]} />

> Ensures that the override list is initialized. Called during startup to set up necessary components.

#### <ApiMethod return="void" method="_Init" />

> Initializes the override list, including registering pickup trigger hooks if applicable.

#### <ApiMethod return="void" method="_OnTriggerOn" />

> Called when the pickup trigger is activated. Sets the owner to the local player and binds the override list to that player.

#### <ApiMethod return="void" method="_OnTriggerOff" />

> Called when the pickup trigger is deactivated. Releases ownership and unbinds the override list from the player.

#### <ApiMethod return="bool" method="_GetZoneActive" params={["AudioOverrideZone", "zone"]} />

> Checks if a specific zone is active/enabled.

#### <ApiMethod return="void" method="_SetZoneActive" params={["bool", "state"]} />

> Sets all zones to the specified active/inactive state.

#### <ApiMethod return="void" method="_SetZoneActive" params={["AudioOverrideZone", "zone", "bool", "state"]} />

> Sets the specified zone's active state.

#### <ApiMethod return="AudioOverrideSettings" method="_GetZoneSettings" params={["AudioOverrideZone", "zone"]} />

> Retrieves the override settings for a specific zone.

#### <ApiMethod return="void" method="_SetZoneSettings" params={["AudioOverrideZone", "AudioOverrideSettings"]} />

> Sets the override settings for a specific zone.

#### <ApiMethod return="int" method="BoundPlayerID" params={[]} />

> Gets or sets the ID of the player bound to this override list, with change callback.

#### <ApiMethod return="void" method="_AddPlayer" params={["VRCPlayerApi", "player"]} />

> Applies overrides for a specific player in a specific zone.

#### <ApiMethod return="void" method="_RemovePlayer" params={["VRCPlayerApi", "player"]} />

> Removes a player from all zone overrides in this list.
