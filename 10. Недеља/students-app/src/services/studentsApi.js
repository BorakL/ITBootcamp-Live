import axios from 'axios'

const URL = 'http://localhost:3005'

// GET REQUESTS
export const getAllLecturers = () => axios.get(`${URL}/lecturers`)
export const getAllStudents = () => axios.get(`${URL}/students`)
export const getAllCourses = () => axios.get(`${URL}/courses`)
export const getAllAssigments = () => axios.get(`${URL}/assigments`)
export const getAllMaterial = () => axios.get(`${URL}/material`)

export const getMaterialByLecturerId = (lecturer_id) => axios.get(`${URL}/material?created-by=${lecturer_id}`)
export const getMaterialById = (id) => axios.get(`${URL}/material?id=${id}`)

export const getAssigmentsByLecturerId = (lecturer_id) => axios.get(`${URL}/assigments?created-by=${lecturer_id}`)
export const getAssigmentById = (id) => axios.get(`${URL}/assigment?id=${id}`)

export const getLecturerById = (id) => axios.get(`${URL}/lecturers?id=${id}`)
export const getLecturerByCourseId = (course_id) => axios.get(`${URL}/lecturers?courses_like${course_id}`)

// POST REQUESTS
export const addLecturer = (lecturer) => axios.post(`${URL}/lecturers`,lecturer)
export const addStudent = (student) => axios.post(`${URL}/students`,student)
export const addCourse = (course) => axios.post(`${URL}/courses`,course)
export const addAssigment = (assigment) => axios.post(`${URL}/assigments`,assigment)
export const addMaterial = (material) => axios.post(`${URL}/material`,material)
