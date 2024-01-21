export const getInitialName = (name: string = "Jane Doe") => {
  //PR
  // return name.match(/(\b\S)?/g).join("");
  return name;
};

export const capitalizeFirstLetter = (str: string = "Jane Doe"): string => {
  return [...str][0].toUpperCase() + str.slice(1);
};

export const camelCaseToTitleCase = (str: string = "Jane Doe"): string => {
  const result = str.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};
