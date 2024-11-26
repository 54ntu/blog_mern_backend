require("dotenv").config();
const { app } = require("./app");
const { connectdb } = require("./dbconfig/Connectdb");

connectdb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is listening at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`something went wrong with database connection ${error}`);
  });
