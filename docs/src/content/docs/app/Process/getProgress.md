---
title: Get progress
description: Get the progress/timeline of a process instance
sidebar:
  order: 56
---

Returns the progress/timeline of a process instance.

### Parameters

| Parameters | Type   | Description                           |
| ---------- | ------ | ------------------------------------- |
| instanceId | String | Required. The `_id` of the instance. |

### Syntax

```js
const progress = await processInstance.getProgress({ instanceId: "item_123" });
```
