// import figlet from 'figlet';
const term = new XTerminal()
term.mount('#app');
var interval_id

var Figlet = "JS\\figlet.js".Figlet;

var puts = "sys".puts;
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
const commands = [{c:'about',d:'About Gunavarthan'},{c:'help',d:'Display all commands'},{c:'hack',d:'Just a Screen Saver'},{c:'whoami',d:'Current user'},{c:'education',d:'Education Qualification'},{c:'projects',d:'Projects Worked on'},{c:'open',d:'more on each project'},{c:'welcome',d:'Hero Section'},{c:'history',d:'List all exicuted Commands'},{c:'cowsay',d:'speak with a cow'},{c:'catsay',d:'why just cow'},{c:'theme',d:'Change theme'},{c:'clear',d:'Clear Screen'},{c:'socials',d:'Chech out me here'},{c:'email',d:'Contact me'},{c:'echo',d:'Print a String in termnial'},{c:'typo',d:'try it'}];
var theme = 'DEFAULT';
var old_theme = theme;

function ask() {
    console.log('called me!!')
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
        case 'CLASSIC':
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

var projects = `<label class="proj">
 -> Projects<br>

<label class="title">1 > PiEngine (Java Game Engine)</label>
<label class="disc">
PiEngine is a simple and flexible 2D game engine made with Java. It uses OpenGL for graphics and has an easy-to-use editor. You can create and edit games in real-time, save and load game scenes, and manage game objects easily.
</label><br>

<label class="title">2 >  Pixel Art Editor (Assembly 8086)</label>
<label class="disc">
This pixel art editor is made with Assembly language. It allows drawing using the mouse with a basic color palette (Red, Green, Blue, White, Yellow). It shows how to create graphics and interact with hardware at a low level.
</label><br>

<label class="title">3 >  AI-Racing-Sim (AI Racing Game)</label>
<label class="disc">
I-Racing-Sim is a racing game built with Python and Pygame. It has AI-controlled cars that learn and race on random tracks. You can watch the AI improve and compete in real-time.
</label>

<label class="title">4 >  Tic Tac Toe Game</label>
<label class="disc">
A web-based Tic Tac Toe game with options to play locally, against the computer, or online with friends. It manages game sessions and ensures smooth multiplayer play.
</label>

<label class="title">5 >  Railway Platform Ticket Booking System</label>
<label class="disc">
A web app for booking railway tickets and managing platforms. Users can search trains, book tickets with ID verification, and make payments. Admins can manage bookings and view statistics.
</label>

<label class="disc"> Tip: Type 'open &lt;projectname&gt;' to see full details.</label>
</label>
`;

var project_detail = [`
    <label class="ProjectDetailed">
      <label class="title">Project: PiEngine (Java Game Engine)</label>
    
      <label class="subtitle">Description:</label>
      <label class="disc">PiEngine is a simple and flexible 2D game engine made with Java. It uses OpenGL for graphics and includes a real-time editor for scene and object manipulation.</label>
      <label class="subtitle">Technologies Used:</label>
      <label class="disc">- Java
        - OpenGL (LWJGL)
      </label><label class="subtitle">Features:</label>
      <label class="disc">- Real-time game editing
        - Scene saving/loading
        - Object transformation and management
        - Lightweight and modular design
      </label>
    
      <label class="subtitle">GitHub:</label>
      <a class="demo-link" href="https://github.com/ItsTanPI/Pi-Engine" target="_blank">get to know more</a>
    </label>
    `,
    `
    <label class="ProjectDetailed">
      <label class="title">Project: Pixel Art Editor (Assembly 8086)</label>
    
      <label class="subtitle">Description:</label>
      <label class="disc">A simple pixel art editor built using Assembly language. Allows pixel drawing via mouse with a limited color palette and demonstrates low-level graphics programming.
      </label><label class="subtitle">Technologies Used:</label>
      <label class="disc">- Assembly 8086
        - BIOS interrupts for mouse and video
      </label><label class="subtitle">Features:</label>
      <label class="disc">- Mouse-based drawing
        - Color palette (Red, Green, Blue, White, Yellow)
        - Custom resolution
        - Graphics mode switching
      </label><label class="subtitle">Demo:</label>
      <a class="demo-link" href="https://github.com/Gunavarthan/Pixel-canvas-ASM" target="_blank">Draw here</a>
    </label>
    `,
    `
    <label class="ProjectDetailed">
      <label class="title">Project: AI-Racing-Sim (AI Racing Game)</label>
    
      <label class="subtitle">Description:</label>
      <label class="disc">AI-Racing-Sim is a Python-based car racing simulation where AI agents learn to navigate random tracks using reinforcement learning.
      </label><label class="subtitle">Technologies Used:</label>
      <label class="disc">- Python
        - Pygame
        - OpenAI Gymnasium
        - PPO (Proximal Policy Optimization)
      </label><label class="subtitle">Features:</label>
      <label class="disc">- Random track generation
        - AI training and live racing
        - Visual game simulation
        - Replay and analytics support
      </label>
    
      <label class="subtitle">GitHub:</label>
      <a class="demo-link" href="https://github.com/ItsTanPI/AI-Racing-Sim" target="_blank">AI powered Car Sim</a>
    </label>
    `,
    `
    <label class="ProjectDetailed">
      <label class="title">Project: Tic Tac Toe Game</label>
    
      <label class="subtitle">Description:</label>
      <label class="disc">A web-based Tic Tac Toe game that supports multiple gameplay modes:
        - Single Player (vs Computer)
        - Local Co-op (2 Players)
        - Online Multiplayer Mode with real-time play
      </label><label class="subtitle">Technologies Used:</label>
      <label class="disc">- HTML5, CSS3, JavaScript (Frontend)
        - PHP, AJAX, MySQL (Backend)
      </label><label class="subtitle">Features:</label>
      <label class="disc">- Online matchmaking with session management
        - Auto-expiry of game sessions after 10 minutes
        - Responsive UI for desktop and mobile
        - Winner announcement and game reset
        - Simple and clean UI with animations
      </label><label class="subtitle">Demo:</label>
      <a class="demo-link" href="https://gunavarthan.github.io/TicTacToe/HTML/MainMenue.html" target="_blank">Play Game Now !!</a>
    </label>
    `,
    `
    <label class="ProjectDetailed">
      <label class="title">Project: Railway Platform Ticket Booking System</label>
    
      <label class="subtitle">Description:</label>
      <label class="disc">A web-based platform ticket booking system with user and admin modes. Includes real-time ticket validation, admin dashboard, and payment simulation.
      </label><label class="subtitle">Technologies Used:</label>
      <label class="disc">- HTML5, CSS3, JavaScript
        - PHP, MySQL, AJAX
        - QRCode, Chart.js
      </label><label class="subtitle">Features:</label>
      <label class="disc">- PNR-based ticket search and validation
        - Aadhar number verification
        - QR code generation for tickets
        - Admin statistics dashboard
        - Responsive and secure UI
      </label>
      <label class="subtitle">GitHub:</label>
      <a class="demo-link" href="https://github.com/Gunavarthan/Railway-Platform-Ticket-Booking-System" target="_blank">Railway platform ticket booking system </a>
    </label>
    `
    ];
    


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

var lsttheme = ['SQL','UBUNTU','MATRIX','WHITE','DEFAULT','TERMINAL','CLASSIC','PS','hack'];

function handleInput(command) {
    command = command.replace(/\s+$/, "");
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
            
            case 'cowsay':
                term.writeln('Usage: cowsay \'TEXT HERE\'');
                break;

            case 'typo':
                Figlet.write(command, "3-d", function(str) {
                    term.writeln(str);
                });    
                break;

            case 'catsay':
                term.writeln('Usage: cowsay \'TEXT HERE\'');
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
            
            case 'open':
                term.write(`\t\t<lable class="help">open "&lt;project Number&gt;" to open a project \n\n</lable>`);
                break
                
            case 'projects':
            case'project':
                term.write(projects);  
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
            
            case 'typo':
                (async () => {
                    let tmatch = command.match(/'([^']*)'/);
                    if (tmatch) {
                        console.log('must be 1st');
                        let text = tmatch[1];
                        const output = await Figlet.write(text, "3-d");
                        console.log("must be 2nd - before terminal write");
                        await writeToTerminal(term, output);
                        console.log("must be 3rd - AFTER terminal write");
                    }
                })();
                
                

                // let tmatch = command.match(/'([^']*)'/);
                // if (tmatch) {
                    // console.log(tmatch);
                    // Figlet.write(command, "3-d", function(str) {
                        // console.log("inside");
                        // term.write(str);
                    // });    
                // } else {
                    // tmatch = command.match(/"([^']*)"/);
                    // if(tmatch) {
                        // Figlet.write(commad, "3-d", function(str) {
                            // console.log("inside");
                            // term.write(str);
                        // });
                    // }
                    // else{
                        // term.writeln('Usage: typo \'TEXT HERE\'');
                    // }
                // }
                break;

            case 'cowsay':
                let cowmatch = command.match(/'([^']*)'/);
                if (cowmatch) {
                    cowsay(match[1]);
                } else {
                    cowmatch = command.match(/"([^']*)"/);
                    if(cowmatch) {
                        cowsay(cowmatch[1]);
                    }
                    else{
                        term.writeln('Usage: cowsay \'TEXT HERE\'');
                    }
                }
                break;

                case 'catsay':
                    let catmatch = command.match(/'([^']*)'/);
                    if (catmatch) {
                        catsay(catmatch[1]);
                    } else {
                        catmatch = command.match(/"([^']*)"/);
                        if(catmatch) {
                            catsay(catmatch[1]);
                        }
                        else{
                            term.writeln('Usage: catsay \'TEXT HERE\'');
                        }
                    }
                    break;

            case 'open':
                let ProjectNumber = command.match(/\b\d+\b/g);
                if(ProjectNumber) {
                    OpenProject(ProjectNumber);
                }
                else{
                    term.write(`<lable class="help">\t\tEnter the Appropriate Project Number!!\n\n</lable>`)
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

Welcome to my Terminal Portfolio => Terfolio  <3
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
                                                
Welcome to my Terminal Portfolio => Terfolio  <3
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
                                               
Welcome to my Terminal Portfolio => Terfolio  <3
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

Welcome to my Terminal Portfolio => Terfolio  <3
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


function writeToTerminal(term, text) {
    return new Promise(resolve => {
        term.write(text, resolve);  // resolve called after terminal writes
    });
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

function OpenProject(ProjectNumber) {
    if(ProjectNumber > 0 && ProjectNumber < (project_detail.length+1) )
    {
        term.write(project_detail[ProjectNumber-1]);
    }
    else{
        term.write(`<lable class="help">\t\tEnter the Appropriate Project Number!!\n\n</lable>`)
    }
}


function cowsay(message) {
    const top = " " + "_".repeat(message.length + 2);
    const bottom = " " + "-".repeat(message.length + 2);
    const speech = `\
${top}_
< ${message} >
${bottom}-
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||\n\n`;
    term.write(speech);
}

function catsay(message) {
    const top = " " + "_".repeat(message.length + 2);
    const bottom = " " + "-".repeat(message.length + 2);
    const speech = `\
${top}_
< ${message} >
${bottom}-
        \\     /\\_/\\
         \\   ( o.o )
              > ^ <\n\n`;
    term.write(speech);
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


