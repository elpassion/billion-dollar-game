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
    homeFlag:"../images/flags/FR.svg",
    homeScore:randomScore(),
    awayShortName:"GER",
    awayFlag:"../images/flags/GE.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },
  {
    homeShortName:"SCH",
    homeFlag:"../images/flags/CH.svg",
    homeScore:randomScore(),
    awayShortName:"POL",
    awayFlag:"../images/flags/PL.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },
  {
    homeShortName:"IRL",
    homeFlag:"../images/flags/IR.svg",
    homeScore:randomScore(),
    awayShortName:"JAP",
    awayFlag:"../images/flags/JP.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },
  {
    homeShortName:"KOR",
    homeFlag:"../images/flags/KR.svg",
    homeScore:randomScore(),
    awayShortName:"PER",
    awayFlag:"../images/flags/PE.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },
  {
    homeShortName:"NIG",
    homeFlag:"../images/flags/NG.svg",
    homeScore:randomScore(),
    awayShortName:"PAR",
    awayFlag:"../images/flags/PA.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },
  {
    homeShortName:"RUS",
    homeFlag:"../images/flags/RU.svg",
    homeScore:randomScore(),
    awayShortName:"SEN",
    awayFlag:"../images/flags/SN.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },
  {
    homeShortName:"ISL",
    homeFlag:"../images/flags/IS.svg",
    homeScore:randomScore(),
    awayShortName:"POR",
    awayFlag:"../images/flags/PT.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },
  {
    homeShortName:"TUN",
    homeFlag:"../images/flags/TN.svg",
    homeScore:randomScore(),
    awayShortName:"COL",
    awayFlag:"../images/flags/CO.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },
  {
    homeShortName:"EGY",
    homeFlag:"../images/flags/EG.svg",
    homeScore:randomScore(),
    awayShortName:"CRO",
    awayFlag:"../images/flags/HR.svg",
    awayScore:randomScore(),
    gameValue:numberFormat(randomValue()," "),
  },
  {
    homeShortName:"MEX",
    homeFlag:"../images/flags/MX.svg",
    homeScore:randomScore(),
    awayShortName:"SAU",
    awayFlag:"../images/flags/SA.svg",
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
