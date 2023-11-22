import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {strArray.map((char, i) => {
                if (char == '' || char === ' ') {
                    return(
                        <span
                            key={char + i}
                            className={`${letterClass} _${i + idx}` + ' space'}
                        >
                            {char}
                        </span>
                    )
                } else {
                    return (
                        <span
                            key={char + i}
                            className={`${letterClass} _${i + idx}`}
                        >
                            {char}
                        </span>
                    )
                }
            })}
        </span>
    )
}

export default AnimatedLetters
