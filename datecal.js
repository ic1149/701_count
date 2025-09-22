function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function insert_list(mylist, myid){
  var myhtmllist = document.getElementById(myid)
  mylist.forEach(element => {
    var node = document.createElement("li");
    var textnode = document.createTextNode(element);
    node.appendChild(textnode);
    myhtmllist.appendChild(node);
  });
}

async function unitcounting() {
  // 701/0
  const units_ten = [
    "701037",
    "701039 (Ace)",
    "701043 (Waterloo 175)",
    "701028 (Jockey)",
    "701036",
    "701031",
    "701017",
    "701046 (GBR)",
    "701034 (Red Rose)",
    "701042 (Nighthawk)",
    "701035",
    "701044",
    "701041",
    "701025 (Thames Racer)",
    "701018",
    "701051",
    "701012",
    "701013",
    "701058",
    "701057",
    "701053",
    "701005",
    "701056",
    "701021"
  ] // ordered by time put into service, earliest first
  insert_list(units_ten,"ten")

  const target = units_ten.length
  const duration = 1
  const interval = (duration / target) * 1000
  for (let i = 0; i <= target; i++) {
    document.getElementById("unitcount").innerHTML = String(i) + "/90";
    await sleep(interval);

  }

}

async function daycounting() {
  const date1 = new Date('1/9/2024');
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const duration = 1
  const interval = (duration / diffDays) * 1000
  for (let i = 0; i <= diffDays; i++) {
    document.getElementById("daycount").innerHTML = String(i) + " days";
    await sleep(interval);

  }

}

unitcounting()
daycounting()


