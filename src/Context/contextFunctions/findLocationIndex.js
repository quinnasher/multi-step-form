function findLocationIndex(routes, location) {
  const index = routes.indexOf(location.pathname);
  return index !== -1 ? index : undefined;
}

export default findLocationIndex;