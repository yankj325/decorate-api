var express = require('express');
var router = express.Router();

const IndexController=require('../controllers/index');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/event', IndexController.eventList);
router.get('/cate', IndexController.cateList);
router.get('/article', IndexController.articleList);
router.get('/article/:articleId', IndexController.article);
router.get('/case', IndexController.caseList);
router.get('/case/:caseId', IndexController.caseInfo);
router.get('/company', IndexController.company);
router.post('/order', IndexController.order);


module.exports = router;
