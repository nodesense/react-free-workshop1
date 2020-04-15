# react-free-workshop1

```
Title.   :  React Online Workshop   
Trainer  :  Gopalakrishnan Subramani
Time     :  7:00 PM to 9:30 PM IST
Date     :  April 13, 2020 to April 17, 2020
```



# Youtube

Video/Audio is not edited, I have uploaded them as is.


- Day 1  https://www.youtube.com/watch?v=5V35TBC2uds
- Day 2 https://www.youtube.com/watch?v=wQEtZILPi6A



# React React App

```

npx create-react-app product-app
cd product-app
npm start

```

# Clone this Repo

```

git clone https://github.com/nodesense/react-free-workshop1

cd react-free-workshop1

npm install

npm start

```

# Day 2


// JSX - JavaScript + XML
// Will crash JS Compiler
// Babel transpiler XML into JS Code
let h1Tag = <h1>Welcome</h1>


# Props / Properties

-  pass the data from parent to child

- year and company call be called as attribute/properties
- react conventions - props

    <Footer year={2020} company="NodeSense" >

# REACT DEVELOPER
 
 -- stop calling render unnessarily
 -- be convervative with render function calls
 -- when render called?
        - create virtual doms, a lot of javascript objects created
        - React does DIFFing, deep compare the tree, that component render and also child render
        - patch
        - Garbage collector should track objects in memory
        - release the memory

# When react calls RENDER, when react Merge the state [func, {}]

    React main a event loop/queue, FIFO

    all events are added to queue [click, bubble click]

    [event1, event2, ................................ evnet1000]

    batch the event, requestAnimationFramework..
    batch [event1, event2]
        each event has eventHandler [increment, decrement, reset, incrA,.....]
        it calls the event handlers
                event handlers call setState.. batch of states to be merge

    end of the batch/when no event in the queue
        merge the state, set to current state [this.state become active]
        calls render  function

40 fps - 1 scene updated every 25 ms