---
title: Create item
description: Start a new process instance
sidebar:
  order: 40
---

Creates a new process instance (starts a new process).

### Parameters

| Parameters | Type   | Description                                                          |
| ---------- | ------ | ------------------------------------------------------------------- |
| data       | Object | Optional. Initial field values as an object of field IDs to values. |

### Syntax

```js
const item = await processInstance.createItem({ data: { LeaveType: "Annual" } });
```

### Returns

Returns the newly created process item, including its `_id` and `_activity_instance_id`.
