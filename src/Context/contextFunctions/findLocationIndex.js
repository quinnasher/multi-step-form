function findLocationIndex(routes, location) {
  const index = routes.indexOf(location.pathname);
  // console.log("From the findIndex function, index is " + index);
  return index !== -1 ? index : undefined;
}

export default findLocationIndex;