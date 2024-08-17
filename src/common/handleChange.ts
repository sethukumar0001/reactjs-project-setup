import { getValue } from "@utils/lodash";
import moment from "moment";
import { convertDateTime } from "./date-helpers";

export const handleTextChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  object: object,
  setObject: any
) => {
  const { name, value } = e.target;
  setObject({
    ...object,
    [name]: value,
  });
};

export const handleNumberChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  object: object,
  setObject: any
) => {
  const { name, value } = e.target;
  setObject({
    ...object,
    [name]: handleChangeNumber(e),
  });
};

export const handleEmailChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  object: object,
  setObject: any
) => {
  const { name, value } = e.target;
  setObject({
    ...object,
    [name]: value ? value.toLocaleLowerCase() : "",
  });
};

export const handleDateValueChange = (
  e: any,
  key: string,
  object: object,
  setObject: any
) => {
  if (e)
    setObject({
      ...object,
      [key]: moment(e).format("YYYY-MM-DD"),
    });
  else
    setObject({
      ...object,
      [key]: null,
    });
};

export const handleTimeValueChange = (
  e: any,
  key: string,
  object: object,
  setObject: any
) => {
  if (e)
    setObject({
      ...object,
      [key]: convertDateTime(e),
    });
  else
    setObject({
      ...object,
      [key]: null,
    });
};

export const handleDateChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  name: string,
  object: object,
  setObject: any
) => {
  setObject({
    ...object,
    [name]: e,
  });
};

export const handleBooleanChange = (
  key: any,
  value: boolean,
  object: object,
  setObject: any
) => {
  setObject({
    ...object,
    [key]: value,
  });
};

export const handleTextBoolean = (
  object: object,
  setObject: any,
  name: string,
  value: boolean
) => {
  setObject({
    ...object,
    [name]: value,
  });
};

export const handleSelectChange = (
  e: object,
  name: string,
  object: object,
  setObject: any
) => {
  setObject({
    ...object,
    [name]: getValue(e, `value`, ""),
  });
};

export const handleTextArrayChange = (
  i: number,
  e: any,
  key: string,
  setObject: any
) => {
  const { name, value } = e.target;
  setObject((object: any) => {
    return {
      ...object,
      [key]: object[key].map((x: any, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          [name]: value,
        };
      }),
    };
  });
};

export const handleValueArrayChange = (
  i: number,
  e: any,
  name: string,
  key: string,
  setObject: any
) => {
  setObject((object: any) => {
    return {
      ...object,
      [key]: object[key]&&object[key].map((x: any, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          [name]: e,
        };
      }),
    };
  });
};

export const handleSelectArrayChange = (
  i: number,
  e: any,
  name: string,
  key: string,
  setObject: any
) => {
  setObject((object: any) => {
    return {
      ...object,
      [key]: object[key].map((x: any, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          [name]: e ? getValue(e, `value`, "") : null,
        };
      }),
    };
  });
};

export const handleBooleanArrayChange = (
  i: number,
  status: any,
  name: string,
  key: string,
  setObject: any
) => {
  setObject((object: any) => {
    return {
      ...object,
      [key]: object[key].map((x: any, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          [name]: status,
        };
      }),
    };
  });
};

/* -------------------------------------------------------------------------- */
/*                     Nested Array with Request Helper Section               */
/* -------------------------------------------------------------------------- */

export const handleTextRequestArrayChange = (
  i: number,
  e: any,
  key: string,
  setObject: any
) => {
  const {name,value} = e.target;
  setObject((object: any) => {
    return {
      ...object,
      [key]: object[key].map((x: any, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          [name]: value,
        };
      }),
    };
  });
};

export const handleSelectRequestArrayChange = (
  i: number,
  e: any,
  key: string,
  name: string,
  subName: string,
  setObject: any
) => {
  setObject((object: any) => {
    return {
      ...object,
      [key]: object[key].map((x: any, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          [name]: {
            ...x[name],
            [subName]: e ? getValue(e, `value`, "") : null,
          },
        };
      }),
    };
  });
};

export const handleSelectNestedRequestArrayChange = (
  i: number,
  childIndex: number,
  e: any,
  key: string,
  name: string,
  subName: string,
  setObject: any
) => {
  setObject((object: any) => {
    return {
      ...object,
      [key]: object[key].map((x: any, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          [name]: x[name].map((y: any, p_index: number) => {
            if (childIndex !== p_index) return y;
            return {
              ...y,
              [subName]: e ? getValue(e, `value`, "") : null,
            };
          }),
        };
      }),
    };
  });
};

export const handleTextNestedRequestArrayChange = (
  i: number,
  childIndex: number,
  e: any,
  key: string,
  name: string,
  sName:string,
  setObject: any
) => {
  const {aName,value} = e.target
  setObject((object: any) => {
    return {
      ...object,
      [key]: object[key].map((x: any, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          [name]: x[name].map((y: any, p_index: number) => {
            if (childIndex !== p_index) return y;
            return {
              ...y,
              [sName]: value,
            };
          }),
        };
      }),
    };
  });
};

export const handlePhoneNestedRequestArrayChange = (
  i: number,
  childIndex: number,
  e: any,
  key: string,
  name: string,
  sName:string,
  setObject: any
) => {
  setObject((object: any) => {
    return {
      ...object,
      [key]: object[key].map((x: any, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          [name]: x[name].map((y: any, p_index: number) => {
            if (childIndex !== p_index) return y;
            return {
              ...y,
              [sName]: e,
            };
          }),
        };
      }),
    };
  });
};

/* -------------------------------------------------------------------------- */
/*                     Nested Array Helper Section                            */
/* -------------------------------------------------------------------------- */
export const handleTextNestedArrayChange = (
  parent_index: number,
  parent_key: string,
  i: number,
  e: any,
  key: string,
  setObject: any
) => {
  if (getValue(e, `target.value`, "")) {
    const { name, value } = e.target;
    setObject((object: any) => {
      return {
        ...object,
        [key]: object[key].map((x: any, index: number) => {
          if (parent_index !== index) return x;
          return {
            ...x,
            [parent_key]: x[parent_key].map((y: any, p_index: number) => {
              if (i !== p_index) return y;
              return {
                ...y,
                key: value,
              };
            }),
          };
        }),
      };
    });
  } else {
    setObject((object: any) => {
      return {
        ...object,
        [key]: object[key].map((x: any, index: number) => {
          if (parent_index !== index) return x;
          return {
            ...x,
            [parent_key]: x[parent_key].map((y: any, p_index: number) => {
              if (i !== p_index) return y;
              return {
                ...y,
                key: null,
              };
            }),
          };
        }),
      };
    });
  }
};

export const handleTextNestedArrayChangeByKey = (
  parent_index: number,
  parent_key: string,
  child_index: number,
  child_key: string,
  e: any,
  setObject: any
) => {
  const { name, value } = e.target;
  if (getValue(e, `target.value`, "")) {
    setObject((object: any) => {
      return {
        ...object,
        [parent_key]: object[parent_key].map((x: any, index: number) => {
          if (parent_index !== index) return x;
          return {
            ...x,
            [child_key]: x[child_key].map((y: any, p_index: number) => {
              if (child_index !== p_index) return y;
              return {
                ...y,
                [name]: value,
              };
            }),
          };
        }),
      };
    });
  } else {
    setObject((object: any) => {
      return {
        ...object,
        [parent_key]: object[parent_key].map((x: any, index: number) => {
          if (parent_index !== index) return x;
          return {
            ...x,
            [child_key]: x[child_key].map((y: any, p_index: number) => {
              if (child_index !== p_index) return y;
              return {
                ...y,
                [name]: null,
              };
            }),
          };
        }),
      };
    });
  }
};

export const handleSelectNestedArrayChangeByKey = (
  parent_index: number,
  parent_key: string,
  child_index: number,
  child_key: string,
  name: string,
  e: any,
  setObject: any
) => {
  if (e) {
    setObject((object: any) => {
      return {
        ...object,
        [parent_key]: object[parent_key].map((x: any, index: number) => {
          if (parent_index !== index) return x;
          return {
            ...x,
            [child_key]: x[child_key].map((y: any, p_index: number) => {
              if (child_index !== p_index) return y;
              return {
                ...y,
                [name]: e,
              };
            }),
          };
        }),
      };
    });
  } else {
    setObject((object: any) => {
      return {
        ...object,
        [parent_key]: object[parent_key].map((x: any, index: number) => {
          if (parent_index !== index) return x;
          return {
            ...x,
            [child_key]: x[child_key].map((y: any, p_index: number) => {
              if (child_index !== p_index) return y;
              return {
                ...y,
                [name]: null,
              };
            }),
          };
        }),
      };
    });
  }
};

export const handleDateNestedArrayChange = (
  parent_index: number,
  parent_key: string,
  i: number,
  e: any,
  key: string,
  setObject: any
) => {
  setObject((object: any) => {
    return {
      ...object,
      [key]: object[key].map((x: any, index: number) => {
        if (index !== parent_index) return x;
        return {
          ...x,
          [parent_key]: x[parent_key].map((y: any, p_index: number) => {
            if (i !== p_index) return y;
            return {
              ...y,
              key: convertDateTime(e),
            };
          }),
        };
      }),
    };
  });
};

export const handleSelectNestedArrayChange = (
  parent_index: number,
  parent_key: string,
  i: number,
  e: any,
  key: string,
  setObject: any,
  selectKey: string
) => {
  setObject((object: any) => {
    return {
      ...object,
      [key]: object[key].map((x: any, index: number) => {
        if (index !== parent_index) return x;
        return {
          ...x,
          [parent_key]: x[parent_key].map((y: any, p_index: number) => {
            if (i !== p_index) return y;
            return {
              ...y,
              key: getValue(e, `[${selectKey}]`, ""),
            };
          }),
        };
      }),
    };
  });
};

/* -------------------------------------------------------------------------- */
/*                     Form Builder Helper Section                            */
/* -------------------------------------------------------------------------- */
/**
 *
 * Array Text onchange
 * @requires
 *
 */
export const formHandleTextArrayChange = (
  i: number,
  e: any,
  setObject: any
) => {
  const { name, value } = e.target;
  setObject((options: any) => {
    return options.map((x: object, index: number) => {
      if (index !== i) return x;
      return {
        ...x,
        value: value,
      };
    });
  });
};

export const formHandleTextArrayChangeByName = (
  i: number,
  e: any,
  setObject: any
) => {
  const { name, value } = e.target;
  setObject((options: any) => {
    return options.map((x: object, index: number) => {
      if (index !== i) return x;
      return {
        ...x,
        [name]: value,
      };
    });
  });
};

export const formHandleEmailArrayChange = (
  i: number,
  e: any,
  setObject: any
) => {
  const { name, value } = e.target;
  setObject((options: any) => {
    return options.map((x: object, index: number) => {
      if (index !== i) return x;
      return {
        ...x,
        value: value ? value.toLowerCase() : "",
      };
    });
  });
};

/**
 *
 * Array Boolean onchange
 * @requires
 *
 */
export const formHandleBooleanArrayChange = (
  i: number,
  value: boolean,
  setObject: any
) => {
  setObject((options: any) => {
    return options.map((x: object, index: number) => {
      if (index !== i) return x;
      return {
        ...x,
        value: value,
      };
    });
  });
};

/**
 *
 * Array Numeric onchange
 * @requires
 *
 */
export const handleChangeNumber = (e: any) => {
  const userInput = e.target.value;
  const regex = /^(\d*\.?\d*)$/; // Regular expression to allow only numbers and a single decimal point
  let input = userInput;
  if (regex.test(input)) {
    return input;
  } else {
    // Remove any non-numeric or non-decimal characters
    input = input.replace(/[^\d.]/g, "");
    // Ensure only one decimal point is present
    const decimalCount = input.split(".").length - 1;
    if (decimalCount > 1) {
      const parts = input.split(".");
      input = parts[0] + "." + parts.slice(1).join("");
    }
    // Ensure the input adheres to the regex pattern
    if (regex.test(input)) {
      return input;
    } else {
      return ""; // If the modified input still doesn't match the pattern, return an empty string
    }
  }
};

export const formHandleNumericArrayChange = (
  i: number,
  e: any,
  setObject: any
) => {
  setObject((options: any) => {
    return options.map((x: object, index: number) => {
      if (index !== i) return x;
      return {
        ...x,
        value: handleChangeNumber(e),
      };
    });
  });
};

export const formHandleArrayChange = (i: number, e: any, setObject: any) => {
  setObject((options: any) => {
    return options.map((x: object, index: number) => {
      if (index !== i) return x;
      return {
        ...x,
        value: handleChangeNumber(e),
      };
    });
  });
};

export const formHandlePhoneArrayChange = (
  i: number,
  phone: any,
  setObject: any
) => {
  setObject((options: any) => {
    return options.map((x: object, index: number) => {
      if (index !== i) return x;
      return {
        ...x,
        value: phone,
      };
    });
  });
};

/**
 *
 * Array Select onchange
 * @requires
 *
 */

export const formHandleSelectArrayChange = (
  i: number,
  e: any,
  setObject: any
) => {
  if (getValue(e, `value`, ""))
    setObject((options: any) => {
      return options.map((x: object, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          value: getValue(e, `value`, ""),
        };
      });
    });
  else
    setObject((options: any) => {
      return options.map((x: object, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          value: null,
        };
      });
    });
};

export const formHandleSelectArrayChangeByName = (
  i: number,
  e: any,
  name: string,
  setObject: any
) => {
  if (getValue(e, `value`, ""))
    setObject((options: any) => {
      return options.map((x: object, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          [name]: getValue(e, `value`, ""),
        };
      });
    });
  else
    setObject((options: any) => {
      return options.map((x: object, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          [name]: null,
        };
      });
    });
};
/**
 *
 * Array Select onchange
 * @requires
 *
 */

export const handleUpdateArray = (value: string, values: any) => {
  let options = getValue(values, `length`, 0) > 0 ? values : [];
  // Ensure 'options' is an array and contains only string elements
  if (
    !Array.isArray(options) ||
    options.some((item) => typeof item !== "string")
  ) {
    throw new Error(
      "'options' must be an array containing only string elements."
    );
  }
  // Check if 'value' exists in the 'options' array
  const foundIndex =
    getValue(options, `length`, 0) > 0 ? options.indexOf(value) : -1;
  const array = [...options]; // Create a copy of 'options' to avoid mutation
  if (foundIndex !== -1) {
    // Value exists in the array, remove it
    array.splice(foundIndex, 1);
  } else {
    // Value doesn't exist, add it to the array
    array.push(value);
  }
  return array;
};
export const formHandleMultiSelectArrayChange = (
  i: number,
  e: any,
  setObject: any,
  values: any
) => {
  setObject((options: any) => {
    return options.map((x: object, index: number) => {
      if (index !== i) return x;
      return {
        ...x,
        value: handleUpdateArray(getValue(e, `value`, ""), values),
      };
    });
  });
};

export const formHandleMultiSelectArrayChangeID = (
  i: number,
  e: any,
  setObject: any,
  values: any
) => {
  setObject((options: any) => {
    return options.map((x: object, index: number) => {
      if (index !== i) return x;
      return {
        ...x,
        value: handleUpdateArray(getValue(e, `id`, ""), values),
      };
    });
  });
};
/**
 *
 * Array Lookup onchange
 * @requires
 *
 */

export const formHandleLookeupArrayChange = (
  i: number,
  e: any,
  setObject: any
) => {
  if (getValue(e, `id`, ""))
    setObject((options: any) => {
      return options.map((x: object, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          value: getValue(e, `id`, ""),
        };
      });
    });
  else if (getValue(e, `name`, ""))
    setObject((options: any) => {
      return options.map((x: object, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          value: getValue(e, `name`, ""),
        };
      });
    });
  else
    setObject((options: any) => {
      return options.map((x: object, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          value: null,
        };
      });
    });
};

/**
 *
 * Array Date onchange
 * @requires
 *
 */

export const formHandleDateArrayChange = (
  i: number,
  e: any,
  setObject: any
) => {
  if (e)
    setObject((options: any) => {
      return options.map((x: object, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          value: moment(e).format("YYYY-MM-DD"),
        };
      });
    });
  else
    setObject((options: any) => {
      return options.map((x: object, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          value: null,
        };
      });
    });
};

/**
 *
 * Array Time onchange
 * @requires
 *
 */

export const formHandleTimeArrayChange = (
  i: number,
  e: any,
  setObject: any
) => {
  if (e)
    setObject((options: any) => {
      return options.map((x: object, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          value: convertDateTime(e),
        };
      });
    });
  else
    setObject((options: any) => {
      return options.map((x: object, index: number) => {
        if (index !== i) return x;
        return {
          ...x,
          value: null,
        };
      });
    });
};
