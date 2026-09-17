/* Sample run data for the simulation. Copy follows the CLAUDE.md writing rules. */
window.RUNS={
 alex:{
  title:"Price rise with Alex Torres", level:"Medium", runLabel:"run 2", meta2:"Yesterday · 14 minutes · 3 questions", length:"14:02",
  verdict:"Solid", verdictSub:"16 of 22 criteria · 2 of 3 key messages landed",
  lede:"Two of your three key messages made it into the room, one of them under real pressure, and your composure carried the hardest minute with Alex. The renewal message is the one still to land, so open with it next time.",
  counterpart:"Alex", kmCount:"Two of three",
  kms:[
   {dot:"on",q:"The rise reflects two years of added scope",why:"Landed early and cleanly, before Alex started pushing.",out:"Made",t:"1:45"},
   {dot:"on",q:"Service levels hold at the new price",why:"You needed it twice and it held both times, though the second is worth a look.",out:"Made under pressure",t:"3:10"},
   {dot:"",q:"Renewal locks current rates for 24 months",why:"The stuck minute at 7:20 was the natural place for it.",out:"Missed",t:"7:20"}],
  crit:"16 of 22 criteria met",
  attrs:[
   {n:"Message control",b:"Solid",c:"3 of 4",q:"“I understand your budget constraints, Alex. However, removing those modules compromises the structural integrity of the analysis…”",t:"2:12"},
   {n:"Composure under pushback",b:"Solid",c:"2 of 3",q:"“If the headline number is the hard block, we can shift the timeline to Q3, retaining the scope but distributing the burn rate.”",t:"3:10"},
   {n:"Pace",b:"Solid",c:"2 of 2",q:"Steady through the opening, quicker at 168 wpm under the second push, and level again by the end.",t:"5:02"},
   {n:"Fillers",b:"Developing",c:"1 of 2",q:"Twelve in fourteen minutes, most of them in the recovery after the anchor.",better:"“That is the number. Let me explain what sits behind it.”",t:"7:24"},
   {n:"Clarity and structure",b:"Developing",c:"1 of 3",q:"“Well, I mean, we could perhaps look at discounting the setup fee if that helps…”",better:"“The setup fee stays. What I can move is when it falls due.”",t:"7:24"},
   {n:"Pauses",b:"Strong",c:"2 of 2",q:"You let 3.4 seconds sit after the term constraint.",t:"3:18"},
   {n:"Answer economy",b:"Solid",c:"2 of 3",q:"48 seconds on average; the longest ran to 1:40 on the governance question.",t:"9:30"},
   {n:"Linguistic tone",b:"Solid",c:"3 of 3",q:"“Let's reconvene Tuesday once you have reviewed the distributed timeline option with your board.”",t:"12:40"}],
  nums:[["Pace","135 wpm","Within 120 to 160"],["You talked","54%","Above 30 to 50"],["Fillers","12"],["Silence","9%"],["Weak words","5"],["Longest pause","3.4 s"],["Questions you asked","4"],["Average answer","48 s"],["Words","1,180"]],
  aside:"This run skipped one follow-up question, which leaves your bands unchanged.",
  coach:{who:"Jane Smith",role:"Lead Coach",when:"Two hours ago",text:"Much stronger holding the line on price this time, Sarah. You held the silence after the 24-month term constraint, which is where she moved. You yielded slightly too early on the setup fee when pressured, so hold that concession for later in the conversation."},
  challenge:{attr:"Composure under pushback",reason:"Too harsh",text:"I held my position through both pushes, and the pause at 3:10 was deliberate."},
  transfer:"Alex was a stand-in, so the person you meet for real will push in their own way. Take your three key messages into that room in the order you want them to land."
 },
 cleo:{
  title:"Renewal defense with Cleo Barnes", level:null, runLabel:"run 1", meta2:"Today · 11 minutes · 3 questions", length:"11:24",
  verdict:"Developing", verdictSub:"13 of 22 criteria · 1 of 3 key messages landed",
  lede:"You raised your milestones early and Cleo agreed with each one. The twelve-month offer stalled after her follow-up, and the conversation closed before you asked for a date, so open with the ask next time.",
  counterpart:"Cleo", kmCount:"One of three",
  kms:[
   {dot:"on",q:"We have delivered every milestone on this contract",why:"Early and clear, before Cleo turned to timing.",out:"Made",t:"0:48"},
   {dot:"half",q:"A twelve month renewal holds your current rate",why:"You made the offer at 3:05, and her follow-up needed you to make it again.",out:"Partly made",t:"3:05"},
   {dot:"",q:"I need a decision by the end of the month",why:"Her question about your deadline at 9:40 was the opening for it.",out:"Missed",t:"9:40"}],
  crit:"13 of 22 criteria met",
  attrs:[
   {n:"Message control",b:"Developing",c:"1 of 4",q:"“We've hit every milestone, so hopefully that speaks for itself.”",t:"0:48"},
   {n:"Composure under pushback",b:"Solid",c:"2 of 3",q:"“That's fair. Let's take the time to get this right.”",t:"4:12"},
   {n:"Pace",b:"Solid",c:"2 of 2",q:"142 wpm for most of the run, with one quicker stretch at 6:30.",t:"6:30"},
   {n:"Fillers",b:"Solid",c:"2 of 2",q:"You used four fillers in eleven minutes, one per answer at most.",t:"4:40"},
   {n:"Clarity and structure",b:"Developing",c:"1 of 3",q:"“I suppose we could look at it again nearer the end of the quarter, if that suits.”",better:"“Let's make the end of the month our decision date.”",t:"7:55"},
   {n:"Pauses",b:"Developing",c:"0 of 2",q:"You answered within a second each time Cleo stalled.",t:"5:20"},
   {n:"Answer economy",b:"Solid",c:"2 of 3",q:"52 seconds on average, and your longest answer ran 1:30 on the budget question.",t:"5:50"},
   {n:"Linguistic tone",b:"Strong",c:"3 of 3",q:"“We'd love to keep working with your team for another year.”",t:"10:10"}],
  nums:[["Pace","142 wpm","Within 120 to 160"],["You talked","58%","Above 30 to 50"],["Fillers","4"],["Silence","6%"],["Weak words","7"],["Longest pause","1.1 s"],["Questions you asked","1"],["Average answer","52 s"],["Words","1,560"]],
  aside:null, coach:null, coachEmpty:"Jane will add her note here when she reviews this run.",
  transfer:"Cleo was a stand-in, so the buyer you meet for real will stall in their own way. Take your three key messages into that room in the order you want them to land."
 }
};
window.JUDGED=["Message control","Composure under pushback","Clarity and structure","Linguistic tone"];
window.KMSHORT={alex:["Added scope","Service levels","Renewal terms"],cleo:["Milestones","Twelve-month offer","Decision date"]};
window.MEMBER={alex:"Sarah Chen",cleo:"Sarah Chen"};
window.cap=function(s){return s.charAt(0).toUpperCase()+s.slice(1)};
