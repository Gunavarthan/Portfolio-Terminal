const term = new XTerminal()
term.mount('#app');
var interval_id

var Figlet = "JS\\figlet.js".Figlet;
var puts = "sys".puts;

///////////////
// Variables //
///////////////

const state ={ username: 'visitor',hostname:'web' };
const commands = [
    {c:'about',d:'About Gunavarthan'},
    {c:'education',d:'Education Qualification'},
    {c:'projects',d:'Projects Worked on'},                          // Command List
    {c:'open',d:'more on each project'},
    {c:'welcome',d:'Hero Section'},
    {c:'history',d:'List all exicuted Commands'},
    {c:'help',d:'Display all commands'},
    {c:'hack',d:'Just a Screen Saver'},
    {c:'whoami',d:'Current user'},
    // {c:'cowsay',d:'speak with a cow'},
    {c:'catsay',d:'why just cow'},
    {c:'theme',d:'Change theme'},
    {c:'clear',d:'Clear Screen'},
    {c:'echo',d:'Print a String in termnial'},
    {c:'typo',d:'caligraphy'},
    {c:'socials',d:'Chech out me here'},
    {c:'email',d:'Contact me'}
];
var theme = 'DEFAULT';
var old_theme = theme;                                              // YO Its my portrait
var portrait = `                                                                            
                    ::+xXX$$$$XXx+::              
                ;x$$$$$$$$$$$$$$$$$$$$x.          
             ;X$$$$$$$$$$$$$$$$$$$$$$$X:          
         .X$$$$$$$$$$$$$$$$$$$$$$$$$$$;           
         :$$$$$X++xX$$$$$$$$$$$$$$$$+             
         .X$$$$+        ...... .xx:.              
         :X$$$$x                :                                        
         X$$$$x;                :.                
         $$$$;         .      . :;                
         x$$$;      :::::.    :;xx.               
         ;X;+:.   .:  :X:.: .;:::+:.              
         +..:.     .     :. .;  .+;.              
         +.   ;:    .....  ::;..:+:               
          :;;:+X:      ;xXXXXX;  ;;               
             :X$$X;  +x.  ::;:.+;;:               
              :X$$$$$X     ::  :X;                
                :+X$$$$X++X$$XX$;                 
                   .;x$$$$$$$$X:                  
                         ::::.                               
`;

var about = `<div class="about">
  <label>
    Hi, I'm <b>Gunavarthan</b>.<br><br>

    I'm a Computer Science undergraduate and software developer passionate about solving complex problems across all levels of technology. From building 3D AI simulations in Unity to crafting assembly-level pixel art editors, I thrive on tackling challenges that span from low-level programming to full-stack web applications.<br>

    My experience includes machine learning implementations, systems programming, and modern web development — always driven by curiosity and a love for innovative solutions. As a PC hardware enthusiast, I bring both software expertise and deep hardware understanding to every project.<br>

    I'm eager to apply my technical skills and problem-solving mindset in professional environments where I can continue growing and contributing to meaningful technology solutions.
  </label>
</div>`;


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

var projectsList = [
    {
      name: "PiEngine (Java Game Engine)",
      detail: `<div id=${1} class="proj"><div class="title"> <label class="help"> 1 :</label> PiEngine (Java Game Engine)</div>
      <div class="disc">
      PiEngine is a simple and flexible 2D game engine made with Java. It uses OpenGL for graphics and has an easy-to-use editor. You can create and edit games in real-time, save and load game scenes, and manage game objects easily.
      </div></div><br>`
    },
    {
      name: "Pixel Art Editor (Assembly 8086)",
      detail: `<div id=${2} class="proj"><div class="title"> <label class="help"> 2 :</label> Pixel Art Editor (Assembly 8086)</div>
      <div class="disc">
      This pixel art editor is made with Assembly language. It allows drawing using the mouse with a basic color palette (Red, Green, Blue, White, Yellow). It shows how to create graphics and interact with hardware at a low level.
      </div></div><br>`
    },
    {
      name: "AI-Racing-Sim (AI Racing Game)",
      detail: `<div id=${3} class="proj"><div class="title"> <label class="help"> 3 :</label> AI-Racing-Sim (AI Racing Game)</div>
      <div class="disc">
      I-Racing-Sim is a racing game built with Python and Pygame. It has AI-controlled cars that learn and race on random tracks. You can watch the AI improve and compete in real-time.
      </div></div>`
    },
    {
      name: "Tic Tac Toe Game",
      detail: `<div id=${4} class="proj"><div class="title"> <label class="help"> 4 :</label> Tic Tac Toe Game</div>
      <div class="disc">
      A web-based Tic Tac Toe game with options to play locally, against the computer, or online with friends. It manages game sessions and ensures smooth multiplayer play.
      </div></div>`
    },
    {
      name: "Railway Platform Ticket Booking System",
      detail: `<div id=${5} class="proj"><div class="title"> <label class="help"> 5 :</label>  Railway Platform Ticket Booking System</div>
      <div class="disc">
      A web app for booking railway tickets and managing platforms. Users can search trains, book tickets with ID verification, and make payments. Admins can manage bookings and view statistics.
      </div></div>`
    },
    {
      name: "Tip",
      detail: `<div id=${6} class="proj"><div class="disc"> <label class="help"> Tip :</label> Type 'open &lt;project Number&gt;' to see full details.</div></div>`
    }
]; 

var CanAsk = true;

var project_detail = [
    {
      name: "Project: PiEngine (Java Game Engine)",
      details: `
        <label class="ProjectDetailed">
          <label class="title">Project: PiEngine (Java Game Engine)</label>
  
          <label class="subtitle">Description:</label>
          <pre class="disc">PiEngine is a simple and flexible 2D game engine made with Java. It uses OpenGL for graphics and \nincludes a real-time editor for scene and object manipulation.</pre>
          <label class="subtitle">Technologies Used:</label>
          <pre class="disc">
  - Java
  - OpenGL (LWJGL)
          </pre>
          <label class="subtitle">Features:</label>
          <pre class="disc">  - Real-time game editing
  - Scene saving/loading
  - Object transformation and management
  - Lightweight and modular design
          </pre>
  
          <label class="subtitle">GitHub:</label>
          <a class="demo-link" href="https://github.com/ItsTanPI/Pi-Engine" target="_blank">get to know more</a>
        </label>
      `,
      media: [
        { type: "image", src: "Assets/images/pi-engine/img-1.png" },
        { type: "image", src: "Assets/images/pi-engine/img-2.png" }
      ]
    },
    {
      name: "Project: Pixel Art Editor (Assembly 8086)",
      details: `
        <label class="ProjectDetailed">
          <label class="title">Project: Pixel Art Editor (Assembly 8086)</label>
  
          <label class="subtitle">Description:</label>
          <pre class="disc">A simple pixel art editor built using Assembly language. Allows pixel drawing via mouse \nwith a limited color palette and demonstrates low-level graphics programming.</pre>
          <label class="subtitle">Technologies Used:</label>
          <pre class="disc">  - Assembly 8086
  - BIOS interrupts for mouse and video
          </pre>
          <label class="subtitle">Features:</label>
          <pre class="disc">  - Mouse-based drawing
  - Color palette (Red, Green, Blue, White, Yellow)
  - Custom resolution
  - Graphics mode switching
          </pre>
          <label class="subtitle">Demo:</label>
          <a class="demo-link" href="https://gunavarthan.github.io/Pixel-canvas-ASM/" target="_blank">Draw here</a>
        </label>
      `,
      media: [
        { type: "image", src: "Assets/images/pixel-edit/img-1.png" },
        { type: "image", src: "Assets/images/pixel-edit/img-2.png" }
      ]
    },
    {
      name: "Project: AI-Racing-Sim (AI Racing Game)",
      details: `
        <label class="ProjectDetailed">
          <label class="title">Project: AI-Racing-Sim (AI Racing Game)</label>
  
          <label class="subtitle">Description:</label>
          <pre class="disc">AI-Racing-Sim is a Python-based car racing simulation where AI agents learn to\n navigate random tracks using reinforcement learning.</pre>
          <label class="subtitle">Technologies Used:</label>
          <pre class="disc">  - Python
  - Pygame
  - OpenAI Gymnasium
  - PPO (Proximal Policy Optimization)
          </pre>
          <label class="subtitle">Features:</label>
          <pre class="disc">  - Random track generation
  - AI training and live racing
  - Visual game simulation
  - Replay and analytics support
          </pre>
  
          <label class="subtitle">GitHub:</label>
          <a class="demo-link" href="https://github.com/ItsTanPI/AI-Racing-Sim" target="_blank">AI powered Car Sim</a>
        </label>
      `,
      media: [
        { type: "video", src: "Assets/images/Ai-RacingSIm/vid-1.mp4" },
        { type: "image", src: "Assets/images/Ai-RacingSIm/img-1.png" }
      ]
    },
    {
      name: "Project: Tic Tac Toe Game",
      details: `
        <label class="ProjectDetailed">
          <label class="title">Project: Tic Tac Toe Game</label>
  
          <label class="subtitle">Description:</label>
          <pre class="disc">A web-based Tic Tac Toe game that supports multiple gameplay modes:
  - Single Player (vs Computer)
  - Local Co-op (2 Players)
  - Online Multiplayer Mode with real-time play
          </pre>
          <label class="subtitle">Technologies Used:</label>
          <pre class="disc">  - HTML5, CSS3, JavaScript (Frontend)
  - PHP, AJAX, MySQL (Backend)
          </pre>
          <label class="subtitle">Features:</label>
          <pre class="disc">  - Online matchmaking with session management
  - Auto-expiry of game sessions after 10 minutes
  - Responsive UI for desktop and mobile
  - Winner announcement and game reset
  - Simple and clean UI with animations
          </pre>
          <label class="subtitle">Demo:</label>
          <a class="demo-link" href="https://gunavarthan.github.io/TicTacToe/HTML/MainMenue.html" target="_blank">Play Game Now !!</a>
        </label>
      `,
      media: [
        { type: "video", src: "Assets/images/TicTacToe/vid-1.mp4" }
      ]
    },
    {
      name: "Project: Railway Platform Ticket Booking System",
      details: `
        <label class="ProjectDetailed">
          <label class="title">Project: Railway Platform Ticket Booking System</label>
  
          <label class="subtitle">Description:</label>
          <pre class="disc">A web-based platform ticket booking system with user and admin modes. Includes real-time ticket validation,\n admin dashboard, and payment simulation.</pre>
          <label class="subtitle">Technologies Used:</label>
          <pre class="disc">  - HTML5, CSS3, JavaScript
  - PHP, MySQL, AJAX
  - QRCode, Chart.js
          </pre>
          <label class="subtitle">Features:</label>
          <pre class="disc">  - PNR-based ticket search and validation
  - Aadhar number verification
  - QR code generation for tickets
  - Admin statistics dashboard
  - Responsive and secure UI
          </pre>
          <label class="subtitle">GitHub:</label>
          <a class="demo-link" href="https://github.com/Gunavarthan/Railway-Platform-Ticket-Booking-System" target="_blank">Railway platform ticket booking system </a>
        </label>
      `
    }
];
    
var social = `<div class="socials">
  <label class="social-header">SOCIALS</label>
  <label><span class="social-label">GitHub    :</span> <a href="https://github.com/Gunavarthan" target="_blank">github.com/Gunavarthan</a></label>
  <label><span class="social-label">LinkedIn  :</span> <a href="https://www.linkedin.com/in/gunavarthan-s-757213282/" target="_blank">linkedin.com/in/yourprofile</a></label>
  <label><span class="social-label">Portfolio :</span> <a href="https://gunavarthan.github.io/Portfolio-Terminal/" target="_blank">terfolio.com</a></label>
</div>
`;

var email = `<a href="https://mail.google.com/mail/?view=cm&fs=1&to=gunavarthan832@gmail.com" target="_blank">
gunavarthan832
</a>
`;

var lsttheme = [
    'SQL',
    'UBUNTU',
    'MATRIX',
    'WHITE',
    'DEFAULT',
    'TERMINAL',
    'CLASSIC',
    'PS',
    'hack'
];

///////////////
// functions //
///////////////

function isExtraSmallViewport() 
{
    return window.innerWidth < 576;
}

function isSmallViewport() 
{
    return window.innerWidth >= 576 && window.innerWidth < 920;
}

function isMediumViewport() 
{
    return window.innerWidth >= 920 && window.innerWidth < 1500;
}

function isLargeViewport() 
{
    return window.innerWidth >= 1500;
}

// prompt desider function //
function ask() 
{
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

// Main Input hadler 
async function handleInput(command) {
    command = command.replace(/\s+$/, "");
    if (theme === 'hack')
    {
        clearInterval(interval_id);
        canvas.style.display = "none";
        setTheme(old_theme);
        const toggleBtn = document.getElementById('toggleBtn');
        if (toggleBtn) toggleBtn.style.display = 'block';
    
        const hackBackBtn = document.getElementById('hack-back');
        if (hackBackBtn) hackBackBtn.style.display = 'none';
    }

    var cmd = command.split(' '); 
    
    if (cmd.length == 1)
    {
        //just number to open projects
        // if(cmd in String(1,2,3,4,5))
        // {
        //     op
        // }
        switch (command) 
        {
            case 'hack':
                term.clear();
                canvas.style.display = "block";
                old_theme = theme;
                setTheme(cmd[0]);
                term.emit('draw-hack');
                const toggleBtn = document.getElementById('toggleBtn');
                if (toggleBtn) toggleBtn.style.display = 'none';
                toggleBtn.click();
                const hackBackBtn = document.getElementById('hack-back');
                if (hackBackBtn) hackBackBtn.style.display = 'block';
                break

            case 'clear':
                term.clear();
                break;
            
            case 'typo':
                term.writeln('Usage: typo \'TEXT HERE\'');    
                break;

            case 'catsay':
                term.writeln('Usage: catsay \'TEXT HERE\'');
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
                }else
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
                ListProject();
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
                }else
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
                CanAsk = false;
                Download("Eduational-details");
                await sleep(3000)
                CanAsk = true;
                term.writeln(edu);
                break;

            case 'socials':
                term.writeln(social);
                break;

            case 'echo':
                term.writeln('Usage: echo \'TEXT HERE\'');
                break;

            case 'email':
                term.writeln(email);
                break;
            
            case 'theme':
                term.writeln('To change the theme use:\n\n\t<b>set theme &lt;theme name&gt;</b>\n\n');
                term.writeln    ('theme names :'); 
                    for (var a in lsttheme)
                    {
                        if(a != lsttheme.length -1)
                        term.write(`${lsttheme[a]}\t`);
                    }
                term.write("\n");
                break;
            
            default:
                let commandList = commands.map(cmd => cmd.c);
                if (commandList.includes(command)) 
                {
                    term.writeln(`Command '${command}' is not fully implemented yet`);
                } else 
                {
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
                } else
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
                if (match) 
                {
                    term.writeln(match[1]);
                } else
                {
                    match = command.match(/"([^']*)"/);
                    if(match)
                    {
                        term.writeln(match[1]);
                    }else
                    {
                        term.writeln('Usage: echo \'TEXT HERE\'');
                    }
                }
                break;
            
            case 'typo':
                (async () => {
                    let tmatch = command.match(/'([^']*)'/);
                    if (tmatch) 
                    {
                        console.log('must be 1st');
                        let text = tmatch[1];
                        if(isLargeViewport())
                        {
                            await Figlet.write(text, "3-d",term);
                        }else
                        {
                            if(isMediumViewport())
                            {
                                await Figlet.write(text, "rounded",term);
                            }else
                            {
                                if(isSmallViewport())
                                {
                                    await Figlet.write(text, "chunky",term);
                                }else
                                {
                                    if(isExtraSmallViewport)
                                    {
                                        await Figlet.write(text, "thin",term);
                                    };
                                }
                            }
                        }
                        ask();
                        console.log('must be before called me!!');
                    }else{
                        tmatch = command.match(/"([^']*)"/);
                        if (tmatch)
                        {
                            console.log('must be 1st');
                            let text = tmatch[1];
                            if(isLargeViewport())
                            {
                                await Figlet.write(text, "3-d",term);
                            }else
                            {
                                if(isMediumViewport())
                                {
                                    await Figlet.write(text, "rounded",term);
                                }else
                                {
                                    if(isSmallViewport())
                                    {
                                        await Figlet.write(text, "chunky",term);
                                    }else
                                    {
                                        if(isExtraSmallViewport)
                                        {
                                            await Figlet.write(text, "thin",term);
                                        };
                                    }
                                }
                            }
                            // term.write(prompt);
                            ask();
                            console.log('must be before called me!!');
                        }
                        else{
                            term.writeln('Usage: typo \'TEXT HERE\'');
                        }
                    }
                })();
                break;

            case 'catsay':
                let catmatch = command.match(/'([^']*)'/);
                if (catmatch) 
                {
                    catsay(catmatch[1]);
                } else
                {
                    catmatch = command.match(/"([^']*)"/);
                    if(catmatch)
                    {
                        catsay(catmatch[1]);
                    }else
                    {
                        term.writeln('Usage: catsay \'TEXT HERE\'');
                    }
                }
                break;

            case 'open':
                let ProjectNumber = command.match(/\b\d+\b/g);
                if(ProjectNumber)
                {
                    OpenProject(ProjectNumber-1);
                }else 
                {
                    term.write(`<lable class="help">\t\tEnter the Appropriate Project Number!!\n\n</lable>`)
                }
                break;
            
            default:
                let commandList = commands.map(cmd => cmd.c);
                if (commandList.includes(command)) 
                {
                    term.writeln(`Command '${command}' is not fully implemented yet`);
                } else
                {
                    term.writeln(`<lable class='illegalcommand' >Illegal Command : '${command}'</lable>\n to list all commands type <lable class="help">help</lable>`);
                }
                break;
        }
    }
    scrollTerminalToBottom();
    if(CanAsk)
    {
        ask();
    }
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

Welcome to my terminal portfolio. To learn more about me, type <b class="help">'about'</b>.
---
<i>For a list of available commands, type</i> <b class="help">'help'</b>
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
                                                
Welcome to my terminal portfolio. To learn more about me, type <b class="help">'about'</b>.
---
<i>For a list of available commands, type</i> <b class="help">'help'</b>
---
<br><br>        `
    };

    if (isSmallViewport())
    {
        message = String.raw` 
                                               
._____                         _   _           
|   __|_ _ ___ ___ _ _ ___ ___| |_| |_ ___ ___ 
|  |  | | |   | .'| | | .'|  _|  _|   | .'|   |
|_____|___|_|_|__,|\_/|__,|_| |_| |_|_|__,|_|_|
                                               
Welcome to my terminal portfolio. To learn more about me, type <b class="help">'about'</b>.
---
<i>For a list of available commands, type</i> <b class="help">'help'</b>
---

`
    } 
    if (isExtraSmallViewport())
    {
        message = String.raw`<pre>

┏┓                     
┃┓┓┏┏┓┏┓┓┏┏┓┏┓╋┣┓┏┓┏┓
┗┛┗┻┛┗┗┻┗┛┗┻┛ ┗┛┗┗┻┛┗    
</pre>
Welcome to my terminal portfolio. To learn more about me, type <b class="help">'about'</b>.
---
<i>For a list of available commands, type</i> <b class="help">'help'</b>
---

`
    }
    term.write(`<lable class='portrait'>${portrait}</lable>`);
    term.write(`<lable class='hero'>${message}</lable>`);
    
    if(true)
    {
        
    }
    
}

function setTheme(newTheme) 
{
    if (!lsttheme.includes(newTheme))
    {
        term.writeln    ('theme names :'); 
        for (var a in lsttheme)
        {
            if(a != lsttheme.length -1)
            term.write(`${lsttheme[a]}\t`);
        }
        return;
    }

    theme = newTheme;
    document.body.classList.remove(...lsttheme.map(t => `theme-${t.toLowerCase()}`));
    document.body.classList.add(`theme-${newTheme.toLowerCase()}`);
}

function Download(name)
{  
    console.log(name);
    var speed = getRandomFloat(1,5).toFixed(2);
    var loadbar =`
    <div class="line">Downloading <span class="filename">${name}</span> (${speed} MB)</div>
    <div class="progress-container"><div class="progress-bar"></div></div><div class="stats"><span class="green">${speed}/${speed} MB</span><span class="red">${(speed-getRandomFloat(0,speed)).toFixed(2)}MB/s</span><span class="dim">eta</span></div>`;
    term.write(loadbar);
    scrollTerminalToBottom();
    setTimeout(() => {
        term.clearLast();
    }, 2000);
}

function getRandomFloat(min, max) 
{
    return Math.random() * (max - min) + min;
}

function initiateHelpTab() 
{
    const helptab = `
        <div class="terminal-panel" id="terminalPanel"></div>
        <button class="toggle-btn" id="toggleBtn">Collapse</button>
        <button class="back-btn" id="hack-back">Back</button>
    `;

    
    const wrapper = document.createElement('div');
    wrapper.innerHTML = helptab;

    const terminalPanel = wrapper.children[0];
    if(isSmallViewport() || isExtraSmallViewport())
    terminalPanel.classList.add('collapsed');   
    const toggleBtn = wrapper.children[1];
    const hackBackBtn = wrapper.children[2];

    document.body.appendChild(terminalPanel);
    document.body.appendChild(toggleBtn);
    document.body.appendChild(hackBackBtn)

    // Render all commands with spacing and click
    commands.forEach(cmd => {
        const commandDiv = document.createElement('div');
        commandDiv.className = 'command';
        commandDiv.style.padding = '6px 0'; // uniform vertical spacing

        const cmdName = document.createElement('span');
        cmdName.style.fontWeight = 'bold';
        cmdName.textContent = `> ${cmd.c}`;

        const cmdDesc = document.createElement('span');
        cmdDesc.style.marginLeft = '12px';
        cmdDesc.style.color = '#888';
        cmdDesc.textContent = cmd.d;

        commandDiv.appendChild(cmdName);
        commandDiv.appendChild(cmdDesc);

        commandDiv.addEventListener('click', () => {
            handleCommand(cmd.c);
        });

        terminalPanel.appendChild(commandDiv);
    });

    // Toggle functionality
    const updateToggleLabel = () => {
        const isMobile = window.innerWidth <= 480;
        toggleBtn.textContent = terminalPanel.classList.contains('collapsed')
            ? (isMobile ? '▲' : 'Help')
            : (isMobile ? '▼' : 'X');
    };

    toggleBtn.addEventListener('click', () => {
        terminalPanel.classList.toggle('collapsed');
        updateToggleLabel();
    });

    hackBackBtn.addEventListener ('click',()=>{
        handleInput("welcome");
    })

    window.addEventListener('resize', updateToggleLabel);
    updateToggleLabel();

    // Handle each command
    function handleCommand(command) 
    {
        switch (command) 
        {
            case 'about':
                term.write("about\n");
                handleInput('about');
                break;
        
            case 'education':
                term.write("education\n");
                handleInput('education');
                break;
        
            case 'projects':
                term.write("projects\n");
                handleInput('projects');
                break;
        
            case 'open':
                term.write("open\n");
                handleInput('open');
                break;
        
            case 'welcome':
                term.write("welcome\n");
                handleInput('welcome');
                break;
        
            case 'history':
                term.write("history\n");
                handleInput('history');
                break;
        
            case 'help':
                term.write("help\n");
                handleInput('help');
                break;
        
            case 'hack':
                term.write("hack\n");
                handleInput('hack');
                break;
        
            case 'whoami':
                term.write("whoami\n");
                handleInput('whoami');
                break;
        
            case 'catsay':
                term.write("catsay\n");
                handleInput('catsay');
                break;
        
            case 'theme':
                term.write("theme\n");
                handleInput('theme');
                break;
        
            case 'clear':
                term.clear();
                break;
        
            case 'echo':
                term.write("echo\n");
                handleInput('echo');
                break;
        
            case 'typo':
                term.write("typo\n");
                handleInput('typo');
                break;
        
            case 'socials':
                term.write("socials\n");
                handleInput('socials');
                break;
        
            case 'email':
                term.write("email\n");
                handleInput('email');
                break;
        
            default:
                term.write(`${command}\n`);
                handleInput(command);
                break;
        }            
    }
}


function catsay(message) 
{
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

let scrollTimeout;
function scrollTerminalToBottom() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const terminalEl = document.querySelector('.xterm');
        if(isExtraSmallViewport()|| isSmallViewport())
        {
            terminalPanel.classList.add('collapsed');   
        }
        if (terminalEl) {
            terminalEl.scrollTo({
                top: terminalEl.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, 1000); // slight delay ensures content is rendered
}


async function ListProject() 
{
    term.pause();
    CanAsk = false;
    Download("projects-List");
    await sleep(3000)
    CanAsk = true;
    term.write("\n\n");
    for (let i in projectsList) 
    {
        term.write(projectsList[i].detail);
      
        // Attach click listener to open popup
        // document.getElementById(i+1).addEventListener('click', () => {
        //     console.log(projectsList[i].name);
            // document.getElementById('pop-up-title').innerHTML = project_detail[i].name;
            // document.getElementById('pop-up-disc').innerHTML = project_detail[i].details;
            // document.getElementById("popup").style.display = "block";
        // });
    }
    ask();
    term.resume();
}  
  
function closePopup() 
{
    const popup = document.getElementById('popup');
    popup.classList.add('closing');
    setTimeout(() => {
      popup.style.display = 'none';
      popup.classList.remove('closing');
      document.getElementById("app").classList.remove('no-scroll');
    }, 300);
}

async function OpenProject(ProjectNumber) {
    const project = project_detail[ProjectNumber];
    const content = document.getElementById("pop-up-disc");
  
    // Clear content and add description
    content.innerHTML = `<p>${project.details}</p>`;
  
    if (project.media && project.media.length > 0) {
      // Create horizontal scroll container
      const mediaContainer = document.createElement("div");
      mediaContainer.classList.add("popup-media-scroll");
  
      project.media.forEach(item => {
        let mediaEl;
        if (item.type === "image") {
          mediaEl = document.createElement("img");
          mediaEl.src = item.src;
          mediaEl.alt = "Project Image";
        } else if (item.type === "video") {
          mediaEl = document.createElement("video");
            mediaEl.controls = false;
            mediaEl.autoplay = true;
            mediaEl.muted = true;           
            mediaEl.playsInline = true;     
            mediaEl.loop = true;
          const source = document.createElement("source");
          source.src = item.src;
          source.type = "video/mp4";
          mediaEl.appendChild(source);
        }
        mediaEl.classList.add("popup-media-item");
        mediaContainer.appendChild(mediaEl);
      });
  
      content.appendChild(mediaContainer);
    }
  
    document.getElementById("pop-up-title").innerHTML = project.name;
    document.getElementById("popup").style.display = "block";
    document.getElementById("app").classList.add("no-scroll");
}
     
  
  

////////////////////////
// where it all starts//
////////////////////////

welcome();
window.addEventListener('DOMContentLoaded', initiateHelpTab);
ask();

term.on('data', handleInput);






///////////////////////////
// matrix canvas element //
///////////////////////////

const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const charlst = "░▒▓█▄▀▌▐■□▲▼◀▶◉◎◆◇¤☯☢☣☠✠✶✳✪✹✺✦✧ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890அஆஇஈஉஊஎஏஐஒஓஔகஙசஜஞடணதநனபமயரலவழளறனஷஸஹアァイィウエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲン";
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
        const text = charlst[Math.floor(Math.random() * charlst.length)];
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

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}


