---
title: Get my task fields
description: Get field definitions for a my-tasks step
sidebar:
  order: 53
---

Returns the field definitions for a specific task step in the my-tasks view.

### Parameters

| Parameters | Type   | Description                            |
| ---------- | ------ | -------------------------------------- |
| activityId | String | Required. The target step/activity ID. |

### Syntax

```js
const fields = await processInstance.getMyTaskFields({ activityId: "Approval_Step" });
```
