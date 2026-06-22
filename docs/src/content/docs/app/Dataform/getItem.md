---
title: Get item
description: Fetch a single dataform item by ID
sidebar:
  order: 25
---

Fetches a single item by its ID.

### Parameters

| Parameters | Type   | Description                                  |
| ---------- | ------ | -------------------------------------------- |
| itemId     | String | Required. The `_id` of the item.            |
| viewId     | String | Optional. View ID for a view-specific fetch. |

### Syntax

```js
const item = await dataformInstance.getItem({ itemId: "item_123" });
```

### Returns

Returns the item data.
