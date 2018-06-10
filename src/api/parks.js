export function getParks() {
  return fetch('/parks.json').then(res => res.json());
}
