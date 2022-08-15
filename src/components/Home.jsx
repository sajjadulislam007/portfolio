import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import icons from "../icons";

//styles
import "../styles/_home.scss";
import AnimatedBtn from "./AnimatedBtn";
import GenericBtn from "./GenericBtn";
import Intro from "./home-components/Intro";
import ModeSwitch from "./home-components/ModeSwitch";
import ProjectOne from "./home-components/ProjectOne";
import ProjectThree from "./home-components/ProjectThree";
import ProjectTwo from "./home-components/ProjectTwo";

const ResponsiveGridLayout = WidthProvider(Responsive);
const Home = () => {
    const [buttonCollapseOne, setButtonCollapseOne] = useState(false);
    const [buttonCollapseTwo, setButtonCollapseTwo] = useState(false);
    const [buttonCollapseThree, setButtonCollapseThree] = useState(false);
    const [layout, setlayout] = useState([
        { i: "intro", x: 0, y: 0, w: 4, h: 1 },
        { i: "location", x: 4, y: 0, w: 2, h: 1 },
        { i: "project-1", x: 8, y: 0, w: 2, h: 1.5 },

        { i: "music", x: 0, y: 0, w: 2, h: 1 },
        { i: "twitter", x: 2, y: 0, w: 2, h: 1 },
        { i: "project-2", x: 4, y: 0, w: 2, h: 1.5 },

        { i: "current-position", x: 0, y: 0, w: 4, h: 1 },
        { i: "light-dark", x: 8, y: 0, w: 2, h: 1 },

        { i: "project-3", x: 0, y: 0, w: 4, h: 1 },
        { i: "skill-set", x: 4, y: 0, w: 4, h: 1 },
    ]);

    return (
        <div className="home">
            <ResponsiveGridLayout
                layouts={{ lg: layout }}
                breakpoints={{
                    lg: 1200,
                    md: 996,
                    sm: 768,
                    xs: 480,
                    xxs: 0,
                }}
                cols={{ lg: 8, md: 8, sm: 6, xs: 6, xxs: 2 }}
                rowHeight={320}
                width={1200}
                margin={{
                    lg: [15, 15],
                    md: [15, 15],
                    sm: [15, 15],
                    xs: [15, 15],
                    xxs: [15, 15],
                }}
                isResizable={false}
                isBounded={true}
                preventCollision={false}
                // autoSize={true}
            >
                <div key={layout[0].i}>
                    <Intro />
                </div>
                <div key={layout[1].i}>
                    <div>{layout[1].i}</div>
                </div>
                <div
                    key={layout[2].i}
                    onMouseEnter={() => setButtonCollapseOne(true)}
                    onMouseLeave={() => setButtonCollapseOne(false)}
                >
                    <ProjectOne
                        buttonCollapse={buttonCollapseOne}
                        title="CWMM"
                        icons={icons.arrow_up}
                        link="google.com"
                    />
                </div>
                <div key={layout[3].i}>
                    <div>{layout[3].i}</div>
                </div>
                <div key={layout[4].i}>
                    <div>
                        <AnimatedBtn
                            width={{
                                width: "36px",
                            }}
                            icons={icons.arrow_up}
                            link="www.google.com"
                        />
                    </div>
                </div>
                <div
                    key={layout[5].i}
                    onMouseEnter={() => setButtonCollapseTwo(true)}
                    onMouseLeave={() => setButtonCollapseTwo(false)}
                >
                    <ProjectTwo buttonCollapse={buttonCollapseTwo} />
                </div>
                <div key={layout[6].i}>
                    <div>{layout[6].i}</div>
                </div>

                <div key={layout[7].i}>
                    <ModeSwitch />
                </div>
                <div
                    key={layout[8].i}
                    onMouseEnter={() => setButtonCollapseThree(true)}
                    onMouseLeave={() => setButtonCollapseThree(false)}
                >
                    <ProjectThree buttonCollapse={buttonCollapseThree} />
                </div>
                <div key={layout[9].i}>
                    <div>{layout[9].i}</div>
                </div>
            </ResponsiveGridLayout>
        </div>
    );
};

export default Home;
