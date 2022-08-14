import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import icons from "../icons";

//styles
import "../styles/_home.scss";

const ResponsiveGridLayout = WidthProvider(Responsive);
const Home = () => {
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
                cols={{ lg: 8, md: 8, sm: 6, xs: 2, xxs: 2 }}
                rowHeight={280}
                width={1200}
                margin={{
                    lg: [20, 20],
                    md: [20, 20],
                    sm: [20, 20],
                    xs: [20, 20],
                    xxs: [20, 20],
                }}
                isResizable={false}
                isBounded={true}
                preventCollision={false}
                // autoSize={true}
            >
                <div key={layout[0].i}>
                    <div>
                        {layout[0].i}{" "}
                        <a href="#" className="btn withIcon">
                            {icons.arrow_rotate}
                            <span>Example Button</span>
                        </a>
                        <a href="#" className="btn withIcon collapes">
                            <span>Example Button</span>
                            <div className="arrow-up">{icons.arrow_up}</div>
                        </a>
                    </div>
                </div>
                <div key={layout[1].i}>
                    <div>{layout[1].i}</div>
                </div>
                <div key={layout[2].i}>
                    <div>{layout[2].i}</div>
                </div>
                <div key={layout[3].i}>
                    <div>{layout[3].i}</div>
                </div>
                <div key={layout[4].i}>
                    <div>{layout[4].i}</div>
                </div>
                <div key={layout[5].i}>
                    <div>{layout[5].i}</div>
                </div>
                <div key={layout[6].i}>
                    <div>{layout[6].i}</div>
                </div>

                <div key={layout[7].i}>
                    <div>{layout[7].i}</div>
                </div>
                <div key={layout[8].i}>
                    <div>{layout[8].i}</div>
                </div>
                <div key={layout[9].i}>
                    <div>{layout[9].i}</div>
                </div>
            </ResponsiveGridLayout>
        </div>
    );
};

export default Home;
