---
title: Delete item
description: Delete a process instance
sidebar:
  order: 42
---

Deletes a process instance.

### Parameters

| Parameters | Type   | Description                           |
| ---------- | ------ | ------------------------------------- |
| instanceId | String | Required. The `_id` of the instance. |

### Syntax

```js
await processInstance.deleteItem({ instanceId: "item_123" });
```
