window.onload = initLoad;
async function initLoad() {
  let habitsContainer = document.querySelector(".habits--container");
  habitsContainer ? (habitsContainer.innerHTML = "") : null;

  try {
    let data = await getHabitsForUser(localStorage.getItem("id"));
    console.log(data);
    let habits = [];
    data.forEach((habit) => {
      console.log(`Days Comp: ${habit.dayscompleted}
      Days Exist: ${habit.daysexist}
      ${Math.floor((habit.dayscompleted / (habit.daysexist + 1)) * 100)}`);
      let generatedHabit = generateHabit({
        ...habit,
        overall:
          habit.dayscompleted == 0
            ? 0
            : Math.floor((habit.dayscompleted / (habit.daysexist + 1)) * 100),
      });
      habits.push(generatedHabit);
    });
    habits.forEach((habit) => {
      console.log(habit);
      if (habit.getAttribute("completed") == "true") {
        document.querySelector(".habits--completed").appendChild(habit);
      } else {
        document.querySelector(".habits--container").appendChild(habit);
      }
    });

    renderHabits();
  } catch (e) {
    console.log(e);
  }
}

function generateHabit({
  title,
  category,
  id,
  frequency,
  timesdone,
  overall,
  completed,
}) {
  let habit = document.createElement("div");
  habit.classList.add("habit");
  habit.setAttribute("id", id);
  habit.setAttribute("completed", completed);
  habit.setAttribute("data-frequency", frequency);

  habit.innerHTML = `
    <div class="habit--options">
    <button>+</button>
    <button>-</button>
  </div>
  <div class="habit--content">
    <h2 class="habit--header">${title}</h2>
    <p class="habit--description">
      ${category}
    </p>
    <h3>Daily Tracker:</h3>
    <div class="progress">
      <span class="progress--indicator"></span>
      <div class="progress--done" data-done=${timesdone}></div>
    </div>
    <h3>Overall Completion:</h3>
    <div class="progress">
      <span class="progress--indicator"></span>
      <div data-done=${overall}  class="progress--done" ></div>
    </div>
  </div>
  <div class="options--red habit--options">
    <button id="red--option" habit="${id}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M3 14h8V4H3v10zM14 4h-1v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4H0V2h4V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h4v2zm-6 8h1V6H8v6zm-3 0h1V6H5v6z"></path></svg>
    </div>
    </button>
  `;
  //   habit.innerHTML = `
  // <div class="habit--options">
  //   <button>+</button>
  //   <button>-</button>
  // </div>
  // <div class="habit--content">
  //   <h2 class="habit--header">Practice Leet Code</h2>
  //   <p class="habit--description">
  //     Practice leetcode by completing 5 tasks per day
  //   </p>
  //   <h3>Daily Tracker:</h3>
  //   <div class="progress">
  //     <span class="progress--indicator">0/2 (0%)</span>
  //     <div class="progress--done" data-done="0" style="width: 0%; opacity: 1;"></div>
  //   </div>
  //   <h3>Overall Completion:</h3>
  //   <div class="progress">
  //     <span class="progress--indicator">100%</span>
  //     <div class="progress--done" data-done="100" style="width: 100%; opacity: 1;"></div>
  //   </div>
  // </div>
  // <div class="options--red habit--options">
  //   <button id="red--option"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M3 14h8V4H3v10zM14 4h-1v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4H0V2h4V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h4v2zm-6 8h1V6H8v6zm-3 0h1V6H5v6z"></path></svg>
  //   </button></div>

  // `;
  return habit;
}
