---
title: User
description: Retrieve authenticated user details
sidebar:
  order: 2
---

You can access the authenticated user's details using the `kf.user` property. `Name`, `Email`, and `_id` return the current user's name, email, and user ID respectively.

### Syntax

```js
const { Name, Email, _id } = kf.user;
```

### Returns

Returns the current user's details.

| Property | Type   | Description              |
| -------- | ------ | ------------------------ |
| Name     | String | The user's display name. |
| Email    | String | The user's email.        |
| \_id     | String | The user's unique ID.    |
