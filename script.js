<<<<<<< HEAD
const habitInput = document.getElementById('habitInput');
const saveHabitBtn = document.getElementById('saveHabit');
const habitSection = document.getElementById('habitSection');
const habitName = document.getElementById('habitName');
const markDoneBtn = document.getElementById('markDone');
const streakDisplay = document.getElementById('streak');

function loadHabit() {
  const habit = localStorage.getItem('habit');
  const streak = parseInt(localStorage.getItem('streak') || 0);
  const lastDate = localStorage.getItem('lastDate');

  if (habit) {
    habitName.textContent = habit;
    streakDisplay.textContent = streak;
    habitSection.classList.remove('hidden');

    const today = new Date().toDateString();
    if (lastDate === today) {
      markDoneBtn.disabled = true;
      markDoneBtn.textContent = "Already marked today!";
    }
  }
}

saveHabitBtn.onclick = () => {
  const habit = habitInput.value.trim();
  if (habit) {
    localStorage.setItem('habit', habit);
    localStorage.setItem('streak', '0');
    localStorage.removeItem('lastDate');
    location.reload();
  }
};

markDoneBtn.onclick = () => {
  const today = new Date().toDateString();
  const lastDate = localStorage.getItem('lastDate');

  if (lastDate !== today) {
    let streak = parseInt(localStorage.getItem('streak') || 0);
    streak++;
    localStorage.setItem('streak', streak.toString());
    localStorage.setItem('lastDate', today);
    streakDisplay.textContent = streak;
    markDoneBtn.disabled = true;
    markDoneBtn.textContent = "Already marked today!";
  }
};

window.onload = loadHabit;
=======
const habitInput = document.getElementById('habitInput');
const saveHabitBtn = document.getElementById('saveHabit');
const habitSection = document.getElementById('habitSection');
const habitName = document.getElementById('habitName');
const markDoneBtn = document.getElementById('markDone');
const streakDisplay = document.getElementById('streak');

function loadHabit() {
  const habit = localStorage.getItem('habit');
  const streak = parseInt(localStorage.getItem('streak') || 0);
  const lastDate = localStorage.getItem('lastDate');

  if (habit) {
    habitName.textContent = habit;
    streakDisplay.textContent = streak;
    habitSection.classList.remove('hidden');

    const today = new Date().toDateString();
    if (lastDate === today) {
      markDoneBtn.disabled = true;
      markDoneBtn.textContent = "Already marked today!";
    }
  }
}

saveHabitBtn.onclick = () => {
  const habit = habitInput.value.trim();
  if (habit) {
    localStorage.setItem('habit', habit);
    localStorage.setItem('streak', '0');
    localStorage.removeItem('lastDate');
    location.reload();
  }
};

markDoneBtn.onclick = () => {
  const today = new Date().toDateString();
  const lastDate = localStorage.getItem('lastDate');

  if (lastDate !== today) {
    let streak = parseInt(localStorage.getItem('streak') || 0);
    streak++;
    localStorage.setItem('streak', streak.toString());
    localStorage.setItem('lastDate', today);
    streakDisplay.textContent = streak;
    markDoneBtn.disabled = true;
    markDoneBtn.textContent = "Already marked today!";
  }
};

window.onload = loadHabit;
>>>>>>> 6a4d4a41bd54d9bd7ebea9a4eb6a06afcb838e45
