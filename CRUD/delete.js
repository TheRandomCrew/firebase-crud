"use strict";
//@ts-check
import { database } from "../init";

/**
 * Delete the Item on the reference's location
 * @param {string} id 
 * @param {string} reference 
 */
export const deleteOne = (id, reference) => {
  const ref = database.ref(reference);
  return ref
    .child(id)
    .remove()
    .then(res => {
      console.log(res);
      return {
        success: true,
        message: "Item deleted",
        data: {
          deleted_id: id
        }
      };
    })
    .catch(error => {
      return {
        success: false,
        message: "Error while deleteing item " + id,
        error: {
          trace: error.trace,
          message: error.message
        }
      };
    });
};
