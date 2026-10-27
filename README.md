<div align="center">

# Mutualzz development moved to [git.mutualzz.com](https://git.mutualzz.com/mutualzz/mutualzz)

**GitHub is a read-only mirror. Issues and pull requests opened on GitHub are not monitored.**

Sign in with your GitHub account. No new password needed.

</div>

# `Mutualzz BitField`

BigInt bitfield helpers and Mutualzz permission / flag definitions.

Used across the server and clients to pack and check flags (permissions, user flags, message flags, and more) with a small typed API.

## What’s in here

| Export             | Role                                                                                                                 |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `BitField`         | Typed bitfield class (`has`, `hasAny`, `hasAll`, add/remove, serialize)                                              |
| Flag tables        | Named `bigint` flag maps for channels, members, roles, spaces, users, expressions, messages, read state, permissions |
| Engine / hierarchy | Permission resolution helpers used with those flags                                                                  |

Example:

```ts
import { BitField, permissionFlags } from "@mutualzz/bitfield";

const perms = BitField.fromBits(permissionFlags, someBits);
if (perms.has("ViewChannel")) {
  // …
}
```

## Flag modules

- Channel, member, role, space, user
- Permissions
- Expressions, message, read state

## Development

From the monorepo root:

```bash
pnpm --filter @mutualzz/bitfield build
pnpm --filter @mutualzz/bitfield dev
pnpm --filter @mutualzz/bitfield typecheck
```

## Authors & credit

Community contributors are credited via git authorship, PR attribution, and changelogs (see [`CONTRIBUTING.md`](https://github.com/Mutualzz/bitfield/blob/master/CONTRIBUTING.md)).

## License & contributions

Source is available for transparency and community contributions. Contributors get credit for merged work.

- [`LICENSE`](https://github.com/Mutualzz/bitfield/blob/master/LICENSE) — no unofficial redistribution / competing hosted services without permission
- [`CONTRIBUTING.md`](https://github.com/Mutualzz/bitfield/blob/master/CONTRIBUTING.md) — how to fork, open PRs, and how credit works
