# XTable - Sortable Date and Views Table

A React component implementing a sortable table with date and views sorting functionality, including secondary sort capabilities.

## Component Overview

The XTable component displays a table of articles with their dates and view counts, providing sorting functionality based on dates and views.

## Features

### 1. Sort by Date (Primary and Secondary Sort)
- **Primary Sort:** 
 - Sorts all entries by date in descending order (latest dates appear first)
 - Uses `new Date()` for proper chronological comparison
 - Example: 2023-09-02 appears before 2023-09-01

- **Secondary Sort:** 
 - When two or more entries have the same date, they are sorted by views in descending order
 - Higher view counts appear first
 - Example: For date "2023-09-02":
   - 150 views appears before 120 views

### 2. Sort by Views (Primary and Secondary Sort)
- **Primary Sort:**
  - Sorts all entries by view count in descending order (highest views appear first)
  - Direct numerical comparison
  - Example: 200 views appears before 150 views

- **Secondary Sort:**
  - When two or more entries have the same view count, they are sorted by date in descending order
  - Latest dates appear first
  - Example: For 100 views:
    - 2023-09-01 appears before 2022-09-01

