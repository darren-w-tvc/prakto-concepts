/* Clovelly app simulation: alternate example stories for the marketing videos. Not product code.
   Switch one on with ?story=<key> (it sticks for the session, ?story=off clears it).
   Each story swaps the Cleo Barnes renewal example for its own content in four places:
     map       text replacements applied to every page by app.js
     runs(c)   overrides on RUNS.cleo, applied by runs.js
     kmshort   short key-message labels (review page jump list)
     script    the counterpart's lines in run.html
   plus placeholder (builder textarea) and brief (builder "Use an example").
   To add a story, add one more mk({...}) entry below. */
window.STORIES = (function () {

  // The base Cleo strings each generated story replaces. Keep in step with the pages.
  var BASE = {
    title: "Renewal defense with Cleo Barnes",
    type: "Renewal defense",
    name: "Cleo Barnes", first: "Cleo", co: "Northwind", ini: "CB",
    roleFull: "Head of Procurement, Northwind", role: "Head of Procurement",
    kms: ["We have delivered every milestone on this contract",
          "A twelve month renewal holds your current rate",
          "I need a decision by the end of the month"],
    whys: [["This is your ground, where the record does the arguing for you.", "This is their ground, where the record does the arguing."],
           ["Expect to make this offer more than once."],
           ["The ask, and the date you need before the conversation ends.", "The ask, and the date they need before the conversation ends."]],
    traits: ["Warm", "Agrees easily", "Stalls on dates"],
    lede: "Cleo will agree with everything you say and then stall once a date comes up. Your job is to leave the room with a date agreed.",
    who: "Cleo has renewed twice and likes your team, so she will praise the work, sound close to yes, and then find a reason the timing is difficult. Expect to be asked to come back next quarter.",
    situation: "A twelve-month renewal with Northwind, where the buyer likes the work and keeps finding reasons to wait.",
    press: ["“Could we pick this up again next quarter, once budgets are clearer?”",
            "“Twelve months is a long time. What if our priorities shift?”",
            "“I'll need to take this to our leadership team first.”"],
    labels: ["Timing", "Risk", "Authority"],
    carry: ["Lead with results in the first answer",
            "Ask for the date before Cleo can suggest next quarter",
            "Hold the rate steady when she stalls"],
    stance: "Warm and easy to talk to. She agrees with everything you say, then finds a reason the timing is difficult whenever a date comes up.",
    kmshort: ["Milestones", "Twelve-month offer", "Decision date"],
    feed: "She opened well on milestones, and the twelve-month offer stalled once Cleo followed up, so the date is still to be asked for.",
    crit: ["States a delivered milestone in the first answer",
           "Offers the twelve-month rate before timing comes up",
           "Asks for a decision date unprompted",
           "Holds the rate through the second push",
           "Keeps an even pace when Cleo stalls"]
  };

  function mk(s) {
    var B = BASE, P = [];
    function add(a, b) { P.push([a, b]); }
    var typeL = s.type.charAt(0).toLowerCase() + s.type.slice(1);
    var buyerL = s.buyer.charAt(0).toLowerCase() + s.buyer.slice(1);
    add(B.title, s.title);
    add(B.type, s.type); add(B.type.toLowerCase(), typeL);
    add("the renewal example", "the " + typeL + " example");
    add("a renewal conversation", "a practice conversation");
    add(B.roleFull, s.role); add(B.role, s.role);
    add(B.name, s.name); add(B.first, s.first); add(B.co, s.co); add(B.ini, s.ini);
    add("The elusive buyer", s.buyer); var bare = s.buyer.replace(/^The /, ""); add("Elusive buyer", bare.charAt(0).toUpperCase() + bare.slice(1)); add("the elusive buyer", buyerL);
    B.kms.forEach(function (k, i) { add(k, s.kms[i][0]); B.whys[i].forEach(function (w) { add(w, s.kms[i][1]); }); });
    B.traits.forEach(function (t, i) { add(t, s.traits[i]); });
    add(B.lede, s.lede); add(B.who, s.who); add(B.situation, s.situation); add(B.stance, s.stance);
    B.press.forEach(function (q, i) { add(q, s.press[i][1]); add(B.labels[i], s.press[i][0]); });
    B.carry.forEach(function (c, i) { add(c, s.carry[i]); });
    B.kmshort.forEach(function (k, i) { add(k, s.kmshort[i]); });
    add(B.feed, s.feed);
    B.crit.forEach(function (c, i) { add(c, s.crit[i]); });
    if (s.he) { add("as soon as she stops talking", "as soon as he stops talking"); add("speaks her questions", "speaks his questions"); }
    // Longest first, so a whole sentence is swapped before any name or word inside it.
    P.sort(function (a, b) { return b[0].length - a[0].length; });
    var R = s.report;
    return {
      title: s.title, captions: s.captions, map: P, placeholder: s.placeholder, brief: s.brief,
      kmshort: s.kmshort, script: s.script,
      runs: function (c) {
        c.title = s.title; c.lede = R.lede; c.counterpart = s.first;
        var outs = [["on", "Made"], ["half", "Partly made"], ["", "Missed"]];
        c.kms = R.kms.map(function (k, i) { return { dot: outs[i][0], q: s.kms[i][0], why: k[0], out: outs[i][1], t: k[1] }; });
        c.attrs[0].q = R.quotes[0]; c.attrs[0].t = R.kms[0][1];
        c.attrs[1].q = R.quotes[1];
        c.attrs[4].q = R.quotes[2]; c.attrs[4].better = R.better;
        c.attrs[5].q = R.quotes[3];
        c.attrs[6].q = R.quotes[4];
        c.attrs[7].q = R.quotes[5];
        c.transfer = R.transfer;
      }
    };
  }

  return {

    // Price increase with Dana: the original website example, moved here unchanged.
    dana: {
      title: "Price increase with Dana",
      map: [
       ["Renewal defense with Cleo Barnes","Price increase with Dana"],["Renewal defense","Price increase"],["renewal defense","price increase"],
       ["Cleo Barnes","Dana Kerr"],["Cleo","Dana"],["Northwind","Northline"],["CB","DK"],
       ["The elusive buyer","The skeptical buyer"],["Elusive buyer","Skeptical buyer"],["the elusive buyer","the skeptical buyer"],
       [/Head of Procurement(?!, Northline)/g,"Head of Procurement, Northline"],
       ["We have delivered every milestone on this contract","The rate moves to $48 a seat from 1 October"],
       ["A twelve month renewal holds your current rate","The new support tier is included at no extra cost"],
       ["I need a decision by the end of the month","I need your sign-off on the new rate this month"],
       ["This is your ground, where the record does the arguing for you.","Say the number plainly, early, and once."],
       ["This is their ground, where the record does the arguing.","Say the number plainly, early, and once."],
       ["Expect to make this offer more than once.","This is the reason the new rate is worth it."],
       ["The ask, and the date you need before the conversation ends.","The ask, before the conversation ends."],
       ["The ask, and the date they need before the conversation ends.","The ask, before the conversation ends."],
       ["Warm","Loyal"],["Agrees easily","Watches every line item"],["Stalls on dates","Remembers the March outage"],
       ["Dana will agree with everything you say and then stall once a date comes up. Your job is to leave the room with a date agreed.","Dana has been on the old rate since 2018 and will push on why it's changing now. Your job is to land the new rate and the support tier that comes with it."],
       ["Dana has renewed twice and likes your team, so she will praise the work, sound close to yes, and then find a reason the timing is difficult. Expect to be asked to come back next quarter.","Dana runs procurement at Northline and has been with you since 2018. She is loyal but watches every line item, and she will bring up the outage in March."],
       ["A twelve-month renewal with Northline, where the buyer likes the work and keeps finding reasons to wait.","Moving a loyal customer from the 2018 rate to $48 a seat, with the new support tier included."],
       ["“Could we pick this up again next quarter, once budgets are clearer?”","“Why is the rate moving now, after eight years?”"],
       ["“Twelve months is a long time. What if our priorities shift?”","“We had a full day down in March. Why should we pay more?”"],
       ["“I'll need to take this to our leadership team first.”","“What do we actually get for the extra?”"],
       ["Timing","The history"],["Risk","The outage"],["Authority","The value"],
       ["Lead with results in the first answer","Name the new rate in your first answer"],
       ["Ask for the date before Dana can suggest next quarter","Bring up the support tier before she raises the outage"],
       ["Hold the rate steady when she stalls","Hold the number when she pushes"],
       ["Warm and easy to talk to. She agrees with everything you say, then finds a reason the timing is difficult whenever a date comes up.","Loyal but careful. She watches every line item and will bring up the March outage when the new rate lands."],
       ["Milestones","New rate"],["Twelve-month offer","Support tier"],["Decision date","Sign-off"],
       ["She opened well on milestones, and the twelve-month offer stalled once Dana followed up, so the date is still to be asked for.","She named the new rate early, and the support tier never came up by name once Dana raised the outage."]
      ],
      placeholder: "Sarah has to tell Dana at Northline the price is going up…",
      kmshort: ["New rate", "Support tier", "Sign-off"],
      script: [
        {k:'q',n:1,say:"We've been with you since 2018. Why is the rate moving now?"},
        {k:'ack',say:"Mm. Okay."},
        {k:'f',n:1,say:"And forty-eight a seat, is that the number for everyone, or just for us?"},
        {k:'ack',say:"Right."},
        {k:'q',n:2,say:"We had a full day down in March. Why would we pay more after that?"},
        {k:'ack',say:"Sure."},
        {k:'f',n:2,say:"So what actually changes for us on support?"},
        {k:'ack',say:"Mm. Well."},
        {k:'q',n:3,say:"I'll need to take this to finance before I can agree to anything."},
        {k:'ack',say:"Okay, fair enough."},
        {k:'f',n:3,say:"When do you need an answer by?"},
        {k:'end',say:"Okay. Thanks for being straight with me. I'll come back to you."}
      ],
      runs: function (c) {
        c.title="Price increase with Dana";
        c.lede="You named the new rate early and Dana heard it out. The support tier never came up by name, and when she raised the March outage the conversation drifted, so lead with the support tier next time.";
        c.counterpart="Dana";
        c.kms=[
         {dot:"on",q:"The rate moves to $48 a seat from 1 October",why:"Stated plainly at 2:40, before Dana raised the history.",out:"Made",t:"2:40"},
         {dot:"half",q:"The new support tier is included at no extra cost",why:"You mentioned support once at 4:10, and the new tier never came up by name.",out:"Partly made",t:"4:10"},
         {dot:"",q:"I need your sign-off on the new rate this month",why:"Her question about timing at 9:40 was the opening for it.",out:"Missed",t:"9:40"}];
        c.attrs[0].q="“The rate moves to forty-eight a seat from October, and I wanted you to hear it from me.”"; c.attrs[0].t="2:40";
        c.attrs[1].q="“I understand the March outage hurt. That's exactly why the support tier matters.”";
        c.attrs[4].q="“I suppose we could look at the timing again once you've spoken to finance, if that suits.”";
        c.attrs[4].better="“Can we agree the new rate before the end of this month?”";
        c.attrs[5].q="You answered within a second each time Dana pushed back.";
        c.attrs[6].q="52 seconds on average, and your longest answer ran 1:30 on the outage question.";
        c.attrs[7].q="“You've been with us since 2018, and we want to keep looking after you.”";
        c.transfer="Dana was a stand-in, so the buyer you meet for real will push back in their own way. Take your three key messages into that room in the order you want them to land.";
      }
    },

    // 1. Customer service training
    grace: mk({
      title: "Refund complaint with Grace", type: "Refund complaint",
      name: "Grace Moreno", first: "Grace", co: "Grace's account", ini: "GM",
      role: "Customer, on her third call", buyer: "The frustrated customer",
      traits: ["Frustrated", "Called twice already", "Wants it fixed today"],
      kms: [["I'm sorry this has taken three calls", "Open with the apology so Grace knows she has been heard."],
            ["Your refund is approved and lands in three to five days", "Expect her to ask for an exact date more than once."],
            ["I'll email you the reference before we finish", "The promise that closes the call, kept while she is still on the line."]],
      lede: "Grace has called twice about the same refund and still has no answer. Your job is to apologize first, confirm the refund, and end the call with the reference in her inbox.",
      who: "Grace is on her third call and has explained the problem twice already. She is frustrated and wants it fixed today, so she will interrupt if this call starts to sound like the last two.",
      situation: "A refund that should have been simple, now on its third call, with a customer who has run out of patience.",
      press: [["The history", "“Why do I have to explain this all over again?”"],
              ["The date", "“Three to five days is what they told me last time.”"],
              ["Proof", "“How do I know this won't happen again?”"]],
      carry: ["Apologize before you explain anything", "Give the refund date in plain words", "Send the reference while Grace is still on the call"],
      stance: "Frustrated and short on patience. She has explained the problem twice already and will interrupt if she hears the same promises again.",
      kmshort: ["Apology", "Refund date", "Reference"],
      feed: "She apologized straight away, and the refund date needed saying twice once Grace pushed, so the reference email is still to come.",
      crit: ["Apologizes in the first answer", "Gives the refund date before Grace asks for it", "Offers to send the reference unprompted",
             "Keeps the date steady through the second push", "Keeps an even pace when Grace interrupts"],
      placeholder: "Sarah has a refund complaint to handle with Grace…",
      brief: "Grace Moreno is on her third call about the same refund. I want Sarah to apologize first, confirm the refund is approved, and email the reference before they hang up.",
      captions: ["A support lead rehearses a refund that became a complaint", "Grace is on her third call", "The report shows whether the apology came before the fix"],
      script: [
        {k:'q',n:1,say:"This is the third time I've called about the same refund. Why is it still not sorted?"},
        {k:'ack',say:"Okay."},
        {k:'f',n:1,say:"So what went wrong the last two times?"},
        {k:'ack',say:"Right."},
        {k:'q',n:2,say:"Three to five days is exactly what I was told last time. Why should I believe it now?"},
        {k:'ack',say:"Mm."},
        {k:'f',n:2,say:"Can you give me an actual date?"},
        {k:'ack',say:"Okay, well."},
        {k:'q',n:3,say:"How do I know I won't be calling again next week?"},
        {k:'ack',say:"Fine."},
        {k:'f',n:3,say:"Will I get something in writing?"},
        {k:'end',say:"Okay. Thank you for sorting it out properly this time."}
      ],
      report: {
        lede: "You opened with the apology and Grace let you explain. The refund date needed saying twice once she pushed, and the call ended before you sent the reference, so offer the email earlier next time.",
        kms: [["Said at 0:35, before Grace had finished explaining.", "0:35"],
              ["You gave the window at 3:20, and she needed an actual date before it settled.", "3:20"],
              ["Her question about getting it in writing at 9:10 was the opening for it.", "9:10"]],
        quotes: ["“I'm sorry this has taken three calls, Grace, and I'm going to sort it out now.”",
                 "“I understand why that sounds familiar. This time the refund is already approved.”",
                 "“It should come through in the next few days or so, I think.”",
                 "You answered within a second each time Grace interrupted.",
                 "52 seconds on average, and your longest answer ran 1:30 on the refund date.",
                 "“I'd be frustrated too, and I'm glad you called back.”"],
        better: "“Your refund lands by Friday, and I'll email you the reference now.”",
        transfer: "Grace was a stand-in, so the customer you speak to for real will push back in their own way. Take your three key messages into that call in the order you want them to land."
      }
    }),

    // 2. Call center training
    tom: mk({
      title: "Billing dispute with Tom", type: "Billing dispute", he: true,
      name: "Tom Walsh", first: "Tom", co: "Tom's account", ini: "TW",
      role: "Customer disputing a charge", buyer: "The angry customer",
      traits: ["Angry", "Asks for a supervisor", "Settles once he feels heard"],
      kms: [["The charge is for the device you added in June", "Explain the eighty dollars before he asks a second time."],
            ["I can split it across your next two bills", "Offer this once Tom has heard where the charge came from."],
            ["Here's what your next statement will show", "Close the call with a clear picture of what comes next."]],
      lede: "Tom wants a supervisor before you have said a word. Your job is to explain the charge, offer to split it, and leave him knowing what his next statement will show.",
      who: "Tom has found an eighty dollar charge he doesn't remember agreeing to, and he opens by asking for a supervisor. He is angry at first and tends to settle once he feels someone has listened.",
      situation: "An eighty dollar charge the customer doesn't recognize, on a call that starts with a request for a supervisor.",
      press: [["Escalation", "“I want to speak to a supervisor.”"],
              ["The charge", "“I never agreed to add a device.”"],
              ["Next bill", "“So what am I actually paying next month?”"]],
      carry: ["Let Tom finish before you explain the charge", "Offer your own help first when he asks for a supervisor", "Keep your pace even if his voice rises"],
      stance: "Angry from the first line and quick to ask for a supervisor. He settles once he feels heard and has a clear explanation of the charge.",
      kmshort: ["The charge", "Split payment", "Next statement"],
      feed: "She explained the June device clearly, and the split payment came late after Tom asked twice for a supervisor, so the next statement is still to be walked through.",
      crit: ["Explains the charge in the first answer", "Offers the split payment before Tom asks again for a supervisor", "Walks through the next statement unprompted",
             "Holds the explanation through the second push", "Keeps an even pace when Tom raises his voice"],
      placeholder: "Sarah has a billing dispute to handle with Tom…",
      brief: "Tom Walsh is disputing an eighty dollar charge and will ask for a supervisor straight away. I want Sarah to explain the charge, offer to split it, and walk him through his next bill.",
      captions: ["A team lead scripts the call that goes wrong most often", "Tom asks for a supervisor straight away", "The report shows where the call settled"],
      script: [
        {k:'q',n:1,say:"There's eighty dollars on my bill I never agreed to. Put me through to a supervisor."},
        {k:'ack',say:"Hm."},
        {k:'f',n:1,say:"Fine, then tell me what the charge is for."},
        {k:'ack',say:"Right."},
        {k:'q',n:2,say:"I don't remember adding any device. Why is this the first I'm hearing of it?"},
        {k:'ack',say:"Okay."},
        {k:'f',n:2,say:"And I'm meant to just pay eighty dollars now?"},
        {k:'ack',say:"Mm. Well."},
        {k:'q',n:3,say:"How do I know next month won't be the same?"},
        {k:'ack',say:"Alright."},
        {k:'f',n:3,say:"So what will my next bill actually say?"},
        {k:'end',say:"Okay. That's clearer. Thanks for taking the time to explain it."}
      ],
      report: {
        lede: "You explained the June device early and Tom stayed on the line. The split payment came late, after he had asked twice for a supervisor, and the call closed before you walked through his next statement, so offer the split sooner next time.",
        kms: [["Clear and early, before Tom asked for a supervisor a second time.", "0:52"],
              ["You offered it at 4:30, and he needed it explained again before it settled.", "4:30"],
              ["His question about next month at 9:20 was the opening for it.", "9:20"]],
        quotes: ["“The eighty dollars is for the tablet added to your plan in June, and I can show you where.”",
                 "“I can hear this has been frustrating. Let me see what I can do before we go to a supervisor.”",
                 "“There might be a way to maybe spread it out, I'd have to check.”",
                 "You answered within a second each time Tom raised his voice.",
                 "52 seconds on average, and your longest answer ran 1:30 on the device question.",
                 "“Thanks for bearing with me, Tom. Let's get this sorted together.”"],
        better: "“I can split the eighty dollars across your next two bills.”",
        transfer: "Tom was a stand-in, and the customers you speak to for real will get angry in their own way. Take your three key messages onto the next call in the order you want them to land."
      }
    }),

    // 3. Communication
    helen: mk({
      title: "Saying no to a client with Helen", type: "Saying no to a client",
      name: "Helen Park", first: "Helen", co: "Brightwater", ini: "HP",
      role: "Marketing Director, Brightwater", buyer: "The persuasive client",
      traits: ["Friendly", "Asks for extras", "Used to hearing yes"],
      kms: [["The spring campaign sits outside this contract", "Say it early and kindly, before the request grows."],
            ["We can quote it separately by Thursday", "This gives Helen a way forward, so expect her to push on it."],
            ["The launch date for the current work stays the same", "The reassurance she needs before the conversation ends."]],
      lede: "Helen is friendly and used to hearing yes, and today she wants a whole campaign added for free. Your job is to say no clearly, offer a separate quote, and keep the current launch on track.",
      who: "Helen is the Marketing Director at Brightwater and a good client to work with. She asks for extras in a friendly, offhand way, and she is used to your team saying yes.",
      situation: "A good client asking for a spring campaign on top of the current contract, and expecting the usual yes.",
      press: [["The favor", "“It's only a small addition, surely the team can fit it in?”"],
              ["The relationship", "“We've always been flexible with each other, haven't we?”"],
              ["The timeline", "“Will saying no slow down the launch?”"]],
      carry: ["Say no in your first answer", "Keep the tone warm when Helen asks again", "Tie the separate quote to a clear day"],
      stance: "Friendly and easy to work with. She asks for extras in passing and expects a yes, so a clear answer may catch her off guard.",
      kmshort: ["Outside scope", "Separate quote", "Launch date"],
      feed: "She named the contract boundary early, and the quote by Thursday wobbled once Helen appealed to the relationship, so the launch date is still to be confirmed.",
      crit: ["Says the campaign sits outside the contract in the first answer", "Offers the separate quote before Helen asks again", "Confirms the launch date unprompted",
             "Holds the answer through the second ask", "Keeps an even pace when Helen pushes"],
      placeholder: "Sarah has to say no to Helen at Brightwater…",
      brief: "Helen Park at Brightwater wants the spring campaign added for free. I want Sarah to say no kindly, offer a separate quote by Thursday, and confirm the launch date stays put.",
      captions: ["An account manager practices turning down extra work", "Helen asks for a free extra campaign", "The report shows whether the answer was clear and kind"],
      script: [
        {k:'q',n:1,say:"While you're in there, could the team just add the spring campaign too?"},
        {k:'ack',say:"Oh."},
        {k:'f',n:1,say:"Really? It's only a few extra pieces."},
        {k:'ack',say:"Okay."},
        {k:'q',n:2,say:"We've always been flexible with each other. Can't you make an exception this once?"},
        {k:'ack',say:"Hm, I see."},
        {k:'f',n:2,say:"So what would a separate quote look like?"},
        {k:'ack',say:"Right."},
        {k:'q',n:3,say:"If we go ahead with the quote, does that push back our launch?"},
        {k:'ack',say:"Good."},
        {k:'f',n:3,say:"And you're sure the current work is still on schedule?"},
        {k:'end',say:"Alright. I appreciate you being clear with me. Send the quote through."}
      ],
      report: {
        lede: "You said early that the spring campaign sits outside the contract, and Helen took it well. The quote by Thursday wobbled when she appealed to the relationship, and the launch date never came up, so confirm it before the call ends next time.",
        kms: [["Clear and kind, before Helen made the request sound small.", "0:40"],
              ["You offered the quote at 3:50, and it softened once she asked for an exception.", "3:50"],
              ["Her question about the launch at 8:45 was the opening for it.", "8:45"]],
        quotes: ["“The spring campaign sits outside what we've agreed, Helen, and I'd like to do it properly.”",
                 "“I value how flexible we've been, which is why I want to be straight with you.”",
                 "“We could maybe look at squeezing some of it in, depending on how things go.”",
                 "You answered within a second each time Helen asked again.",
                 "52 seconds on average, and your longest answer ran 1:30 on the exception question.",
                 "“We love working with Brightwater, and I want this next campaign to get the attention it deserves.”"],
        better: "“I'll send a separate quote for the spring campaign by Thursday.”",
        transfer: "Helen was a stand-in, so the client you speak to for real will ask in their own way. Take your three key messages into that conversation in the order you want them to land."
      }
    }),

    // 4. Manager training
    josh: mk({
      title: "First underperformance talk with Josh", type: "Underperformance talk", he: true,
      name: "Josh Carter", first: "Josh", co: "the team", ini: "JC",
      role: "Six months into his role", buyer: "The surprised team member",
      traits: ["Likable", "Surprised by feedback", "Defensive at first"],
      kms: [["Three of your last five reports were late", "Lead with the facts, so the conversation has something solid to stand on."],
            ["From next week, reports are due by Thursday at noon", "The clear expectation, which Josh may try to negotiate."],
            ["We'll check in together every Friday", "The support you're offering, agreed before you finish."]],
      lede: "Josh thinks things are going well, so this conversation will surprise him. Your job is to lay out the facts first, set a clear deadline, and agree on a weekly check-in.",
      who: "Josh is six months into his role, well liked, and hasn't heard this feedback before. He will be defensive at first and tends to come around once he understands what is expected.",
      situation: "A first conversation about late reports with a likable team member who thinks everything is fine.",
      press: [["The surprise", "“Why is this the first I'm hearing about it?”"],
              ["The reasons", "“Those weeks were busy for everyone.”"],
              ["Fairness", "“Is anyone else being held to Thursday?”"]],
      carry: ["Start with the three late reports", "Stay calm if Josh gets defensive", "End with the Friday check-in agreed"],
      stance: "Likable and keen, and surprised to hear there's a problem. He gets defensive at first and settles once the expectation is clear.",
      kmshort: ["The facts", "New deadline", "Friday check-in"],
      feed: "She opened with the late reports, and the Thursday deadline blurred once Josh explained the busy weeks, so the Friday check-in is still to be agreed.",
      crit: ["States the late reports in the first answer", "Sets the Thursday deadline before Josh explains the busy weeks", "Proposes the Friday check-in unprompted",
             "Holds the deadline through the second push", "Keeps an even pace when Josh gets defensive"],
      placeholder: "Sarah needs to talk to Josh about his late reports…",
      brief: "Josh Carter has sent three of his last five reports late and thinks things are going well. I want Sarah to lead with the facts, set a Thursday noon deadline, and agree on a Friday check-in.",
      captions: ["A new manager rehearses their first underperformance talk", "Josh thought things were going well", "The report shows whether the facts came first"],
      script: [
        {k:'q',n:1,say:"Late? I thought everyone was happy with how I've been going."},
        {k:'ack',say:"Oh. Okay."},
        {k:'f',n:1,say:"Which reports are we talking about?"},
        {k:'ack',say:"Right."},
        {k:'q',n:2,say:"Those were really busy weeks for the whole team, though."},
        {k:'ack',say:"Mm."},
        {k:'f',n:2,say:"So is Thursday at noon a hard deadline from now on?"},
        {k:'ack',say:"Okay, I get it."},
        {k:'q',n:3,say:"Why is this the first time anyone's mentioned it?"},
        {k:'ack',say:"Fair enough."},
        {k:'f',n:3,say:"What happens if a report slips again?"},
        {k:'end',say:"Okay. Thanks for telling me straight. I'd rather know."}
      ],
      report: {
        lede: "You opened with the three late reports and Josh listened. The Thursday deadline blurred once he explained the busy weeks, and the conversation ended before you set up the Friday check-in, so agree on it earlier next time.",
        kms: [["Clear and specific, before Josh had a chance to explain the busy weeks.", "0:45"],
              ["You set the deadline at 4:05, and it softened once he talked about workload.", "4:05"],
              ["His question about what happens next at 9:30 was the opening for it.", "9:30"]],
        quotes: ["“Three of your last five reports came in late, Josh, and I want to talk about what's behind that.”",
                 "“I hear that those weeks were busy, and the team still relies on those reports arriving on time.”",
                 "“Maybe try to get them in a bit earlier where you can, if that works?”",
                 "You answered within a second each time Josh pushed back.",
                 "52 seconds on average, and your longest answer ran 1:30 on the workload question.",
                 "“You're a real asset to this team, and I want to help you get this part right.”"],
        better: "“From next week, reports are due by Thursday at noon.”",
        transfer: "Josh was a stand-in, so the person you sit down with for real will react in their own way. Take your three key messages into that conversation in the order you want them to land."
      }
    }),

    // 5. Sales
    owen: mk({
      title: "Discovery call with Owen", type: "Discovery call", he: true,
      name: "Owen Brooks", first: "Owen", co: "Fernhill Freight", ini: "OB",
      role: "Head of Operations, Fernhill Freight", buyer: "The busy prospect",
      traits: ["Busy", "Has looked at two other tools", "Open if it solves a real problem"],
      kms: [["Scheduling, tracking and invoicing sit in one place", "Your answer to what makes this different, so say it early."],
            ["Pricing starts at $12 a user each month", "Owen will ask, so give the number plainly when he does."],
            ["Ask what a missed delivery costs them today", "The question that uncovers the real problem before the call ends."]],
      lede: "Owen has fifteen minutes and has already seen two other tools. Your job is to show what makes this one different, give the price plainly, and find out what a missed delivery costs Fernhill today.",
      who: "Owen runs operations at Fernhill Freight and has little time for a sales pitch. He has looked at two other tools already, and he opens up once the conversation turns to a problem he actually has.",
      situation: "A first call with a busy operations lead who has already seen two competing tools and wants to know quickly why this one is worth his time.",
      press: [["Difference", "“What does this do that the other two didn't?”"],
              ["Price", "“So what does it actually cost?”"],
              ["Time", "“Why would we switch when the team is already stretched?”"]],
      carry: ["Get to the difference in your first answer", "Give the price the first time Owen asks", "Save time for your question about missed deliveries"],
      stance: "Busy and direct, with fifteen minutes to spare. He has seen two other tools and warms up once the call touches a real problem.",
      kmshort: ["One place", "Pricing", "Missed deliveries"],
      feed: "She explained the one-place difference clearly, and the pricing came out hesitantly when Owen asked, so the question about missed deliveries is still to be asked.",
      crit: ["Names what makes the tool different in the first answer", "Gives the price the first time Owen asks", "Asks about the cost of a missed delivery unprompted",
             "Keeps the price steady through the second push", "Keeps an even pace when Owen hurries the call"],
      placeholder: "Sarah has a first call with Owen at Fernhill Freight…",
      brief: "Sarah has a first call with Owen Brooks at Fernhill Freight, who has already looked at two other tools. I want her to show what makes us different, give the price plainly, and ask what a missed delivery costs them.",
      captions: ["A sales lead sets up a first call with a prospect", "Owen has fifteen minutes and has seen two other tools", "The report shows whether the rep found the real problem"],
      script: [
        {k:'q',n:1,say:"I've got fifteen minutes. Tell me what makes this different from what we've already looked at."},
        {k:'ack',say:"Okay."},
        {k:'f',n:1,say:"The other two said they did everything in one place as well."},
        {k:'ack',say:"Right."},
        {k:'q',n:2,say:"Let's talk money. What does this cost for a team our size?"},
        {k:'ack',say:"Hm."},
        {k:'f',n:2,say:"Is that per user, or for the whole account?"},
        {k:'ack',say:"Okay, noted."},
        {k:'q',n:3,say:"Why would we switch when the team is already stretched?"},
        {k:'ack',say:"Fair."},
        {k:'f',n:3,say:"What would you need from us to see if it's worth it?"},
        {k:'end',say:"Okay. That's more useful than I expected. Send me something to look at."}
      ],
      report: {
        lede: "You explained early that scheduling, tracking and invoicing sit in one place, and Owen kept listening. The price came out hesitantly when he asked, and the call ended before you asked what a missed delivery costs them, so ask it sooner next time.",
        kms: [["Clear and early, before Owen brought up the other two tools.", "0:50"],
              ["You gave the price at 3:35, and he had to ask whether it was per user.", "3:35"],
              ["His question about what you would need from him at 9:15 was the opening for it.", "9:15"]],
        quotes: ["“Scheduling, tracking and invoicing all sit in one place, so your team stops copying between systems.”",
                 "“That's a fair challenge. The difference shows up in how your drivers and your accounts team share one record.”",
                 "“Pricing kind of depends, but it's usually somewhere around twelve, I think.”",
                 "You answered within a second each time Owen hurried the call.",
                 "52 seconds on average, and your longest answer ran 1:30 on the switching question.",
                 "“I'd like to understand how your week runs before I show you anything.”"],
        better: "“Pricing starts at $12 a user each month.”",
        transfer: "Owen was a stand-in, so the prospect you speak to for real will push in their own way. Take your three key messages into that call in the order you want them to land."
      }
    })
  };
})();
