const textElement = document.getElementById("text")
const optionButtonsElement = document.getElementById("option-buttons")

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement("button")
            button.innerText = option.text
            button.classList.add("btn")
            button.addEventListener("click", () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state =Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
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
        text: "You spend the next couple of years learning and plying your fathers trade, it would seem that you have a gift for it and when word gets around that you are such a talented smith you soon start getting all the business in the town. With things going so well and the reputation of your smithing becoming almost legendary your father declares you a full smith, as a congratulation / graduation present he has offered you a partnership in his business, he has said he will partially retire taking half the week off to ease you into taking over. What do you do?",
        options: [
            {
                text: "Thank my father and agree to become partners.",
                nextText: 20
            },
            {
                text: "Go out on your own (start your own business).",
                nextText: 21
            },
            {
                text: "Decline the offer as you are happy just working the forge.",
                nextText: 22
            },
            {
                text: "Quit!",
                nextText: 23
            }
        ]
    },
    {
        id: 8,
        text: "When you tell your parents that you want to apprentice with your father there is an awkward silence, they explain to you that it is not considered proper for a girl to work in a blacksmith shop because women are considered to do work of worse quality, the way women became blacksmiths was to marry a blacksmith and then help their husbands. Although you understand what your parents are saying you are a strong young woman with your own thoughts and opinions on what is proper and right. Because of your father’s love for you and your enthusiasm to follow in the family business he agrees to let you apprentice with him in the back where you cannot be seen. You seem to have a gift for blacksmithing as business picks up and the shops reputation grows to new heights, as the shop becomes more and more busy it becomes harder and harder to keep you out of sight. One day you are spotted working in the back at the forge. What do you do?",
        options: [
            {
                text: "Pretend to be just visiting.",
                nextText: 24
            },
            {
                text: "HIDE!",
                nextText: 25
            },
            {
                text: "Demand to know why the customer is poking around the back?",
                nextText: 26
            },
            {
                text: "shout 'THIEF!'",
                nextText: 27
            },
            {
                text: "Pick up a nearby sword and kill them!",
                nextText: 28
            },
            {
                text: "The time for hiding is over, come out and tell everyone that your the reason for the shops new reputation.",
                nextText: 29
            }
        ]
    },
    {
        id: 9,
        text: "Needless to say your parents are less than thrilled to have an idol child that they will need to support for the rest of your life, they decide that this is not the way forward for them. The next day you find all your stuff had been packed up while you slept, your parents are kicking you out of their house. You might have been able to recover from this but you just can’t be bothered, you find a nice little nook away from prying eyes that has the least foot traffic and set up a makeshift bed. Unfortunately that night was particularly cold and the next morning you are found frozen solid in your makeshift bed you get the sense that anything worth doing isn’t easy.",
        options: [
            {
                text: "Restart, next time dont be so lazy!",
                nextText: -1
            },
        ]
    },
]

startGame()