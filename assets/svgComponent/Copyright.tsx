import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CopyRight(props: React.SVGProps<SVGSVGElement>) {
    return (
        <Svg width={10} height={10} viewBox="0 0 10 10" {...props}>
            <Path
                data-name="Icon material-copyright"
                d="M4.04 4.43A1.278 1.278 0 014.19 4a.875.875 0 01.3-.31.887.887 0 01.45-.12.906.906 0 01.315.065.806.806 0 01.26.18.963.963 0 01.17.265.876.876 0 01.07.32h.895a1.79 1.79 0 00-.14-.645 1.5 1.5 0 00-.35-.505 1.633 1.633 0 00-.54-.33 1.931 1.931 0 00-.7-.115 1.954 1.954 0 00-.85.17 1.719 1.719 0 00-.6.46 1.88 1.88 0 00-.355.68 2.928 2.928 0 00-.12.82v.135a2.927 2.927 0 00.115.82 1.818 1.818 0 00.355.675 1.707 1.707 0 00.6.455 2.029 2.029 0 00.85.17 1.907 1.907 0 00.66-.115 1.705 1.705 0 00.54-.315 1.526 1.526 0 00.37-.47 1.346 1.346 0 00.15-.575h-.9a.712.712 0 01-.075.29.736.736 0 01-.18.23.788.788 0 01-.26.15.993.993 0 01-.3.05.849.849 0 01-.445-.115.875.875 0 01-.3-.31 1.306 1.306 0 01-.15-.44A3.37 3.37 0 014 5.07v-.135a3.331 3.331 0 01.04-.5zM5 0a5 5 0 105 5 5 5 0 00-5-5zm0 9a4 4 0 114-4 4.005 4.005 0 01-4 4z"
                fill="#fff"
            />
        </Svg>
    )
}

export default CopyRight
