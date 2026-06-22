---
title: Get reassignees
description: List eligible reassignees for a process task
sidebar:
  order: 49
---

Returns the list of eligible reassignees for a process task.

### Parameters

| Parameters         | Type   | Description                                           |
| ------------------ | ------ | ----------------------------------------------------- |
| instanceId         | String | Required. The `_id` of the instance.                 |
| activityInstanceId | String | Required. The `_activity_instance_id` of the task.    |
| pageNumber         | Number | Optional. Page to fetch. Defaults to `1`.             |
| pageSize           | Number | Optional. Number of users per page. Defaults to `50`. |
| query              | String | Optional. Filters reassignees by a search term.       |

### Syntax

```js
const reassignees = await processInstance.getReassignees({
  instanceId: "item_123",
  activityInstanceId: "act_456",
});
```
