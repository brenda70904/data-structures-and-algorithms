function destination(origin, destination, connections) {
  let stack = [[origin]];

  //visited set to keep track of the cities that we have visited already. This is important to avoid infinite loops.

  let visited = new Set();

  while (stack.length > 0) {
    let path = stack.pop();
    //get the last city in the path array because that is the city we are currently at.
    const city = path[path.length - 1];
    if (city === destination) return path;
    if (visited.has(city)) continue;
    visited.add(city);
    //connections is an object that has the city as the key and the value is an array of neighboring cities.
    const neighboringCities = connections[city];
    if (!neighboringCities) continue;
    for (const neighbor of neighboringCities) {
      stack.push([...path, neighbor])
    }
  }
  return 'no connection found';
}

let connections = {
  'Seattle': ['Portland', 'Vancouver'],
  'Chicago': ['Seattle', 'Denver', 'Boston'],
  'Portland': ['LA', 'SanDiego'],
  'Vancouver': ['Toronto'],
};

console.log(destination('Seattle', 'LA', connections));