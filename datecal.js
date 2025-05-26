function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function unitcounting() {
  const target = 7
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




