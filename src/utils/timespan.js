export const PAST = 'past';
export const PRESENT = 'present';

export const getOpositeTimespan = timespan =>
  timespan === PAST ? PRESENT : PAST;
