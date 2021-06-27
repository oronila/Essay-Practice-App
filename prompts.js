const PromptsArray = [
    "Describe an experience where you were unsuccessful in achieving your goal. What lessons did you learn from this experience?",
    "Describe an experience that forever changed your life and your outlook on life.",
    "What movie, poem, musical composition, or novel has most influenced your life and the way that you view the world? Why?",
    "What do you plan on doing after you graduate from college?",
    "If you were given the ability to change one moment in your life, would you do so? Why or why not? If so, what moment would you change and why?",
    "Presuming there was only one open admission spot remaining, why should this college choose to accept your application and not that of another student?",
    "Describe some tasks that you have accomplished over the past two years that have no connection to academic studies.",
    "What would you describe to be your most unique or special skill that differentiates you from everyone else?",
    "What do you consider to be the best advice you ever received? Who gave you that advice and did you follow that advice or not?",
    "What do you consider to be the most important political or social movement of the 20th century? Why?",
    "Choose one quotation that defines who you are and explain why that quotation describes you so well.",
    "How has the neighborhood you've grown up in molded you into the person you are today?",
    "Describe the most embarrassing moment of your life and explain what you learned from that experience and how it has made you a better or stronger person today.",
    "Tell a story that directly or indirectly illustrates the type of person you are.",
    "Think back to a situation in your life where you had to decide between taking a risk and playing it safe. Which choice did you make?",
    "Choose the invention that you think has had the most negative impact on our world and explain why you chose that invention.",
    "Devise a question that is not on this college admission form and provide a complete, thoughtful answer to it.",
    "What have been some of the major challenges you’ve encountered in your life? And was there a silver lining?",
    "Did a parent’s fragile health situation challenge you to take on more responsibilities than the average teenager?",
    "Did a series of setbacks on your road to becoming a child actor introduce you to screenwriting, your professional goal and biggest passion?",
    "Are you the kind of person who can rebound and turn every experience, good or bad, into one from which you can learn something? What experiences might illustrate this quality?"
];


var randomPrompt;
function display(){
    randomPrompt = PromptsArray[Math.floor(Math.random() * PromptsArray.length)];
    document.getElementById('theprompt').innerHTML = randomPrompt; 
}

