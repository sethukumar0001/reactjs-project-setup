import { getValue } from "@utils/lodash";
import { toast } from "sonner";
import _ from "lodash";

export const getFirstLetterOfWord = (str: string) => {
  if (str) {
    var text: any = str.match(/\b(\w)/g);
    return text ? text.join("").toUpperCase() : text;
  } else {
    return "";
  }
};

export const getOnlyFirstLetterOfWord = (str: string) => {
  return str ? str.charAt(0).toUpperCase() : "";
};

export const numberToFixed = (num: any, decimal: any) => {
  if (num)
    return parseInt(num) ? parseInt(num).toFixed(decimal ? decimal : 2) : num;
};

export const concatString = (str: string, length: number) => {
  return str.length > (length ? length : 20)
    ? str.substring(0, length ? length : 20).concat("...")
    : str;
};

export const HTMLconcatString = (str: string, length: number) => {
  const truncatedStr =
    str.length > (length ? length : 20)
      ? str.substring(0, length ? length : 20).concat("...")
      : str;

  return { __html: truncatedStr };
};

export const capitalizeFirstLetter = (str: string) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};
export const CopyToClipboard = (value: string) => {
  /* Get the text field */
  //   var copyText = event.currentTarget.firstElementChild.nextElementSibling.value;
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(value);
  /* Alert the copied text */
  // alert("Copied: " + value);
  toast.success(`Copied to clipboard`);
};

export const formatString = (str: any) => {
  if (str) {
    // Split the string into an array of words
    var words = str && str.split("_");
    // Capitalize the first letter of each word
    var capitalizedWords = words.map(function (word: any) {
      return word
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word;
    });
    // Join the capitalized words with spaces
    var formattedString = capitalizedWords.join(" ");
    return formattedString;
  } else {
    return str;
  }
};

export const formatCamelString = (str: any) => {
  if (typeof str === "string" && str && str.includes("_")) {
    // Check if the string doesn't contain underscores
    var words: any = str && str.split("_");
    // Capitalize the first letter of each word
    var capitalizedWords = words.map(function (word: any) {
      return word
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word;
    });
    // Join the capitalized words with spaces
    var formattedString = capitalizedWords.join(" ");
    return formattedString;
  } else {
    return str; // Return the original string if it contains underscores
  }
};

export const capitalizeAfterSpace = (str: any) => {
  if (str) {
    // Split the string into an array of words
    var words = str.split(" ");

    // Capitalize the first letter of each word after a space
    for (var i = 1; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    // Join the words back into a single string
    var capitalizedStr = words.join(" ");

    return capitalizedStr;
  } else {
    return str;
  }
};

export const formatType = (str: any) => {
  if (str) {
    // Split the string into an array of words
    var words = str.split(".");

    // Capitalize the first letter of each word after a space
    return words[1].toUpperCase();
  }
};

export const removeNullOrUndefinedProperties = (obj: any) => {
  // return removeNullValues(obj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (
        (obj[key] === null ||
          obj[key] === "" ||
          obj[key] === undefined ||
          (Array.isArray(obj[key]) && obj[key].length === 0)) &&
        typeof obj[key] !== "boolean"
      ) {
        delete obj[key];
      }
    }
  }
  return obj;
};
// export const removeNullOrUndefinedProperties = (obj: any) => {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (
//         (obj[key] === null ||
//           obj[key] === "" ||
//           obj[key] === undefined ||
//           (Array.isArray(obj[key]) && obj[key].length === 0)) &&
//         typeof obj[key] !== "boolean"
//       ) {
//         delete obj[key];
//       } else if (typeof obj[key] === "string" && !isNaN(Number(obj[key]))) {
//         obj[key] = Number(obj[key]);
//       }
//     }
//   }
//   return obj;
// };
export function removeNullValuesFromObjectArray(arr: any) {
  // return arr.map((item: any) => {
  //   const filteredObj: any = {};
  //   for (const key in item) {
  //     if (item.hasOwnProperty(key)) {
  //       const value = item[key];
  //       if (value !== null && value !== undefined && value) {
  //         filteredObj[key] = !isNaN(value) ? Number(value) : value;
  //       }
  //     }
  //   }
  //   return filteredObj;
  // });
  return arr.map((item: any) => {
    const filteredObj: any = {};
    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        const value = item[key];
        if (
          (Array.isArray(value) && value.length !== 0 && value[0] !== "") || // Check for non-empty array with non-empty string
          (!Array.isArray(value) &&
            value !== null &&
            value !== undefined &&
            value !== "") // Check for non-empty string or non-array value
        ) {
          filteredObj[key] = value;
        }
      }
    }
    return filteredObj;
  });
}

export const removeEmptyValues: any = (obj: any) => {
  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map((item: any) => {
      if (typeof item === "object" && !Array.isArray(item)) {
        return removeEmptyValues(item);
      }
      return item;
    });
  } else if (obj && typeof obj === "object") {
    return Object.entries(obj).reduce((acc: any, [key, value]) => {
      if (
        value === null ||
        value === "" ||
        (Array.isArray(value) && !value.length)
      ) {
        return acc;
      } else if (Array.isArray(value)) {
        acc[key] = removeEmptyValues(value);
      } else if (typeof value === "object") {
        acc[key] = removeEmptyValues(value);
      } else {
        acc[key] = value;
      }
      return acc;
    }, {});
  }
  return obj;
};

export function camelToSnake(str: string): string {
  if (str)
    str =
      str[0].toLowerCase() +
      str
        .slice(1, str.length)
        .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  str = str.replaceAll(" _", "_");

  return str.replaceAll(" ", "_").replace(/(^_*|_*$)/g, "");
}

export function covertCamelToSnake(input: string) {
  // if (input) {
  //   // Check if the string is in title case
  //   if (input === input.replace(/\b\w/g, (char) => char.toUpperCase())) {
  //     return input.toLowerCase().replace(/ /g, "_");
  //   }
  //   return input;
  // } else {
  //   return input;
  // }
  if (input) {
    // Remove all special characters and replace spaces with underscores
    input = _.deburr(input).replace(/[^\w\s]/g, "");
    // Convert to snake case using lodash
    return _.snakeCase(input);
  } else {
    return input;
  }
}

export const convertElementaryArrayToJSONArray = (arr: any) => {
  if (getValue(arr, `length`, 0) > 0) {
    return arr.map((item: string) => ({
      value: item,
      label: formatString(item),
    }));
  } else {
    return [];
  }
};

export const sortJSONObjectArray = (arr: any, key: string) => {
  if (getValue(arr, `length`, 0) > 0) {
    return arr.sort((a: any, b: any) => a[key] - b[key]);
  } else {
    return [];
  }
};

export function convertNumbersToSquareBrackets(expression: any) {
  if (!expression) {
    return "[1]";
  } else {
    return expression.replace(/\b(\d+)\b/g, "[$1]");
  }
}

export function convertSnakeToCamelCaseArray(arr: any) {
  return arr.map(snakeToCamelCase).join("  |  "); // Double space for separation between elements
}

function snakeToCamelCase(str: any) {
  if (str) {
    return str.replace(/_([a-z])/g, function (match: any, group: any) {
      return " " + group.toUpperCase();
    });
  }
  return ""; // Return an empty string if the input is not provided or invalid
}

export function removeEmptyValuesInName(fName: string, lName: string) {
  return `${fName ? fName : ""}${fName && lName ? " " : ""}${
    lName ? lName : ""
  }`;
}

export const convertObjectKeystoJSON = (obj: any) => {
  const result = Object.entries(obj).map(([key, value]) => ({
    value,
    key,
    label: formatString(key),
  }));
  return result;
};

export const removeDuplicates = (data: any) => {
  if (getValue(data, `length`, 0) > 0) {
    const uniqueData = data.reduce((acc: any, current: any) => {
      if (!acc.find((item: any) => item.id === current.id)) {
        acc.push(current);
      }
      return acc;
    }, []);
    return uniqueData;
  } else {
    return [];
  }
};

export const getLastTenDigits = (num: any) => {
  // Convert the number to a string
  const numStr = num.toString();
  // Return the last 10 digits
  return numStr.slice(-10);
};

export const getDigitsExceptLastTen = (num: any) => {
  // Check if the input is a number or a numeric string
  if (isNaN(num)) {
    throw new Error("Input must be a number or a numeric string");
  }
  // Convert the number to a string
  const numStr = num.toString();
  // Return the digits except the last 10
  if (numStr.includes("+")) {
    return numStr.slice(0, -10) || "0";
  } else {
    return `+` + numStr.slice(0, -10) || "0";
  }
};
