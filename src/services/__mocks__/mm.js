export const signedIn = () => {
  return {
    _id: '5e361d4d7cb44b0004b6118c',
    dancer: { _id: '5e361d4f7cb44b0004b6118e', name: 'Ali M', __v: 0, teams: [] },
    email: 'dancer@test.com',
    role: 'squire'
  };
};

export const allDances = () => {
  return [
    {
      name: 'Oak and Ash and Thorn',
      tradition: 'Moulton',
      dancerQuantity: 6
    },
    {
      name: 'South Australia',
      tradition: 'Adderbury',
      dancerQuantity: 8
    },
    {
      name: 'Simon\'s Fancy',
      tradition: 'Bampton',
      dancerQuantity: 4
    },
  ];
};
