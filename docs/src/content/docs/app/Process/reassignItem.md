---
title: Reassign item
description: Reassign a process task to another user
sidebar:
  order: 48
---

Reassigns a process task to another user.

### Parameters

| Parameters         | Type   | Description                                                       |
| ------------------ | ------ | ----------------------------------------------------------------- |
| instanceId         | String | Required. The `_id` of the instance.                             |
| activityInstanceId | String | Required. The `_activity_instance_id` of the task.                |
| reassignTo         | Object | Required. The user to reassign to (e.g. `{ _id: "user_789" }`).  |
| comment            | String | Required. Reason for reassigning.                                 |
| reassignType       | String | Optional. One of `initiator`, `approver` (default), `admin`.      |
| reassignedFrom     | Array  | Optional. The users the task is being reassigned from.            |

### Syntax

```js
await processInstance.reassignItem({
  instanceId: "item_123",
  activityInstanceId: "act_456",
  reassignTo: { _id: "user_789" },
  comment: "Reassigning to manager",
});
```
