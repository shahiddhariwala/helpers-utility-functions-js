export const convertStringOrVariableToConstantsName = (value) => {
  // Company Members Access Click
  // COMPANY_MEMBERS_ACCESS_CLICK

  const val = value?.toUpperCase()?.split(" ")?.join("_");
  return val;
};

export const copyToClipboard = (toCopy) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(toCopy);
  return Promise.reject("The Clipboard API is not available.");
};

export const generateKeyValueObjectFromString = (str) => {
  const key = convertStringOrVariableToConstantsName(str);
  return { [key]: str };
};
