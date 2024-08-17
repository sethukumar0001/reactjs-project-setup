import { authHeader } from "./auth-header";

import { toast } from "sonner";
import { getValue } from "@utils/lodash";

let access_token = localStorage.getItem("accessToken");

export const get = (url) => {
  try {
    const requestOptions = {
      method: "GET",
      headers: authHeader(url),
    };
    return fetch(`${url}`, requestOptions)
      .then(handleResponse)
      .then((data) => {
        return data;
      });
  } catch (error) {
    //console.log(error)
  }
};

export const post = (url, payload) => {
  const requestOptions = {
    method: "POST",
    headers: authHeader(url),
    body: JSON.stringify(payload),
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};
export const postWithoutBody = (url) => {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + access_token,
    },
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

export const postWithMethod = (url) => {
  const requestOptions = {
    method: "POST",
    // headers: authHeader(url),
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

export const postFileUpload = (url, payload) => {
  const requestOptions = {
    method: "POST",
    headers:  {
      // "Content-Type": "application/json",
      Authorization: "Bearer " + access_token,
    },
    body: payload,
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

export const patchWithCode = (url, payload,code) => {
  const requestOptions = {
    method: "PATCH",
    headers:  {
      "Content-Type": "application/json",
      Authorization: "Bearer " + access_token,
    },
    body: JSON.stringify(payload),
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

export const postWithCode = (url, payload,code) => {
  const requestOptions = {
    method: "POST",
    headers:  {
      Authorization: "Bearer " + access_token,
    },
    body: payload,
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};
export const postWithPayloadCode = (url, payload,code) => {
  const requestOptions = {
    method: "POST",
    headers:  {
      Authorization: "Bearer " + access_token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

export const patchFileUpload = (url, payload) => {
  const requestOptions = {
    method: "PATCH",
    headers: { Authorization: "Bearer " + access_token },
    body: payload,
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

export const patch = (url, payload) => {
  const requestOptions = {
    method: "PATCH",
    headers: authHeader(url),
    body: JSON.stringify(payload),
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

export const put = (url, payload) => {
  const requestOptions = {
    method: "PUT",
    headers: authHeader(url),
    body: JSON.stringify(payload),
  };
  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

export const Delete = (url) => {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(url),
  };
  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};
export const DeleteWithPayload = (url, payload) => {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(url),
    body: JSON.stringify(payload),
  };
  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

export const DeletePayload = (url, payload) => {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(url),
    body: JSON.stringify(payload),
  };
  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

export const getWithToken = (url, token) => {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_token,
      },
    };
    return fetch(`${url}`, requestOptions)
      .then(handleResponse)
      .then((data) => {
        return data;
      });
  } catch (error) {
    //console.log(error)
  }
};

export const getPayload = (url, payload) => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(url),
    body: JSON.stringify(payload),
  };
  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

function logout() {
  localStorage.clear();
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (getValue(data, `statusCode`, 0) === 401) {
      logout();
      window.location.href = `/signin`;
    } else {
      if (!response.ok) {
        if (response.status === 401) {
          logout();
          window.location.href = `/signin`;
        }
        const error =
          (data &&
            (getValue(data, `message`, "") ||
              getValue(data, `error.message`, ""))) ||
          response.statusText;
        if (
          typeof (
            getValue(data, `message`, "") || getValue(data, `error.message`, "")
          ) === "string" &&
          (getValue(data, `message`, "") ||
            getValue(data, `error.message`, "")) !== "Unauthorized"
        ) {
          const error =
            (data &&
              (getValue(data, `message`, "") ||
                getValue(data, `error.message`, ""))) ||
            response.statusText;
          toast.error(error);
        } else {
          getValue(data, `message`, []).forEach((item) => {
            toast.error(item);
          });
        }
        return Promise.reject(error);
      }
      return data;
    }
  });
}
