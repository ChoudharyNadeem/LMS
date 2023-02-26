import axios from "axios";

const URL = "http://localhost:8000";

const config = {
  withCrentials: true,
};
export const userSignup = async (user) => {
  try {
    return await axios.post(`${URL}/api/signup`, user);
  } catch (error) {
    console.log("Error while calling userSignup API", error);
  }
};

export const userLogin = async (user) => {
  try {
    return await axios.post(`${URL}/api/login`, user);
  } catch (error) {
    console.log("Error while calling userLogin API", error);
  }
};
export const userLogout = async () => {
  try {
    return await axios.post(`${URL}/api/logout`);
  } catch (error) {
    console.log("Error while calling userLogout API", error);
  }
};

export const fetchAllcourse = async () => {
  try {
    return await axios.get(`${URL}/api/course`, config);
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleCourse = async (slug) => {
  try {
    return await axios.get(`${URL}/api/course/single/${slug}`);
  } catch (error) {
    console.log(error);
  }
};

export const addCourse = async (course, image, slug) => {
  try {
    return await axios.post(
      `${URL}/api/course/add`,
      course,
      image,
      slug,
      config
    );
  } catch (error) {
    console.log(error);
  }
};
export const adminCourse = async () => {
  try {
    return await axios.get(`${URL}/api/admin/profile`, config);
  } catch (error) {
    console.log(error);
  }
};
