const operators = 
[
    {
        name: "Kapkan",
        team: "Defenders",
        speed: 2,
        armor: 2,
        difficulty: 1
    },
    //{
        //name: "Tachanka",
        //team: "Defenders",
        //speed: 1,
        //armor: 3,
        //difficulty: 1
    //},
    {
        name: "Glaz",
        team: "Attackers",
        speed: 2,
        armor: 2,
        difficulty: 1
    },
    //{
        //name: "Fuze",
        //team: "Attackers",
        //speed: 1,
        //armor: 3,
        //difficulty: 1
    //},
    //{
        //name: "IQ",
        //team: "Attackers",
        //speed: 3,
        //armor: 1,
        //difficulty: 3
    //},
    {
        name: "Blitz",
        team: "Attackers",
        speed: 2,
        armor: 2,
        difficulty: 3
    },
    {
        name: "Bandit",
        team: "Defenders",
        speed: 3,
        armor: 1,
        difficulty: 1
    },
    //{
        //name: "Jager",
        //team: "Defenders",
        //speed: 2,
        //armor: 2,
        //difficulty: 2
    //},
    {
        name: "Rook",
        team: "Defenders",
        speed: 1,
        armor: 3,
        difficulty: 1
    },
    {
        name: "Doc",
        team: "Defenders",
        speed: 1,
        armor: 3,
        difficulty: 1
    },
    {
        name: "Twitch",
        team: "Attackers",
        speed: 2,
        armor: 2,
        difficulty: 2
    },
    {
        name: "Montagne",
        team: "Attackers",
        speed: 1,
        armor: 3,
        difficulty: 3
    },
    {
        name: "Thermite",
        team: "Attackers",
        speed: 2,
        armor: 2,
        difficulty: 1
    },
    {
        name: "Ash",
        team: "Attackers",
        speed: 3,
        armor: 1,
        difficulty: 2
    },
    {
        name: "Pulse",
        team: "Defenders",
        speed: 3,
        armor: 1,
        difficulty: 3
    },
    {
        name: "Castle",
        team: "Defenders",
        speed: 2,
        armor: 2,
        difficulty: 2
    },
    {
        name: "Thatcher",
        team: "Attackers",
        speed: 2,
        armor: 2,
        difficulty: 1
    },
    {
        name: "Sledge",
        team: "Attackers",
        speed: 2,
        armor: 2,
        difficulty: 1
    },
    //{
        //name: "Smoke",
        //team: "Defenders",
        //speed: 2,
        //armor: 2,
        //difficulty: 2
    //},
    {
        name: "Mute",
        team: "Defenders",
        speed: 2,
        armor: 2,
        difficulty: 1
    },
];

const chosenOperator = operators[Math.floor(Math.random() * operators.length)]
console.log('==============================')
console.log(' Random R6 Operator Generator')
console.log('   Name: ' + chosenOperator.name)
console.log('   Team: ' + chosenOperator.team)
console.log('   Speed: ' + chosenOperator.speed)
console.log('   Armor: ' + chosenOperator.armor)
console.log('   Difficulty: ' + chosenOperator.difficulty)
console.log('==============================')