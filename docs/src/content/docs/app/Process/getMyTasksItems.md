---
title: Get my tasks items
description: Fetch the pending tasks assigned to you
sidebar:
  order: 36
---

Fetches the pending tasks assigned to you.

### Parameters

| Parameters  | Type   | Description                                          |
| ----------- | ------ | ---------------------------------------------------- |
| activityId  | String | Optional. Scopes tasks to a specific step/activity.  |
| searchValue | String | Optional. Filters tasks by a search term.            |
| pageNumber  | Number | Optional. Page to fetch. Defaults to `1`.            |
| pageSize    | Number | Optional. Number of items per page. Defaults to `50`.|
| payload     | Object | Optional. Columns, Filters and Sort configuration.   |

### Syntax

```js
const { items } = await processInstance.getMyTasksItems({ activityId: "Approval_Step" });
```

### Returns

Returns an object containing the `items` array and the `total` count.
