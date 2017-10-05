import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>RenderNet</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <script src='static/js/keras.js' />
    </Head>

    <style jsx global>{`
      body { 
        background: #000;
        font: 12px menlo;
        color: #fff;
      }

      h1 {
        font-size: 32px;
      }

      p {
        font-size: 16px;
      }

      .container {
        margin: auto;
        padding-left: 15px;
        padding-right: 15px;
        width: 90%;
      }
    `}</style>
  </div>
)
