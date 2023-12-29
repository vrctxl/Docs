# Whitelist Sources

Whitelist sources are different components that can be plugged into an AccessControl object that serve the abstract purpose
of determining whether a specific player is "whitelisted" or not.  This can be as simple as a component keeping a list of
display names to check against, as is the case with the Static Whitelist, or it can be more complex.

All whitelist source components extend from a common base class, **AccessControlUserSource**, which is one of the base
classes provided by CommonTXL.

