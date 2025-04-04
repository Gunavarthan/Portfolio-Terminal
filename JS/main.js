const term = new XTerminal()
term.mount('#app');
//term.write('Hello World!\n$ ');

function isExtraSmallViewport() {
    return window.innerWidth < 576;
}

function isSmallViewport() {
    return window.innerWidth >= 576 && window.innerWidth < 768;
}

function isMediumViewport() {
    return window.innerWidth >= 768 && window.innerWidth < 992;
}

function isLargeViewport() {
    return window.innerWidth >= 992;
}

const state ={  username: 'visitor',hostname:'web' };
const commands = [{c:'about',d:'About Gunavarthan'},{c:'help',d:'Display all commands'},{c:'whoami',d:'Current user'},{c:'education',d:'Education Qualification'},{c:'projects',d:'Projects Worked on'},{c:'welcome',d:'Hero Section'},{c:'history',d:'List all exicuted Commands'},{c:'theme',d:'Change theme'},{c:'clear',d:'Clear Screen'},{c:'socials',d:'Chech out me here'},{c:'switchuser',d:'Switch Current User'},{c:'email',d:'Contact me'},{c:'echo',d:'Print a String in termnial'},{c:'typo',d:'try it'},{c:'whatis',d:'Not from me'}];
var theme = 'DEFAULT';

function ask() {
    switch(theme)
    {
        case 'PS':
            term.write(`PS C:\\${state.username}\\${state.hostname}>`);
            break;
        case 'SQL':
            term.write('<lable class="prmt1">SQL> </lable>');
            break;
        case 'DELIGHT':
            term.write('▲ ~ ');
            break;
        case 'CLASIC':
            term.write(`> `);
            break;
        case 'TERMINAL':
            term.write(`<lable class="prmt1">${state.username}</lable><lable class="prmt1">@</lable><lable class="prmt1">${state.hostname}</lable><lable class="prmt1">:~$ </lable>`);
            break;
        case 'DEFAULT':
            term.writeln(`\n<lable class="prmt1">┌[</lable><lable class="prmt2">${state.username}</lable><lable class="prmt1">@</lable><lable class="prmt2">${state.hostname}</lable><lable class="prmt1">]</lable>`);
            term.write('<lable class="prmt1">└$ </lable>');
            break;
        case 'UBUNTU':
            term.write(`<lable class="prmt1">${state.username}</lable><lable class="prmt2">@ubuntu:~</lable><lable class="prmt1">${state.hostname}</lable><lable class="prmt2">$</lable>`)
            break;

    }
    term.resume();
    term.focus();
}

var about = `<lable class="about">Hi, I’m <b>Gunavarthan</b>, \n\n a software developer passionate about technology, problem-solving, and exploring innovative solutions\n\n And as a PC hardware enthusiast, I stay curious and eager to grow in the tech industry.  
</lable>`;
var lsttheme = ['SQL','UBUNTU','MATRIX','WHITE','DEFAULT','TERMINAL','CLASIC','PS'];

function handleInput(command) {
    var cmd = command.split(' '); 
    if (cmd.length == 1)
    {
        switch (command) {
            case 'clear':
                term.clear();
                break;
    
            case 'history':
                let history = term.history; 
                console.log(history);
                for (var a in history)
                {
                    term.writeln(`${(parseInt(  a) + 1).toString().padEnd(3, ' ')}: ${history[a]}`);
                }
                break;
    
            case 'welcome':
                term.clear();
                welcome();
                break;
    
            case 'help':
                for (var a in commands)
                {
                    term.writeln(`<lable class='command'>${commands[a].c.padEnd(15,' ')} </lable><lable class="discription">- ${commands[a].d}</lable>`);
                }
                break;
            
            case 'whoami':
                term.writeln(`<i>${state.username}</i>`);
                break;
            
            case 'about':
                term.write(about);
                break;
            
            case 'theme':
                term.writeln('To change the theme use:\n\n\t<b>set theme &lt;theme name&gt;</b>\n\nList all themes: \n\n\t<b>lst themes</b>');
                break;
            
            default:
                let commandList = commands.map(cmd => cmd.c);
                if (commandList.includes(command)) {
                    term.writeln(`Command '${command}' is not fully implemented yet`);
                } else {
                    term.writeln(`<lable class='illegalcommand' >Illegal Command : '${command}'`);
                }
                break;
        }
        
    }
    else if(cmd.length >= 2)
    {
        switch (cmd[0]) { 
            case 'lst':
                if (cmd[1] == 'theme')
                {
                    term.writeln    ('theme names :'); 
                    for (var a in lsttheme)
                    {
                        term.write(`${lsttheme[a]}\t`);
                    }
                }  
                else
                {
                    term.writeln('BRUH (-_-!)');
                }
                break;

            case 'set':
                if(cmd[1]==='theme')
                {
                    setTheme(cmd[2]);
                }
                break;
            
            case 'echo':
                let match = command.match(/'([^']*)'/);
                if (match) {
                    term.writeln(match[1]);
                } else {
                    term.writeln('Usage: echo \'your text here\'');
                }
                break;
                
            
            default:
                let commandList = commands.map(cmd => cmd.c);
                if (commandList.includes(command)) {
                    term.writeln(`Command '${command}' is not fully implemented yet`);
                } else {
                    term.writeln(`<lable class='illegalcommand' >Illegal Command : '${command}'`);
                }
                break;
        }
    }
    ask();
}

function welcome()
{
    var message = String.raw`                                                                                            
  ______                                                               __      __                            \n        
./      \                                                             |  \    |  \                           \n  
|  $$$$$$\ __    __  _______    ______  __     __  ______    ______  _| $$_   | $$____    ______   _______   \n
| $$ __\$$|  \  |  \|       \  |      \|  \   /  \|      \  /      \|   $$ \  | $$    \  |      \ |       \  \n
| $$|    \| $$  | $$| $$$$$$$\  \$$$$$$\\$$\ /  $$ \$$$$$$\|  $$$$$$\\$$$$$$  | $$$$$$$\  \$$$$$$\| $$$$$$$\ \n
| $$ \$$$$| $$  | $$| $$  | $$ /      $$ \$$\  $$ /      $$| $$   \$$ | $$ __ | $$  | $$ /      $$| $$  | $$ \n
| $$__| $$| $$__/ $$| $$  | $$|  $$$$$$$  \$$ $$ |  $$$$$$$| $$       | $$|  \| $$  | $$|  $$$$$$$| $$  | $$ \n
 .\$$    $$ \$$    $$| $$  | $$ \$$    $$   \$$$   \$$    $$| $$        \$$  $$| $$  | $$ \$$    $$| $$  | $$\n
  \$$$$$$   \$$$$$$  \$$   \$$  \$$$$$$$    \$     \$$$$$$$ \$$         \$$$$  \$$   \$$  \$$$$$$$ \$$   \$$ \n

Welcome to my Terminal Portfolio => Terfolip  <3
---
<i>For list of available Commads type</i> <b class="help">'help'</b>
---

`;
    if (isMediumViewport())
    {
        message = String.raw`                                                                      
._______                                           _                 \n                    
(_______)                                      _  | |                \n
 ._   ___ _   _ ____  _____ _   _ _____  ____ _| |_| |__  _____ ____ \n 
| | (_  | | | |  _ \(____ | | | (____ |/ ___|_   _)  _ \(____ |  _ \ \n
| |___) | |_| | | | / ___ |\ V // ___ | |     | |_| | | / ___ | | | |\n
.\_____/|____/|_| |_\_____| \_/ \_____|_|      \__)_| |_\_____|_| |_|\n                                                                                                                                                                                                                                 
                                                
Welcome to my Terminal Portfolio => Terfolip  <3
---
<i >For list of available Commads type</i> <b class="cmd">'help'</b>
---
        `
    };

    if (isSmallViewport())
    {
        message = String.raw`  
                                               
._____                         _   _           \n
|   __|_ _ ___ ___ _ _ ___ ___| |_| |_ ___ ___ \n
|  |  | | |   | .'| | | .'|  _|  _|   | .'|   |\n
|_____|___|_|_|__,|\_/|__,|_| |_| |_|_|__,|_|_|\n
                                               
Welcome to my Terminal Portfolio => Terfolip  <3
---
<i>For list of available Commads type</i> <b class="help">'help'</b>
---

`
    } 
    if (isExtraSmallViewport())
    {
        message = String.raw`
.__                              \n
/__   __  _     _  ___|_|_  _ __ \n
\_||_|| |(_|\_/(_| |  |_| |(_|| |\n

Welcome to my Terminal Portfolio => Terfolip  <3
---
<i>For list of available Commads type</i> <b class="help">'help'</b>
---

`
    }
    term.write(`<lable class='hero'>${message}</lable>`);


}

welcome();
ask();

term.on('data', handleInput);


function setTheme(newTheme) {
    if (!lsttheme.includes(newTheme)) {
        term.writeln('Use <b>lst theme</b> for a list of themes.');
        return;
    }

    theme = newTheme;
    document.body.classList.remove(...lsttheme.map(t => `theme-${t.toLowerCase()}`));
    document.body.classList.add(`theme-${newTheme.toLowerCase()}`);

}


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


