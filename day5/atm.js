// ---------------- CONFIG ----------------
const CORRECT_PIN = "1234";
const MAX_ATTEMPTS = 3;

// ---------------- STATE ----------------
let attemptsLeft = localStorage.getItem("attempts")
  ? Number(localStorage.getItem("attempts"))
  : MAX_ATTEMPTS;

let isLocked = localStorage.getItem("locked") === "true";

let balance = localStorage.getItem("balance")
  ? Number(localStorage.getItem("balance"))
  : 5000;

// ---------------- SAVE STATE ----------------
function saveState() {
  localStorage.setItem("attempts", attemptsLeft);
  localStorage.setItem("locked", isLocked);
  localStorage.setItem("balance", balance);
}

// ---------------- VALIDATION ----------------
function canWithdraw(balance, amount) {
  if (amount <= 0) return false;
  if (amount > balance) return false;
  return true;
}

// ---------------- LOGIN ----------------
function login() {
  const pin = document.getElementById("pinInput").value;
  const msg = document.getElementById("loginMsg");

  if (isLocked) {
    msg.innerText = "ATM is locked due to 3 wrong PIN attempts.";
    return;
  }

  if (pin === CORRECT_PIN) {
    attemptsLeft = MAX_ATTEMPTS;
    saveState();
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("atmBox").classList.remove("hidden");
    msg.innerText = "";
  } else {
    attemptsLeft--;
    saveState();

    if (attemptsLeft === 0) {
      isLocked = true;
      saveState();
      msg.innerText = "ATM locked. Too many wrong attempts.";
    } else {
      msg.innerText = `Wrong PIN. Attempts left: ${attemptsLeft}`;
    }
  }
}

// ---------------- ATM FUNCTIONS ----------------
function checkBalance() {
  document.getElementById("atmMsg").innerText =
    "Current balance: " + balance;
}

function withdraw() {
  const amount = Number(document.getElementById("withdrawAmount").value);

  if (!canWithdraw(balance, amount)) {
    document.getElementById("atmMsg").innerText =
      "Invalid withdrawal amount.";
    return;
  }

  balance -= amount;
  saveState();
  document.getElementById("atmMsg").innerText =
    "Withdrawal successful. Remaining balance: " + balance;
}

function deposit() {
  const amount = Number(document.getElementById("depositAmount").value);

  if (amount <= 0) {
    document.getElementById("atmMsg").innerText =
      "Invalid deposit amount.";
    return;
  }

  balance += amount;
  saveState();
  document.getElementById("atmMsg").innerText =
    "Deposit successful. New balance: " + balance;
}

function logout() {
  document.getElementById("atmBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
  document.getElementById("pinInput").value = "";
}
