module.exports = function(app) {
  app.get('/todo', function(req, res) {});
  res.render('todo');
  app.post('/todo', function(req, res) {});

  app.delete('/todo', function(req, res) {});
};

export function tagController(steps: number): number {
  return Math.floor(Math.random() * steps + 1);
}
