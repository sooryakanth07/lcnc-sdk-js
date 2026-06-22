---
title: Create item
description: Create a new board item
sidebar:
  order: 15
---

Creates a new board item.

### Parameters

| Parameters | Type   | Description                                                          |
| ---------- | ------ | ------------------------------------------------------------------- |
| data       | Object | Optional. Initial field values as an object of field IDs to values. |

### Syntax

```js
const item = await boardInstance.createItem({
  data: { Name: "New Item" },
});
```

### Returns

Returns the newly created item, including its generated `_id`.
