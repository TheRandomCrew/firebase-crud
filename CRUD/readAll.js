"use strict";
//@ts-check
import { database } from "../init";

/**
 * Read all the Items under certain reference
 * @param {string} reference 
 * @param {function} callback 
 */
export const readAll = (reference, callback) => {
  const ref = database.ref(reference);
  return ref.on('value', snapshot => {
    callback(snapshot.val());
  });
};
