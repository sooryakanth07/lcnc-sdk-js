---
title: Get item
description: Fetch a single process instance by ID
sidebar:
  order: 39
---

Fetches a single process instance by its ID.

### Parameters

| Parameters | Type   | Description                           |
| ---------- | ------ | ------------------------------------- |
| instanceId | String | Required. The `_id` of the instance. |

### Syntax

```js
const item = await processInstance.getItem({ instanceId: "item_123" });
```

### Returns

Returns the instance data.
