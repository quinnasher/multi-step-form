function findLocation(routes, location) {
  const index = routes.indexOf(location.pathname);
  return index === -1 ? undefined : routes[index];
}

export default findLocation;