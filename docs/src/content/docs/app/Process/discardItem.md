---
title: Discard item
description: Discard a draft process instance
sidebar:
  order: 51
---

Discards a draft process instance.

### Parameters

| Parameters | Type   | Description                           |
| ---------- | ------ | ------------------------------------- |
| instanceId | String | Required. The `_id` of the instance. |

### Syntax

```js
await processInstance.discardItem({ instanceId: "item_123" });
```
