const { deflateSync } = require('zlib')
const mermaidConfig = require('./mermaid.init')

const krokiLangs = [
  'actdiag',
  'blockdiag',
  'bpmn',
  'bytefield',
  'c4plantuml',
  'ditaa',
  'dot',
  'erd',
  'excalidraw',
  'graphviz',
  'mermaid',
  'nomnoml',
  'nwdiag',
  'packetdiag',
  'pikchr',
  'plantuml',
  'rackdiag',
  'seqdiag',
  'svgbob',
  'umlet',
  'vega',
  'vegalite',
  'wavedrom',
]

const entrypoint = 'https://kroki.io/'
const mermaidInit = `%%{init: ${JSON.stringify(mermaidConfig)} }%%`

const marpKrokiPlugin = (md) => {
  const { fence } = md.renderer.rules

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const info = md.utils.unescapeAll(tokens[idx].info).trim()

    if (info) {
      const [_, lang, divAttributes] = info.match(/(\w+)\s*(?:\s*(.+)\s*)?/)

      if (krokiLangs.includes(lang)) {
        const data = tokens[idx].content
        const dataWithInit = lang === "mermaid"
          ? `${mermaidInit}\n${data}`
          : data
        const escapedData = deflateSync(dataWithInit).toString('base64url')

        // <marp-auto-scaling> is working only with Marp Core v3
        return (`
          <div class="mermaid">
            <marp-auto-scaling data-downscale-only>
              <img src="${entrypoint}${lang}/svg/${escapedData}" 
                   ${divAttributes ? divAttributes : ""}
              />
            </marp-auto-scaling>
          </div>
        `)
      }
    }

    return fence.call(self, tokens, idx, options, env, self)
  }
}

module.exports = marpKrokiPlugin
