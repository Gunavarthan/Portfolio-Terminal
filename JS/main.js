const term = new XTerminal()
term.mount('#app');
//term.write('Hello World!\n$ ');

function islargeViewport() {
    return window.innerWidth >= 930; // Adjust breakpoint as needed
}

function isMediumViewport() {
    return window.innerWidth <= 930 && window.innerWidth >= 600 ; // Adjust breakpoint as needed
}

function isSmallViewport() {
    return window.innerWidth <= 600; // Adjust breakpoint as needed
}

const state ={  username: 'root',hostname:'web' };
const commands = [{c:'about',d:'About Gunavarthan'},{c:'help',d:'Display all commands'},{c:'whoami',d:'Current user'},{c:'education',d:'Education Qualification'},{c:'projects',d:'Projects Worked on'},{c:'welcome',d:'Hero Section'},{c:'history',d:'List all exicuted Commands'},{c:'theme',d:'Change theme'},{c:'clear',d:'Clear Screen'},{c:'socials',d:'Chech out me here'},{c:'switchuser',d:'Switch Current User'},{c:'email',d:'Contact me'}];

function ask() {
    term.writeln(`\n┌[${state.username}@${state.hostname}]`);
    term.write('└$ ');
    term.resume();
    term.focus(); 
}

function handleInput(command) {
    switch (command) {
        case 'clear':
            term.clear();
            break;

        case 'history':
            let history = term.history; 
            console.log(history);
            for (var a in history)
            {
                term.writeln(`${(parseInt(a) + 1).toString().padEnd(3, ' ')}: ${history[a]}`);
            }
            break;

        case 'welcome':
            term.clear();
            welcome();

        case 'help':
            for (var a in commands)
            {
                term.writeln(`${commands[a].c.padEnd(15,' ')} - ${commands[a].d}`);
            }
            break;

        default:
            term.writeln(`Illegal Command : '${command}'`);
            break;
    }
    ask();
}

function welcome()
{
    var message = String.raw`
  ______                                                               __      __                           
./      \                                                             |  \    |  \                          
|  $$$$$$\ __    __  _______    ______  __     __  ______    ______  _| $$_   | $$____    ______   _______  
| $$ __\$$|  \  |  \|       \  |      \|  \   /  \|      \  /      \|   $$ \  | $$    \  |      \ |       \ 
| $$|    \| $$  | $$| $$$$$$$\  \$$$$$$\\$$\ /  $$ \$$$$$$\|  $$$$$$\\$$$$$$  | $$$$$$$\  \$$$$$$\| $$$$$$$\
| $$ \$$$$| $$  | $$| $$  | $$ /      $$ \$$\  $$ /      $$| $$   \$$ | $$ __ | $$  | $$ /      $$| $$  | $$
| $$__| $$| $$__/ $$| $$  | $$|  $$$$$$$  \$$ $$ |  $$$$$$$| $$       | $$|  \| $$  | $$|  $$$$$$$| $$  | $$
 .\$$    $$ \$$    $$| $$  | $$ \$$    $$   \$$$   \$$    $$| $$        \$$  $$| $$  | $$ \$$    $$| $$  | $$
  \$$$$$$   \$$$$$$  \$$   \$$  \$$$$$$$    \$     \$$$$$$$ \$$         \$$$$  \$$   \$$  \$$$$$$$ \$$   \$$

Welcome to my Terminal Portfolio => Terfolip  <3
---
<i>For list of available Commads type</i> <b>'help'</b>
---

`;
    if (isMediumViewport())
    {
        message = String.raw`                                                                      
._______                                           _                 
(_______)                                      _  | |                
 ._   ___ _   _ ____  _____ _   _ _____  ____ _| |_| |__  _____ ____  
| | (_  | | | |  _ \(____ | | | (____ |/ ___|_   _)  _ \(____ |  _ \ 
| |___) | |_| | | | / ___ |\ V // ___ | |     | |_| | | / ___ | | | |
.\_____/|____/|_| |_\_____| \_/ \_____|_|      \__)_| |_\_____|_| |_|                                                                                                                                                                                                                                 
                                                
Welcome to my Terminal Portfolio => Terfolip  <3
---
<i>For list of available Commads type</i> <b>'help'</b>
---
        `
    };

    if (isSmallViewport())
    {
        message = String.raw`  
                                               
 _____                         _   _           
|   __|_ _ ___ ___ _ _ ___ ___| |_| |_ ___ ___ 
|  |  | | |   | .'| | | .'|  _|  _|   | .'|   |
|_____|___|_|_|__,|\_/|__,|_| |_| |_|_|__,|_|_|
                                               
Welcome to my Terminal Portfolio => Terfolip  <3
---
<i>For list of available Commads type</i> <b>'help'</b>
---

`
    } 
    term.write(message);

}

welcome();
ask();

term.on('data', handleInput);



/*term.on('start', (id) => {
    term.writeln(`\n\nstarted...${id}`);        
});

term.on('refresh',() =>{
    term.writeln('Screen Refreshed...\n');
});
term.write('<b>Hello </b> <i>Guna</i>');
term.write('<span class="spinner"></span> Loading...');

setTimeout(() => term.clearLast(), 1000);
setTimeout(() => {
    term.write('<span class="loader"></span>');    
    term.emit('start',1296);     // as the emit emits the event the term on executes
}, 2000);

term.emit('start',12);

setTimeout(() => term.clear(), 5000);

ask();

const refresh = Symbol('start');

term.emit('refresh');

term.on('data',()=>{
    term.write('hmm...');
});*/

// no user interactivity
//term.pause();


