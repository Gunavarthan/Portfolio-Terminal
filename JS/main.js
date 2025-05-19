const term = new XTerminal()
term.mount('#app');
var interval_id
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
const commands = [{c:'about',d:'About Gunavarthan'},{c:'help',d:'Display all commands'},{c:'hack',d:'Just a Screen Saver'},{c:'whoami',d:'Current user'},{c:'education',d:'Education Qualification'},{c:'projects',d:'Projects Worked on'},{c:'welcome',d:'Hero Section'},{c:'history',d:'List all exicuted Commands'},{c:'theme',d:'Change theme'},{c:'clear',d:'Clear Screen'},{c:'socials',d:'Chech out me here'},{c:'switchuser',d:'Switch Current User'},{c:'email',d:'Contact me'},{c:'echo',d:'Print a String in termnial'},{c:'typo',d:'try it'},{c:'whatis',d:'Not from me'}];
var theme = 'DEFAULT';
var old_theme = theme;

function ask() {
    switch(theme)
    {
        case 'PS':
            term.write(`\nPS C:\\${state.username}\\${state.hostname}>`);
            break;
        case 'SQL':
            term.write('\n<lable class="prmt1">SQL> </lable>');
            break;
        case 'DELIGHT':
            term.write('\n▲ ~ ');
            break;
        case 'CLASIC':
            term.write(`\n> `);
            break;
        case 'TERMINAL':
            term.write(`\n<lable class="prmt1">${state.username}</lable><lable class="prmt1">@</lable><lable class="prmt1">${state.hostname}</lable><lable class="prmt1">:~$ </lable> `);
            break;
        case 'DEFAULT':
            term.writeln(`\n<lable class="prmt1">┌[</lable><lable class="prmt2">${state.username}</lable><lable class="prmt1">@</lable><lable class="prmt2">${state.hostname}</lable><lable class="prmt1">]</lable>`);
            term.write('<lable class="prmt1">└$ </lable>');
            break;
        case 'UBUNTU':
            term.write(`\n<lable class="prmt1">${state.username}@ubuntu:~</lable><lable class="prmt2">${state.hostname}</lable>$ `)
            break;

    }
    term.resume();
    term.focus();
}

term.on('draw-hack',() => {
    interval_id = setInterval(draw, 50);
});

var about = `<lable class="about">Hi, I’m <b>Gunavarthan</b>, \n\n a software developer passionate about technology, problem-solving, and exploring innovative solutions\n\n And as a PC hardware enthusiast, I stay curious and eager to grow in the tech industry.  
</lable>`;

var edu = `<label class="edu">
  <label class="header1">Master of Science in Software Systems</label><br>
  <label class="header2">Institution :</label> Coimbatore Institute of Technology
  <label class="header2">Duration    :</label> 2023 - 2025
  <label class="header2">CGPA        :</label> 8.35 / 10<br>

  <label class="header1">Higher Secondary Education (HSC)</label><br>
  <label class="header2">Institution :</label> Mahatma Akkamma CBSE ,Madurai
  <label class="header2">Year        :</label> 2023
  <label class="header2">Percentage  :</label> 86%<br>

  <label class="header1">Secondary School Education (SSLC)</label>
  <label class="header2">Institution :</label> Lakshmi School ICSE ,Madurai
  <label class="header2">Year        :</label> 2020
  <label class="header2">Percentage  :</label> 75%
</label>
`;

var social = `<div class="socials">
  <label class="social-header">SOCIALS</label>
  <label><span class="social-label">GitHub    :</span> <a href="https://github.com/Gunavarthan" target="_blank">github.com/Gunavarthan</a></label>
  <label><span class="social-label">LinkedIn  :</span> <a href="https://www.linkedin.com/in/gunavarthan-s-757213282/" target="_blank">linkedin.com/in/yourprofile</a></label>
  <label><span class="social-label">Portfolio :</span> <a href="https://gunavarthan.github.io/Portfolio-Terminal/" target="_blank">terfolio.com</a></label>
</div>
`;

var email = `<a href="https://mail.google.com/mail/?view=cm&fs=1&to=gunavarthan832@gmail.com" target="_blank">
Click here and Contact Me
</a>
`;

var lsttheme = ['SQL','UBUNTU','MATRIX','WHITE','DEFAULT','TERMINAL','CLASIC','PS','hack'];

function handleInput(command) {
    if (theme === 'hack')
    {
        clearInterval(interval_id);
        canvas.style.display = "none";
        setTheme(old_theme);
    }
    var cmd = command.split(' '); 
    if (cmd.length == 1)
    {
        switch (command) {
            case 'hack':
                term.clear();
                canvas.style.display = "block";
                old_theme = theme;
                setTheme(cmd[0]);
                term.emit('draw-hack');
                break
            case 'clear':
                term.clear();
                break;
    
            case 'history':
                let history = term.history; 
                console.log(history);
                if (theme == 'SQL')
                {
                    term.write("\n+-----+----------------+\n")
                    term.write("| SNO |     COMMAND    |\n")
                    term.write("+-----+----------------+\n")
                    for (var a in history)
                    {
                        term.writeln(`|${(parseInt(  a) + 1).toString().toUpperCase().padEnd(5, ' ')}| ${history[a].toString().toUpperCase().padEnd(15, ' ')}|`);
                    } 
                    term.write("+-----+----------------+\n")
                }
                else
                {
                    for (var a in history)
                    {
                        term.writeln(`${(parseInt(  a) + 1).toString().padEnd(3, ' ')}: ${history[a]}`);
                    }
                }
                
                term.writeln('')
                break;
    
            case 'welcome':
                term.clear();
                welcome();
                break;
    
            case 'help':
                if (theme == 'SQL')
                {
                    term.write("\n+------------------+-------------------------------+\n")
                    term.write("|     COMMANDS     |           DESCRIPTION         |\n")
                    term.write("+------------------+-------------------------------+\n")
                    for (var a in commands)
                    {
                        term.writeln(`|  <lable class='command'>${commands[a].c.toUpperCase().padEnd(15,' ')} </lable>|<lable class="discription"> ${commands[a].d.toUpperCase().padEnd(30,' ')}</lable>|`);
                    }
                    term.write("+------------------+-------------------------------+\n")
                    term.writeln(`${commands.length } rows affected; \n`)    
                }
                else
                {   
                    for (var a in commands)
                    {
                        term.writeln(`<lable class='command'>${commands[a].c.padEnd(15,' ')} </lable><lable class="discription">- ${commands[a].d}</lable>`);
                    }
                    term.writeln('')
                }
                break;
            
            case 'whoami':
                term.writeln(`<i>${state.username}</i>`);
                break;
            
            case 'about':
                term.writeln(about);
                break;

            case 'education':
                term.writeln(edu);
                break;

            case 'socials':
                term.writeln(social);
                break;

            case 'email':
                term.writeln(email);
                break;
            
            case 'theme':
                term.writeln('To change the theme use:\n\n\t<b>set theme &lt;theme name&gt;</b>\n\nList all themes: \n\n\t<b>lst themes</b>');
                break;
            
            default:
                let commandList = commands.map(cmd => cmd.c);
                if (commandList.includes(command)) {
                    term.writeln(`Command '${command}' is not fully implemented yet`);
                } else {
                    term.writeln(`<lable class='illegalcommand' >Illegal Command : '${command}'</lable>\n to list all commands type <lable class="help">help</lable>`);
                }
                break;
        }
        
    }
    else if(cmd.length >= 2)
    {
        switch (cmd[0]) { 
            case 'lst':
                if (cmd[1] == 'themes' || 'theme')
                {
                    term.writeln    ('theme names :'); 
                    for (var a in lsttheme)
                    {
                        if(a != lsttheme.length -1)
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
                    setTheme(cmd[2].toUpperCase());
                }
                break;
            
            case 'echo':
                let match = command.match(/'([^']*)'/);
                if (match) {
                    term.writeln(match[1]);
                } else {
                    match = command.match(/"([^']*)"/);
                    if(match) {
                        term.writeln(match[1]);
                    }
                    else{
                        term.writeln('Usage: echo \'TEXT HERE\'');
                    }
                }
                break;
                
            
            default:
                let commandList = commands.map(cmd => cmd.c);
                if (commandList.includes(command)) {
                    term.writeln(`Command '${command}' is not fully implemented yet`);
                } else {
                    term.writeln(`<lable class='illegalcommand' >Illegal Command : '${command}'</lable>\n to list all commands type <lable class="help">help</lable>`);
                }
                break;
        }
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
<i>For list of available Commads type</i> <b class="help">'help'</b>
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
<i >For list of available Commads type</i> <b class="help">'help'</b>
---
        `
    };

    if (isSmallViewport())
    {
        message = String.raw`  
                                               
._____                         _   _           
|   __|_ _ ___ ___ _ _ ___ ___| |_| |_ ___ ___ 
|  |  | | |   | .'| | | .'|  _|  _|   | .'|   |
|_____|___|_|_|__,|\_/|__,|_| |_| |_|_|__,|_|_|
                                               
Welcome to my Terminal Portfolio => Terfolip  <3
---
<i>For list of available Commads type</i> <b class="help">'help'</b>
---

`
    } 
    if (isExtraSmallViewport())
    {
        message = String.raw`
.__                              
/__   __  _     _  ___|_|_  _ __ 
\_||_|| |(_|\_/(_| |  |_| |(_|| |

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


// matrix canvas element

const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const binary = "01";
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);

const drops = new Array(columns).fill(1);

function draw()
{
    console.log("HELLO")
    // BG on opacity 
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00"; 
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
        {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

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


