---
title: Update item
description: Update an existing board item
sidebar:
  order: 16
---

Updates an existing board item.

### Parameters

| Parameters | Type   | Description                         |
| ---------- | ------ | ----------------------------------- |
| instanceId | String | Required. The `_id` of the item.    |
| data       | Object | Required. The updated field values. |

### Syntax

```js
await boardInstance.updateItem({
  instanceId: "item_123",
  data: { Name: "Updated Item" },
});
```

### Returns

Returns the updated item.
