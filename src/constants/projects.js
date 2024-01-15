import BST from "../assets/images/BST.png"
import eCommerce from "../assets/images/eCommerce.png"
import WordleClone from "../assets/images/WordleClone.png"
import ATM_Console from "../assets/images/ATM_Console.png"
import Achiveo from "../assets/images/Achiveo.png"

export const projects = [
    {
        title: 'Binary Search Tree',
        seconadryText: 'App to visualise binary tree',
        image: BST,
        functionality: [
            'Adding value',
            'Finding path',
            'Balance tree',
            'Resposive desing',
            'Validation',
            'Dark theme'
        ],
        techStack: [
            { technology: 'React', color: '#61DBFB', icon: '' },
            { technology: 'Sass', color: '#CD6799', icon: '' },
            { technology: 'React D3 Tree', color: 'pink', icon: '' },
        ],
        gitHub:'https://github.com/waleery/BinarySearchTreeReact',
        liveDemo:'https://waleery.github.io/BinarySearchTreeReact/',
    },
    {
        title: 'E-commerce store',
        seconadryText: 'Shop with electronics',
        image: eCommerce,
        functionality: [
            'Easy product management through Sanity.io',
            'Stripe payments',
            'Resposive desing',

        ],
        techStack: [
            { technology: 'Next.js', color: 'black', icon: '' },
            { technology: 'Sass', color: '#CD6799', icon: '' },
            { technology: 'Stripe', color: 'rgb(98, 91, 249)', icon: '' },
            { technology: 'Sanity.io', color: 'rgb(230, 110, 93)', icon: '' },
        ],
        gitHub:'https://github.com/waleery/eCommerce',
        liveDemo:'https://e-commerce-zeta-sepia.vercel.app/',

    },
    {
        title: 'Achiveo',
        seconadryText: 'Advanced fullstack app for managing tasks with a lot of functionalities',
        image: Achiveo,
        functionality: [
            'Authorization',
            'Organizations',
            'Board creation/rename/delete',
        ],
        inProgress: true,
        techStack: [
            { technology: 'Next.js', color: 'black', icon: '' },
            { technology: 'TypeScript', color: '#007acc', icon: '' },
            { technology: 'Prisma', color: '#1b9583', icon: '' },
            { technology: 'MySql', color: '#f29111', icon: '' },
            { technology: 'Clerk', color: '#230068', icon: '' },
            { technology: 'Zustand', color: 'white', icon: '' },
            { technology: 'Zod', color: 'white', icon: '' },
            // { technology: 'Tailwind', color: 'pink', icon: '' },
        ],
        gitHub:'https://github.com/waleery/trello-clone'

    },
    {
        title: 'Wordle Clone',
        seconadryText: 'Wordle is a five-letter word guessing game with hints on letter positions',
        image: WordleClone,
        functionality: [
            'Word validation',
            'Base diferent words to guess',
            'Information about win/lose',
            'Hints in the form of colored letters',
        ],
        techStack: [
            { technology: 'React', color: '#61DBFB', icon: '' },
            { technology: 'JSON Server', color: 'white', icon: '' },
        ],
        gitHub:'https://github.com/waleery/Wordle_Clone_React',
        liveDemo:'https://waleery.github.io/Wordle_Clone_React'
    },
    {
        title: 'ATM Console Simulator',
        seconadryText: 'An application that simulates the operation of an ATM machine',
        image: ATM_Console,
        functionality: [
            'Logging in by card number and PIN',
            'Checking account balance',
            'Deposit of money',
            'Withdrawing money',
            'Validation of withdrawing money',
            'Money transfer',
            'Tansactions history',
        ],
        techStack: [
            { technology: 'C#', color: '#A179DC', icon: '' },
        ],
        gitHub:'https://github.com/waleery/ATM_Console_Simulator'
    },
    
]
