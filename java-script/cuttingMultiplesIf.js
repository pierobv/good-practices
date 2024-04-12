// Author pierobv
// https://github.com/pierobv

//------------------------------------------------------

// USING MUTIPLES IF

const myTypeOfEvent1 = "action1" // We probably will receive that in runtime

if (myTypeOfEvent1 === "action1") {
    console.log("This is my action 1")
} else
    if (myTypeOfEvent1 === "action2") {
        console.log("This is my action 2")
    } else
        if (myTypeOfEvent1 === "action3") {
            console.log("This is my action 3")
        } else
            if (myTypeOfEvent1 === "action4") {
                console.log("This is my action 4")
            } else
                if (myTypeOfEvent1 === "action5") {
                    console.log("This is my action 5")
                } else
                    if (myTypeOfEvent1 === "action6") {
                        console.log("This is my action 6")
                    } else
                        if (myTypeOfEvent1 === "action7") {
                            console.log("This is my action 7")
                        } else
                            if (myTypeOfEvent1 === "action8") {
                                console.log("This is my action 8")
                            }

//------------------------------------------------------

// SIMPLIFIED METHOD

const typesOfEvent = {
    action1() { console.log("This is my action 1") },
    action2() { console.log("This is my action 2") },
    action3: () => { console.log("This is my action 3") }, // We can make that if we want, is the same
    action4() { console.log("This is my action 4") },
    action5() { console.log("This is my action 5") },
    action6() { console.log("This is my action 6") },
    action7() { console.log("This is my action 7") },
    action8() { console.log("This is my action 8") },
}

const myTypeOfEvent2 = "action2"
const myFunc2 = typesOfEvent[myTypeOfEvent2]


if (myFunc2) { // Verifying if myFunc1 is not undefined
    myFunc2()
}

// --- Not using this "if" ---

// const myTypeOfEvent3 = "doesnt exist"
// const myFunc3 = myObject[myTypeOfEvent3]

// myFunc3() --> output --> Uncaught TypeError TypeError: myFunc3 is not a function

//------------------------------------------------------

// Author pierobv
// https://github.com/pierobv
