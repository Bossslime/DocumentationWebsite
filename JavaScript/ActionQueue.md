# JavaScript Action Queue System

This is a queue system I designed to queue tasks for sql queries but found 
that transactions work better. It can still be used as a queue for any other action 
you need, whether it be reading or writing to a file or anything else that needs to 
be run in order. It works very fast, with the sql system I was able to write about 
100 items per second to my database, that means I sent the query to the db and got 
a response before proceeding.


```javascript
let actionType = { //This is a mimic enum system I made
    TEST_ACTION: "test_action"
}

let actionsQueue = [];

function addActionToQueue(data) {
    /**
     * data = {
     *     type: actionType,
     *
     *     data: {} //The object that is being tampered with
     * }
     */

    
    //This is case statement in case you need to do different things to the action
    //depending on what kind of action it is
    switch (data.type) {
        case actionType.TEST_ACTION:
            actionsQueue.push(data);
            break;
    }

    //Start the queue if this is the only object in it
    if (actionsQueue.length === 1) {
        runNextAction();
    }
}

function runNextAction() {
    //If you wanted to add a priority such as read before writing, you would need a
    //Second array of actions and another if statement here. I would also recommend turning
    //the current if statement into an else-if statement
    
    if (actionsQueue.length > 0) {
        
        //This will run the first action in the list, which would be the next action in the queue
        let action = actionsQueue[0];

        switch (action.type) {
            case actionType.TEST_ACTION:
                //Do stuff here

                //I run these seperately in each case just incase one of them has a
                //callback
                actionsQueue.splice(0, 1);
                runNextAction();
                break;

            default:
                actionsQueue.splice(0, 1);
                runNextAction();
        }
    }//else nothing is left in the queue
}
```