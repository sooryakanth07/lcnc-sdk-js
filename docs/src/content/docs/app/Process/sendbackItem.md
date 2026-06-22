---
title: Sendback item
description: Send a process task back to a previous step
sidebar:
  order: 47
---

Sends a process task back to a previous step.

### Parameters

| Parameters         | Type   | Description                                         |
| ------------------ | ------ | --------------------------------------------------- |
| instanceId         | String | Required. The `_id` of the instance.               |
| activityInstanceId | String | Required. The `_activity_instance_id` of the task.  |
| stepId             | String | Required. The target step to send the task back to. |
| comment            | String | Required. Reason for sending back.                  |

### Syntax

```js
await processInstance.sendbackItem({
  instanceId: "item_123",
  activityInstanceId: "act_456",
  stepId: "step_789",
  comment: "Please revise",
});
```
