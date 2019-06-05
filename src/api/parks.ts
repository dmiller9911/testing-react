export interface Park {
  name: string;
  location: string;
  maxElevation: number;
  minElevation: number;
  size: number;
  establishedDate: string;
  id: string;
}

export function getParks(): Promise<Park[]> {
  return fetch('/parks.json').then(res => res.json());
}
