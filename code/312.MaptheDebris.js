function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  const res = arr.map((item) => {
    const name = item.name;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.pow(Math.pow(item.avgAlt + earthRadius, 3)/GM, 0.5));
    return {
      name,
      orbitalPeriod,
    }
  });
  return res;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
