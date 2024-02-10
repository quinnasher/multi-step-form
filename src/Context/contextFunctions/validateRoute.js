/**
 * Updates the routes status array, marking the specified route as validated.
 *
 * @param {boolean} canProceed - Indicates whether validation allows proceeding to the next route.
 * @param {number} index - The index of the route to update within the routes array.
 * @param {string[]} routes - An array of route names in the application.
 * @param {boolean[]} routesStatus - An array tracking the validation status of each route.
 * @param {(status: boolean[]) => void} setRoutsStatus - A function to update the routesStatus state.
 *
 * @example
 * // Example usage:
 * validateRoute(true, 2, "contact-details", routes, routesStatus, setRoutsStatus);
 */
export default function validateRoute(canProceed, index, routes, routesStatus, setRoutsStatus) {
  if (!canProceed) return;
  if (index < 0 || index > routes.length - 1 || (canProceed || index) === undefined) return;

  console.log("The function was not returned");
  // Create a copy of the routes status to avoid mutating the original state
  const updatedRouteStatus = [...routesStatus];

  // Mark the current route as validated
  updatedRouteStatus[index] = true;

  // Update the routes status state if validation allows proceeding
  if (canProceed) {
    setRoutsStatus(updatedRouteStatus);
    console.log(routesStatus);
  }

}
