---
title: Get items
description: Fetch a paginated list of dataform items
sidebar:
  order: 24
---

Fetches a paginated list of items from the dataform with optional search, sorting, and pagination.

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
const { items, total } = await dataformInstance.getItems({
  pageNumber: 1,
  pageSize: 50,
});
```

### Returns

Returns an object containing the `items` array and the `total` count.
