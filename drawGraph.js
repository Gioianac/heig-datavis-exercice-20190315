const d3 = require('d3')
const fs = require('fs')

const writeSvg = svg =>
  fs.writeFileSync('graph.svg', svg, 'utf-8')
// passez la chaine de charactère à writeSvg pour écrire graph.svg


const DATA = require('./asylumByCountry.json');

const COLORS = ["black", "#00dac3", "orange", "yellow", "green", "red", "purple", "pink",
                "grey", "blue", "#0066ff", "#6600cc", "#cc6699", "#ffff00", "#66ffcc", "#ff9900",
                "#ccffff", "#ff5050", "#006699"]

const graph = DATA => 
`<svg width="1200" heigth="800" xmlns="http://www.w3.org/2000/svg">
${DATA.map((d,i) => `<circle cx="${(i+1)*90}" cy="105" r="${d.somme}" fill="${COLORS[i]}" />
					 <text x="${(i+1)*70}" y="40" font-family="Helvetica" font-size="9">${d.country_asylum}(${d.somme})</text>`).join('\n')}
					 <text x="60" y="190" font-family="Helvetica" font-size="20">Demandes d'asiles par pays</text>
</svg>`


writeSvg(graph(DATA));