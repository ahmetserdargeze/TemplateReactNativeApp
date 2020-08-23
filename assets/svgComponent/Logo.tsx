import * as React from "react"
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Rect,
    Text,
    TSpan,
} from "react-native-svg"

function Logo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <Svg
            width={213.098}
            height={117.199}
            viewBox="0 0 213.098 117.199"
            {...props}
        >
            <Defs>
                <LinearGradient
                    id="prefix__a"
                    x1={0.978}
                    y1={0.02}
                    x2={0}
                    y2={1}
                    gradientUnits="objectBoundingBox"
                >
                    <Stop offset={0} stopColor="#f29e4c" />
                    <Stop offset={0.145} stopColor="#efea5a" />
                    <Stop offset={0.251} stopColor="#f1c453" />
                    <Stop offset={0.489} stopColor="#b9e769" />
                    <Stop offset={0.651} stopColor="#f1c453" />
                    <Stop offset={0.805} stopColor="#efea5a" />
                    <Stop offset={1} stopColor="#83e377" />
                </LinearGradient>
            </Defs>
            <G data-name="New Card Design" transform="rotate(-25 80.363 17.816)">
                <Rect
                    data-name="Rectangle 74"
                    width={60}
                    height={90}
                    rx={12}
                    fill="url(#prefix__a)"
                />
                <Text
                    data-name={1}
                    transform="translate(21 20)"
                    fill="#fff"
                    fontSize={35}
                    fontFamily="Roboto-Regular, Roboto"
                    letterSpacing=".012em"
                >
                    <TSpan x={0} y={37}>
                        {"1"}
                    </TSpan>
                </Text>
            </G>
            <G data-name="New Card Design" transform="rotate(-8 85.567 -365.662)">
                <Rect
                    data-name="Rectangle 74"
                    width={60}
                    height={90}
                    rx={12}
                    fill="url(#prefix__a)"
                />
                <Text
                    data-name={2}
                    transform="translate(21 20)"
                    fill="#fff"
                    fontSize={35}
                    fontFamily="Roboto-Regular, Roboto"
                    letterSpacing=".012em"
                >
                    <TSpan x={0} y={37}>
                        {"2"}
                    </TSpan>
                </Text>
            </G>
            <G data-name="New Card Design" transform="rotate(13 54.319 482.29)">
                <Rect
                    data-name="Rectangle 74"
                    width={60}
                    height={90}
                    rx={12}
                    fill="url(#prefix__a)"
                />
                <Text
                    data-name={3}
                    transform="translate(21 20)"
                    fill="#fff"
                    fontSize={35}
                    fontFamily="Roboto-Regular, Roboto"
                    letterSpacing=".012em"
                >
                    <TSpan x={0} y={37}>
                        {"3"}
                    </TSpan>
                </Text>
            </G>
            <G data-name="New Card Design" transform="rotate(25 57.172 362.889)">
                <Rect
                    data-name="Rectangle 74"
                    width={60}
                    height={90}
                    rx={12}
                    fill="url(#prefix__a)"
                />
                <Text
                    data-name={4}
                    transform="translate(21 20)"
                    fill="#fff"
                    fontSize={35}
                    fontFamily="Roboto-Regular, Roboto"
                    letterSpacing=".012em"
                >
                    <TSpan x={0} y={37}>
                        {"4"}
                    </TSpan>
                </Text>
            </G>
        </Svg>
    )
}

export default Logo
