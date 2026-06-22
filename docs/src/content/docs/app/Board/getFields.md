---
title: Get fields
description: Get the field definitions for a board
sidebar:
  order: 21
---

Returns the field definitions for the board.

### Parameters

| Parameters | Type   | Description                                     |
| ---------- | ------ | ----------------------------------------------- |
| viewId     | String | Optional. Scopes the fields to a specific view. |

### Syntax

```js
const fields = await boardInstance.getFields({ viewId: "AllItems_View" });
```

### Returns

Returns the list of field definitions.
