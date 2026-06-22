---
title: Get item
description: Fetch a single board item by ID
sidebar:
  order: 14
---

Fetches a single board item by its instance ID.

### Parameters

| Parameters | Type   | Description                       |
| ---------- | ------ | --------------------------------- |
| instanceId | String | Required. The `_id` of the item. |

### Syntax

```js
const item = await boardInstance.getItem({ instanceId: "item_123" });
```

### Returns

Returns the item data.
