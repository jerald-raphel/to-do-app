let addbtn=document.getElementById('addtask');
const inputvalue=document.getElementById('input')
const arr=[];
const tasklist=document.getElementById('all-task');

const editbtnicon=` 
<svg   xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>`;
const delbtnicon=` 
<svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25 " fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>
`;

const finishbtn =`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>`

const savebtn=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy-fill" viewBox="0 0 16 16">
<path d="M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h.086a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-.5A1.5 1.5 0 0 1 0 14.5v-13Z"/>
<path d="M3 16h10v-5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V16Zm9-16H4v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V0ZM9 1h2v4H9V1Z"/>
</svg>`



//Store data in local storage
const storeinlocal=()=>{
    const jsonstring=JSON.stringify(arr);
    console.log(jsonstring)
    localStorage.setItem("tasklist",jsonstring);
}

//get data in  local storage
const getdata=()=>{
    const data=localStorage.getItem("tasklist")
    const arrdata=JSON.parse(data);
    console.log(arrdata);
    if(arrdata!==null){
    arr.push(...arrdata);
    }
}

const displaytask=()=>{
    console.log(arr);
    check();
    tasklist.innerHTML="";

    arr.forEach((i,j)=>{
            //create section
                    const tsklst=document.createElement('section');
                    tsklst.classList.add('task-list');
            //create input
                    const newtask=document.createElement("input");
                    newtask.value=i.tasktittle;
                    newtask.readOnly=true; 
            //complete status
                    let getstatus=i.completeStatus;
                    console.log(getstatus)
                    if(getstatus){
                        newtask.classList.add('finlist')
                    
                    }else{
                        newtask.classList.add('list');
                    
                    }
            //completed btn
                    const finbtn=document.createElement('button');
                    finbtn.classList.add('fin-btn');
                    finbtn.innerHTML=finishbtn;
                    finbtn.addEventListener("click",()=>{
                    if(getstatus){
                        arr[j].completeStatus=false;
                        displaytask();
                    }else{
                        arr[j].completeStatus=true;
                        displaytask();
                    }
                        
                    }   );
             //add to section  child     
                    tsklst.appendChild(finbtn)
                    tsklst.appendChild(newtask)
            //edit btn
                    const editbtn=document.createElement('button');
                    editbtn.classList.add('edit-btn')
                    editbtn.innerHTML=editbtnicon
            //click fun edit btn     
                    editbtn.addEventListener("click",()=>
                    {
                        newtask.readOnly=false
                        newtask.focus()
             //create save btn and remove edit btn append child
                           const save=document.createElement('button')
                           save.classList.add('savebtn')
                           save.innerHTML=savebtn;
                           tsklst.removeChild(editbtn);
                           newtask.style.backgroundColor="white"
                           tsklst.appendChild(save);
            //save after correction  and remove save btn ,add edid btn 
                        save.addEventListener("click",()=>{
                        const getinput=newtask.value
                            console.log(getinput)
                            arr[j].tasktittle=getinput;
                            tsklst.appendChild(editbtn)
                            tsklst.removeChild(save)
                            displaytask()
                        });
                    });
            //add edit btn first time 
                    tsklst.appendChild(editbtn);
            // create delete btn
                    const delbtn=document.createElement('button');
                    delbtn.classList.add('del-btn')
                    delbtn.innerHTML=delbtnicon
            //delete elemnt inarray       
                    delbtn.addEventListener("click",()=>{
                        arr.splice(arr.indexOf(i),1);
                        displaytask();
                    })
                    
             //add del btn and add  all  to html   
                    tsklst.appendChild(delbtn);
                    tasklist.appendChild(tsklst);
                });
        //check and store in locl
            if(typeof localStorage!==undefined){
                storeinlocal();
            }
        else{
            console.log("not support local storage")
        }

    }

    //add to task to array
const addtasktoarray=(tasktittle,completeStatus)=>{
    if(tasktittle===""){
        console.warn("empty")
       
         return;
    }
    arr.push({
        tasktittle,
        completeStatus
    });
   
   
}
//load after refresh
window.onload=()=>{
    getdata();
    displaytask();
    check();
}

//add to task
addbtn.addEventListener("click",()=>{
    const addtask=inputvalue.value;
    addtasktoarray(addtask,false);   
    displaytask();
    inputvalue.value=""
    inputvalue.focus();
})

//warn to no task
function check(){
    if(arr.length===0){
        const c=document.createElement("div");
        c.classList.add('warn')
        c.textContent="Hi! You Don't Have Any Task"
        tasklist.appendChild(c)
        
    }}
   