let threats = 0;
let scans = 0;

function log(msg) {
  const t = document.getElementById("terminal");
  t.innerHTML += "<br>> " + msg;
  t.scrollTop = t.scrollHeight;
}

function runScan() {
  scans++;
  document.getElementById("scans").innerText = scans;
  log("Running network scan...");

  setTimeout(() => {
    threats += Math.floor(Math.random() * 3);
    document.getElementById("threats").innerText = threats;
    log("Scan complete. Threats detected: " + threats);
  }, 2000);
}

function loadLogs() {
  log("Fetching logs...");
  setTimeout(() => {
    log("SSH brute force blocked");
    log("Port scan detected");
  }, 1000);
}

function systemStatus() {
  log("System secure. No vulnerabilities.");
}
