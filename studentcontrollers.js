const Student = require('../models/studentmodel');

// عرض كل الطلاب
const getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.render('index', { students });
};

// إضافة طالب جديد
const addStudent = async (req, res) => {
  const { name, id } = req.body;
  const newStudent = new Student({ name, id });
  await newStudent.save();
  res.redirect('/');
};

// حذف طالب
const deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect('/');
};

// تعديل طالب
const updateStudent = async (req, res) => {
  const { name, id } = req.body;
  await Student.findByIdAndUpdate(req.params.id, { name, id });
  res.redirect('/');
};

// البحث عن طالب بالاسم أو ID
const searchStudents = async (req, res) => {
  const query = req.query.q;
  const students = await Student.find({ 
    $or: [
      { name: { $regex: query, $options: 'i' } },
      { id: { $regex: query, $options: 'i' } }
    ] 
  });
  res.render('index', { students });
};

module.exports = {
  getAllStudents,
  addStudent,
  deleteStudent,
  updateStudent,
  searchStudents
};