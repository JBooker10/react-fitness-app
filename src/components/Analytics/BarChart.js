import { Component } from 'react';
import { Element } from 'react-faux-dom';
import * as d3 from 'd3';
import './analytics.css';

class BarChart extends Component {
  plot(chart, width, height) {
          // create scales!
          const xScale = d3.scaleBand()
              .domain(this.props.fitnessData.map(d => d.workout))
              .range([0, width]);
          const yScale = d3.scaleLinear()
              .domain([25, 400])
              .range([height, 25]);
          const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

          chart.selectAll('.bar')
              .data(this.props.fitnessData)
              .enter()
              .append('rect')
              .classed('bar', true)
              .attr('x', d => xScale(d.workout))
              .attr('y', d => yScale(d.weight))
              .attr('height', d => (height - yScale(d.weight)))
              .attr('width', d => xScale.bandwidth() - 10)
              .style('fill', (d, i) => colorScale(i))

          chart.selectAll('.bar-label')
              .data(this.props.fitnessData)
              .enter()
              .append('text')
              .classed('bar-label', true)
              .attr('x', d => xScale(d.workout) + xScale.bandwidth()/2)
              .attr('dx', 0)
              .attr('y', d => yScale(d.weight))
              .attr('dy', -6)
              .text(d => d.weight + ' lbs.');

          const xAxis = d3.axisBottom()
              .scale(xScale);

          chart.append('g')
              .classed('x axis', true)
              .attr('transform', `translate(0,${height})`)
              .call(xAxis);

          const yAxis = d3.axisLeft()
              .ticks(6)
              .scale(yScale);

          chart.append('g')
              .classed('y axis', true)
              .attr('transform', 'translate(0,0)')
              .call(yAxis);

          chart.select('.x.axis')
              .append('text')
              .attr('x',  width/2)
              .attr('y', 60)
              .attr('fill', '#000')
              .style('font-size', '20px')
              .style('text-anchor', 'middle')
              .text('Exercise');

          chart.select('.y.axis')
              .append('text')
              .attr('x', 0)
              .attr('y', 0)
              .attr('transform', `translate(-50, ${height/2}) rotate(-90)`)
              .attr('fill', '#000')
              .style('font-size', '20px')
              .style('text-anchor', 'middle')
              .text('Max Weight');

          const yGridlines = d3.axisLeft()
              .scale(yScale)
              .ticks(10)
              .tickSize(-width,0,0)
              .tickFormat('')

          chart.append('g')
              .call(yGridlines)
              .classed('gridline', true);
      }

      drawChart() {
          const width = 750;
          const height = 430;
          const el = new Element('div');
          const svg = d3.select(el)
              .append('svg')
              .attr('id', 'chart')
              .attr('width', width)
              .attr('height', height)


          const margin = {
              top: 50,
              bottom: 40,
              left: 80,
              right: 40
          };

          const chart = svg.append('g')
              .classed('display', true)
              .attr('transform', `translate(${margin.left},${margin.top})`);

          const chartWidth = width - margin.left - margin.right;
          const chartHeight = height - margin.top - margin.bottom
          this.plot(chart, chartWidth, chartHeight);

          return el.toReact();
      }

      render() {
          return this.drawChart();
      }
  }


export default BarChart;
