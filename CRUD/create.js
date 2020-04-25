"use strict";
//@ts-check
import { database } from "../init";

/**
 * Add a new item on the reference
 * @param {object} data 
 * @param {string} reference 
 */
export const create = async (data, reference) => {
  try {
    let current_datetime = new Date();
    let formatted_date =
      current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();

    const ref = database.ref(reference);
    await ref
      .push()
      .set({
        ...data,
        dateUTC: current_datetime,
        date: formatted_date
      })
      .then(res => {
        return {
          success: true,
          message: 'Data saved successfully."',
          data: {
            posts: res
          }
        };
      })
      .catch(error => {
        return {
          success: false,
          message: "An error while saving a item",
          error: {
            trace: error.trace,
            message: error.message
          }
        };
      });
  } catch (error) {
    console.error("Error:", error);
  }
};
