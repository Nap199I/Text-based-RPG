/* jshint esversion: 11 */
const textElement = document.getElementById("text");
const titleElement = document.getElementById("game");
const optionButtonsElement = document.getElementById("option-buttons");

let state = {};

function startGame() {
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    titleElement.innerText = textNode.title;
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement("button");
            button.innerText = option.text;
            button.classList.add("btn");
            button.addEventListener("click", () => selectOption(option));
            optionButtonsElement.appendChild(button);
        }
    });
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
        return startGame();
    }
    state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId);
}

const textNodes = [
    {
        id: 1,
        title: "Your Beginning",
        text: "It is a cold, damp and dark night in the town of Lilly-River, most of the town is silent as the inhabitants are sleeping, there is only the odd flicker of an amber light from the candles in the windows of the night owls. Unfortunately for the residents your mother has gone into labour. Soon the silence is broken by the screams of labour, the town midwife had burst through the door with your father who had then been kicked out by the very same midwife he ran to get. The labour is long and exhausting but finally you arrive in the world, a strong and healthy young:",
        options: [
            {
                text: "Its a Boy!",
                setState: {boy: true},
                nextText: 2
            },
            {
                text: "Its a Girl!",
                setState: {girl: true},
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        title: "It's a boy!",
        text: "Congratulations you’re a Healthy baby boy, you have dark hair, dark eyes and your parents name you Jacob. What do your parents do for a living?",
        options: [
            {
                text: "Blacksmiths",
                nextText: 4
            },
            {
                text: "Soldiers",
                nextText: 5
            },
            {
                text: "King & Queen",
                nextText: 6
            }
        ]
    },
    {
        id: 3,
        title: "It's a girl!",
        text: "Congratulations you’re a Healthy baby girl, you have dark hair, dark eyes and your parents name you Rose. What do your parents do for a living?",
        options: [
            {
                text: "Blacksmiths",
                nextText: 4
            },
            {
                text: "Soldiers",
                nextText: 5
            },
            {
                text: "King & Queen",
                nextText: 6
            }
        ]
    },
    {
        id: 4,
        title: "The smithing trade",
        text: "The early years of your life are filled with love and laughter, your mother stayed home to raise you while your father works hard at his forge to bring a decent income so you and your mother may live a comfortable life. Your parents sit you down over Supper and talk to you about starting to pitch in and where you want to go in life. What is your reply?",
        options: [
            {
                text: "I wish to apprentice with my father.",
                requiredState: (currentState) => currentState.boy,
                nextText: 7
            },
            {
                text: "I wish to apprentice with my father.",
                requiredState: (currentState) => currentState.girl,
                nextText: 8
            },
            {
                text: "I don't want to work.",
                nextText: 9
            },
            {
                text: "I want to join the kings army.",
                nextText: 10
            },
            {
                text: "I want to travel.",
                nextText: 11
            }
        ]
    },
    {
        id: 5,
        title: "The military family",
        text: "The early years of your life are a little lonely with your father being gone most of the time either training or fighting in wars and disputes between royalty, the loneliness was not as bad as it could have been though as your mother stayed home to raise you and when your father was home you have a lot of fun memories playing with wooden swords, as you got older this playing turned slightly more serious as the swords turned from wood to metal. Your parents sit you down over Supper on an evening that your father was home and talk to you about starting to pitch in and where you want to go in life. What is your reply?",
        options: [
            {
                text: "I wish to apprentice as a blacksmith.",
                requiredState: (currentState) => currentState.boy,
                nextText: 12
            },
            {
                text: "I wish to apprentice as a blacksmith.",
                requiredState: (currentState) => currentState.girl,
                nextText: 13
            },
            {
                text: "I don't want to work.",
                nextText: 9
            },
            {
                text: "I want to join the army with father.",
                nextText: 14
            },
            {
                text: "I want to travel.",
                nextText: 11
            }
        ]
    },
    {
        id: 6,
        title: "The monarchy",
        text: "The early years of your life are very comfortable with servants, nurses and house maids catering to your every whim, you don’t have much of a relationship with your parents as they were busy running the kingdom. You feel like your real family are your tutors and the castle staff that had raised you, although you are well educated and one of the best with a sword in the kingdom you cannot help but harbour slight resentment for the king and queen. Your nurse sits you down one evening to discuss where you want to go in life. What is your reply?",
        options: [
            {
                text: "I wish to apprentice as a blacksmith.",
                nextText: 15
            },
            {
                text: "I don't want to work.",
                nextText: 16
            },
            {
                text: "I want to join my fathers army.",
                nextText: 17
            },
            {
                text: "I want to travel.",
                nextText: 18
            },
            {
                text: "I am happy just being royalty",
                nextText: 19
            }
        ]
    },
    {
        id: 7,
        title: "The family trade",
        text: "You spend the next couple of years learning and plying your fathers trade, it would seem that you have a gift for it and when word gets around that you are such a talented smith you soon start getting all the business in the town. With things going so well and the reputation of your smithing becoming almost legendary your father declares you a full smith, as a congratulation / graduation present he has offered you a partnership in his business, he has said he will partially retire taking half the week off to ease you into taking over. What do you do?",
        options: [
            {
                text: "Thank my father and agree to become partners.",
                nextText: 20
            },
            {
                text: "Go out on your own (start your own business).",
                nextText: 20
            },
            {
                text: "Decline the offer as you are happy just working the forge.",
                nextText: 20
            },
            {
                text: "Quit!",
                nextText: 20
            }
        ]
    },
    {
        id: 8,
        title: "The family trade",
        text: "When you tell your parents that you want to apprentice with your father there is an awkward silence, they explain to you that it is not considered proper for a girl to work in a blacksmith shop because women are considered to do work of worse quality, the way women became blacksmiths was to marry a blacksmith and then help their husbands. Although you understand what your parents are saying you are a strong young woman with your own thoughts and opinions on what is proper and right. Because of your father’s love for you and your enthusiasm to follow in the family business he agrees to let you apprentice with him in the back where you cannot be seen. You seem to have a gift for blacksmithing as business picks up and the shops reputation grows to new heights, as the shop becomes more and more busy it becomes harder and harder to keep you out of sight. One day you are spotted working in the back at the forge. What do you do?",
        options: [
            {
                text: "Pretend to be just visiting.",
                nextText: 20
            },
            {
                text: "HIDE!",
                nextText: 20
            },
            {
                text: "Demand to know why the customer is poking around the back?",
                nextText: 20
            },
            {
                text: "shout 'THIEF!'",
                nextText: 20
            },
            {
                text: "Pick up a nearby sword and kill them!",
                nextText: 20
            },
            {
                text: "The time for hiding is over, come out and tell everyone that your the reason for the shops new reputation.",
                nextText: 20
            }
        ]
    },
    {
        id: 9,
        title: "Pure laziness",
        text: "Needless to say your parents are less than thrilled to have an idol child that they will need to support for the rest of your life, they decide that this is not the way forward for them. The next day you find all your stuff had been packed up while you slept, your parents are kicking you out of their house. You might have been able to recover from this but you just can’t be bothered, you find a nice little nook away from prying eyes that has the least foot traffic and set up a makeshift bed. Unfortunately that night was particularly cold and the next morning you are found frozen solid in your makeshift bed you get the sense that anything worth doing isn’t easy.",
        options: [
            {
                text: "Restart, next time dont be so lazy!",
                nextText: -1
            },
        ]
    },
    {
        id: 10,
        title: "Smithson to join the military",
        text: "Being as your father had good relations with the royals due to his work he manages to get you into the military as you wished.\nOn your first day of training you turn up eager to impress, being a smiths son you are a big, strong young man and feel like you will really flourish here.\nThe guard captain approaches you and says ‘you are the new recruit right? Ok then report to the duty watchman for city patrol’.\nWhat do you do?",
        options: [
            {
                text: "Say ‘yes sir’ and report to the duty watchman",
                nextText: 20
            },
            {
                text: "Tell him that just being a watchman is beneath you",
                nextText: 20
            },
            {
                text: "Ask him to do combat training instead",
                nextText: 20
            },
            {
                text: "Tell him that there has been a mistake you are not here to be a watchman",
                nextText: 20
            },
            {
                text: "Ask for a premotion",
                nextText: 20
            },
            {
                text: "Challenge him to a fight to show off your skills",
                nextText: 20
            }
        ]
    },
    {
        id: 11,
        title: "The family trade",
        text: "When you tell your parents that you want to apprentice with your father there is an awkward silence, they explain to you that it is not considered proper for a girl to work in a blacksmith shop because women are considered to do work of worse quality, the way women became blacksmiths was to marry a blacksmith and then help their husbands. Although you understand what your parents are saying you are a strong young woman with your own thoughts and opinions on what is proper and right. Because of your father’s love for you and your enthusiasm to follow in the family business he agrees to let you apprentice with him in the back where you cannot be seen. You seem to have a gift for blacksmithing as business picks up and the shops reputation grows to new heights, as the shop becomes more and more busy it becomes harder and harder to keep you out of sight. One day you are spotted working in the back at the forge. What do you do?",
        options: [
            {
                text: "Pretend to be just visiting.",
                nextText: 20
            },
            {
                text: "HIDE!",
                nextText: 20
            },
            {
                text: "Demand to know why the customer is poking around the back?",
                nextText: 20
            },
            {
                text: "shout 'THIEF!'",
                nextText: 20
            },
            {
                text: "Pick up a nearby sword and kill them!",
                nextText: 20
            },
            {
                text: "The time for hiding is over, come out and tell everyone that your the reason for the shops new reputation.",
                nextText: 20
            }
        ]
    },
    {
        id: 12,
        title: "The military smith",
        text: "As you come from a well-respected family your father (who is now a commander in the king’s army) goes to the king and requests for you to apprentice with the royal smith, his request is granted by the king for his years of faithful service.\nYou spend the next couple of years learning the trade from the best smith in the kingdom, despite this you do not make much progression as the man is arrogant, narcissistic and won’t let you do much, he says that you will damage the reputation of his business.\nWhat do you do?",
        options: [
            {
                text: "Quit!",
                nextText: 20
            },
            {
                text: "Kill him!",
                nextText: 20
            },
            {
                text: "Ask why he accepted if he wasn’t going to teach you?",
                nextText: 20
            },
            {
                text: "Sabotage his business",
                nextText: 20
            },
            {
                text: "Tell your father",
                nextText: 20
            },
        ]
    },
    {
        id: 13,
        title: "Out on my own!",
        text: "Your mother and father start laughing when you tell them that you want to apprentice as a smith thinking that you were joking, when it becomes apparent that you are serious their smiles disappear.\nThey explain to you that it is not considered proper for a girl to work in a blacksmith shop because women are considered to do work of worse quality, the way women became blacksmiths was to marry a blacksmith and then help their husbands.\nYou have a huge argument with your parents as you believe you should be able to do what ever you want to do regardless of gender and state that you do not want to marry ….. yet, resulting from the argument you find yourself now kicked out and disowned as you would not concede your point.\nIn an attempt to prove your parents wrong you walk around the multiple blacksmith shops in the kingdom asking to apprentice with them.\nUnfortunately, almost every one laughed harder than your parents and told you to get lost or to have some common sense go and find a guy to marry, one blacksmith who knew who your father was did say if you came back with your father, it could be arranged for you to marry his son.\nWith it now getting late feeling deflated and embarrassed from being the butt of everyone’s jokes all day you find yourself thinking about what to do next.\nWhat do you do?",
        options: [
            {
                text: "Go back to your parents and apologise",
                nextText: 20
            },
            {
                text: "Find somewhere to sleep for the night",
                nextText: 20
            },
            {
                text: "Continue looking into the night",
                nextText: 20
            },
            {
                text: "Head to the next kingdom",
                nextText: 20
            },
        ]
    },
    {
        id: 14,
        title: "Daddies little soldier",
        text: "Your father being a commander decides to keep you where he can see you.\nYou get your wish to join the military, however you go in as his second in command jumping a lot of hard work.\nThis creates some animosity and resentment amongst the troops, you have jumped them just because of who your father is, you lack the respect of the soldiers.\nWhat do you do?",
        options: [
            {
                text: "Enforce your authority, demand respect and reprimand anyone that disobeys",
                nextText: 20
            },
            {
                text: "Throw a party to get to know your men",
                nextText: 20
            },
            {
                text: "Talk your father into a training exercise for bonding",
                nextText: 20
            },
            {
                text: "Quit as this isnt what i wanted",
                nextText: 20
            },
        ]
    },
    {
        id: 15,
        title: "The royal smith",
        text: "The nurse looks shocked at your choice, first thing in the morning you both go to your father the king and tell him what you have decided.\nAs you are not the oldest or an only child your father thinks it is a great idea and commissions you your own forge, realising that you don’t know how to work it yet he also hires the best smith in the kingdom to come and teach you his trade.\nAfter a couple of years the tutor goes back to his own forge and leaves you to your business, you are now the royal smith, getting to do exactly what you wanted and run your very own business you end up taking a spouse having 3.5 kids and living happily ever after.",
        options: [
            {
                text: "Restart, Congratulations on having a silver spoon",
                nextText: -1
            },
        ]
    },
    {
        id: 16,
        title: "Your royal Laziness",
        text: "Your nurse looks disappointed and tries to explain the value in doing something with your life that could contribute to the world and leaving a legacy but after a while she can see that her words are falling on deaf ears, before leaving your room she apologises for failing you although you don’t understand why she is apologising she leaves before you can say anything.\nYou live out the rest of your days in a remarkably unremarkable existence, as you watch the world pass you by you begin to understand what your nurse said, you have a lonely life, despite being royalty you cannot land yourself a spouse because you are known as the lazy royal.\nYou have no legacy, no children, no job and no life you end up becoming depressed as you realise that you should have at least tried to succeed. As you lie on your death bed you look around for comfort, no one is there, not even your parents, it took you a lifetime but you realise that anything worth doing isn’t easy.",
        options: [
            {
                text: "Restart, next time dont be so lazy!",
                nextText: -1
            },
        ]
    },
    {
        id: 17,
        title: "Royal perks",
        text: "As your father is the king, when he hears that you want to be a part of his military he agrees.\nIt is by royal decree that you are to learn from his military advisor, an apprentice of sorts as he is getting on in age he will be retiring soon for you to step into his place.\nYou get your wish and then some you are not just part of the military, you are at the top of it just under the king liaising between the two and commanding the military in your fathers absence.\nYou live a long happy and wealthy life ending up with you taking a spouse having 3.5 kids and living happily ever after.",
        options: [
            {
                text: "Restart, Congratulations on having a silver spoon",
                nextText: -1
            },
        ]
    },
    {
        id: 18,
        title: "The family trade",
        text: "When you tell your parents that you want to apprentice with your father there is an awkward silence, they explain to you that it is not considered proper for a girl to work in a blacksmith shop because women are considered to do work of worse quality, the way women became blacksmiths was to marry a blacksmith and then help their husbands. Although you understand what your parents are saying you are a strong young woman with your own thoughts and opinions on what is proper and right. Because of your father’s love for you and your enthusiasm to follow in the family business he agrees to let you apprentice with him in the back where you cannot be seen. You seem to have a gift for blacksmithing as business picks up and the shops reputation grows to new heights, as the shop becomes more and more busy it becomes harder and harder to keep you out of sight. One day you are spotted working in the back at the forge. What do you do?",
        options: [
            {
                text: "Pretend to be just visiting.",
                nextText: 20
            },
            {
                text: "HIDE!",
                nextText: 20
            },
            {
                text: "Demand to know why the customer is poking around the back?",
                nextText: 20
            },
            {
                text: "shout 'THIEF!'",
                nextText: 20
            },
            {
                text: "Pick up a nearby sword and kill them!",
                nextText: 20
            },
            {
                text: "The time for hiding is over, come out and tell everyone that your the reason for the shops new reputation.",
                nextText: 20
            }
        ]
    },
    {
        id: 19,
        title: "The family trade",
        text: "When you tell your parents that you want to apprentice with your father there is an awkward silence, they explain to you that it is not considered proper for a girl to work in a blacksmith shop because women are considered to do work of worse quality, the way women became blacksmiths was to marry a blacksmith and then help their husbands. Although you understand what your parents are saying you are a strong young woman with your own thoughts and opinions on what is proper and right. Because of your father’s love for you and your enthusiasm to follow in the family business he agrees to let you apprentice with him in the back where you cannot be seen. You seem to have a gift for blacksmithing as business picks up and the shops reputation grows to new heights, as the shop becomes more and more busy it becomes harder and harder to keep you out of sight. One day you are spotted working in the back at the forge. What do you do?",
        options: [
            {
                text: "Pretend to be just visiting.",
                nextText: 20
            },
            {
                text: "HIDE!",
                nextText: 20
            },
            {
                text: "Demand to know why the customer is poking around the back?",
                nextText: 20
            },
            {
                text: "shout 'THIEF!'",
                nextText: 20
            },
            {
                text: "Pick up a nearby sword and kill them!",
                nextText: 20
            },
            {
                text: "The time for hiding is over, come out and tell everyone that your the reason for the shops new reputation.",
                nextText: 20
            }
        ]
    },
    {
        id: 20,
        title: "Early termination",
        text: "Thank you for coming as far as you have, I hope to have more content added soon, for now please feel free to restart and try out the other life options.",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    }
];

startGame();