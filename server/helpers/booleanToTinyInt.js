const parseBooleanStatusToTinyInt = ({ status }) => {
    let statusToLowerCase = status.toLowerCase();
    if (statusToLowerCase !== "true" && statusToLowerCase !== "false") {
      return { validationError: "Invalid status: " + status };
    }
    const statusInTinyInt = statusToLowerCase === "true" ? 1 : 0;

    return { statusInTinyInt: statusInTinyInt };
  };

  export default parseBooleanStatusToTinyInt;