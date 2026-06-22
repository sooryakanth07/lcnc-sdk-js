---
title: Get my items
description: Fetch the items you initiated
sidebar:
  order: 35
---

Fetches the items you initiated, optionally filtered by status.

### Parameters

| Parameters  | Type   | Description                                                                                    |
| ----------- | ------ | --------------------------------------------------------------------------------------------- |
| status      | String | Optional. One of `draft`, `inprogress`, `completed`, `withdrawn`, `rejected`, `all` (default).|
| searchValue | String | Optional. Filters items by a search term.                                                     |
| pageNumber  | Number | Optional. Page to fetch. Defaults to `1`.                                                     |
| pageSize    | Number | Optional. Number of items per page. Defaults to `50`.                                         |
| payload     | Object | Optional. Columns, Filters and Sort configuration for the query.                              |

### Syntax

```js
const { items, total } = await processInstance.getMyItems({ status: "inprogress" });
```

### Returns

Returns an object containing the `items` array and the `total` count.
