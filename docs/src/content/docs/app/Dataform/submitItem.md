---
title: Submit item
description: Submit a dataform item
sidebar:
  order: 29
---

Submits/finalizes a dataform item.

### Parameters

| Parameters | Type   | Description                                   |
| ---------- | ------ | --------------------------------------------- |
| itemId     | String | Required. The `_id` of the item.             |
| data       | Object | Optional. Field values to submit with.        |
| viewId     | String | Optional. View ID for a view-specific submit. |

### Syntax

```js
await dataformInstance.submitItem({ itemId: "item_123" });
```
