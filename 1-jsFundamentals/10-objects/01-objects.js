var netflix = {
    id: 9,
    name: "Super Store",
    season1: {
        seasonInfo: {
            episodeInfo : [
                { episode: 1, episodeName: "Pilot"},
                { episode: 2, episodeName: "Magazine Profile"},
                { episode: 3, episodeName: "Shots and Salsa"},
                { episode: 4, episodeName: "Mannequin"},
                { episode: 5, episodeName: "Shoplifter"},
                { episode: 6, episodeName: "Secret Shopper"},
                { episode: 7, episodeName: "Color Wars"},
                { episode: 8, episodeName: "Wedding Day Sale"},
                { episode: 9, episodeName: "All-Nighter"},
                { episode: 10, episodeName: "Demotion"},
                { episode: 11, episodeName: "Labor"}
            ]
        }
    },
    season2: {},
    season3: {}
};

console.log('All data: ' + netflix)

console.log(netflix.season1.seasonInfo.episodeInfo[4].episode, netflix.season1.seasonInfo.episodeInfo[4].episodeName)

// This is a JSON object
var json = {
    "workbench.colorTheme": "One Dark+ (Sublime)",
    "window.zoomLevel": 3,
    "files.exclude": {
      "**/.git": true,
      "**/.DS_Store": true,
      "**/*.js": {
        "when": "$(basename).ts"
      },
      "**/*.js.map": {
        "when": "$(basename)"
      }
    },
    "editor.fontFamily": "Monaco, 'Courier New', monospace",
    "editor.detectIndentation": false,
    "editor.letterSpacing": 0,
    "editor.tabSize": 2,
    "files.autoSave": "off",
    "editor.wordWrap": "on",
    "extensions.ignoreRecommendations": true,
    "[html]": {},
    "files.associations": {
      "*.html": "html",
      "*.js": "javascriptreact"
    },
    "html.format.indentInnerHtml": true,
    "editor.fontSize": 11,
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.port": 3500,
    "[javascriptreact]": {}
  }


  let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevel: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }

//   console.log(spaceJam.toonSquad.bird)
//   console.log(Object.keys(spaceJam.toonSquad))
//   console.log(Object.keys(spaceJam.toonSquad.duck))
//   console.log(Object.values(spaceJam.toonSquad))
console.log(Object.keys(spaceJam.toonSquad).toString())

// Square bracket notation -- like . notation, a method for grabbing object values

// let garden = {
//     vegetable: 'zucchini',
//     flower: 'sunflower',
//     fruit: 'grapes',
//     water: true,
//     sun: true,
//     size: 10
// }

// console.log(garden.vegetable)

let key = 'vegetable'
console.log(garden['vegetable'])

let baking = {}

baking.banana = 'banana bread is yummy!'
baking['zucchini'] = 'better make some zucchini bread!'

console.log(Object.values(baking))

let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower',
    fruit: 'grapes',
    water: true,
    sun: true,
    size: {
        units: 'inches'
    }
}

let key = 'water'

Object.keys(garden).forEach(g => {
    if (key === g){
        console.log(garden[key])
    }
})






function pigLatin(str) {
  if (str.startsWith('a') || str.startsWith('e') || str.startsWith('i') || str.startsWith('o') || str.startsWith('u')) {
    console.log(str + 'ay')
  } 
}

pigLatin('elephant')




var amIGood = true

var iCanHasGift = new Promise(
  function (resolve, reject) {
    if (amIGood) {
      var gift = {
        brand: 'HasMattelbro',
        item: 'Turbo-Man action figure'
      }
      resolve(gift)
    } else {
      var naughty = "You've made Santa's naughty list; enjoy your coal!"
      reject(naughty)
    }
  }
)


var checkTwice = function () {
  iCanHasGift
      .then(function (fulfilled) {
        console.log(fulfilled)
      })
      .catch(function (error) {
        console.log(error)
      })
}

checkTwice()