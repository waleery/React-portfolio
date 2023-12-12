import BST from "../assets/images/BST.png"
import eCommerce from "../assets/images/eCommerce.png"
import WordleClone from "../assets/images/WordleClone.png"

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
        title: 'Wordle Clone',
        seconadryText: 'Wordle is a five-letter word guessing game with hints on letter positions.',
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
    // {
    //     title: 'Binary Search Tree qwadfwq',
    //     seconadryText: 'App to visualise binary tree qwfdwqf',
    //     image: eCommerce,
    //     functionality: [
    //         'sdsdsdsd',
    //         'dsfsdf',
    //         'sdsdsdfsdfsdsd',
    //         'sqwddsdasdvqwsdsd',
    //         'axaxsdsdsdsd',
    //         'xxxxxsdsdsdsd',
    //         'xxxxxsdsdsdsd',
    //         'xxxxxsdsdsdsd',
    //     ],
    //     techStack: [
    //         { technology: 'React', color: '#61DBFB', icon: '' },
    //         { technology: 'Sass', color: '#CD6799', icon: '' },
    //     ],
    // },
    // {
    //     title: 'Binary Search Tree qwadfwq',
    //     seconadryText: 'App to visualise binary tree qwfdwqf',
    //     image: eCommerce,
    //     functionality: [
    //         'sdsdsdsd',
    //         'dsfsdf',

    //     ],
    //     techStack: [
    //         { technology: 'React', color: '#fffew', icon: '' },
    //         { technology: 'Scss', color: 'pink', icon: '' },
    //     ],
    // },
]
