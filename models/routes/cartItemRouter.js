const Router = require('express');
const router = new Router();

router.post('/'); // создание
router.get('/'); // получение
router.get('/:id');

module.exports = router;
