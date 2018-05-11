/*
  Automatically instantiates modules based on data-attributes
  specifying module file-names.
*/

const moduleElements = document.querySelectorAll('[data-module]')

for (var i = 0; i < moduleElements.length; i++) {
  const el = moduleElements[i]
  const name = el.getAttribute('data-module')
  const Module = require(`./${name}`).default
  new Module(el)
}


var commentTemplate = document.getElementById("scoreboard-template").innerHTML;
var templateFn = _.template(commentTemplate);
var dateScores = document.querySelector(".date-scores");

var randomScore = () => Math.round(Math.random() * 5);
var randomValue = () => 766545235 + 6370 * Math.round(Math.random() * 10326);

var games = [
  {
    homeShortName:"FIN",
    homeFlag:"../images/flags/FRA.svg",
    homeScore:randomScore(),
    awayShortName:"GER",
    awayFlag:"../images/flags/DEU.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },
  {
    homeShortName:"CHE",
    homeFlag:"../images/flags/CHE.svg",
    homeScore:randomScore(),
    awayShortName:"POL",
    awayFlag:"../images/flags/POL.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },
  {
    homeShortName:"PRT",
    homeFlag:"../images/flags/PRT.svg",
    homeScore:randomScore(),
    awayShortName:"JPN",
    awayFlag:"../images/flags/JPN.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },
  {
    homeShortName:"KOR",
    homeFlag:"../images/flags/KOR.svg",
    homeScore:randomScore(),
    awayShortName:"PER",
    awayFlag:"../images/flags/PER.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },
  {
    homeShortName:"NGA",
    homeFlag:"../images/flags/NGA.svg",
    homeScore:randomScore(),
    awayShortName:"MEX",
    awayFlag:"../images/flags/MEX.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },
  {
    homeShortName:"RUS",
    homeFlag:"../images/flags/RUS.svg",
    homeScore:randomScore(),
    awayShortName:"SEN",
    awayFlag:"../images/flags/SEN.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },

  {
    homeShortName:"TUN",
    homeFlag:"../images/flags/TUN.svg",
    homeScore:randomScore(),
    awayShortName:"COL",
    awayFlag:"../images/flags/COL.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },
  {
    homeShortName:"EGY",
    homeFlag:"../images/flags/EGY.svg",
    homeScore:randomScore(),
    awayShortName:"CRO",
    awayFlag:"../images/flags/HRV.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },
  {
    homeShortName:"MEX",
    homeFlag:"../images/flags/MEX.svg",
    homeScore:randomScore(),
    awayShortName:"SAU",
    awayFlag:"../images/flags/SAU.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },
]

function numberFormat(_number, _sep) {
    _number = typeof _number != "undefined" && _number > 0 ? _number : "";
    _number = _number.toString().replace(new RegExp("^(\\d{" + (_number.length%3? _number.length%3:0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim();
    if(typeof _sep != "undefined" && _sep != " ") {
        _number = _number.replace(/\s/g, _sep);
    }
    return _number;
}


games.forEach(function(game) {
  var generatedTemplate = templateFn(game);
  dateScores.innerHTML += generatedTemplate;
});


var wrap = $(".scores");

window.addEventListener("scroll", function(e) {
  console.log(pageYOffset)
  if (window.pageYOffset > 64) {
    wrap.addClass("fix");
    $(".left-spacer").show();
  } else {
    wrap.removeClass("fix");
    $(".left-spacer").hide();
  }

});
