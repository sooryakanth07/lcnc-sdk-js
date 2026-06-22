---
title: Get items
description: Fetch a paginated list of board items
sidebar:
  order: 13
---

Fetches a paginated list of items from a board view.

### Parameters

| Parameters  | Type   | Description                                                       |
| ----------- | ------ | ----------------------------------------------------------------- |
| viewId      | String | Optional. The view to fetch items from.                          |
| searchValue | String | Optional. Filters items by a search term.                        |
| pageNumber  | Number | Optional. Page to fetch. Defaults to `1`.                        |
| pageSize    | Number | Optional. Number of items per page. Defaults to `50`.            |
| payload     | Object | Optional. Columns, Filters and Sort configuration for the query. |

### Syntax

```js
const { items, total } = await boardInstance.getItems({
  viewId: "AllItems_View",
  pageNumber: 1,
  pageSize: 50,
});
```

### Returns

Returns an object containing the `items` array and the `total` count.
