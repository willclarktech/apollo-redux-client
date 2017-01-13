import Inferno from 'inferno';

export default ({width, height}) => {
    return (
        <svg version="1.0"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 320 320"
             width={width}
             height={height}
             preserveAspectRatio="xMidYMid meet"
        >
            <text text-anchor="center" x="-50%" y="50%" fill="red" font-size="120">Apollo Redux</text>
        </svg>
    )
}
