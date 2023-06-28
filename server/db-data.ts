export const APPLES: any = {


  17: {
    id: 17,
    color: 'red',
    isBad: false,
    sizeCm: 4
  },
  3: {
    id: 3,
    color: 'green',
    isBad: true,
    sizeCm: 3
  },

  4: {
    id: 4,
    color: 'mixed',
    isBad: true,
    sizeCm: 1
  },


  2: {
    id: 2,
    color: 'red',
    isBad: false,
    sizeCm: 9
  },


  5: {
    id: 5,
    color: 'green',
    isBad: false,
    sizeCm: 6
  },

  12: {
    id: 12,
    color: 'green',
    isBad: false,
    sizeCm: 3
  },


  1: {
    id: 1,
    color: 'yellow',
    isBad: false,
    sizeCm: 2
  },

  16: {
    id: 16,
    color: 'red',
    isBad: false,
    sizeCm: 1
  },


  14: {
    id: 14,
    color: 'yellow',
    isBad: false,
    sizeCm: 4
  },


  6: {
    id: 6,
    color: 'yellow',
    isBad: false,
    sizeCm: 8
  },

  7: {
    id: 7,
    color: 'mixed',
    isBad: true,
    sizeCm: 9
  },

  8: {
    id: 8,
    color: 'red',
    isBad: false,
    sizeCm: 2
  },

  9: {
    id: 9,
    color: 'yellow',
    isBad: true,
    sizeCm: 7
  },

  11: {
    id: 11,
    color: 'mixed',
    isBad: true,
    sizeCm: 9
  }

};

export function findAppleById(appleId: number) {
  return APPLES[appleId];
}
