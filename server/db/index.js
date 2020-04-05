
const users = [
  {
    "id": 1,
    "token": "user_token",
    "login": "user",
    "password": "user"
  },
  {
    "id": 2,
    "token": "admin_token",
    "login": "admin",
    "password": "admin"
  },
]


exports.findByToken = function (token, cb) {
  process.nextTick(function () {
    let current = users.filter(user => user.token === token)
    return current.length > 0 ? cb(null, current) : cb(null, null);
  });
}
