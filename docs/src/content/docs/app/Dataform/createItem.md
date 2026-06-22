---
title: Create item
description: Create a new dataform item
sidebar:
  order: 26
---

Creates a new item in the dataform.

### Parameters

| Parameters | Type   | Description                                                          |
| ---------- | ------ | ------------------------------------------------------------------- |
| data       | Object | Optional. Initial field values as an object of field IDs to values. |
| viewId     | String | Optional. View ID for a view-specific create.                       |

### Syntax

```js
const item = await dataformInstance.createItem({
  data: { Name: "New Record" },
});
```

### Returns

Returns the newly created item, including its generated `_id`.
