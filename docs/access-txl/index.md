# Overview

The **AccessTXL** package builds out a much more robust access control system around the core AccessControl 
component found in the CommonTXL package.

Most systems and components associated with VideoTXL can make use of a common access control system. 
The system allows controlling access based on attributes like instance owner and master, as well as displayname-based 
whitelisting. The system also supports bridges to allow controlling access via other state (like a lock control), or 
to delegate access checks to other third party access control systems.

By utilizing the public API exposed by the core AccessControl component, any other script can take advantage of the
full AccessTXL features.
