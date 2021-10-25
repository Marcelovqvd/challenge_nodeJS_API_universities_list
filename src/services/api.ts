import axios from "axios";

export async function getUniversitiesApi() {
  const { data } = await axios.get('http://universities.hipolabs.com');
  return data;
}
