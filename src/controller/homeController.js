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

  await connection
    .promise()
    .execute(
      "insert into users(firstName, lastName, email, address) values (?,?,?,?)",
      [firstName, lastName, email, address]
    );
  return res.redirect("/");
};

export { getHomepage, getDetailPage, createNewUser };
