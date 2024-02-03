# Installation

These instructions will walk you through making the TXL Prefabs packages available in your world project.
For instructions specific to a single component, check the documentation for that component.

## Install through the VCC

The official way to install any of these packages is through the [VRChat Creator Companion](https://vcc.docs.vrchat.com/).

Add the central [TXL Prefabs VPM Repository](https://vrctxl.github.io/VPM/) to your creator companion by clicking the
top-most **Add to VCC** button.

![VPM Repository](/img/vpm-install.png)

This should offer to open the URL in CreatorCompanion, which you should accept.

![Open CreatorCompanion](/img/vpm-install-2.png)

The CreatorCompanion should ask you to confirm adding the repository, and will list all of TXL packages.

![Add Repository](/img/vpm-install-3.png)

Now when you click **Manage Project** for your world project in the CreatorCompanion, you should see all of the TXL
packages listed

![Add Package](/img/vpm-install-4.png)

If you want to add, for example, the VideoTXL package to your project, you can click the **(+)** to install it.
This will also install its dependencies automatically, which in this case would be CommonTXL.

## Manual Installation

If you can't or won't use the VCC, you can add the packages yourself.  But you must handle installing the dependencies
and keeping versions up to date yourself.  So if you go to the VideoTXL GitHub repo and download the package manually,
you should first go to the CommonTXL GitHub repo and download and install that package first.