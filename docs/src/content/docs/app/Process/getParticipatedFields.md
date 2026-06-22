---
title: Get participated fields
description: Get field definitions for a participated step
sidebar:
  order: 54
---

Returns the field definitions for a specific task step in the participated view.

### Parameters

| Parameters | Type   | Description                            |
| ---------- | ------ | -------------------------------------- |
| activityId | String | Required. The target step/activity ID. |

### Syntax

```js
const fields = await processInstance.getParticipatedFields({ activityId: "Approval_Step" });
```
