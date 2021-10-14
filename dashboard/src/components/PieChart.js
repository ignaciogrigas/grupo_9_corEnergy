import '../css/pie_chart.css';
import { PieChart } from 'react-minimal-pie-chart';
import * as React from 'react';
import Box from '@mui/material/Box';

function PieChartCompo(props) {
  return (
    <section className="pie_chart">
        <article>
            <figure>
                {<PieChart data={[
            { title: 'Weigths', value:30, color: '#E38627' },
            { title: 'Bars', value: 23, color: '#C13C37' },
            { title: 'Mats', value: 12, color: '#6A2135' },
            { title: 'Elastic-Bands', value: 34 , color: '#6A2135' },
        ]}/>}
            </figure>
        </article>
        <article>
            <ul>
                <li>
                    <h3>Pie Chart per Category</h3>
                </li>
                <li>
                    <p>{<Box sx={{
                                    width: 15,
                                    height: 15,
                                    bgcolor: '#E38627',
                                    marginRight:1
                                }}/>} Weights</p>
                </li>
                <li>
                    <p>{<Box sx={{
                                    width: 15,
                                    height: 15,
                                    bgcolor: '#E38627',
                                    marginRight:1
                                }}/>} Bars</p>
                </li>
                <li>
                    <p>{<Box sx={{
                                    width: 15,
                                    height: 15,
                                    bgcolor: '#E38627',
                                    marginRight:1
                                }}/>} Mats</p>
                </li>
                <li>
                    <p>{<Box sx={{
                                    width: 15,
                                    height: 15,
                                    bgcolor: '#E38627',
                                    marginRight:1
                                }}/>} Elastic Bands</p>
                </li>               
            </ul>
        </article>
    </section>
  );
}

export default PieChartCompo;