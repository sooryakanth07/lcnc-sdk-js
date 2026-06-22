---
title: Submit item
description: Submit a board item
sidebar:
  order: 18
---

Submits a board item.

### Parameters

| Parameters | Type   | Description                       |
| ---------- | ------ | --------------------------------- |
| instanceId | String | Required. The `_id` of the item. |

### Syntax

```js
await boardInstance.submitItem({ instanceId: "item_123" });
```
