
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: 'Express' });
};


/*
 * GET component
 */

exports.component = function(req, res){
  res.render('component.html', { title: '组件' });
};

