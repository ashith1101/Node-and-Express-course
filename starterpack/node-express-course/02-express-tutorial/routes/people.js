const express = require('express')

const router = express.Router()

const { getPeople,
    createPeople,
    createPersonPostman,
    updatePerson,
    deletePerson } = require('../controllers/people')

// router.get('/',getPeople)
router.route('/').get(getPeople)

router.post('/',createPeople)

router.post('/postman',createPersonPostman)


router.put('/:id',updatePerson)

router.delete('/:id',deletePerson)

module.exports = router