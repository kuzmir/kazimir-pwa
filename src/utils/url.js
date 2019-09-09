// @flow strict

export const slugifyStreetName = (name: string) =>
  name
    .toLowerCase()
    .replace('. ', '-')
    .replace(' ', '-')
    .replace('/', '-');
