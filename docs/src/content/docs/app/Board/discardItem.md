---
title: Discard item
description: Discard a board item
sidebar:
  order: 19
---

Discards a board item.

### Parameters

| Parameters | Type   | Description                       |
| ---------- | ------ | --------------------------------- |
| instanceId | String | Required. The `_id` of the item. |

### Syntax

```js
await boardInstance.discardItem({ instanceId: "item_123" });
```
