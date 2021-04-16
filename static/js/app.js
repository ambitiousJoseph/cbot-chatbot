// Pairs : Questions and answers
var pairs = {
    "hi":"am fine",
    "name":"am cbot. A chatbot computer machine to helt automate the customer assitance and support to businesses",
    "relative":"am bot. got no any relatives",
    "personification":"You can't be serious. Obviously not, i aint a human being",
    "assistance":"This is the assistance we can offer",
    "account" : "Click <a href=''>Here</a> to go to account Section for password and account settings",
    "geograpy_history":"I dont understand much about geography and history. But i suggest you check that on <a href='www.google.com'>google</a>",
    "offer":"Just anything. Give me an offer",
    "complement":"Wow. Thank you!",
    "critic":"Oh!. I will inform my developer to upgrade me.",
    "thanks":"welcome",
    "live":"i don't live, am just a computer machine",
    'story':"I love stories, i cant narrate, tell me one",
    "help":"Am a chatbot and my context is narrowed only to chat bot applications capability. Am a bit technical so i answer questions related to <a href=''>chatbot website<a/> and application development. Ask me questions and i will answer you to the best of my ability. For more help or queries about me or business you can go to <a href='about'>About</a> page.",
    "creator":"ChatBot developers Created and designed me.",
    "customization":"Follow <a>this link</a> and follow the instructions given thereby. You can contact the CBot Team For help <a>here</a>",
    "usage":"By customizing cbot to fit your business context, you can install it into your business website and it will respond to users questions.",
    "bored":"Sorry. How can i help you",
    "bye":"Bye! Hope to see you next time",
    "good":"Fine. How can i help you",
    "sorry":"No problem. Its alright"

    
};

function chat(){   

    var text_area = document.getElementById("message"); 
    var message = text_area.value;
    var result = "";  
    
    /*
     * I have used a simple l
    
    
    */
    
    let good_regular_expression = /(.*)am |(.*)(good|fine|doing good|cool|happy)(.*)/i;
    var good_result = good_regular_expression.test(message);
    if(good_result){
        result = "good";
    }   
    
    let bye_regular_expression = /(.*)bye|(see you)(.*)/i;
    var bye_result = bye_regular_expression.test(message);
    if(bye_result){
        result = "bye";
    }    
    
    let bored_regular_expression = /(am |(.*)(sad|bored|unhappy|down|(messed up)|unwell))|((am not)|not (happy|good))(.*)/i;
    var bored_result = bored_regular_expression.test(message);
    if(bored_result){
        result = "bored";
    }  

    let usage_regular_expression = /((How|where|what)|(.*))((can i use (you|cbot|chatbot))|(is your importance)|(can (you|cbot|chatbot) be applied)|(Your applications)|(your uses))(.*)/i;
    var usage_result = usage_regular_expression.test(message);
    if(usage_result){
        result = "usage";
    }     
    
    let creator_regular_expression = /(who|(who is))(.*)(boss|master|creator|designer|developed|owns|owner|deveolper|created)(.*)/i;
    var creator_result = creator_regular_expression.test(message);
    if(creator_result){
        result = "creator";
    }   
    
    let help_regular_expression = /(.*)(Help|about|aid)(.*)/i;
    var help_result = help_regular_expression.test(message);
    if(help_result){
        result = "help";
    }

    let story_regular_expression = /(((tell me)|(give me)) (.*)story|stories)(.*)/i;
    var story_result = story_regular_expression.test(message);
    if(story_result){
        result = "story";
    }
    
    let customerzation_regular_expression = /((How ((can i)|to))|(.*))((customize|install) (you|cbot|chatbot))|(customization)(.*)/i;
    var customerzation_result = customerzation_regular_expression.test(message);
    if(customerzation_result){
        result = "customerzation";
    }

    let live_regular_expression = /(.*)(live|home)(.*)/i;
    var live_result = live_regular_expression.test(message);
    if(live_result){
        result = "live";
    }
    
    let sorry_regular_expression = /(am |(i am ))(sorry)|(sorry)(.*)/i;
    var sorry_result = sorry_regular_expression.test(message);
    if(sorry_result){
        result = "sorry";
    }
    
    let thanks_regular_expression = /(thank you)|thanks|(i appreciate)(.*)/i;
    var thanks_result = thanks_regular_expression.test(message);
    if(thanks_result){
        result = "thanks";
    }

    let critic_regular_expression = /(you are)|(.*)(misserable|bad|poor|imperfect|slow|useless)(.*)/i;
    var critic_result = critic_regular_expression.test(message);
    if(critic_result){
        result = "critic";
    }

    let complement_regular_expression = /(you are)|(.*)(wonderful|conguraturations|impressive)(.*)/i;
    var complement_result = complement_regular_expression.test(message);
    if(complement_result){
        result = "complement";
    }

    let geography_regular_expression = /(history|geography)/i;
    var geography_result = geography_regular_expression.test(message);
    if(geography_result){
        result = "geography_history";
    }

    let offer_regular_expression = /what ((.*) want|(do for you))(.*)/;
    var offer_result = offer_regular_expression.test(message);
    if(offer_result){
        result = "offer";
    }

    let account_regular_expression = /((how|where to|(can i) login)|(How to|(can i) register)|(account setting|management)|(forgot|recover|reset|set password))(.*)/i;
    var account_result = account_regular_expression.test(message);
    if(account_result){
        result = "account";
    }
    
    let hi_regular_expression= /(hi)|(.*)(hello|(how are you)|((good) (morning|afternoon|evening)))(.*)/i;
    var hi_result = hi_regular_expression.test(message);
    if(hi_result){
        result = "hi";
    }
    
    let name_regular_expression= /(.*)(name|identity|(call you)|(who are you))(.*)/i;
    var name_result = name_regular_expression.test(message);
    if(name_result){
        result = "name";
    }
    
    let relative_regular_expression= /(.*)((is your )|(have (.*)))(mother|father|bro|siz|dad|mum|relative|son|child)(.*)/i;
    var relative_result = relative_regular_expression.test(message);
    if(relative_result){
        result = "relative";
    }
    
    let personification_regular_expression= /do|can you(.*) eat|walk|cry|talk|speak/i;
    var personification_result = personification_regular_expression.test(message);
    if(personification_result){
        result = "personification";
    }

    

    if(result in pairs){
        document.getElementById("chatbox").innerHTML =  '<p class="message_p text-light">'+message +'</p><p class="message_p text-white text-right">'+pairs[result]+'</p>';
        document.getElementById("message").value = "";
    }
    else{
        document.getElementById("chatbox").innerHTML =  '<p class="message_p text-light">'+message +'</p><p class="message_p text-white text-right">I cant understand you please</p>';
        document.getElementById("message").value = "";
    }
}
