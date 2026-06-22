---
title: Update item
description: Update an existing dataform item
sidebar:
  order: 27
---

Updates an existing item in the dataform.

### Parameters

| Parameters | Type   | Description                                   |
| ---------- | ------ | --------------------------------------------- |
| itemId     | String | Required. The `_id` of the item.             |
| data       | Object | Required. The updated field values.           |
| viewId     | String | Optional. View ID for a view-specific update. |

### Syntax

```js
await dataformInstance.updateItem({
  itemId: "item_123",
  data: { Name: "Updated Record" },
});
```

### Returns

Returns the updated item.
