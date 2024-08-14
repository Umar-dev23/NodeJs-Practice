function good() {
  console.log("Good Umar");
}

function goodName(name) {
  console.log("Good " + name);
}

//module.exports = good;
module.exports = { good, goodName };
