---
title: Get participated items
description: Fetch items you participated in
sidebar:
  order: 37
---

Fetches the items you participated in (items where you took action).

### Parameters

| Parameters  | Type   | Description                                          |
| ----------- | ------ | ---------------------------------------------------- |
| activityId  | String | Optional. Scopes items to a specific step/activity.  |
| searchValue | String | Optional. Filters items by a search term.            |
| pageNumber  | Number | Optional. Page to fetch. Defaults to `1`.            |
| pageSize    | Number | Optional. Number of items per page. Defaults to `50`.|
| payload     | Object | Optional. Columns, Filters and Sort configuration.   |

### Syntax

```js
const { items } = await processInstance.getParticipatedItems();
```

### Returns

Returns an object containing the `items` array and the `total` count.
