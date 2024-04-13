# Validation

Data validation is an optional component that allows data to be validated for its integrity or
transformed in some way before being used.  Data validation is provided by any object extending
from the **DataValidator** base class.

The [Remote Whitelist](../whitelist-sources/remote-whitelist.md) is one AccessTXL component that can
accept a DataValidator, which can be used to make downloaded string content more resistant to
tampering.
