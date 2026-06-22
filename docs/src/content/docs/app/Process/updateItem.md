---
title: Update item
description: Update an existing process instance
sidebar:
  order: 41
---

Updates an existing process instance.

### Parameters

| Parameters         | Type   | Description                                        |
| ------------------ | ------ | -------------------------------------------------- |
| instanceId         | String | Required. The `_id` of the instance.              |
| activityInstanceId | String | Required. The `_activity_instance_id` of the task. |
| data               | Object | Required. The updated field values.                |

### Syntax

```js
await processInstance.updateItem({
  instanceId: "item_123",
  activityInstanceId: "activity_456",
  data: { LeaveType: "Sick" },
});
```

### Returns

Returns the updated item.
