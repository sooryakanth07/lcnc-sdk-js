---
title: Delete item
description: Delete a board item
sidebar:
  order: 17
---

Deletes a board item.

### Parameters

| Parameters | Type   | Description                       |
| ---------- | ------ | --------------------------------- |
| instanceId | String | Required. The `_id` of the item. |

### Syntax

```js
await boardInstance.deleteItem({ instanceId: "item_123" });
```
