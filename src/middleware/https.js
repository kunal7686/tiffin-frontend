import axios from "axios";
import { CONST } from "./constant";
import toast from "react-hot-toast";
//  import notifyError from "../utils/notification/notifyError";

function authHeader() {
  let token = localStorage.getItem("token");
  if (token) {
    return { Authorization: "Bearer " + token };
  } else {  
    return {};
  }
}

const handleUnauthorizedOrBadRequest = (status) => {
  if ((status === 403 || status === 401) && status !== 404) {
    localStorage.clear();
    window.location.href = "/login";
  }
};

const httpGet = async (url, payload, isNotify) => {
  try {
    let headers = {
      "Content-Type": "application/json",
      "x-custom-key":
        "2b8180f5600074923efddbdd82f9fec321ff12309a6661270718cdc9f6865036",
      Authorization: authHeader().Authorization,
    };

    const result = await axios({
      method: "GET",
      url: CONST.BACKEND_URL + url,
      data: { ...payload },
      headers: headers,
    });

    invalidToken(result);

    return result.data;
  } catch (err) {
    console.error(err);
    if (err.request.status) {
      handleUnauthorizedOrBadRequest(err.request.status);
    }
    if (err.request.status && !isNotify) {
      // notifyError(err.response?.data?.message);
    }
    return err;
  }
};

const httpPost = async (url, payload, isNotify) => {
  try {
    let headers = {
      "Content-Type": "application/json",
      "x-custom-key":
        "2b8180f5600074923efddbdd82f9fec321ff12309a6661270718cdc9f6865036",
      Authorization: authHeader().Authorization,
    };

    const result = await axios({
      method: "POST",
      url: CONST.BACKEND_URL + url,
      data: { ...payload },
      headers: headers,
    });

    console.log("result", result);

    if (result.data) {
      if (result.data.error && isNotify) {
        toast.dismiss();
        toast.error(result.data.message);
      } else if (isNotify && !result.data.error) {
        // Notify success
      }
      return result.data;
    } else {
      return false;
    }
  } catch (err) {
    if (isNotify) {
      if (err.response?.data?.message) {
        toast.dismiss();
        toast.error(err.response?.data?.message);
      }
      else {
        toast.dismiss();
        toast.error(err?.message);
      }
    } else {
      // notifyError(err.response?.data?.message);
    }

    if (err.request.status) {
      handleUnauthorizedOrBadRequest(err.request.status);
    }
  }
};

const httpPostFormData = async (url, data, isNotify) => {
  try {
    const result = await axios({
      method: "POST",
      url: CONST.BACKEND_URL + url,
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
        "x-custom-key":
          "2b8180f5600074923efddbdd82f9fec321ff12309a6661270718cdc9f6865036",
      },
    });

    if (result.data) {
      if (result.data.error && isNotify) {
        // Notify error
      } else if (isNotify && !result.data.error) {
        // Notify success
      }
      return result.data;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    if (err.request.status) {
      handleUnauthorizedOrBadRequest(err.request.status);
    }
  }
};

const httpPatch = async (url, params, data, isNotify) => {
  try {
    let headers = {
      "Content-Type": "application/json",
      "x-custom-key":
        "2b8180f5600074923efddbdd82f9fec321ff12309a6661270718cdc9f6865036",
      Authorization: authHeader().Authorization,
    };
    const result = await axios({
      method: "PUT",
      url: CONST.BACKEND_URL + url + "/" + params,
      data: { ...data },
      headers: headers,
    });

    if (result.data) {
      if (result.data.error && isNotify) {
        // Notify error
      } else if (isNotify && !result.data.error) {
        // Notify success
      }
    } else {
      return false;
    }

    return result.data;
  } catch (err) {
    toast.dismiss();
    // notifyError(err.response?.data?.message);
    if (err.request.status) {
      handleUnauthorizedOrBadRequest(err.request.status);
    }
  }
};

const httpDelete = async (url, ids, isNotify) => {
  try {
    let headers = {
      "Content-Type": "application/json",
      "x-custom-key":
        "2b8180f5600074923efddbdd82f9fec321ff12309a6661270718cdc9f6865036",
      Authorization: authHeader().Authorization,
    };

    const result = await axios({
      method: "DELETE",
      url: CONST.BACKEND_URL + url,
      data: { ids },
      headers: headers,
    });

    if (result.data) {
      if (result.data.error && isNotify) {
        // Notify error
      } else if (isNotify && !result.data.error) {
        // Notify success
      }
      return result.data;
    } else {
      return false;
    }
  } catch (err) {
    if (err.request.status) {
      // notifyError(err.response?.data?.message);
      handleUnauthorizedOrBadRequest(err.request.status);
    }
  }  
};

const invalidToken = async (result) => {
  if (result.data.code === 3) {
    console.log("invalidtoken");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
};

const invalidHeadres = async (status = "") => {
  if (status === 401) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
};

export { httpGet, httpPost, httpPatch, httpPostFormData, httpDelete };