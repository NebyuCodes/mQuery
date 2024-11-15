# MQuery

`MQuery` is a TypeScript utility class designed to streamline MongoDB queries in Node.js applications using Mongoose. It provides features for filtering, sorting, projecting fields, and paginating results based on request parameters.

## Features

- **Dynamic Filtering**: Automatically filter data based on query parameters, supporting regex searches on specified fields.
- **Sorting**: Easily sort query results based on request parameters.
- **Field Projection**: Select specific fields to return in the query results.
- **Pagination**: Implement pagination with customizable page and limit values.

## Installation

To install the necessary dependencies, use npm:
npm install mongoose

## Usage
### Importing class

import MQuery from './path/to/MQuery';
import { YourModel } from './path/to/yourModel'; // Replace with your actual model

### Example Implementation

import { Request, Response } from 'express';
import { YourModel } from './yourModel'; // Replace with your actual model
import MQuery from './MQuery'; // Adjust the import path

export const getItems = async (req: Request, res: Response) => {
  try {
    const features = new MQuery<YourModel>(
      YourModel.find(),
      ['title', 'description'], // Specify searchable fields
      req.query
    )
      .filter()
      .sort()
      .project()
      .paginate();

    const items = await features.dbQuery;

    res.status(200).json({
      status: 'success',
      results: items.length,
      data: {
        items,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

### Class methods and properties
* constructor(dbQuery: Query<T[], T>, searchFields: string[], reqQuery?: RequestQuery): Initializes the MQuery instance.
* dbQuery: Mongoose query object.
* searchFields: Array of fields to apply regex filtering.
* reqQuery: Optional request query parameters.
* filter(): MQuery<T>: Applies filtering based on request query parameters.
* sort(): MQuery<T>: Sorts the results based on sort query parameter or defaults to sorting by -createdAt.
* project(): MQuery<T>: Projects specific fields to return based on the fields query parameter.
* paginate(): MQuery<T>: Implements pagination logic based on page and limit query parameters.

## Contributing

If you’d like to contribute to the project, feel free to submit a pull request or open an issue with suggestions.

## License

This project is licensed under the MIT License.
Feel free to modify any sections further or add more details as needed! If you have any more requests, just let me know.
