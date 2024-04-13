---
sidebar_position: 1
---

# Data Validator

The **DataValidator** class is an abstract base that validators can extend from.  It provides a basic interface
for validating and transforming data.

## Public API

### Network Sync

This object is **not** network synced.

### Methods

#### <ApiMethod return="bool" method="_PostValidate" params={["string", "data"]} />

> Returns true if the provided data passes the validation check.  This check happens on the data returned by the
> transform method.
>
> This method returns **true** by default, so it does not need to be implemented if post-validation is not needed.

#### <ApiMethod return="bool" method="_PreValidate" params={["string", "data"]} />

> Returns true if the provided data passes the validation check.  This check happens before the transform is called.
>
> This method returns **true** by default, so it does not need to be implemented if pre-validation is not needed.

#### <ApiMethod return="string" method="_Transform" params={["string", "data"]} />

> Returns a transformed version of the original data.
>
> This method returns the data string by default, so it does not need to be implemented if transformation is not needed.
