export const appendIf = (condition: boolean, obj: any) => {
  return condition ? obj : {};
};

export const appendObjIf = (condition: boolean, obj: any) => {
  return condition ? [obj] : [];
};
