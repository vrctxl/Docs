---
sidebar_position: 1
---

# Digest Data Validator

The Digest Data Validator is a Data Validator implementation that uses a digest (such as an MD5 or SHA1 hash) included
with the data to validate that the data itself has not been tampered with.  The digest is expected to be prepended to
the data, which is isolated in the pre-validate step and discarded by the transform.  The data is hashed with a specified
hash function, hash strategy, and secret key.  If the result doesn't match the digest value, the data is assumed to be
tampered with and the validation fails.

## Creating a Digest

The digest that's included with the data needs to be generated with:

* A compatible hash function
* A secret key
* A strategy for how the key is hashed with the data.

The digest should be **prepended** to the data, as the very first part of th string, with space or newline characters 
optionally following it.

<details>
  <summary>Data Example</summary>
  Example of `Newline` data for a **Remote Whitelist** including a SHA1 digest

  ```
  a01afb47df07f98b8fc4f4e7e7ec7ba185d58f2e
  Texelsaur
  gplord
  cnlohr
  ```
</details>

### Hash Functions

Hash functions are supported via the included **UdonHashLib** class by [Gorialis](https://github.com/Gorialis).

UdonHashLib supports the following has functions:

* MD5
* SHA1, SHA224, SHA256, SHA384, SHA512

The validator needs to reference an object with the UdonHashLib script.

Udon is not efficient at cryptographic hashing, so the more secure SHA variants are going to be slower and may lock up
the player for a short time, particularly if the data being hashed is large, as in a large Patreon list.  **SHA1** should
be reasonable for most cases.

### Hashing Strategies

Hashing strategy refers to how a secret key is combined with the data before hashing it.  The following strategies are supported:

* **Prefix Key** - Append the data string to the key string
* **Postfix Key** - Append the key string to the data string
* **Prefix Postfix Key** - Sandwich the data string between two copies of the ket string
* **HMAC** - For the SHA hash functions only

The **HMAC** strategy involves a more sophisticated process of transforming the key, hashing it with the data, and hashing the result.
It's considered more secure than simple appending of key and data strings.  Most cryptographic libraries should supply dedicated HMAC 
hashing functions.  HMAC may be up to 2x slower than other strategies because it performs two hashing passes, but only one of them
is performed on the full data length.

The **Prefix Postfix** stategy is better than prefix or postfix alone.

<details>
  <summary>Prefix Postfix Example</summary>
  Example of `Newline` data combined with the secret key `txl123` using the **Prefix Postfix Key** strategy.
  Note that there is no additional whitespace between key and data.

  ```
  txl123Texelsaur
  gplord
  cnlohrtxl123
  ```
</details>

### Secret Key

A secret key is a string known by the creator of the data and the scene, but not anyone else.  It's necessary to prevent
a would-be tamperer to generate a new valid digest for the modified data.

:::warning Key Security

It's not possible to keep a key completely secure on the client.  Any player who is able to rip the world and unpack it
can eventually root out the key, even if steps have been taken to obfuscate it.  How much effort you want to force an
attacker to spend finding the key is up to you, but you cannot count on your system to be completely secure.

:::

To give the world developer flexibility in how to store their secret key, it needs to be provided from an udon component
that extends the **DataValidatorKey** class.

An implementation is included that serializes the key as a field on the script.  This is convenient, but probably the least
secure way to store a key in your scene.  This may be discoverable with the right client tools without needing to fully
rip the world open.  However, if you only care about making the process annoying, this might be good enough.

A variant of the Data Validator prefab is included with the serialized key provider by default.
