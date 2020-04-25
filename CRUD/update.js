"use strict";
//@ts-check
import { database } from "../init";

/**
 * Update an Item alreade on the database
 * @param {string} id 
 * @param {object} data 
 * @param {string} reference 
 */
export const update = (id, data, reference) => {
  const ref = database.ref(reference);
  return ref
    .child(id)
    .update(data)
    .then(res => {
      return {
        success: true,
        message: 'Update on ' + id,
        data: {
          posts: res
        }
      };
    })
    .catch(error => {
      return {
        success: false,
        message: 'An error while reading item ' + id,
        error: {
          trace: error.trace,
          message: error.message
        }
      };
    });
};
