const express = require("express");
const knex = require("../connection");

const router = express.Router();

router.get("/new", (request, response) => {
  response.render("new");
});

// A route for create notes from form submissions at POST /notes
router.post("/new", (request, response) => {
  const { logoUrl, name, members } = request.body;

  knex("cohorts")
    .insert({
      name: name,
      members: members,
      logoUrl: logoUrl,
    })
    .returning("*")
    .then(response.redirect("/team/new"));
});

router.get("/", (request, response) => {
  knex("cohorts")
    .orderBy("createdAt", "desc")
    .then((teams) => {
      response.render("teams", { teams });
    });
});

// // A route to show a single note at GET /notes/:id
router.get("/:id", (request, response) => {
  const query = undefined;
  const obj = {};
  knex("cohorts")
    .where("id", request.params.id)
    .first()
    .then((team) => {
      response.render("show", { team, query, obj });
    });
});

router.get("/:id/method", (request, response) => {
  const query = request.query;
  const ids = request.params.id;
  let x1 = query.x;
  let obj = {};
  console.log(request.query);
  knex("cohorts")
    .where("id", ids)
    .first()
    .then((team) => {
      if (x1 == "1") {
        let y = team.members.split(",");
        let arr = [];
        let length = y.length;
        for (let i = 0; i < length; i++) {
          arr.push(...y.splice(Math.floor(Math.random() * y.length - 1), 1));
        }
        let num = Math.ceil(arr.length / parseInt(query.number));
        for (let i = 0; i < parseInt(query.number); i++) {
          obj[`${i}`] = [];
        }
        let j = 0;
        let i = 0;
        while (arr.length > 0) {
          for (let value in obj) {
            if (arr.length == 0) {
              break;
            } else {
              obj[value][i] = arr.pop();
            }
          }
          i++;
        }
        if (team) {
          console.log(team);
          console.log(obj);
          response.render("show", { team, query, obj });
        } else {
          response.redirect("/team/new");
        }
      }
      if (x1 == "2") {
        let y = team.members.split(",");
        let arr = [];
        let length = y.length;
        for (let i = 0; i < length; i++) {
          arr.push(...y.splice(Math.floor(Math.random() * y.length - 1), 1));
        }
        console.log(arr);
        let num = Math.floor(arr.length / parseInt(query.number));
        for (let i = 0; i < arr.length; ) {
          let team = new Array();
          for (let j = i; j < i + parseInt(query.number); j++) {
            if (arr[j] != undefined) team.push(arr[j].trim());
          }
          obj[`${i}`] = team;
          i = i + parseInt(query.number);
        }
        console.log(obj);
      }
      if (team) {
        console.log(team);
        console.log(obj);
        response.render("show", { team, query, obj });
      } else {
        response.redirect("/team/new");
      }
    });
});

// A route to delete a note at DELETE /notes/:id

router.get("/:id/edit", (request, response) => {
  knex("cohorts")
    .where("id", request.params.id)
    .first()
    .then((team) => {
      response.render("edit", { team });
    });
});

// // A route to update an edited note at PATCH /notes/:id
router.patch("/:id/edit", (request, response) => {
  const update = {
    members: request.body.members,
    name: request.body.name,
    logoUrl: request.body.name,
  };

  knex("cohorts")
    .where("id", request.params.id)
    .update(update)
    .then(() => {
      response.redirect("/team");
    });
});

router.delete("/:id", (request, response) => {
  knex("cohorts")
    .where("id", request.params.id)
    .del()
    .then(response.redirect("/team"));
});

module.exports = router;
