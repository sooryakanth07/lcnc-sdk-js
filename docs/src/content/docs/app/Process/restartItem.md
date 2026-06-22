---
title: Restart item
description: Restart a rejected or withdrawn process instance
sidebar:
  order: 50
---

Restarts a rejected or withdrawn process instance.

### Parameters

| Parameters         | Type   | Description                                        |
| ------------------ | ------ | -------------------------------------------------- |
| instanceId         | String | Required. The `_id` of the instance.              |
| activityInstanceId | String | Required. The `_activity_instance_id` of the task. |

### Syntax

```js
await processInstance.restartItem({
  instanceId: "item_123",
  activityInstanceId: "act_456",
});
```
