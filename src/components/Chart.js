import Svg from './SvgChart';
import './chart.css';

const Chart = () => (
  <div className="chart-container d-flex flex-column gap-2 align-items-center p-5">
    <div className="chart-cont-uper-head d-flex w-100 align-items-center justify-content-between">
      <div className="uper-head-right-side">
        <h4>Afghanistan Population (2023)</h4>
      </div>
      <div className="uper-head-left-side d-flex gap-5">
        <div className="uper-head-left-side-item d-flex align-items-center gap-2">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M 0 0 L 20 0 Q 20 0 20 20 L 20 20 L 0 20 Z"
              fill="#0082CC"
            />
          </svg>
          <div className="">Male Population</div>
        </div>
        <div className="uper-head-left-side-item d-flex align-items-center gap-2">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M 0 0 L 20 0 Q 20 0 20 20 L 20 20 L 0 20 Z"
              fill="#FB4540"
            />
          </svg>
          <div className="white-dark">Famile Population</div>
        </div>
      </div>
    </div>
    <div className="chart-cont-chart w-100 d-flex flex-column gap-3">
      <div className="d-flex gap-2 align-items-center">
        <h5 className="chart-age">Years</h5>
        <Svg />
      </div>
      <h5 className="p-0 m-0">Percentage of Population</h5>
    </div>
  </div>
);

export default Chart;
