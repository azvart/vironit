import HashStorage from './hasStorage';
export default class coctailStorage extends HashStorage{

    constructor(btn,view){
        super()
        this.btn = Array.from(document.getElementsByClassName(btn));
        this.view = Array.from(document.getElementsByClassName(view))[0];
    }
    
        add(){
            let btn = Array.from(document.getElementsByClassName('add'))[0];
            btn.addEventListener('click',(event)=>{
                event.preventDefault();
                this.addValue(form.name.value,{alc:form.alc.checked,composition:form.composition.value,recipe:form.recipe.value});
            });
        }
        anotherClicked(){
            this.btn.forEach((e)=>{
                e.addEventListener('click',()=>{
                    if(e.className == 'btn get'){
                        
                           let asked = prompt('Какой напиток желаете найти?');
                         
                                while(this.view.hasChildNodes())
                                {
                                   this.view.removeChild(this.view.lastChild);
                                }
                                console.log(this.getValue(asked));
                                let div = document.createElement('div');
                      
                                
                             div.innerHTML = `<h1>${asked}</h1 <p>${this.state[asked].alc? ' (Алкогольный: Да)': ' (Алкогольный: Нет)'}</p> <p>${this.state[asked].composition}</p><p>${this.state[asked].recipe}</p> `
                               this.view.appendChild(div);
    
                       
                    }else if(e.className == 'btn delete'){
                        let del = prompt('Какой напиток хотите удалить?');
                        let itemDel = Array.from(document.querySelectorAll('.view div  h1'));
                        this.deleteValue(del);
                        
                        itemDel.forEach((e)=>{
                            console.log(e.textContent);
                            if(e.textContent == del){
                                
                                e.parentNode.parentNode.removeChild(e.parentNode);
                            }
                        });
                    }else if(e.className == 'btn all'){
                        while(this.view.hasChildNodes())
                        {
                           this.view.removeChild(this.view.lastChild);
                        }
                        let result = this.getKeys();
                        for(let i = 0; i<result.length;i++){
                            let p = document.createElement('h1');
                            p.textContent = result[i];
                            this.view.append(p);
                        }
                    }
                });
           
            });
           
        }
    
    }
    
    
    let coct = new coctailStorage('btn','view');
    coct.add();
    coct.anotherClicked();
    console.log(coct);