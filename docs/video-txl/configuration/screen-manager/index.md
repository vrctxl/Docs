# Screen Manager

The **Screen Manager** is a component included on every TXL video player prefab by default.  It is responsible for 
everything related to **materials** and **rendering** video on surfaces, and it's responsible for managing any
placeholder textures when video isn't actively playing.

![Screen Manager Editor](/img/unity/video/screenman-1.png)

A Screen Manager object is given a TXL video player to bind to at start.  In advanced setups, it's possible to run
a video player without a screen manager if no rendering is required, assign a screen manager to another video player,
or have multiple managers working from a single video player.

## Configuration

#### Video Player

> The video player that this screen manager will subscribe to.  The video player supplies the live video texture and
> other playback parameters needed by the manager.
>
> The bound video player can be changed at runtime, see the corresponding entry in the public API.

### Texture Overrides

![Screen Manager Editor](/img/unity/video/screenman-2.png)

Texture overrides are used in certain video player states when there's no live video to display.

:::warning

The screen manager comes preconfigured with textures from the VideoTXL package.  Do not store your own textures in
the package folder, or they will be deleted the next time the package is updated.  You will be warned by the
editor if it detects this.

:::

#### Logo Texture

> The default texture to display when the video player is not actively playing or loading anything.
> If no logo texture is supplied, materials may display their default values or leftover values from
> other states.

#### Loading Texture

> The texture to display when the video player is loading a new URL.
> If no loading texture is supplied, it will fall back to the logo texture.

#### Audio Texture

> If the video player detects that a video or stream has loaded, but no video data has appeared for a long enough period of
> time, it will switch the display to the Audio Texture if it's set.  If video data eventually does appear, it will switch
> back to displaying video.

#### Error Texture

> The texture to display when the video player enters an error state.  This is the catch-all texture for all
> errors, but it's possible to override some of the error codes with more specific textures.
> If no error texture is supplied, it will fall back to the logo texture.

#### Error Texture Overrides

> The error texture overrides refer to more specific error codes that can be helpful to call out.
>
> * **Error Invalid Texture** - The texture used when a URL can't be loaded because it is invalid or offline.
> * **Error Blocked Texture** - The texture used when a player doesn't have the "Untrusted URLs" option enabled and the domain is untrusted.
> * **Error Rate Limited Texture** - The texture used when video loading has been rate limited by the client.

#### Editor Texture

> The texture to display in the Unity editor.  This can be helpful for testing and visualizing your setup without
> needing to enter game mode, and allows you to control the screen contents during other activities like light
> and reflection probe baking.

#### Latch Error State

> When this option is enabled, the screen manager will continue to show its error textures while the video player
> attempts reloading the URL in the background.  This will prevent screens from tick-tocking between loading and
> error states when a URL repeatedly fails to load.

#### Override Aspect Ratio

> When this option is enabled, you can manually specify the aspect ratio of your override textures.  It's assumed that
> you'll use a consistent aspect ratio for all of your textures.  This is usually necessary because Unity will convert
> your textures into powers-of-two dimensions and the original dimensions will be unknown, unless you change the
> **Non-Power of 2** option on your texture assets.
>
> In most cases you'll probably want to keep this set to its default of 1.777, which represents the common 16:9 video
> resolutions.  Using an aspect ratio that is different than your target aspect ratio for rendering video will take
> the current screen fit setting into account and may result in clipping or letterboxing.

#### Download Logo Texture

> This is a convenience setting to let you load your logo texture from a web URL.

:::tip

If you need to download the same texture for multiple video players, it would be more efficient to download your 
image with a separate script and use the public API to set the new logo texture.

:::

### Render Textures

![Screen Manager Editor](/img/unity/video/screenman-3.png)

The screen manager can write to one or more **Custom Render Textures** (CRTs), which is the easiest way to display video
in different places in your world.  All of the necessary transforms needed to make the video consistent, such as flipping
on the Y-axis, applying gamma, or handling screen fit, will be **pre-applied** by the screen manager.  The CRT can then
be used like any normal texture in any material in your scene without needing to worry about transforms.  CRTs have the
following advantages and disadvantages:

<ProsCons pros={[
    "Provides transformed texture that can be used anywhere in scene",
    "Easy compatibility with third party systems",
]} cons={[
    "Incurs an extra texture copy for each CRT",
    "Multiple video players need their own non-conflicting CRT assets",
]} />

The first CRT you add will come with reasonable settings for displaying common video sources like YouTube videos.  There
are several options you can changed depending on your quality requirements or the needs of special systems.  When a CRT is
added, it will generate a pair of resources in a subfolder next to your scene file: a CRT and a material.  If the manager
can detect that there's an existing CRT/material pair that isn't being used by anything else in the scene, it will reference
those resources instead.

#### CRT

> The Custom Render Texture resource being written to.  If you have special requirements, you can edit the underlying options
> of the CRT.  Some of the most commonly needed options are surfaced directly in the list though.

#### CRT Size

> The resolution of the render texture.  This value is actually pulled form the CRT asset itself, and changing the values here
> will immediately resize the asset as well.

:::info

If your primary use case is loading video from YouTube, it's not possible to get 1080p video from it even if you're using a
1080p-sized video source.  This is why the default CRT is created at 720p.

:::

#### Target Aspect Ratio

> This is the aspect ratio of your **target surface**, such as a physical screen in your world that you'll display your video
> content on.  If your physical screen is an unusual size, setting its correct aspect ratio here will allow your content to
> clip or letterbox correctly instead of stretching oddly.
>
> The target aspect ratio does not need to be the same as your CRT's aspect ratio.

#### Resize to Video

> When this option is enabled, the CRT will be dynamically resized at runtime to match the incoming resolution of your video.
> This may give you a small quality boost when the incoming content doesn't match the resolution of your CRT, and it may also
> give you a small performance boost if the incoming video is smaller than your normal CRT size.
>
> When any override textures are being displayed, the normal configured CRT size will be used.

#### Enlarge to Fit

> This option requires Resize to Video to be enabled.  When this option is enabled, the CRT may be sized **larger** than the
> incoming video resolution in either the width or height.  This option takes the **target aspect ratio** into account and
> allocates additional space for any letterboxing that needs to be displayed.  This is a quality option that can prevent
> the video data from being rendered "squished" and then stretched back onto a surface.

#### CRT Material

> The material used to render video into the CRT.  This value is pulled from the underlying CRT, and changing it here will
> immediately change it on the CRT resource as well.
>
> The default material is sufficient for most use cases, but you can swap it out if you know what you're doing.

#### Property Map

> The property map that identifies what shader properties need to be set in the CRT material.  This only needs to be set if
> a non-default CRT material is set.

#### Set Global Video Tex

> When this option is enabled, the CRT will be set on the `_Udon_VideoTex` global shader property. This property has been
> standardized by some video players to represent video data in the world, and is usable by both world materials and avatars.

### Shared Materials

![Screen Manager Editor](/img/unity/video/screenman-4.png)

The **Shared Material Upadtes** list let's you specify one or more shared materials to update with video data.  Shared materials
have the following advantages and disadvantages:

<ProsCons pros={[
    "Does not need to copy an additional texture every frame",
    "Can be shared by many objects in scene",
]} cons={[
    "Material shaders must know how to transform video data",
    "Multiple video players need their own non-conflicting material assets",
]} />

Materials need to be backed by a compatible shader that knows how to transform the incoming video data and parameters.  Any materials
using TXL's built-in shaders `VideoTXL/RealtimeEmissiveGamma` and `VideoTXL/UnlitTexture` will work and do not need to be given a
property map.  Any materials with custom compatible shaders will need a property map.

#### Material

> The shared material asset to update.

:::warning

Avoid multiple video players trying to update the same shared material.

:::

#### Property Map

> The property map that connects incoming video data and parameters to shader parameter names.  The **[+]** button next to the object
> field can be used to create a new property map in the scene for you.  A red button indicates a property map is missing and
> required for the given material.

### Material Property Blocks

![Screen Manager Editor](/img/unity/video/screenman-5.png)

The **Material Property Block Overrides** list let's you specify individual objects (with mesh renderers) in the scene to update with
video data.  Material property blocks have the following advantages and disadvantages:

<ProsCons pros={[
    "Does not need to copy an additional texture every frame",
    "Multiple video players do not conflict if they reference different objects",
]} cons={[
    "Material shaders must know how to transform video data",
    "Each objects must be added individually",
]} />

Material Property Blocks come with the same considerations as **Shared Materials** with respect to compatible shaders and property maps.
The main advantage with property blocks is they only need to deal with scene objects, so it's easy to copy self-contained sets of
scene objects without creating resource conflicts.  This is why the default screen manager configuration is setup with a material property
block override for its screen quad object.

#### Renderer

> An object displaying video content.

#### Override Mode

> It's possible to try and set material properties at the object level, which is the `Renderer` mode.  If their are name conflicts, you'll
> need to pick the specific material you want updated, which is the `Material` mode.
>
> When `Renderer` is selected, the manager will specifically look for a TXL material if it's present, which will prevent you from needing
> to supply a property map.

#### Material Slot

> When material mode is selected, this sets which material slot should be updated.  As a convenience, the names of the object's materials
> are filled out in a select field for you.  But be aware that it's the numerical index that is being selected, so if you change the material
> assignments on the object, the material slot selection will not change.

#### Property Map

> The property map that connects incoming video data and parameters to shader parameter names.  The **[+]** button next to the object
> field can be used to create a new property map in the scene for you.  A red button indicates a property map is missing and
> required for the given material.

### Global Shader Properties

![Screen Manager Editor](/img/unity/video/screenman-6.png)

The **Global Shader Properties** list let's you set global shader properties with video data and parameters.  They will not by themselves
render anything in your scene, so this is available for more advanced use cases.  Global Shader Properties come with the following
advantages and disadvantages:

<ProsCons pros={[
    "Does not need to copy an additional texture every frame",
    "Multiple shaders including avatars can access the data",
]} cons={[
    "Must write custom compatible shaders to utilize",
]} />

Each entry is a property map, which will name each of the global properties to write.

#### Property Map

> The property map that connects incoming video data and parameters to global shader property names.

:::info

All global property names in Udon **must** be prefixed with `_Udon`.  If you do not add this prefix to your names in the property map, the
prefix will be added **at runtime**.

:::

### Object Material Overrides

![Screen Manager Editor](/img/unity/video/screenman-7.png)

Object material overrides let you change the material on one or more objects for different video player states.  This can be an
interesting alternative to just doing texture swaps for some states.  Some possible ideas:

* Replacing the logo material with a material that plays a DVD bounce animation
* Replacing the audio material with a material that implements AudioLink visualizations

#### Playback Material

> The material to set when video is actively playing.  When this option is not set, then the object's normal material is
> used for video playback.

#### Logo Material

> The material to set when the video player is idle.

#### Loading Material

> The material to set when the video player is loading a URL.
> If no loading material is set, it will fall back to the logo material.

#### Audio Material

> If the video player detects that a video or stream has loaded, but no video data has appeared for a long enough period of
> time, it will switch the display to the Audio Material if it's set.  If video data eventually does appear, it will switch
> back to the object's playback material or normal material.

#### Error Material

> The material to set when the video player enters an error state.  This is the catch-all material for all
> errors, but it's possible to override some of the error codes with more specific materials.
> If no error material is supplied, it will fall back to the logo material.

#### Error Material Overrides

> The error material overrides refer to more specific error codes that can be helpful to call out.
>
> * **Error Invalid Material** - The material used when a URL can't be loaded because it is invalid or offline.
> * **Error Blocked Material** - The material used when a player doesn't have the "Untrusted URLs" option enabled and the domain is untrusted.
> * **Error Rate Limited Material** - The material used when video loading has been rate limited by the client.

#### Objects

> The list of objects that material overrides should be applied to.  The entire set of objects gets the same set of
> overrides, so more advanced uses may require multiple screen managers or utilizing the public API to respond to state
> changes instead.

### Debug Options

![Screen Manager Editor](/img/unity/video/screenman-8.png)

#### Debug Log

> The debug log object that any logging should be directed to.

#### Debug State

> A debug state object that will peridocally capture a snapshot of internal state of the object.

#### Include Events

> A more verbose logging option that writes entries related to event handling.

#### Include Low Level

> A more verbose logging option that includes more granular logging.

#### VRC Logging

> Writes a copy of any logged messages to the VRChat log.

## Public API

### Network Sync

This object is **not** network synced.

### Inherited API

* EventBase Public API

### Events

ScreenManager extends the CommonTXL EventBase class, so other scripts can register interest in the following events:

| Event | Description |
|---|---|
| **EVENT_UPDATE** | Emitted when when the video texture resource changes. |
| **EVENT_CAPTURE_VALID** | Emitted when texture data from a video source first appears. |

### Properties

#### <ApiProperty return="bool" property="CaptureIsAVPro" get={true} />

> Returns true when the current texture data is valid video from an AVPro source.

#### <ApiProperty return="bool" property="CaptureNeedsApplyGamma" get={true} />

> Returns true when the current texture data is valid video and needs to have gamma correction applied.

#### <ApiProperty return="bool" property="CaptureNeedsInvert" get={true} />

> Returns true when the current texture data is valid video and needs to be inverted on the Y-axis.

#### <ApiProperty return="float" property="CurrentAspectRatioOverride" get={true} />

> If the current texture data is valid video, gets the aspect ratio of the video.  Otherwise gets the aspect ratio
> set in the texture overrides section.

#### <ApiProperty return="TXLScreenFit" property="CurrentScreenFit" get={true} />

> Gets the current screen fit setting that should be used.

#### <ApiProperty return="Texture" property="CurrentTexture" get={true} />

> Gets the current texture that should be displayed.  This could either be a resource representing video data, or a placeholder texture.

### Methods

#### <ApiMethod return="void" method="_BindVideoPlayer" params={["TXLVideoPlayer", "videoPlayer"]} />

> Binds the screen manager to a new video player and refreshes displays.  The manager will unhook from any previously
> bound video player.
>
> Passing `null` will leave the manager in an unbound state, causing dislays to revert to a default state.

#### <ApiMethod return="Texture" method="_GetResolvedTextureOverride" params={["ScreenOverrideType", "overrideType"]} />

> Gets the current override texture that would actually be applied for the given override type.

#### <ApiMethod return="Texture" method="_GetTextureOverride" params={["ScreenOverrideType", "overrideType"]} />

> Gets the current override texture for the given override type.

#### <ApiMethod return="void" method="_Refresh" />

> Refreshes displays.

#### <ApiMethod return="void" method="_SetDebugState" params={["DebugState", "debugState"]} />

> Sets the debug state object at runtime, replacing the previous debug state if it exists.  Passing `null` will unasign
> any current debug state.

#### <ApiMethod return="void" method="_SetTextureOverride" params={["ScreenOverrideType", "overrideType", "Texture", "texture"]} />

> Sets the current override texture for the given override type.  If the texture is different than what was
> already set, causes displays to refresh.

