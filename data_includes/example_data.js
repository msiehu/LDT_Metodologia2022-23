
    
var shuffleSequence = seq(sepWith("sep", seq("intro", "Instructions", rshuffle(startsWith("EN")))));  


var showProgressBar = false;

var defaults = [
    "Separator", {
        transfer: 100,
        normalMessage: " ",
        errorMessage: " "

    },


    "AcceptabilityJudgment_EN", {
        as: ["1", "2"],
        presentAsScale: true,
       // hasCorrect: ["1", "2"],
        hasCorrect: false,
     //   instructions: "Clika una opción",
        leftComment: "NO", rightComment: "YES"
    },
    
  
 
    
    
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [

    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],   
    
    ["Instructions", "Form", {
        html: { include: "Instructions.html"},
    } ],
    

  
    

 
["EN-s1", "AcceptabilityJudgment_EN", {s:"mensible", hasCorrect:'1'}],
["EN-s2", "AcceptabilityJudgment_EN", {s:"scornful", hasCorrect:'2'}],
["EN-s3", "AcceptabilityJudgment_EN", {s:"stoutly", hasCorrect:'2'}],
["EN-s4", "AcceptabilityJudgment_EN", {s:"ablaze", hasCorrect:'2'}],
["EN-s5", "AcceptabilityJudgment_EN", {s:"kermshaw", hasCorrect:'1'}],
["EN-s6", "AcceptabilityJudgment_EN", {s:"moonlit", hasCorrect:'2'}],
["EN-s7", "AcceptabilityJudgment_EN", {s:"lofty", hasCorrect:'2'}],
["EN-s8", "AcceptabilityJudgment_EN", {s:"hurricane",hasCorrect:'2'}],
["EN-s9", "AcceptabilityJudgment_EN", {s:"flaw", hasCorrect:'2'}],
["EN-s10", "AcceptabilityJudgment_EN", {s:"alberation", hasCorrect:'1'}],
["EN-s11", "AcceptabilityJudgment_EN", {s:"unkempt", hasCorrect:'2'}],
["EN-s12", "AcceptabilityJudgment_EN", {s:"breeding", hasCorrect:'2'}],
["EN-s13", "AcceptabilityJudgment_EN", {s:"festivity", hasCorrect:'2'}],
["EN-s14", "AcceptabilityJudgment_EN", {s:"screech", hasCorrect:'2'}],
["EN-s15", "AcceptabilityJudgment_EN", {s:"savoury", hasCorrect:'2'}],
["EN-s16", "AcceptabilityJudgment_EN", {s:"plaudate", hasCorrect:'1'}],
["EN-s17", "AcceptabilityJudgment_EN", {s:"shin", hasCorrect:'2'}],
["EN-s18", "AcceptabilityJudgment_EN", {s:"fluid", hasCorrect:'2'}],
["EN-s19", "AcceptabilityJudgment_EN", {s:"spaunch", hasCorrect:'1'}],
["EN-s20", "AcceptabilityJudgment_EN", {s:"allied", hasCorrect:'2'}],
["EN-s21", "AcceptabilityJudgment_EN", {s:"slain", hasCorrect:'2'}],
["EN-s22", "AcceptabilityJudgment_EN", {s:"recipient", hasCorrect:'2'}],
["EN-s23", "AcceptabilityJudgment_EN", {s:"exprate", hasCorrect:'1'}],
["EN-s24", "AcceptabilityJudgment_EN", {s:"eloquence", hasCorrect:'2'}],
["EN-s25", "AcceptabilityJudgment_EN", {s:"cleanliness", hasCorrect:'2'}],
["EN-s26", "AcceptabilityJudgment_EN", {s:"dispatch", hasCorrect:'2'}],
["EN-s27", "AcceptabilityJudgment_EN", {s:"rebondicate", hasCorrect:'1'}],
["EN-s28", "AcceptabilityJudgment_EN", {s:"ingenious", hasCorrect:'2'}],
["EN-s29", "AcceptabilityJudgment_EN", {s:"bewitch", hasCorrect:'2'}],
["EN-s30", "AcceptabilityJudgment_EN", {s:"skave", hasCorrect:'1'}],     
["EN-s31", "AcceptabilityJudgment_EN", {s:"plaintively", hasCorrect:'2'}],
["EN-s32", "AcceptabilityJudgment_EN", {s:"kilp", hasCorrect:'1'}],
["EN-s33", "AcceptabilityJudgment_EN", {s:"interfate", hasCorrect:'1'}],
["EN-s34", "AcceptabilityJudgment_EN", {s:"hasty", hasCorrect:'2'}],
["EN-s35", "AcceptabilityJudgment_EN", {s:"lengthy", hasCorrect:'2'}],
["EN-s36", "AcceptabilityJudgment_EN", {s:"fray", hasCorrect:'2'}],
["EN-s37", "AcceptabilityJudgment_EN", {s:"crumper", hasCorrect:'1'}],
["EN-s38", "AcceptabilityJudgment_EN", {s:"upkeep", hasCorrect:'2'}],
["EN-s39", "AcceptabilityJudgment_EN", {s:"majestic", hasCorrect:'2'}],
["EN-s40", "AcceptabilityJudgment_EN", {s:"magrity", hasCorrect:'1'}], 
["EN-s41", "AcceptabilityJudgment_EN", {s:"nourishment", hasCorrect:'2'}],
["EN-s42", "AcceptabilityJudgment_EN", {s:"abergy", hasCorrect:'1'}],
["EN-s43", "AcceptabilityJudgment_EN", {s:"proom", hasCorrect:'1'}],
["EN-s44", "AcceptabilityJudgment_EN", {s:"turmoil", hasCorrect:'2'}],
["EN-s45", "AcceptabilityJudgment_EN", {s:"carbohydrate", hasCorrect:'2'}],
["EN-s46", "AcceptabilityJudgment_EN", {s:"scholar", hasCorrect:'2'}],
["EN-s47", "AcceptabilityJudgment_EN", {s:"turtle", hasCorrect:'2'}],
["EN-s48", "AcceptabilityJudgment_EN", {s:"fellick", hasCorrect:'1'}],
["EN-s49", "AcceptabilityJudgment_EN", {s:"destription", hasCorrect:'1'}],
["EN-s50", "AcceptabilityJudgment_EN", {s:"cylinder", hasCorrect:'2'}],
["EN-s51", "AcceptabilityJudgment_EN", {s:"censorship", hasCorrect:'2'}],
["EN-s52", "AcceptabilityJudgment_EN", {s:"celestial", hasCorrect:'2'}],
["EN-s53", "AcceptabilityJudgment_EN", {s:"rascal", hasCorrect:'2'}],
["EN-s54", "AcceptabilityJudgment_EN", {s:"purrage", hasCorrect:'1'}],
["EN-s55", "AcceptabilityJudgment_EN", {s:"pulsh", hasCorrect:'1'}],
["EN-s56", "AcceptabilityJudgment_EN", {s:"muddy", hasCorrect:'2'}],
["EN-s57", "AcceptabilityJudgment_EN", {s:"quirty", hasCorrect:'1'}],
["EN-s58", "AcceptabilityJudgment_EN", {s:"pudour", hasCorrect:'1'}],
["EN-s59", "AcceptabilityJudgment_EN", {s:"listless", hasCorrect:'2'}],
["EN-s60", "AcceptabilityJudgment_EN", {s:"wrought", hasCorrect:'2'}],    

];


