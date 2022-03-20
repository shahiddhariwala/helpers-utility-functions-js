const convertStringOrVariableToConstantsName = (value) => {
  // Company Members Access Click
  // COMPANY_MEMBERS_ACCESS_CLICK

  return value?.toUpperCase()?.split(" ")?.join("_");
};

console.log(
  convertStringOrVariableToConstantsName("Company Members Access Click")
);
