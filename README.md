# react-free-workshop1

```
Title.   :  React Online Workshop   
Trainer  :  Gopalakrishnan Subramani
Time     :  7:00 PM to 9:30 PM IST
Date     :  April 13, 2020 to April 17, 2020
```

# JOIN Professional React Redux Program

Anyone interested to be part of Full Fledged, Project Oriented
Professional React Redux Coding Boot camp, you can register here. 


https://www.townscript.com/e/react-redux-bootcamp-213142



# Youtube

Video/Audio is not edited, uploaded them as is.


- Day 1  https://www.youtube.com/watch?v=5V35TBC2uds
- Day 2 https://www.youtube.com/watch?v=wQEtZILPi6A
- Day 3 https://www.youtube.com/watch?v=lBtV_H0V_xg
  

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

  -- Immutable

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


# Day 4

- React router (react-router-dom)
- Life Cycle
- API Calls [Axios]


- Life Cycle
  - Cart [items: Array, amount, count]
    - CartList [Table, render all the CartItem as row, items]
      - CartItem 1 - item [many]
      - CartItem 2
    - CartSummary [amount, count]

  -- applicable only for class component

      Life Cycle Process
        1. Mounting [Creation] - Callbacks defined by react
        2. Mounted  [Update]
        3. Unmounting [Destruction]

      Immutable
        React virtual dom
        Data Model - Immutable
          JavaScript
            Primitive - number, boolean - copy by value, pass by value for function
            Object - by reference, pass by reference
                  Mutable -  Object - {}, Array []
                  Immutable - string, symbol


                Shallow - choose this option
                    list === listClone - shallow compare - Time Complex - O(1)
                    compare two ref - Fast

                 Deep Compare   
                    _.deepCompare(left, right) - expensive time complexity

                Shallow Copy - Choose this option
                   Array1 in memory - [ {item1}, {item2}  ] - 3 objects  = 1 Array + 2 items

                   Shalow copy

                   item1, and item2 are copied as reference
                   Array2 = [...Array1] - + 1 more object for Array 2 = Total 4 objects

                
REACT 
  VIEW
    should not write business logic
    should not do api

 FLUX
 REDUX
  write business logic
  make api calls
  state management


DB Example 

Table 


id , name
1    react
2    redux


indexing 

1, 2 in memory

If Item exist, it is worth doing the check/SCAN
    select * from table where id = 1 ==> db check the index first
        if it is in memory, 
        then db goes in to disk
            SCAN - SLOW


what happen, 
        select * from table where id = 20 ==> db check the index first
                    in index,  id is not found, skip
                    the expensive SCAN 


# REACT   

  Key - collections, empty, 1 item, .. n, million items

  React Deep comparision with Virtual DOM

  Snapshot V.dom/PrevVDOM
    
    table 
      row1 - index/key - Primary key/unique within table 1
      row2 - key  2
      ..
      row 10 - key 10
      ..
      row10000

  currVDom [row1, row2, row10 removed from current v.dom structure]

    table 
      row 4 - key 4
      row 5 - key 5
      ..
      row 11
      ..
      row10000

  Deep compare
    first check if key exist in the new v.dom/currVDom or not.
      if key doesn't exist, it consider that the row is removed
        it won't do deep of that row, and its children
        