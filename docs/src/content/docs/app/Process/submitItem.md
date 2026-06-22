---
title: Submit item
description: Submit a process task
sidebar:
  order: 44
---

Submits a process task, moving it to the next step.

### Parameters

| Parameters         | Type   | Description                                        |
| ------------------ | ------ | -------------------------------------------------- |
| instanceId         | String | Required. The `_id` of the instance.              |
| activityInstanceId | String | Required. The `_activity_instance_id` of the task. |
| comment            | String | Optional. A comment to attach to the action.       |

### Syntax

```js
await processInstance.submitItem({
  instanceId: "item_123",
  activityInstanceId: "act_456",
});
```
