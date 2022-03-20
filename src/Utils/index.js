export const convertStringOrVariableToConstantsName = (value) => {
  // Company Members Access Click
  // COMPANY_MEMBERS_ACCESS_CLICK

  const val = value?.toUpperCase()?.split(" ")?.join("_");
  console.log("convertStringOrVariableToConstantsName", { val });
};

export const copyToClipboard = (toCopy) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(toCopy);
  return Promise.reject("The Clipboard API is not available.");
};
