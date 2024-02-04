# Overview

**TXL Prefabs** are a small ecosystem of packages originally rooted in the **VideoTXL** video player.  VideoTXL was built
with a focus on supporting events, and several adjacent components were developed along with it to support that purpose.
These other components have since been broken apart into separate independent or semi-independent packages.

## Package Hierarchy

![Dependency Graph](/img/package-deps.png)

The above chart shows the dependency graph of the packages.  All packages depend on **CommonTXL** for base classes and
essential shared components.  CommonTXL can also be a useful supporting framework for your own scripting.

The **MiscTXL** package is a bit of a leftovers bucket for useful components that are otherwise not essential.  The
PlayerAudioTXL package does depend on it to support its microphone object.

The **AccessTXL**, **PlayerAudioTXL**, and **VideoTXL** packages are all independent from each other, and can be used
toegether or by themselves.

Finally the **PortalTXL** package is prefab that uses everything else in combination to support the A/V needs for
interactive VR/in-person "portals".
