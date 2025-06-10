const movies = [
  { 
    title: "Iron Man (2008)", 
    time: 126, 
    info: "Tony Stark becomes Iron Man after being kidnapped." 
  },
  { 
    title: "The Incredible Hulk (2008)", 
    time: 112, 
    info: "Bruce Banner becomes the Hulk while hunted by the military." 
  },
  { 
    title: "Iron Man 2 (2010)", 
    time: 124,
    info: "Tony struggles with his health and new enemies." 
  },
  { 
    title: "Thor (2011)", 
    time: 115,
    info: "Thor is banished to Earth and learns humility." 
  },
  { 
    title: "Captain America: The First Avenger (2011)", 
    time: 124,
    info: "Steve Rogers becomes Captain America during WWII." 
  },
  { 
    title: "The Avengers (2012)", 
    time: 143,
    info: "Earth's mightiest heroes assemble to stop Loki." 
  },
  { 
    title: "Iron Man 3 (2013)", 
    time: 130,
    info: "Tony deals with PTSD and a new threat." 
  },
  { 
    title: "Thor: The Dark World (2013)", 
    time: 112,
    info: "Thor fights to save the realms from the Dark Elves." 
  },
  { 
    title: "Captain America: The Winter Soldier (2014)", 
    time: 136,
    info: "Steve confronts secrets in S.H.I.E.L.D. and an old friend." 
  },
  { 
    title: "Guardians of the Galaxy (2014)", 
    time: 121,
    info: "A group of misfits band together to save the galaxy." 
  },
  { 
    title: "Avengers: Age of Ultron (2015)", 
    time: 141,
    info: "The Avengers face a rogue AI threatening humanity." 
  },
  { 
    title: "Ant-Man (2015)", 
    time: 117,
    info: "Scott Lang becomes Ant-Man to pull off a heist." 
  },
  { 
    title: "Captain America: Civil War (2016)", 
    time: 147,
    info: "The Avengers split over government oversight." 
  },
  { 
    title: "Doctor Strange (2016)", 
    time: 115,
    info: "A surgeon learns mystic arts to heal the world." 
  },
  { 
    title: "Guardians of the Galaxy 2 (2017)", 
    time: 136,
    info: "The Guardians uncover Peter Quill's past." 
  },
  { 
    title: "Spider-Man: Homecoming (2017)", 
    time: 133,
    info: "Peter Parker balances high school and superhero life." 
  },
  { 
    title: "Thor: Ragnarok (2017)", 
    time: 130,
    info: "Thor must stop Ragnarok to save Asgard." 
  },
  { 
    title: "Black Panther (2017)", 
    time: 134,
    info: "T'Challa becomes king and faces new threats." 
  },
  { 
    title: "Avengers: Infinity War (2018)", 
    time: 149,
    info: "The Avengers fight to stop Thanos from wiping out half of life." 
  },
  { 
    title: "Ant-Man and the Wasp (2018)", 
    time: 118,
    info: "Scott teams up with Hope to uncover secrets of the quantum realm." 
  },
  { 
    title: "Captain Marvel (2019)", 
    time: 123,
    info: "Carol Danvers discovers her powers and past." 
  },
  { 
    title: "Avengers: Endgame (2019)", 
    time: 181,
    info: "The Avengers attempt to undo Thanos's snap." 
  },
  { 
    title: "Spider-Man: Far From Home (2019)", 
    time: 129,
    info: "Peter faces new threats on a European trip." 
  },
  { 
    title: "Black Widow (2021)", 
    time: 134,
    info: "Natasha confronts her past and family." 
  },
  { 
    title: "Shang-Chi and the Legend of the Ten Rings (2021)", 
    time: 132,
    info: "Shang-Chi confronts his father and legacy." 
  },
  { 
    title: "Eternals (2021)", 
    time: 156,
    info: "Ancient immortals protect Earth from Deviants." 
  },
  { 
    title: "Spider-Man: No Way Home (2021)", 
    time: 148,
    info: "Peter deals with multiverse consequences." 
  },
  { 
    title: "Doctor Strange in the Multiverse of Madness (2022)", 
    time: 126,
    info: "Strange explores dangerous multiverse magic." 
  },
  { 
    title: "Thor: Love and Thunder (2022)", 
    time: 119,
    info: "Thor faces new threats and his past." 
  },
  { 
    title: "Black Panther: Wakanda Forever (2022)", 
    time: 161,
    info: "Wakanda mourns their king and faces new dangers." 
  },
  { 
    title: "Ant-Man and the Wasp: Quantumania (2023)", 
    time: 125,
    info: "Scott faces Kang the Conqueror in the quantum realm." 
  },
  { 
    title: "Guardians of the Galaxy Vol. 3 (2023)", 
    time: 150,
    info: "The Guardians deal with past and new threats." 
  },
  { 
    title: "The Marvels (2023)", 
    time: 120,
    info: "Carol, Kamala, and Monica unite their powers." 
  },
  { 
    title: "Deadpool & Wolverine (2024)", 
    time: 140,
    info: "Deadpool and Wolverine team up for chaos." 
  },
  { 
    title: "Captain America: Brave New World (2025)", 
    time: 130,
    info: "Sam Wilson takes up the Captain America mantle." 
  },
  { 
    title: "Thunderbolts*", 
    time: 130,
    info: "A group of anti-heroes take on missions." 
  }
];

const movieList = document.getElementById("movie-list");
const searchInput = document.getElementById("search");
const progressBar = document.getElementById("progress-bar");
const summaryStats = document.getElementById("summary-stats");
const totalTime = document.getElementById("total-time");
const profileButtons = document.querySelectorAll(".profile-btn");
const uncheckBtn = document.getElementById("uncheck-all-btn");
const popupConfirm = document.getElementById("popup-confirm");
const confirmYesBtn = document.getElementById("confirm-yes");
const confirmNoBtn = document.getElementById("confirm-no");

let currentProfile = "Tommy";

function saveData() {
  const data = {};
  movies.forEach((movie, idx) => {
    data[idx] = {
      watched: document.querySelector(`#chk-${idx}`).checked,
      rating: document.querySelector(`#movie-${idx} .star.filled`)
        ? document.querySelectorAll(`#movie-${idx} .star.filled`).length
        : 0,
    };
  });
  localStorage.setItem(`mcu_${currentProfile}`, JSON.stringify(data));
}

function loadData() {
  const dataStr = localStorage.getItem(`mcu_${currentProfile}`);
  if (!dataStr) return;
  const data = JSON.parse(dataStr);
  movies.forEach((_, idx) => {
    const watched = data[idx]?.watched || false;
    const rating = data[idx]?.rating || 0;
    const checkbox = document.querySelector(`#chk-${idx}`);
    checkbox.checked = watched;
    updateStarRating(idx, rating);
  });
}

function updateStarRating(movieIdx, rating) {
  const stars = document.querySelectorAll(`#movie-${movieIdx} .star`);
  stars.forEach((star, i) => {
    if (i < rating) star.classList.add("filled");
    else star.classList.remove("filled");
  });
}

function minutesToDHm(mins) {
  const days = Math.floor(mins / 1440);
  const hours = Math.floor((mins % 1440) / 60);
  const minutes = mins % 60;
  let str = "";
  if (days > 0) str += `${days}d `;
  if (hours > 0 || days > 0) str += `${hours}h `;
  str += `${minutes}m`;
  return str;
}

function minutesToHm(mins) {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;
  return `${hours}h ${minutes}m`;
}

function renderMovies(filter = "") {
  movieList.innerHTML = "";
  const filterLower = filter.toLowerCase();
  movies.forEach((movie, idx) => {
    if (!movie.title.toLowerCase().includes(filterLower)) return;

    const li = document.createElement("li");
    li.id = `movie-${idx}`;

    // Checkbox + label
    const label = document.createElement("label");
    label.htmlFor = `chk-${idx}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `chk-${idx}`;

    // Watch time in "xh ym" format
    const watchTime = document.createElement("span");
    watchTime.className = "watch-time";
    watchTime.textContent = minutesToHm(movie.time);

    // Tooltip
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.innerHTML = `<b>${movie.title}</b>${movie.info}`;

    // Stars container
    const ratingDiv = document.createElement("div");
    ratingDiv.className = "rating";

    for (let i = 1; i <= 5; i++) {
      const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      star.setAttribute("viewBox", "0 0 24 24");
      star.classList.add("star");
      star.innerHTML = `<path d="M12 17.27L18.18 21 16.54 13.97 
        22 9.24l-7.19-.61L12 2 9.19 8.63 
        2 9.24l5.46 4.73L5.82 21z"></path>`;

      star.addEventListener("click", () => {
        const currentRating = [...ratingDiv.children].filter(s => s.classList.contains("filled")).length;
        if (i === currentRating) {
          updateStarRating(idx, i - 1);
        } else {
          updateStarRating(idx, i);
        }
        saveData();
        updateSummaryAndProgress();
      });

      ratingDiv.appendChild(star);
    }

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(movie.title));
    li.appendChild(label);
    li.appendChild(watchTime);
    li.appendChild(ratingDiv);
    li.appendChild(tooltip);

    movieList.appendChild(li);

    checkbox.addEventListener("change", () => {
      saveData();
      updateSummaryAndProgress();
    });
  });
  loadData();
  updateSummaryAndProgress();
}

function updateSummaryAndProgress() {
  const dataStr = localStorage.getItem(`mcu_${currentProfile}`);
  if (!dataStr) {
    summaryStats.textContent = "No movies watched yet.";
    totalTime.textContent = "";
    progressBar.style.width = "0%";
    return;
  }
  const data = JSON.parse(dataStr);

  let watchedCount = 0;
  let watchedTime = 0;
  let totalTimeMinutes = movies.reduce((sum, m) => sum + m.time, 0);
  let totalRating = 0;
  let ratedMovies = 0;

  movies.forEach((_, idx) => {
    if (data[idx]?.watched) {
      watchedCount++;
      watchedTime += movies[idx].time;
    }
    if (data[idx]?.rating > 0) {
      totalRating += data[idx].rating;
      ratedMovies++;
    }
  });

  const progressPercent = totalTimeMinutes === 0 ? 0 : Math.round((watchedTime / totalTimeMinutes) * 100);
  progressBar.style.width = progressPercent + "%";

  const avgRating = ratedMovies ? (totalRating / ratedMovies).toFixed(2) : "N/A";
  summaryStats.textContent = `Watched ${watchedCount} / ${movies.length} movies | Average Rating: ${avgRating} ★`;

  let remainingMins = totalTimeMinutes - watchedTime;
  let remainingStr = remainingMins > 1440 ? minutesToDHm(remainingMins) : minutesToHm(remainingMins);
  totalTime.textContent = `Total Watch Time Remaining: ${remainingStr}`;
}

function switchProfile(profile) {
  currentProfile = profile;
  profileButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.profile === profile);
  });
  renderMovies(searchInput.value);
}

searchInput.addEventListener("input", () => {
  renderMovies(searchInput.value);
});

profileButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    switchProfile(btn.dataset.profile);
  });
});

uncheckBtn.addEventListener("click", () => {
  popupConfirm.classList.remove("hidden");
});

confirmYesBtn.addEventListener("click", () => {
  movies.forEach((_, idx) => {
    document.querySelector(`#chk-${idx}`).checked = false;
    updateStarRating(idx, 0);
  });
  saveData();
  updateSummaryAndProgress();
  popupConfirm.classList.add("hidden");
});

confirmNoBtn.addEventListener("click", () => {
  popupConfirm.classList.add("hidden");
});

renderMovies();
