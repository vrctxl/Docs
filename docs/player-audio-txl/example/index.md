# Example Setup

Here's an example setup to give you an idea how to use PlayerAudioTXL for your worlds.

:::warning
If players are using earmuff, this system will NOT override any volume outside the earmuff range!  
Their earmuff must be disabled for PlayerAudioTXL to allow long range broadcasts/comms.
:::

## Example 1 - Club Venue

### Situation

You are a venue/club owner wanting to add in comms system.
Your world has a greenroom, a Front of House desk and a stage.

You have these requirements:
```
When standing inside the greenroom, you can hear FOH and the stage at a comms volume. You cannot hear the audience.
Only the FOH can hear you at a comms volume in the greenroom. The stage and the audience cannot hear you in here.

When standing at FOH, you can hear the greenroom and the performer at a comms volume. You can hear audience at the normal volume.
The stage and the greenroom can hear you at a comms volume in here. Audience can hear you at the normal volume in here.

When standing at the stage, you can hear FOH at a comms volume. You can hear audience at the normal volume. You cannot hear the greenroom.
Audience will hear you at broadcast volume in here. FOH and the greenroom can hear you at a comms volume in here.
```

### Profiles

It is recommended to group all your profiles in an empty object.

![Example 1 - Profiles](/img/unity/playeraudio/example-1-profiles.png)

#### Default Profile

> The profile for global players, who are not in any zones.

![Example 1 - Profiles - Global](/img/unity/playeraudio/example-1-profiles-1-default.png)

#### Comms Profile

> The profile used for comms/direct volume. So you can hear from FOH at the stage and greenroom.

![Example 1 - Profiles - Comms](/img/unity/playeraudio/example-1-profiles-2-comms.png)

#### Mute Profile

> The profile used for muting players.

![Example 1 - Profiles - Mute](/img/unity/playeraudio/example-1-profiles-3-mute.png)

#### Broadcast Profile

> The profile used for broadcasting players. For example using a microphone.

![Example 1 - Profiles - Broadcast](/img/unity/playeraudio/example-1-profiles-4-broadcast.png)

### Zones

It is recommended to group all your zones in an empty object.

![Example 1 - Zones](/img/unity/playeraudio/example-1-zones.png)

#### Default Zone

Local zone is left empty, as we prefer to use the Default Zone settings.

Linked zones:
- Zone A (Greenroom): Anyone in the default zone can NOT hear the greenroom.
- Zone B (FOH): Anyone in the default zone can hear the FOH with normal profile, so they can listen to staff yelling at them.
- Zone C (Stage): Anyone in the default zone can hear the Stage with broadcast profile, simulating a stagewide always-on microphone.

Default zone is set to Default profile, so that people can just talk.

![Example 1 - Zones - Default](/img/unity/playeraudio/example-1-zones-1-default.png)

#### Zone A - Greenroom

Local zone is set to Default profile, as we want to be able to talk in the greenroom.

Linked zones:
- Zone B (FOH): Anyone in the greenroom zone can hear the FOH with comms profile, so they can hear when they're up.
- Zone C (Stage): Anyone in the greenroom zone can hear the Stage with comms profile, so they can hear what is going on on stage.

Default zone is set to Mute profile, so anything other than the linked zones will not be heared in here.

![Example 1 - Zones - A](/img/unity/playeraudio/example-1-zones-2-A.png)
![Example 1 - Zones - A - trigger](/img/unity/playeraudio/example-1-zones-default-trigger.png)

#### Zone B - FOH

Local zone is set to Default profile, as we want to be able to talk at the FOH.

Linked zones:
- Zone A (Greenroom): Anyone in the FOH zone can hear the greenroom with comms profile, so they can hear questions from them.
- Zone C (Stage): Anyone in the FOH zone can hear the Stage with comms profile, so they can hear questions from them.

Default zone is set to Default profile, so that audience can still normally talk to FOH reporting issues.

![Example 1 - Zones - B](/img/unity/playeraudio/example-1-zones-3-B.png)
![Example 1 - Zones - B - trigger](/img/unity/playeraudio/example-1-zones-default-trigger.png)

#### Zone C - Stage

Local zone is set to Default profile, as we want to be able to talk on stage.

Linked zones:
- Zone A (Greenroom): Anyone in the stage zone can NOT hear the greenroom.
- Zone B (FOH): Anyone in the stage zone can hear the FOH with comms profile, so they can hear when they're live.

Default zone is set to Default profile, so that audience can still normally talk to stage reporting issues.

![Example 1 - Zones - C](/img/unity/playeraudio/example-1-zones-4-C.png)
![Example 1 - Zones - C - trigger](/img/unity/playeraudio/example-1-zones-default-trigger.png)


### Audio Override Manager

The default zone we set to our Default zone and then we provide a list of the other zones.

![Example 1 - Audio Override Manager](/img/unity/playeraudio/example-1-audiooverride.png)


### Mic

We also add a mic. For this you need two different objects.

#### Audio Player Override List

This will determine what happens to the holding player's voice.

In this case when holding the pickup, the Default zone will hear the player at broadcast.  
And Zone B (FOH) will also hear them at broadcast (else the FOH engineer cannot hear if the microphone is on or not).

:::note
Zone A (greenroom) and Zone C (Stage) are not listed, and thus will not be impacted by the player holding the microphone.
:::

![Example 1 - Mic - Audio Player Override List](/img/unity/playeraudio/example-1-mic-overridelist.png)

#### Mic Pickup

You can just use the prefab microphone as well, or make your own.

![Example 1 - Mic - Pickup](/img/unity/playeraudio/example-1-mic-pickup.png)

