import React from 'react';
import LineChartComponent from "./component/line-chart-component.jsx";
import BarChartComponent from "./component/bar-chart-component.jsx";
import PieChartComponent from "./component/pie-chart-component.jsx";
import AreaChartComponent from "./component/area-chart-component.jsx";
import ComposedChartComponent from "./component/composedChart-component.jsx";
import ScatterChart from "./component/scatter-chart.jsx";
import RadarChartComponent from "./component/radar-chart-component.jsx";
import RadialBarChartComponent from "./component/radial-bar-chart-component.jsx";


const App = () => {
    return (
        <div>
            <div className="container">
                <LineChartComponent />
                <BarChartComponent />
                <PieChartComponent />
                <AreaChartComponent />
                <ComposedChartComponent />
                <ScatterChart />
                <RadarChartComponent />
                <RadialBarChartComponent />
            </div>
        </div>
    );
};

export default App;