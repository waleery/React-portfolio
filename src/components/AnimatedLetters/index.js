import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    let letterIndex = 0; 

    return (
        <span>
            {strArray.split(' ').map((word, i) => {
                const letters = word.split('')
                return (
                    <span key={word+i} className={"word" + " " + i}>
                        {letters.map((char, i) => {
                            letterIndex++
                            if (i < letters.length-1) {
                                return (
                                    <span
                                        key={char + i}
                                        className={`${letterClass} _${letterIndex + idx}`}
                                    >
                                        {char}
                                    </span>
                                )
                            } else {
                                return (
                                    <span
                                        key={char + i}
                                        className={`${letterClass} _${letterIndex + idx} space`}
                                    >
                                        {char}
                                    </span>
                                )
                            }
                        })}
                    </span>
                )
            })}
        </span>
    )
}

export default AnimatedLetters
