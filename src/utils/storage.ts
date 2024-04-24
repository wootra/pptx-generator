export const idCache = {
  idBase: 1,
};

export const getNewId = () => {
  return ++idCache.idBase;
};

export const getLastId = () => idCache.idBase;
