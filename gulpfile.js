const del = require("del");

function clean(cb) {
  del(["out", "dist"]);
  cb();
}

exports.clean = clean;
