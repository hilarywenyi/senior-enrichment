
const router = require('express').Router();
//const { Campus } = require('../db/index');
const { Campus, Student } = require('../db');

module.exports = router;

//GET /api/campuses
router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({include: [Student]});
    res.json(campuses);
  } catch (error){
    next(error)
  }
});

//GET /api/campuses/:campusId 
router.get('/:campusId', async (req, res, next) => {
    try {
      const campus = await Campus.findById(req.params.campusId, {
        include: [Student]
      });
      res.json(campus)
    } catch (error) {
       next(error)
    }
});

//POST(adding) /api/campuses
router.post('/campuses', async(req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.json(newCampus)
  } catch (error) {
    next(error)
  }
});

// POST /api/campuses/:campusId/new-student
// router.post('/:campusId/new-student', (req, res, next) => {

//   return Campus.findById(req.body.campusId)
//   .then(campus => {
//     const student = Student.build(req.body);
//     student.setCampus(campus, { save: false });
//     return student.save()
//       .then(student => {
//         student = student.toJSON(); // here, we make student an object via .toJSON
//         student.campus = campus; // so that we can add the campus manually (can't use include here, since campus already exists)
//         return student;
//       });
//   })
//   .then(student => {
//     res.json(student);
//   })
//   .catch(next);
// });

//DELETE
router.delete('/:campusId', async (req, res, next)=> {
  try {
    const campus = await Campus.findById(req.params.campusId);
    res.json(campus.destroy())
  } catch (error) {
    next(error)
  }
})


//PUT(updating) /api/campuses/:campusId
router.put('/:campusId', async (req, res, next) => {
  try {
    const campus = await Campus.findById(req.params.studentId);
    res.json(campus.update(req.body));
  } catch (error) {
    next(error)
  }
})