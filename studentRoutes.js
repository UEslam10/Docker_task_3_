const express = require('express');
const router = express.Router();
const { 
  getAllStudents, 
  addStudent, 
  deleteStudent, 
  updateStudent, 
  searchStudents 
} = require('../controllers/studentcontrollers');

// عرض كل الطلاب
router.get('/', getAllStudents);

// إضافة طالب
router.post('/add', addStudent);

// حذف طالب
router.get('/delete/:id', deleteStudent);

// تعديل طالب
router.post('/edit/:id', updateStudent);

// البحث عن طالب
router.get('/search', searchStudents);

module.exports = router;