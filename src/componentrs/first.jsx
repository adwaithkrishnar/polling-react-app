import React, { Component, createElement } from 'react';
import Popup from 'reactjs-popup';
import './../index.css'

var data = [
    [
    "which language do you prefer",
    [
        {   
            "label" : "Javascript",
            "votes" : 90,
        },
        {
            "label" : "TypeScript",
            "votes" : 10,
        }
    ]
    ],
    100
    
];
var voted = false;

class First extends Component {
    state = {  } 
    
    
    handleAdd(){
        var li = document.createElement("li")
        var inp = document.createElement("input")
        inp.className = "input"
        li.append(inp)
        document.getElementById("list").appendChild(li)
    }

    newPoll(){
        data[0] =[];
        data[1] = 0;
        var question = document.getElementById("question").value
        data[0][0] = question
        var options= [];
        var ul = document.getElementById("list");
        var li = ul.getElementsByTagName('li');
        var i;
        for (i = 0; i < li.length; i++) {
            
            var option1 = li[i].getElementsByTagName("input")[0].value;
            options.push(
                {   
                    "id" : "option"+ i.toString(),
                    "label" : option1,
                    "votes" : 0,
                }
            );
        }
        data[0][1]=options;
    }
    
    currentpoll(){
        var poll = document.getElementById("newpoll") 
        if (poll.childNodes.length == 0){
            var h1 = document.createElement("h1");
            h1.textContent = data[0][0];
            poll.append(h1)
            for(const option of data[0][1]){ 
                var div1 = document.createElement("div");
                div1.id = "div1"
                div1.className= "poll__option-fill"
                var div2 = document.createElement("div");
                div2.className= "poll__option-info"
                var span1 = document.createElement("span");
                var span2 = document.createElement("span");
                span1.className = "poll__label"
                span2.className = "poll__percentage"
                span1.textContent = option.label
                span2.textContent = data[1] ? option.votes*100/data[1] : 0
                span2.id = option.id;
                div1.addEventListener('click', function(){
                    if(!voted){
                        data[1] = data[1]+1;
                        option.votes = option.votes + 1;
                        document.getElementById(option.id).textContent = option.votes*100/data[1]
                        document.getElementById("newpoll").className = "poll-option-selected"
                        this.currentpoll()
                    }
                    
                    
                });
                div2.append(span1);
                div2.append(span2);
                poll.append(div1);
                poll.append(div2);
            }
        }
        else {
            var child = poll.lastElementChild; 
            while (child) {
                poll.removeChild(child);
                child = poll.lastElementChild;
            }
        }
        
    }


    render() { 
        return (
            <div>
                <button onClick={this.currentpoll} class = "button" >Current Poll</button>
                <Popup  trigger={<button> Create New Poll</button>} position="bottom center">
                <div className='popup'>
                    <form id= "form" action ="#">
                        <input class = "input" id = "question" type= "text"></input>
                        <button onClick={this.handleAdd}>Add Option</button>
                        <ul id ="list">
                            <li><input class = "input" type="text" /></li>
                        </ul>
                        <button onClick={this.newPoll}> Create Poll</button>
                    </form>
                </div>
                </Popup>
                <div>
                <div class="poll__option" id = "newpoll"></div>
                </div>
            </div>
        );
        
        
    }
}
 
export default First;