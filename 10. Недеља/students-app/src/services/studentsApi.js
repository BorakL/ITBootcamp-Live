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

// PATCH (UPDATE) REQUESTS
export const updateLecturerById = (id,update) => axios.patch(`${URL}/lecturers/${id}`,update)
export const updateStudentById = (id,update) => axios.patch(`${URL}/students/${id}`,update)
export const updateCourseById = (id,update) => axios.patch(`${URL}/courses/${id}`,update)
export const updateAssigmentById = (id,update) => axios.patch(`${URL}/assigments/${id}`,update)
export const updateMaterialById = (id,update) => axios.patch(`${URL}/material/${id}`,update)

// DELETE REQUESTS
export const deleteLecturerById = (id) => axios.delete(`${URL}/lecturers/${id}`)
export const deleteStudentById = (id) => axios.delete(`${URL}/students/${id}`)
export const deleteCourseById = (id) => axios.delete(`${URL}/courses/${id}`)
export const deleteAssigmentById = (id) => axios.delete(`${URL}/assigments/${id}`)
export const deleteMaterialById = (id) => axios.delete(`${URL}/material/${id}`)

