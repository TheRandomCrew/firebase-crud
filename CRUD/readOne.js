"use strict";
//@ts-check
import { database } from "../init";

/**
 * Read one Item by id
 * @param {string} id 
 * @param {string} reference 
 */
export const readOne = (id, reference) => {
  const ref = database.ref(reference);
  return ref
    .child(id)
    .once('value')
    .then(snapshot => {
      return {
        success: true,
        message: 'Read item ' + id,
        data: {
          post: snapshot.val()
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
