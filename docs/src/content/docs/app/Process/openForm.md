---
title: Open form
description: Open the form UI for a process instance
sidebar:
  order: 43
---

Opens the form UI for a process instance.

### Parameters

| Parameters | Type   | Description                                                        |
| ---------- | ------ | ------------------------------------------------------------------ |
| item       | Object | An object with `_id` and `_activity_instance_id` (both required). |

### Syntax

```js
processInstance.openForm({
  _id: "item_123",
  _activity_instance_id: "activity_456",
});
```
