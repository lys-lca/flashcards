/* -------------------------------------------------------
   FLASHCARD DATA — LC ECONOMICS (HIGHER LEVEL)
   Using image paths: images/economics/<slug><number>.png
------------------------------------------------------- */

let cards = {

    /* -------------------- STRAND 1 -------------------- */
"Strand 1 — What Is Economics About?": [
    {
        category: "Strand 1 — Economics as a Way of Thinking",
        question: "What does economics as a way of thinking mean at Higher Level?",
        hint: "Think models, data, and evaluating policies.",
        answer: "HL economics requires using models, theories, and real data to analyse behaviour, distinguish positive and normative statements, and evaluate differing policy solutions based on evidence.",
        image: "images/economics/strand1_1.png"
    },
    {
        category: "Strand 1 — Economics as a Way of Thinking",
        question: "How do positive and normative statements differ?",
        hint: "One is fact, the other is opinion.",
        answer: "Positive statements are fact-based and testable, while normative statements express value-based opinions on what should happen.",
        image: "images/economics/strand1_2.png"
    },
    {
        category: "Strand 1 — Scarcity & Choice",
        question: "What HL analysis is required when studying scarcity?",
        hint: "Always think opportunity cost.",
        answer: "HL students evaluate how limited resources force choices, analyse opportunity cost, predict consequences of decisions, and assess how incentives influence individuals, firms and governments.",
        image: "images/economics/strand1_3.png"
    },
    {
        category: "Strand 1 — Sustainability",
        question: "What must HL students understand about sustainability?",
        hint: "Three interconnected pillars.",
        answer: "Students must evaluate how economic, social and environmental sustainability interact, interpret indicators like inequality and emissions, and analyse development trade-offs.",
        image: "images/economics/strand1_4.png"
    }
],


    /* -------------------- STRAND 2 -------------------- */
"Strand 2 — How Are Economic Decisions Made?": [
    {
        category: "Strand 2 — Market Economy",
        question: "What HL skills are needed to analyse demand and supply?",
        hint: "Draw, shift, explain.",
        answer: "HL students construct and interpret graphs, analyse equilibrium changes, and evaluate real-world factors such as technology, taxation and income shifts.",
        image: "images/economics/strand2_1.png"
    },
    {
        category: "Strand 2 — Consumer Behaviour",
        question: "How should HL students critique rational consumer behaviour?",
        hint: "Behavioural economics matters.",
        answer: "Students examine real-world deviations from rationality, assess incentive effects, and use PED/YED to predict revenue and spending changes.",
        image: "images/economics/strand2_2.png"
    },
    {
        category: "Strand 2 — The Firm",
        question: "What is the HL rule for profit maximisation?",
        hint: "MC = MR.",
        answer: "HL requires applying MC = MR using diagrams, analysing short-run versus long-run decisions, and evaluating economies or diseconomies of scale.",
        image: "images/economics/strand2_3.png"
    },
    {
        category: "Strand 2 — Government Intervention",
        question: "When does government intervention improve market outcomes?",
        hint: "Correcting failures.",
        answer: "Students evaluate the effectiveness of taxes, subsidies and regulation in correcting externalities, imperfect information and market power problems.",
        image: "images/economics/strand2_4.png"
    }
],


    /* -------------------- STRAND 3 -------------------- */
"Strand 3 — What Can Markets Do?": [
    {
        category: "Strand 3 — Market Structures",
        question: "How do HL students compare different market structures?",
        hint: "Use diagrams and efficiency.",
        answer: "HL students compare perfect competition, monopoly and monopolistic competition using diagrams, analyse efficiency outcomes, and calculate concentration indices such as the HHI.",
        image: "images/economics/strand3_1.png"
    },
    {
        category: "Strand 3 — Labour Market",
        question: "What determines labour demand at HL?",
        hint: "MPP and MRP.",
        answer: "Students analyse marginal physical productivity (MPP) and marginal revenue productivity (MRP), draw wage-demand diagrams, and evaluate policy impacts such as minimum wage changes.",
        image: "images/economics/strand3_2.png"
    },
    {
        category: "Strand 3 — Market Failure",
        question: "What causes market failure at Higher Level?",
        hint: "Externalities, monopoly, information.",
        answer: "HL requires evaluating externalities with diagrams, analysing monopoly power and imperfect information, and assessing corrective policies like taxes or carbon pricing.",
        image: "images/economics/strand3_3.png"
    }
],


    /* -------------------- STRAND 4 -------------------- */
"Strand 4 — Policy and Economic Performance": [
    {
        category: "Strand 4 — National Income",
        question: "Why must HL students compare GDP, GNP, GNI and GNDI?",
        hint: "Ireland's MNC distortions.",
        answer: "Students evaluate the accuracy and limitations of each measure, interpret national income data, and account for distortions caused by multinational activity.",
        image: "images/economics/strand4_1.png"
    },
    {
        category: "Strand 4 — Fiscal Policy",
        question: "What HL evaluation is required for fiscal policy?",
        hint: "Think multipliers and constraints.",
        answer: "Students analyse deficits, surpluses, the fiscal stance, EU/Eurozone limits, and evaluate fiscal policy’s effectiveness in stabilising the business cycle.",
        image: "images/economics/strand4_2.png"
    },
    {
        category: "Strand 4 — Monetary Policy",
        question: "How does the ECB influence Ireland’s economy?",
        hint: "Shared Eurozone policy.",
        answer: "HL students evaluate inflation measurement, interest rate transmission, and how Ireland’s lack of independent monetary policy influences domestic conditions.",
        image: "images/economics/strand4_3.png"
    },
    {
        category: "Strand 4 — Financial Sector",
        question: "What must HL students know about credit creation?",
        hint: "Banks create money by lending.",
        answer: "Students explain how banks expand credit, analyse interest rate determinants, and evaluate the effectiveness of regulators and financial institutions.",
        image: "images/economics/strand4_4.png"
    }
],


    /* -------------------- STRAND 5 -------------------- */
"Strand 5 — International Economics": [
    {
        category: "Strand 5 — Growth & Development",
        question: "How do HL students compare Ireland with a less-developed country?",
        hint: "Use IHDI and structural factors.",
        answer: "Students compare development using indicators like the IHDI, evaluate productivity, human capital and technology differences, and assess development policies.",
        image: "images/economics/strand5_1.png"
    },
    {
        category: "Strand 5 — Globalisation",
        question: "How should HL students evaluate globalisation’s impact on Ireland?",
        hint: "Focus on FDI & MNCs.",
        answer: "HL requires analysing FDI patterns, taxation impacts, labour market effects, and Ireland’s vulnerability to global economic shocks.",
        image: "images/economics/strand5_2.png"
    },
    {
        category: "Strand 5 — International Trade",
        question: "How do HL students evaluate competitiveness?",
        hint: "Productivity + exchange rates.",
        answer: "Students analyse trade patterns, balance of payments components, exchange rate effects, labour costs, and the role of comparative advantage.",
        image: "images/economics/strand5_3.png"
    }
]

};


/* -------------------------------------------------------
   AUTO‑GENERATE "ALL" CATEGORY
------------------------------------------------------- */
cards.ALL = Object.values(cards).flat();