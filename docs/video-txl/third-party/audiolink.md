---
sidebar_position: 1
---

# AudioLink

AudioLink is a project that creates a standardized audio reactive system for prefabs and shaders
that can be used in worlds or on avatars.

AudioLink is fed by a Unity AudioSource, usually from a video player.  VideoTXL can be setup with
multiple video sources and audio profiles, so the video player needs to be linked to the AudioLink
controller.  Once linked, it will manage setting and swapping the audio sources for you.

:::info AudioLink Resources

* [GitHub Repository](https://github.com/llealloo/vrc-udon-audio-link)

:::

## Installation Guide

The following guide will walk you through setting up AudioLink in your scene and linking it with a
default VideoTXL sync video player setup.

AudioLink is available in the VRChat Creator Companion by default as a curated package.  Start by
adding that package if you haven't already done so.

### Setup AudioLink

Skip this step if you've already setup the AudioLink controller in your world.

Use the top-level menu to add the AudioLink prefabs to your scene:

> `Tools -> AudioLink -> Add AudioLink Prefab to Scene`

This will create an <GameObject type="prefab" name="AudioLink" /> node, which is the main AudioLink object.
It will also add an <GameObject type="prefab" name="AudioLinkController" /> node, which is a mobile UI object
for controlling AudioLink parameters in your world.

By default, the AudioLink object will come with its Audio Source set to an internal input object that has a
VRC AVPro Video Speaker script on it.  This input object will not be used, but it's okay to leave it set
on the prefab.  The video player will replace it at runtime.

### Configure VideoTXL

This guide assumes you've started by adding a fresh Sync Video Player to the scene, which you can do by utilizing
the GameObject menu:

> `GameObject -> TXL -> VideoTXL -> Sync Video Player`

You can also drag the prefab directly from the Packages folder, although adding objects and components from the GameObject
menu can have the benefit of ensuring more things are automatically hooked up correctly for you.

Expand the <GameObject type="variant" name="Sync Video Player" /> node, and select the <GameObject type="prefab" name="Audio Manager" />.  The 
default configuration looks like this:

![Audio Manager](/img/unity/video/third-party-audiolink-audioman.png)

Under **External Systems**, there is a section for AudioLink.  The inspector will tell you if AudioLink has been detected
in the project, and if it's already linked to another video player.  Clicking the **Link AudioLink to this manager** button
will set the AudioLink reference to the AudioLink object you added earlier.

:::warning

You'll get a warning if multiple video players have been linked to the AudioLink object.  It's indeterminate which video player's
audio source will be used in this case.  For supporting multiple video players, there is API to link and unlink AudioLink.

:::

### Try It Out

You can test AudioLink in the client sim by loading a video (e.g. from YouTube) with a Unity video source.  You should see
AudioLink's controller box reacting to the audio.

## AudioLink Configuration with Audio Profiles

VideoTXL supports the concept of multiple Audio Profiles, wach of which can be setup with different numbers and configurations
of audio sources.  Each Audio Profile itself also needs to accomodate differences and limitations between Unity and AVPro
video sources.

In each audio profile, there will generally be one Unity audio source defined, and then one or more AVPro audio sources defined.
These audio sources include an additional script called **Audio Channel** that includes extra configuration for VideoTXL's
Audio Manager.

![Audio Channel Inspector](/img/unity/video/third-party-audiolink-audiochannel.png)

These audio source and script combinations are actually **templates** that are used for creating a mirrored set of audio sources
for each video source under the Video Manager. It's those generated audio sources that will potentially be set on the main
AudioLink object at runtime.  The "template" audio sources will never be used directly.

One of the Audio Channel settings is the **Audio Link Source**.  When this box is checked, the corresponding generated audio
source will be used for AudioLink when the audio profile / video source combo is active.

Because of limitations with Unity video sources, there is only one audio source defined and it will normally have the Audio Link
Source option checked.  These sources depend on AudioLink's feature to adjust its gain dynamically with changes in the AudioSource
volume.

For AVPro, it's normal for **none** of the audio sources to have this option checked.  This is because the AVPro video sources
have an additional special AudioSource, called <GameObject name="ReservedAudioSource" /> in the hierarchy, that is already
configured to work as an AudioLink audio source.  This special reserved source exists to work around some other problems with
AVPro audio, but it will also be used for AudioLink if none of the other defined sources have the Audio Link Source option
checked off.

## Troubleshooting

Most troubleshooting is easiest to do in the client sim.

#### Check that AudioLink is linked

Double-check that AudioLink has been linked in your Audio Manager, and make sure you aren't seeing warnings about other video
player instances also being linked to AudioLink.

#### Check that the AudioSource is being set on AudioLink

Start the client sim, then check the main <GameObject type="prefab" name="AudioLink" /> object.  Check that an AudioSource has
been set on its **Audio Source** field.  Check that the AudioSource is actually from the video player, and is part of the
currently selected video source.

#### Check that the AudioSource volume is high enough

With the sim running, select the AudioSource you confirmed in the previous step, and make sure it is **enabled**, that the
**Mute** option isn't checked, and that its **Volume** value is at least 0.01 or greater.  If you're using audio profiles that
have volume falloff or simulate volume falloff, you may be surprised to find a really low value here.

The volume will also be influenced by the mute and volume controls on the video player, so make sure those are also reasonable.