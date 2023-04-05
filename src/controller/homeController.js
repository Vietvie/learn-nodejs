import connection from "../configs/connectDB";

let getHomepage = async (rep, res) => {
  const [rows, fields] = await connection
    .promise()
    .query("SELECT * FROM `users`");
  return res.render("index.ejs", { dataUsers: rows, test: "abc" });
};

const getDetailPage = async (req, res) => {
  let userId = req.params.userId;
  const [users] = await connection
    .promise()
    .query(`select * from users where id = ?`, [userId]);
  return res.send(`hello detail page ${users[0].firstName}`);
};

const createNewUser = async (req, res) => {
  const { firstName, lastName, email, address } = req.body;
  console.log(req.body);
  await connection
    .promise()
    .execute(
      "insert into users(firstName, lastName, email, address) values (?,?,?,?)",
      [firstName, lastName, email, address]
    );
  return res.redirect("/");
};

const deleteUser = async (req, res) => {
  await connection
    .promise()
    .execute("delete from users where id = ?", [req.body.id]);
  return res.redirect("/");
};

const editUser = async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  const [user] = await connection
    .promise()
    .execute("select * from users where id = ?", [userId]);
  res.render("update.ejs", { dataUser: user[0] });
};

const updateUser = async (req, res) => {
  const id = req.params.userId;

  const { lastName, firstName, email, address } = req.body;
  await connection
    .promise()
    .execute(
      "update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?",
      [firstName, lastName, email, address, id]
    );
  return res.redirect("/");
};

export {
  getHomepage,
  getDetailPage,
  createNewUser,
  deleteUser,
  editUser,
  updateUser,
};
