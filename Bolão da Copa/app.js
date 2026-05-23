/* =========================
   BANDEIRAS
========================= */

function getFlag(team){

  const flags = {

    "México":"https://flagcdn.com/w80/mx.png",
    "África do Sul":"https://flagcdn.com/w80/za.png",
    "Coreia do Sul":"https://flagcdn.com/w80/kr.png",
    "República Tcheca":"https://flagcdn.com/w80/cz.png",

    "Canadá":"https://flagcdn.com/w80/ca.png",
    "Bósnia":"https://flagcdn.com/w80/ba.png",
    "Catar":"https://flagcdn.com/w80/qa.png",
    "Suíça":"https://flagcdn.com/w80/ch.png",

    "Brasil":"https://flagcdn.com/w80/br.png",
    "Marrocos":"https://flagcdn.com/w80/ma.png",
    "Haiti":"https://flagcdn.com/w80/ht.png",
    "Escócia":"https://flagcdn.com/w80/gb-sct.png",

    "Estados Unidos":"https://flagcdn.com/w80/us.png",
    "Paraguai":"https://flagcdn.com/w80/py.png",
    "Austrália":"https://flagcdn.com/w80/au.png",
    "Turquia":"https://flagcdn.com/w80/tr.png",

    "Alemanha":"https://flagcdn.com/w80/de.png",
    "Curaçao":"https://flagcdn.com/w80/cw.png",
    "Costa do Marfim":"https://flagcdn.com/w80/ci.png",
    "Equador":"https://flagcdn.com/w80/ec.png",

    "Holanda":"https://flagcdn.com/w80/nl.png",
    "Japão":"https://flagcdn.com/w80/jp.png",
    "Suécia":"https://flagcdn.com/w80/se.png",
    "Tunísia":"https://flagcdn.com/w80/tn.png",

    "Bélgica":"https://flagcdn.com/w80/be.png",
    "Egito":"https://flagcdn.com/w80/eg.png",
    "Irã":"https://flagcdn.com/w80/ir.png",
    "Nova Zelândia":"https://flagcdn.com/w80/nz.png",

    "Espanha":"https://flagcdn.com/w80/es.png",
    "Cabo Verde":"https://flagcdn.com/w80/cv.png",
    "Arábia Saudita":"https://flagcdn.com/w80/sa.png",
    "Uruguai":"https://flagcdn.com/w80/uy.png",

    "França":"https://flagcdn.com/w80/fr.png",
    "Senegal":"https://flagcdn.com/w80/sn.png",
    "Iraque":"https://flagcdn.com/w80/iq.png",
    "Noruega":"https://flagcdn.com/w80/no.png",

    "Argentina":"https://flagcdn.com/w80/ar.png",
    "Argélia":"https://flagcdn.com/w80/dz.png",
    "Áustria":"https://flagcdn.com/w80/at.png",
    "Jordânia":"https://flagcdn.com/w80/jo.png",

    "Portugal":"https://flagcdn.com/w80/pt.png",
    "RD Congo":"https://flagcdn.com/w80/cd.png",
    "Uzbequistão":"https://flagcdn.com/w80/uz.png",
    "Colômbia":"https://flagcdn.com/w80/co.png",

    "Inglaterra":"https://flagcdn.com/w80/gb-eng.png",
    "Croácia":"https://flagcdn.com/w80/hr.png",
    "Gana":"https://flagcdn.com/w80/gh.png",
    "Panamá":"https://flagcdn.com/w80/pa.png"
  }

  return flags[team] || "https://flagcdn.com/w80/un.png"
}

/* =========================
   GRUPOS
========================= */

const groups = [

  {
    group:"Grupo A",
    teams:["México","África do Sul","Coreia do Sul","República Tcheca"]
  },

  {
    group:"Grupo B",
    teams:["Canadá","Bósnia","Catar","Suíça"]
  },

  {
    group:"Grupo C",
    teams:["Brasil","Marrocos","Haiti","Escócia"]
  },

  {
    group:"Grupo D",
    teams:["Estados Unidos","Paraguai","Austrália","Turquia"]
  },

  {
    group:"Grupo E",
    teams:["Alemanha","Curaçao","Costa do Marfim","Equador"]
  },

  {
    group:"Grupo F",
    teams:["Holanda","Japão","Suécia","Tunísia"]
  },

  {
    group:"Grupo G",
    teams:["Bélgica","Egito","Irã","Nova Zelândia"]
  },

  {
    group:"Grupo H",
    teams:["Espanha","Cabo Verde","Arábia Saudita","Uruguai"]
  },

  {
    group:"Grupo I",
    teams:["França","Senegal","Iraque","Noruega"]
  },

  {
    group:"Grupo J",
    teams:["Argentina","Argélia","Áustria","Jordânia"]
  },

  {
    group:"Grupo K",
    teams:["Portugal","RD Congo","Uzbequistão","Colômbia"]
  },

  {
    group:"Grupo L",
    teams:["Inglaterra","Croácia","Gana","Panamá"]
  }

]

/* =========================
   RODADAS
========================= */

const rounds = [

  /* RODADA 1 */
  [

    {
      group:"Grupo A",
      home:"México",
      away:"África do Sul",
      date:"11/06/2026",
      stadium:"Estádio Azteca",
      city:"Cidade do México"
    },

    {
      group:"Grupo A",
      home:"Coreia do Sul",
      away:"República Tcheca",
      date:"11/06/2026",
      stadium:"Guadalajara Stadium",
      city:"Guadalajara"
    },

    {
      group:"Grupo B",
      home:"Canadá",
      away:"Bósnia",
      date:"12/06/2026",
      stadium:"Toronto Stadium",
      city:"Toronto"
    },

    {
      group:"Grupo B",
      home:"Catar",
      away:"Suíça",
      date:"12/06/2026",
      stadium:"BC Place",
      city:"Vancouver"
    },

    {
      group:"Grupo C",
      home:"Brasil",
      away:"Marrocos",
      date:"13/06/2026",
      stadium:"MetLife Stadium",
      city:"Nova Jersey"
    },

    {
      group:"Grupo C",
      home:"Haiti",
      away:"Escócia",
      date:"13/06/2026",
      stadium:"Houston Stadium",
      city:"Houston"
    },

    {
      group:"Grupo D",
      home:"Estados Unidos",
      away:"Paraguai",
      date:"14/06/2026",
      stadium:"SoFi Stadium",
      city:"Los Angeles"
    },

    {
      group:"Grupo D",
      home:"Austrália",
      away:"Turquia",
      date:"14/06/2026",
      stadium:"Seattle Stadium",
      city:"Seattle"
    },

    {
    group:"Grupo E",
    home:"Alemanha",
    away:"Curaçao",
    date:"15/06/2026",
    stadium:"Dallas Stadium",
    city:"Dallas"
    },

{
    group:"Grupo E",
    home:"Costa do Marfim",
    away:"Equador",
    date:"15/06/2026",
    stadium:"Kansas City Stadium",
    city:"Kansas"
    },

    {
    group:"Grupo F",
    home:"Holanda",
    away:"Japão",
    date:"16/06/2026",
    stadium:"Atlanta Stadium",
    city:"Atlanta"
    },

    {
    group:"Grupo F",
    home:"Suécia",
    away:"Tunísia",
    date:"16/06/2026",
    stadium:"Miami Stadium",
    city:"Miami"
    },

    {
    group:"Grupo G",
    home:"Bélgica",
    away:"Egito",
    date:"17/06/2026",
    stadium:"Philadelphia Stadium",
    city:"Filadélfia"
    },

    {
    group:"Grupo G",
    home:"Irã",
    away:"Nova Zelândia",
    date:"17/06/2026",
    stadium:"Boston Stadium",
    city:"Boston"
    },

    {
    group:"Grupo H",
    home:"Espanha",
    away:"Cabo Verde",
    date:"18/06/2026",
    stadium:"San Francisco Stadium",
    city:"San Francisco"
    },

    {
    group:"Grupo H",
    home:"Arábia Saudita",
    away:"Uruguai",
    date:"18/06/2026",
    stadium:"Monterrey Stadium",
    city:"Monterrey"
    },

    {
    group:"Grupo I",
    home:"França",
    away:"Senegal",
    date:"19/06/2026",
    stadium:"Philadelphia Stadium",
    city:"Filadélfia"
    },

    {
    group:"Grupo I",
    home:"Iraque",
    away:"Noruega",
    date:"19/06/2026",
    stadium:"Chicago Stadium",
    city:"Chicago"
    },

    {
    group:"Grupo J",
    home:"Argentina",
    away:"Áustria",
    date:"20/06/2026",
    stadium:"SoFi Stadium",
    city:"Los Angeles"
    },

    {
    group:"Grupo J",
    home:"Argélia",
    away:"Jordânia",
    date:"20/06/2026",
    stadium:"Houston Stadium",
    city:"Houston"
    },

    {
    group:"Grupo K",
    home:"Portugal",
    away:"RD Congo",
    date:"21/06/2026",
    stadium:"Miami Stadium",
    city:"Miami"
    },

    {
    group:"Grupo K",
    home:"Uzbequistão",
    away:"Colômbia",
    date:"21/06/2026",
    stadium:"Dallas Stadium",
    city:"Dallas"
    },

    {
    group:"Grupo L",
    home:"Inglaterra",
    away:"Croácia",
    date:"22/06/2026",
    stadium:"New York Stadium",
    city:"Nova York"
    },

    {
    group:"Grupo L",
    home:"Gana",
    away:"Panamá",
    date:"22/06/2026",
    stadium:"Mexico City Stadium",
    city:"Cidade do México"
    }

  ],

 /* RODADA 2 */

[

  {
    group:"Grupo A",
    home:"México",
    away:"Coreia do Sul",
    date:"17/06/2026",
    stadium:"Monterrey Stadium",
    city:"Monterrey"
  },

  {
    group:"Grupo A",
    home:"África do Sul",
    away:"República Tcheca",
    date:"17/06/2026",
    stadium:"Guadalajara Stadium",
    city:"Guadalajara"
  },

  {
    group:"Grupo B",
    home:"Canadá",
    away:"Suíça",
    date:"18/06/2026",
    stadium:"Toronto Stadium",
    city:"Toronto"
  },

  {
    group:"Grupo B",
    home:"Bósnia",
    away:"Catar",
    date:"18/06/2026",
    stadium:"BC Place",
    city:"Vancouver"
  },

  {
    group:"Grupo C",
    home:"Brasil",
    away:"Escócia",
    date:"19/06/2026",
    stadium:"Houston Stadium",
    city:"Houston"
  },

  {
    group:"Grupo C",
    home:"Marrocos",
    away:"Haiti",
    date:"19/06/2026",
    stadium:"Miami Stadium",
    city:"Miami"
  },

  {
    group:"Grupo D",
    home:"Estados Unidos",
    away:"Turquia",
    date:"20/06/2026",
    stadium:"Seattle Stadium",
    city:"Seattle"
  },

  {
    group:"Grupo D",
    home:"Paraguai",
    away:"Austrália",
    date:"20/06/2026",
    stadium:"Dallas Stadium",
    city:"Dallas"
  },

  {
    group:"Grupo E",
    home:"Alemanha",
    away:"Equador",
    date:"21/06/2026",
    stadium:"Kansas City Stadium",
    city:"Kansas"
  },

  {
    group:"Grupo E",
    home:"Curaçao",
    away:"Costa do Marfim",
    date:"21/06/2026",
    stadium:"Houston Stadium",
    city:"Houston"
  },

  {
    group:"Grupo F",
    home:"Holanda",
    away:"Tunísia",
    date:"22/06/2026",
    stadium:"Miami Stadium",
    city:"Miami"
  },

  {
    group:"Grupo F",
    home:"Japão",
    away:"Suécia",
    date:"22/06/2026",
    stadium:"Atlanta Stadium",
    city:"Atlanta"
  },

  {
    group:"Grupo G",
    home:"Bélgica",
    away:"Nova Zelândia",
    date:"23/06/2026",
    stadium:"Boston Stadium",
    city:"Boston"
  },

  {
    group:"Grupo G",
    home:"Egito",
    away:"Irã",
    date:"23/06/2026",
    stadium:"Philadelphia Stadium",
    city:"Filadélfia"
  },

  {
    group:"Grupo H",
    home:"Espanha",
    away:"Uruguai",
    date:"24/06/2026",
    stadium:"San Francisco Stadium",
    city:"San Francisco"
  },

  {
    group:"Grupo H",
    home:"Cabo Verde",
    away:"Arábia Saudita",
    date:"24/06/2026",
    stadium:"Monterrey Stadium",
    city:"Monterrey"
  },

  {
    group:"Grupo I",
    home:"França",
    away:"Noruega",
    date:"25/06/2026",
    stadium:"Chicago Stadium",
    city:"Chicago"
  },

  {
    group:"Grupo I",
    home:"Senegal",
    away:"Iraque",
    date:"25/06/2026",
    stadium:"Philadelphia Stadium",
    city:"Filadélfia"
  },

  {
    group:"Grupo J",
    home:"Argentina",
    away:"Jordânia",
    date:"26/06/2026",
    stadium:"Los Angeles Stadium",
    city:"Los Angeles"
  },

  {
    group:"Grupo J",
    home:"Argélia",
    away:"Áustria",
    date:"26/06/2026",
    stadium:"Houston Stadium",
    city:"Houston"
  },

  {
    group:"Grupo K",
    home:"Portugal",
    away:"Colômbia",
    date:"27/06/2026",
    stadium:"Miami Stadium",
    city:"Miami"
  },

  {
    group:"Grupo K",
    home:"RD Congo",
    away:"Uzbequistão",
    date:"27/06/2026",
    stadium:"Dallas Stadium",
    city:"Dallas"
  },

  {
    group:"Grupo L",
    home:"Inglaterra",
    away:"Panamá",
    date:"28/06/2026",
    stadium:"New York Stadium",
    city:"Nova York"
  },

  {
    group:"Grupo L",
    home:"Croácia",
    away:"Gana",
    date:"28/06/2026",
    stadium:"Mexico City Stadium",
    city:"Cidade do México"
  }

],

  /* RODADA 3 */

[

  {
    group:"Grupo A",
    home:"México",
    away:"República Tcheca",
    date:"30/06/2026",
    stadium:"Azteca Stadium",
    city:"Cidade do México"
  },

  {
    group:"Grupo A",
    home:"África do Sul",
    away:"Coreia do Sul",
    date:"30/06/2026",
    stadium:"Monterrey Stadium",
    city:"Monterrey"
  },

  {
    group:"Grupo B",
    home:"Canadá",
    away:"Catar",
    date:"01/07/2026",
    stadium:"BC Place",
    city:"Vancouver"
  },

  {
    group:"Grupo B",
    home:"Bósnia",
    away:"Suíça",
    date:"01/07/2026",
    stadium:"Toronto Stadium",
    city:"Toronto"
  },

  {
    group:"Grupo C",
    home:"Brasil",
    away:"Haiti",
    date:"02/07/2026",
    stadium:"Miami Stadium",
    city:"Miami"
  },

  {
    group:"Grupo C",
    home:"Marrocos",
    away:"Escócia",
    date:"02/07/2026",
    stadium:"Atlanta Stadium",
    city:"Atlanta"
  },

  {
    group:"Grupo D",
    home:"Estados Unidos",
    away:"Austrália",
    date:"03/07/2026",
    stadium:"Los Angeles Stadium",
    city:"Los Angeles"
  },

  {
    group:"Grupo D",
    home:"Paraguai",
    away:"Turquia",
    date:"03/07/2026",
    stadium:"Seattle Stadium",
    city:"Seattle"
  },

  {
    group:"Grupo E",
    home:"Alemanha",
    away:"Costa do Marfim",
    date:"04/07/2026",
    stadium:"Dallas Stadium",
    city:"Dallas"
  },

  {
    group:"Grupo E",
    home:"Curaçao",
    away:"Equador",
    date:"04/07/2026",
    stadium:"Kansas City Stadium",
    city:"Kansas"
  },

  {
    group:"Grupo F",
    home:"Holanda",
    away:"Japão",
    date:"05/07/2026",
    stadium:"Atlanta Stadium",
    city:"Atlanta"
  },

  {
    group:"Grupo F",
    home:"Suécia",
    away:"Tunísia",
    date:"05/07/2026",
    stadium:"Miami Stadium",
    city:"Miami"
  },

  {
    group:"Grupo G",
    home:"Bélgica",
    away:"Irã",
    date:"06/07/2026",
    stadium:"Philadelphia Stadium",
    city:"Filadélfia"
  },

  {
    group:"Grupo G",
    home:"Egito",
    away:"Nova Zelândia",
    date:"06/07/2026",
    stadium:"Boston Stadium",
    city:"Boston"
  },

  {
    group:"Grupo H",
    home:"Espanha",
    away:"Arábia Saudita",
    date:"07/07/2026",
    stadium:"San Francisco Stadium",
    city:"San Francisco"
  },

  {
    group:"Grupo H",
    home:"Cabo Verde",
    away:"Uruguai",
    date:"07/07/2026",
    stadium:"Monterrey Stadium",
    city:"Monterrey"
  },

  {
    group:"Grupo I",
    home:"França",
    away:"Iraque",
    date:"08/07/2026",
    stadium:"Chicago Stadium",
    city:"Chicago"
  },

  {
    group:"Grupo I",
    home:"Senegal",
    away:"Noruega",
    date:"08/07/2026",
    stadium:"Philadelphia Stadium",
    city:"Filadélfia"
  },

  {
    group:"Grupo J",
    home:"Argentina",
    away:"Argélia",
    date:"09/07/2026",
    stadium:"Los Angeles Stadium",
    city:"Los Angeles"
  },

  {
    group:"Grupo J",
    home:"Áustria",
    away:"Jordânia",
    date:"09/07/2026",
    stadium:"Houston Stadium",
    city:"Houston"
  },

  {
    group:"Grupo K",
    home:"Portugal",
    away:"Uzbequistão",
    date:"10/07/2026",
    stadium:"Miami Stadium",
    city:"Miami"
  },

  {
    group:"Grupo K",
    home:"RD Congo",
    away:"Colômbia",
    date:"10/07/2026",
    stadium:"Dallas Stadium",
    city:"Dallas"
  },

  {
    group:"Grupo L",
    home:"Inglaterra",
    away:"Gana",
    date:"11/07/2026",
    stadium:"New York Stadium",
    city:"Nova York"
  },

  {
    group:"Grupo L",
    home:"Croácia",
    away:"Panamá",
    date:"11/07/2026",
    stadium:"Mexico City Stadium",
    city:"Cidade do México"
  }

]

]


/* =========================
   ELEMENTOS
========================= */

const groupsContainer = document.querySelector(".groups-container")
const matchesContainer = document.querySelector(".matches-container")
const roundTitle = document.querySelector("#roundTitle")
const prevRound = document.querySelector("#prevRound")
const nextRound = document.querySelector("#nextRound")
let currentRound = 0
let championAlreadyShown = false

function getMatchId(roundIndex, matchIndex){
  return `${roundIndex}-${matchIndex}`
}

function getSavedScore(matchId){
  return {
    home: localStorage.getItem(`${matchId}-home`) ?? "",
    away: localStorage.getItem(`${matchId}-away`) ?? ""
  }
}

function saveScore(matchId){

  const homeInput =
    document.querySelector(`#home-${matchId}`)

  const awayInput =
    document.querySelector(`#away-${matchId}`)

  if(!homeInput || !awayInput) return

  localStorage.setItem(
    `${matchId}-home`,
    homeInput.value
  )

  localStorage.setItem(
    `${matchId}-away`,
    awayInput.value
  )

  renderGroups()
  renderBracket()
}

function saveBet(matchId){
  saveScore(matchId)
  showToast("Palpite salvo com sucesso!")
}

function createEmptyStandings(){
  const standings = {}

  groups.forEach(group => {
    group.teams.forEach(team => {
      standings[team] = {
        team,
        group: group.group,
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        played: 0
      }
    })
  })

  return standings
}

function calculateStandings(){
  const standings = createEmptyStandings()

  rounds.forEach((round, roundIndex) => {
    round.forEach((match, matchIndex) => {
      const matchId = getMatchId(roundIndex, matchIndex)
      const homeRaw = localStorage.getItem(`${matchId}-home`)
      const awayRaw = localStorage.getItem(`${matchId}-away`)

      if(homeRaw === null || awayRaw === null || homeRaw === "" || awayRaw === "") return

      const homeGoals = Number(homeRaw)
      const awayGoals = Number(awayRaw)

      if(Number.isNaN(homeGoals) || Number.isNaN(awayGoals)) return
      if(!standings[match.home] || !standings[match.away]) return

      const home = standings[match.home]
      const away = standings[match.away]

      home.played++
      away.played++

      home.goalsFor += homeGoals
      home.goalsAgainst += awayGoals
      away.goalsFor += awayGoals
      away.goalsAgainst += homeGoals

      if(homeGoals > awayGoals){
        home.points += 3
        home.wins++
        away.losses++
      }else if(awayGoals > homeGoals){
        away.points += 3
        away.wins++
        home.losses++
      }else{
        home.points++
        away.points++
        home.draws++
        away.draws++
      }
    })
  })

  return standings
}

function sortTeamsByStandings(teamNames, standings){
  return [...teamNames].sort((a,b) => {
    const A = standings[a]
    const B = standings[b]
    const saldoA = A.goalsFor - A.goalsAgainst
    const saldoB = B.goalsFor - B.goalsAgainst

    if(B.points !== A.points) return B.points - A.points
    if(saldoB !== saldoA) return saldoB - saldoA
    if(B.goalsFor !== A.goalsFor) return B.goalsFor - A.goalsFor
    return A.team.localeCompare(B.team)
  })
}

function renderGroups(){
  groupsContainer.innerHTML = ""

  const standings = calculateStandings()

  groups.forEach(group => {
    const sortedTeams = sortTeamsByStandings(group.teams, standings)
    const card = document.createElement("div")
    card.className = "group-card"

    card.innerHTML = `
      <h3 class="group-title">${group.group}</h3>

      ${sortedTeams.map((team,index) => {
        const data = standings[team]
        const saldo = data.goalsFor - data.goalsAgainst

        return `
          <div class="team ${index < 2 ? "qualified" : ""} ${index === 2 ? "third-place" : ""}">
            <div class="team-left">
              <span class="position">${index + 1}</span>
              <img src="${getFlag(team)}" class="flag" alt="${team}">
              <span>${team}</span>
            </div>

            <div class="team-stats">
              <span>${data.points} pts</span>
              <small>J ${data.played} • SG ${saldo}</small>
            </div>
          </div>
        `
      }).join("")}
    `

    groupsContainer.appendChild(card)
  })
}

function renderMatches(){
  matchesContainer.innerHTML = ""
  roundTitle.innerText = `Rodada ${currentRound + 1}`

  rounds[currentRound].forEach((match,index) => {
    const matchId = getMatchId(currentRound, index)
    const saved = getSavedScore(matchId)
    const card = document.createElement("div")
    card.className = "match-card"

    card.innerHTML = `
      <div class="match-group">${match.group}</div>

      <div class="match-teams">
        <div class="match-team">
          <img src="${getFlag(match.home)}" class="flag-large" alt="${match.home}">
          <span>${match.home}</span>
        </div>

        <div class="score-inputs">
          <input type="number" min="0" inputmode="numeric" value="${saved.home}" id="home-${matchId}" class="score" placeholder="0">
          <span>x</span>
          <input type="number" min="0" inputmode="numeric" value="${saved.away}" id="away-${matchId}" class="score" placeholder="0">
        </div>

        <div class="match-team">
          <img src="${getFlag(match.away)}" class="flag-large" alt="${match.away}">
          <span>${match.away}</span>
        </div>
      </div>

      <div class="match-info">📅 ${match.date}</div>
      <div class="match-info">🏟️ ${match.stadium}</div>
      <div class="match-info">📍 ${match.city}</div>

      <button class="save-bet-btn" type="button">
        Salvar Palpite
      </button>
    `

    matchesContainer.appendChild(card)

    card.querySelectorAll(".score").forEach(input => {
      input.addEventListener("input", () => saveScore(matchId))
    })

    card.querySelector(".save-bet-btn").addEventListener("click", () => saveBet(matchId))
  })
}

prevRound.addEventListener("click", () => {
  currentRound = currentRound === 0 ? rounds.length - 1 : currentRound - 1
  renderMatches()
})

nextRound.addEventListener("click", () => {
  currentRound = currentRound === rounds.length - 1 ? 0 : currentRound + 1
  renderMatches()
})

function getQualifiedTeams(){
  const standings = calculateStandings()
  const topTwo = []
  const thirds = []

  groups.forEach(group => {
    const sorted = sortTeamsByStandings(group.teams, standings)
    topTwo.push(sorted[0], sorted[1])
    thirds.push(sorted[2])
  })

  const bestThirds = sortTeamsByStandings(thirds, standings).slice(0,8)

  return [...topTwo, ...bestThirds]
}

function getKnockoutPairs(teams){
  const pairs = []

  for(let i = 0; i < teams.length; i += 2){
    pairs.push([teams[i], teams[i + 1]])
  }

  return pairs
}

function getKnockoutScore(stage, index){
  return {
    home: localStorage.getItem(`${stage}-${index}-home`) ?? "",
    away: localStorage.getItem(`${stage}-${index}-away`) ?? ""
  }
}

function getWinner(stage, index, team1, team2){
  const score = getKnockoutScore(stage, index)
  const home = Number(score.home)
  const away = Number(score.away)

  if(score.home === "" || score.away === "") return null
  if(Number.isNaN(home) || Number.isNaN(away)) return null
  if(home > away) return team1
  if(away > home) return team2

  return null
}

function createBracketMatch(team1, team2, stage, index){
  const score = getKnockoutScore(stage, index)
  const safeTeam1 = team1 || "A Definir"
  const safeTeam2 = team2 || "A Definir"
  const flag1 = team1 ? `<img src="${getFlag(team1)}" alt="${team1}">` : `<span class="flag-placeholder">?</span>`
  const flag2 = team2 ? `<img src="${getFlag(team2)}" alt="${team2}">` : `<span class="flag-placeholder">?</span>`

  return `
    <div class="bracket-match">
      <div class="bracket-team">
        ${flag1}
        <span>${safeTeam1}</span>
      </div>

      <div class="bracket-score">
        <input type="number" min="0" inputmode="numeric" value="${score.home}" id="${stage}-${index}-home" placeholder="0">
        <span>×</span>
        <input type="number" min="0" inputmode="numeric" value="${score.away}" id="${stage}-${index}-away" placeholder="0">
      </div>

      <div class="bracket-team">
        ${flag2}
        <span>${safeTeam2}</span>
      </div>
    </div>
  `
}

function renderBracket(){
  const round16 = document.querySelector("#round16")
  const round8 = document.querySelector("#round8")
  const quarterFinals = document.querySelector("#quarterFinals")
  const semiFinals = document.querySelector("#semiFinals")
  const finalColumn = document.querySelector("#finalColumn")

  if(!round16 || !round8 || !quarterFinals || !semiFinals || !finalColumn) return

  round16.innerHTML = ""
  round8.innerHTML = ""
  quarterFinals.innerHTML = ""
  semiFinals.innerHTML = ""
  finalColumn.innerHTML = ""

  const qualified = getQualifiedTeams()
  const round16Winners = []
  const round8Winners = []
  const quarterWinners = []
  const semiWinners = []

  getKnockoutPairs(qualified).forEach((pair,index) => {
    round16.innerHTML += createBracketMatch(pair[0], pair[1], "round16", index)
    const winner = getWinner("round16", index, pair[0], pair[1])
    if(winner) round16Winners.push(winner)
  })

  for(let i = 0; i < 8; i++){
    const home = round16Winners[i * 2]
    const away = round16Winners[i * 2 + 1]
    round8.innerHTML += createBracketMatch(home, away, "round8", i)
    const winner = home && away ? getWinner("round8", i, home, away) : null
    if(winner) round8Winners.push(winner)
  }

  for(let i = 0; i < 4; i++){
    const home = round8Winners[i * 2]
    const away = round8Winners[i * 2 + 1]
    quarterFinals.innerHTML += createBracketMatch(home, away, "quarter", i)
    const winner = home && away ? getWinner("quarter", i, home, away) : null
    if(winner) quarterWinners.push(winner)
  }

  for(let i = 0; i < 2; i++){
    const home = quarterWinners[i * 2]
    const away = quarterWinners[i * 2 + 1]
    semiFinals.innerHTML += createBracketMatch(home, away, "semi", i)
    const winner = home && away ? getWinner("semi", i, home, away) : null
    if(winner) semiWinners.push(winner)
  }

  const finalHome = semiWinners[0]
  const finalAway = semiWinners[1]
  finalColumn.innerHTML += createBracketMatch(finalHome, finalAway, "final", 0)

  const champion = finalHome && finalAway ? getWinner("final", 0, finalHome, finalAway) : null

  if(champion){
    finalColumn.innerHTML += `
      <div class="world-champion">
        <img src="${getFlag(champion)}" alt="${champion}">
        <h2>${champion}</h2>
        <span>WORLD CHAMPION</span>
      </div>
    `

    startConfetti()
    showChampionScreen(champion)
  }else{
    championAlreadyShown = false
  }

  addBracketEvents()
}

function addBracketEvents(){
  document.querySelectorAll(".bracket-score input").forEach(input => {
    input.addEventListener("input", e => {
      localStorage.setItem(e.target.id, e.target.value)
      renderBracket()
    })
  })
}

function showToast(message){
  const toast = document.createElement("div")
  toast.className = "toast"
  toast.innerText = message
  document.body.appendChild(toast)

  setTimeout(() => toast.classList.add("show"), 50)
  setTimeout(() => {
    toast.classList.remove("show")
    setTimeout(() => toast.remove(), 300)
  }, 2200)
}

function startConfetti(){
  const canvas = document.querySelector("#confettiCanvas")
  if(!canvas) return

  const ctx = canvas.getContext("2d")
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const colors = ["#5400ff", "#1753fc", "#00c04f", "#e41369", "#ffb800", "#ffffff"]
  const confetti = []

  for(let i = 0; i < 180; i++){
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 8 + 4,
      speed: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 10 - 5
    })
  }

  let frame = 0

  function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    confetti.forEach(piece => {
      piece.y += piece.speed
      piece.rotation += piece.rotationSpeed

      ctx.save()
      ctx.translate(piece.x, piece.y)
      ctx.rotate(piece.rotation * Math.PI / 180)
      ctx.fillStyle = piece.color
      ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size)
      ctx.restore()
    })

    frame++

    if(frame < 220){
      requestAnimationFrame(animate)
    }else{
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }

  animate()
}

function showChampionScreen(team){
  if(championAlreadyShown) return

  championAlreadyShown = true

  const screen = document.querySelector("#championScreen")
  const name = document.querySelector("#championName")
  const flag = document.querySelector("#championFlag")
  const audio = document.querySelector("#crowdAudio")

  if(!screen || !name || !flag) return

  name.innerText = team
  flag.src = getFlag(team)
  screen.classList.add("active")

  if(audio){
    audio.currentTime = 0
    audio.play().catch(() => {})
  }
}

function closeChampionScreen(){
  const screen = document.querySelector("#championScreen")
  if(screen) screen.classList.remove("active")
}

async function exportPDF(){
  const { jsPDF } = window.jspdf
  const doc = new jsPDF()

  doc.setFontSize(24)
  doc.text("Bolão da Copa 2026", 20, 20)

  let y = 35

  rounds.forEach((round, roundIndex) => {
    doc.setFontSize(16)
    doc.text(`Rodada ${roundIndex + 1}`, 20, y)
    y += 10
    doc.setFontSize(10)

    round.forEach((match, matchIndex) => {
      const id = getMatchId(roundIndex, matchIndex)
      const saved = getSavedScore(id)
      doc.text(`${match.home} ${saved.home || "-"} x ${saved.away || "-"} ${match.away}`, 20, y)
      y += 6

      if(y > 280){
        doc.addPage()
        y = 20
      }
    })

    y += 6
  })

  doc.save("bolao-copa-2026.pdf")
}

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")

  if(window.scrollY > 50){
    navbar.style.padding = "14px 50px"
    navbar.style.background = "rgba(255,255,255,.92)"
  }else{
    navbar.style.padding = "18px 50px"
    navbar.style.background = "rgba(255,255,255,.75)"
  }
})

renderGroups()
renderMatches()
renderBracket()

/* =========================
   CONTAGEM REGRESSIVA COPA
========================= */

function updateCountdown(){

  const worldCupDate =
    new Date("2026-06-11T00:00:00").getTime()

  const now =
    new Date().getTime()

  const distance =
    worldCupDate - now

  if(distance <= 0){

    document.querySelector("#days").innerText = "00"
    document.querySelector("#hours").innerText = "00"
    document.querySelector("#minutes").innerText = "00"
    document.querySelector("#seconds").innerText = "00"

    return
  }

  const days =
    Math.floor(distance / (1000 * 60 * 60 * 24))

  const hours =
    Math.floor((distance / (1000 * 60 * 60)) % 24)

  const minutes =
    Math.floor((distance / (1000 * 60)) % 60)

  const seconds =
    Math.floor((distance / 1000) % 60)

  document.querySelector("#days").innerText =
    String(days).padStart(2,"0")

  document.querySelector("#hours").innerText =
    String(hours).padStart(2,"0")

  document.querySelector("#minutes").innerText =
    String(minutes).padStart(2,"0")

  document.querySelector("#seconds").innerText =
    String(seconds).padStart(2,"0")

}

setInterval(updateCountdown,1000)

updateCountdown()