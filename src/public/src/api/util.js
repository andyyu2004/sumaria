import { Left } from "../types/Either";

/** Handler for errors if a reject is called during an API call
 *  If there is a data.error field, then it got through to the our api and we can return the appropriate message the server provides
 *  Otherwise, something else went wrong
 */
export const apiErrorHandler = err => err.response.data.error
    ? new Left(err.response.data.message)
    : new Left("Unknown error occurred, server may not be currently available");