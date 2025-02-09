export const listPeople = (arr: string[] = []) => {
  const listWithoutFinalEl = arr.slice(0, -1).join(", ");
  const finalEl = arr[arr.length - 1];
  const formattedList = `${listWithoutFinalEl}, and ${finalEl}`;
  return formattedList;
};
