import BST from "../assets/images/BST.png"
import eCommerce from "../assets/images/eCommerce.png"
import WordleClone from "../assets/images/WordleClone.png"
import ATM_Console from "../assets/images/ATM_Console.png"
import Achiveo from "../assets/images/Achiveo.png"
import KanbanBoard from "../assets/images/KanbanBoard.png"
import SelfDrivingCar from "../assets/images/Self-driving-car.png"
import ReactHookComparision from "../assets/images/ReactHooksComparision.png"


export const projectsH1 = "Projects"
export const projectsP1 = "Here, you'll find a collection of my recent projects, each showcasing my dedication and creativity. Take your time to explore the work I've put my heart into. Enjoy!"

export const projects = [
    {
        title: 'Achiveo',
        seconadryText: 'Advanced fullstack application for managing task states. Supports multi-team work.',
        image: Achiveo,
        functionality: [
            'Auth',
            'Organizations / Workspaces',
            'Board creation',
            'Responsive',
            'Error handling',
            'Unsplash API for random cover images',
            'Activity log for entire organization',
            'Board rename and delete',
            'List creation / delete / rename / duplicate',
            'List and card Drag & drop reorder',
            'Card creation / delete / rename / duplicate',
            'Card activity log',
            'Board limit for every organization',
            'Stripe subscription for each organization to unlock unlimited boards',
            'Landing page',
            'PosgreSQL DB',
            'Prisma ORM',
            'shadcnUI & TailwindCSS',
        ],
        techStack: [
            { technology: 'Next.js', color: 'white', icon: '' },
            { technology: 'TypeScript', color: '#007acc', icon: '' },
            { technology: 'Prisma', color: '#1b9583', icon: '' },
            { technology: 'Clerk', color: 'white', icon: '' },
            { technology: 'PosgreSQL', color: '#008bb9', icon: '' },
            { technology: 'Zustand', color: 'white', icon: '' },
            { technology: 'Zod', color: 'white', icon: '' },
        ],
        gitHub:'https://github.com/waleery/trello-clone',
        liveDemo:'https://achiveo.vercel.app/',

    },
    {
        title: 'Self driving car',
        seconadryText: 'A car game in which AI can control the car. Visualizes the workings of a neural network.',
        image: SelfDrivingCar,
        functionality: [
            'Neural network visualisation',
            'Stering car by arrows',
            'Automatic control of the car due to AI',
            'Save best brain to local storage',
            'Change muation value',

        ],
        techStack: [
            { technology: 'Java Script', color: '#F0DB4F', icon: '' },

        ],
        gitHub:'https://github.com/waleery/self-driving-car',
        liveDemo:'https://waleery.github.io/self-driving-car/',

    },
    {
        title: 'Binary Search Tree',
        seconadryText: 'An application that visualizes a binary tree. Allows you to perform various operations on the tree.',
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
            { technology: 'React D3 Tree', color: 'white', icon: '' },
        ],
        gitHub:'https://github.com/waleery/BinarySearchTreeReact',
        liveDemo:'https://waleery.github.io/BinarySearchTreeReact/',
    },
    {
        title: 'ATM Console Simulator',
        seconadryText: 'An application that simulates the operation of an ATM. Supports multiple customers and transfers between accounts.',
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
    {
        title: 'Kanban board',
        seconadryText: 'An application for managing tasks using the Kanban method. Drag and drop implemented without using additional libraries',
        image: KanbanBoard,
        functionality: [
            'Drag and drop tasks',
            'Adding tasks',
            'Deleting tasks',
            'Custom middleware',
            'Store subscription with selector', 
            'Persisting state in local storage',
        ],
        techStack: [
            { technology: 'React', color: '#61DBFB', icon: '' },
            { technology: 'Zustand', color: 'white', icon: '' },
            { technology: 'Lodash', color: 'white', icon: '' },

        ],
        gitHub:'https://github.com/waleery/KanbanBoard-zustand',
        liveDemo:'https://waleery.github.io/KanbanBoard-zustand/'
    },
    {
        title: 'React Hooks',
        seconadryText: 'An app showing React hooks with practical examples. Ideal for learning hook-based state management and side effects in React.',
        image: ReactHookComparision,
        functionality: [
            'Responsive interface',
            'useState',
            'useEffect',
            'useCallback',
            'useRef', 
            'useContext',
            'useTransition',
            'useDefferedvalue',
            'useReducer',
            'useLayoutEffect',
            'useImperativeHandle',
        ],
        techStack: [
            { technology: 'React', color: '#61DBFB', icon: '' },
        ],
        gitHub:'https://github.com/waleery/React-Hooks-Comparison',
        liveDemo:'https://waleery.github.io/React-Hooks-Comparison/'
    },
    {
        title: 'Wordle Clone',
        seconadryText: 'Five-letter word guessing game with hints on letter positions.',
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
        title: 'E-commerce store',
        seconadryText: 'Shop with electronics. Supports stripe payments and easy management of store items.',
        image: eCommerce,
        functionality: [
            'Easy product management through Sanity.io',
            'Stripe payments',
            'Resposive desing',

        ],
        techStack: [
            { technology: 'Next.js', color: 'white', icon: '' },
            { technology: 'Sass', color: '#CD6799', icon: '' },
            { technology: 'Stripe', color: 'rgb(98, 91, 249)', icon: '' },
            { technology: 'Sanity.io', color: 'rgb(230, 110, 93)', icon: '' },
        ],
        gitHub:'https://github.com/waleery/eCommerce',
        liveDemo:'https://e-commerce-zeta-sepia.vercel.app/',
    },
    
]

