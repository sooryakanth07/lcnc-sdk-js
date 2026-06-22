---
title: Get admin items
description: Fetch all items as an admin
sidebar:
  order: 38
---

Fetches all items in the process. Requires admin access.

### Parameters

| Parameters  | Type   | Description                                          |
| ----------- | ------ | ---------------------------------------------------- |
| searchValue | String | Optional. Filters items by a search term.            |
| pageNumber  | Number | Optional. Page to fetch. Defaults to `1`.            |
| pageSize    | Number | Optional. Number of items per page. Defaults to `50`.|
| payload     | Object | Optional. Columns, Filters and Sort configuration.   |

### Syntax

```js
const { items } = await processInstance.getAdminItems();
```

### Returns

Returns an object containing the `items` array and the `total` count.
