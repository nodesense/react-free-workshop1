# Whiteboard Notes


REAL DOM 
    Mutable Tree
        appendchild
        removechild
        setText
        removeClass
        addClass
        addAttribute
        createElement
    
Virtual DOM 
    Immutable Tree [no update, no delete, no settext]
        createElement

    
STATEful
 person = {name: 'Krish'}

    onClick() {
        // state got changed
        person.name = 'Gopal'
    }
 View    reflect the change 
    <p>{{person.name}}</p> - data bind [refer to same person object]
     
     Krish --> Gopal


REACT - STATELESS

person = {name: 'Krish'}

 new virtual dom <p>Krish</p>

person.name = 'Gopal'; => will not automatically update v.Dom

Create new Virtual Dom
    <p>Gopal</p>

NOT - {person.name} - not like this,

Create once it doesn't include state - <p>Krish</p>


Render 1
    PrevVDOM = undefined

    virtual dom created
    CurVDOM = <div>
                 <p>10</p>
              </div>

Diff [Deep compare] 
    Deep Comparision - Many algorithm

Difference = diff( PrevVDOM, CurVDOM)

Difference = <div>
                 <p>10</p>
              </div>

Patch (Difference) to REAL DOM
    div = document.createElement('div')
    p = document.createElement('p');
    p.setText(10)
    div.appendChild(p)

PrevVDOM = CurVDOM

PrevVDOM = <div>
                 <p>10</p>
           </div>
Render 1 - end here
---

Render 2

update 10 to 11

create new virtual dom
CurVDOM = <div>
                 <p>11</p>
           </div>


Difference = diff( PrevVDOM, CurVDOM)

Difference =  11 (textElement)
               
patch (get the text element from real dom )
        patch 10 to 11 in the REAL DOM

PrevVDOM = <div>
                 <p>11</p>
           </div>


the last PrevVDOM is garbage collected

How many virtual DOMS - 3 virtual doms

<div> - 1 vir dom element
    <p> -  1 vir dom element - 1 object,
    
    11 - textElement - 1 vir dom element - 1 object
    
    </p>
</div>

--- REAL DOM

 elementNode = document.createElemnt('div') - 1 object

<div> - 1 real dom element 1 object
    <p> -  1 real dom
    11 - textElement - 1 real dom
    </p>
</div>

DIFF - Pain

What is the impact of bigger component?
    slow performance/diff/creation of virual dom/GC


1 Component - 

100 rows
each row has 10 columns
each cell - 5 dom elemenets

How many V.DOM - 100 * 10 * 5 = 5000 V.DOM elemenets

5000 objects (v.dom) in memory
5000 objects are compared
find the diff of 1 object (1 v.dom) 1000 => 1001
V.DOM TREE - immutable

JavaScript - same single thread 
 if more time to create object - hang page rendering
 more time to diff - hang page rendering
 more tiem to release memeory by GC - hang page rendering

<table>
 <tr>
   <th>Name</th>
   <th>Price</th>
   ...
   10 columns
 </tr>
 <tr> 
    <td> <div> <label><em>INF</em></lable></div>..</td>  
    <td> <div> <label><em>1000</em></lable></div>..</td>
    ...
    10 columns
 </tr>
 ...<tr 99>
 <tr 100> 100 -rows
 </table>

==> update the price 1000 to 1001
>> we cannot update the v.dom elemenets

create the whole dom again


<table>
 <tr>
   <th>Name</th>
   <th>Price</th>
   ...
   10 columns
 </tr>
 <tr> 
    <td> <div> <label><em>INF</em></lable></div>..</td>  
    <td> <div> <label><em>1001</em></lable></div>..</td>
    ...
    10 columns
 </tr>
 ...<tr 99>
 <tr 100> 100 -rows
 </table>

---

DIFF 
 PrevDOM - 5000 vdoms
 CurrVDOM - 5000 vdom

 Diff(5000 to 5000 elements) - BAD approach

 Result = 1000 ==> 1001

 PAtch (1001) in REAL DOM
 ----
 Smaller component

 Table Component
 Row Component

 <Table>
   <Row> </Row>
   <Row> </Row>
   <Row> </Row>
   <Row> </Row>
   ..
   100
</Table>

Row 
    each row hot 10 columns
    1 cell has 5 elements

    50 v.dom

    update only Row component instance

    1 x 10 coml x 5 element = 50 v.dom

    Create 50 v.doms
    compare 50 v.doms

    diff = 1000 ==> 1001
    Patch(1001) to real dom

    <tr> - Component
    <div> <label><em>INF</em></lable></div>..
     <label><em>1000</em></lable>
   </tr>

   vs 

   <tr> - Component
    <div> <label><em>INF</em></lable></div>..
     <label><em>1001</em></lable>
   </tr>

   <tr..>

   100 rows


Installed node.js - build react application/compile time
Install V.Studio Code - IDE
Chrome

open command prompt

> node -v

create new react app
    template to create react application

c:\users\username> npx create-react-app product-app
c:\users\username> cd product-app
c:\users\username\product-app> npm start

npm start
        webpack-dev-starter on port 3000
    watch the file changes
        ES6 transpile into ES5
        bundle the files into bundle files
        (set of js files) put into single js file
        serve the files to browser/reload on update

Windows
    c:\users\username> 
                    .npmrc

                    rename .npmrc to something else

                    npm config 

                    npm config rm proxy
                    npm config rm https-proxy

npm clean cache --force

reinstall node.js

remove C:\appdata\roaming\npm-cache

