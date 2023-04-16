import React from "react";

type fcProps = {
    text: string
}

export default function FunctionalComponent(props: fcProps) {
    console.log(props);
    return (
        <div>
            <h2>{props.text}</h2>
        </div>
    );
}


// const FunctionalComponent: FC<fcProps> = props => {
//     console.log(props);
//     return (
//         <div>
//             <h2>{props.text}</h2>
//         </div>
//     );
// }


// export default FunctionalComponent;