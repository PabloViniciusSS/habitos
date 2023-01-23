/** @format */

import React from "react";

export default function generateProgressPercentage(
  completed: number,
  total: number
) {
  return Math.round((completed / total) * 100);
}
