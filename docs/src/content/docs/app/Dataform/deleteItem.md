---
title: Delete item
description: Delete a dataform item
sidebar:
  order: 28
---

Deletes an item from the dataform.

### Parameters

| Parameters | Type   | Description                                   |
| ---------- | ------ | --------------------------------------------- |
| itemId     | String | Required. The `_id` of the item.             |
| viewId     | String | Optional. View ID for a view-specific delete. |

### Syntax

```js
await dataformInstance.deleteItem({ itemId: "item_123" });
```
