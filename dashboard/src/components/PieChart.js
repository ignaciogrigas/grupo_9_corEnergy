import '../css/pie_chart.css';
import { PieChart } from 'react-minimal-pie-chart';
import * as React from 'react';
import Box from '@mui/material/Box';

function PieChartCompo(props) {
  return (
    <section className="pie_chart">
        <article>
            <figure id="pie_chart">
                {<PieChart data={[
            { title: 'Weigths', value:10, color: '#72EFDD' },
            { title: 'Bars', value: 11, color: '#5e60ce' },
            { title: 'Mats', value: 6, color: '#4ea8de' },
            { title: 'Elastic-Bands', value: 6 , color: '#5390d9' },
        ]}/>}
            </figure>
        </article>
        <article>
            <ul className="pie">
                <li>
                    <h3>Pie Chart per Category</h3>
                </li>
                <li>
                    <p>{<Box sx={{
                                    width: 15,
                                    height: 15,
                                    bgcolor: '#72EFDD',
                                    marginRight:1
                                }}/>} Weights</p>
                </li>
                <li>
                    <p>{<Box sx={{
                                    width: 15,
                                    height: 15,
                                    bgcolor: '#5e60ce',
                                    marginRight:1
                                }}/>} Bars</p>
                </li>
                <li>
                    <p>{<Box sx={{
                                    width: 15,
                                    height: 15,
                                    bgcolor: '#4ea8de',
                                    marginRight:1
                                }}/>} Mats</p>
                </li>
                <li>
                    <p>{<Box sx={{
                                    width: 15,
                                    height: 15,
                                    bgcolor: '#5390d9',
                                    marginRight:1
                                }}/>} Elastic Bands</p>
                </li>               
            </ul>
        </article>
    </section>
  );
}

export default PieChartCompo;