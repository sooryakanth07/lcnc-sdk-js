---
title: Reject item
description: Reject a process task
sidebar:
  order: 45
---

Rejects a process task.

### Parameters

| Parameters         | Type   | Description                                        |
| ------------------ | ------ | -------------------------------------------------- |
| instanceId         | String | Required. The `_id` of the instance.              |
| activityInstanceId | String | Required. The `_activity_instance_id` of the task. |
| comment            | String | Required. Reason for the rejection.                |

### Syntax

```js
await processInstance.rejectItem({
  instanceId: "item_123",
  activityInstanceId: "act_456",
  comment: "Not approved",
});
```
