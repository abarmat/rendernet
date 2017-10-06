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

      section.predict {
        margin: 100px 0;
      }

      .dropzone {
        border: 2px dashed #fff;
        display: inline-block;
        margin-right: 48px;
        margin-top: 24px;
        height: 200px;
        width: 200px;
      }

      .dropzone:hover,
      .dropzone-active {
        background-color: #222;
        cursor: pointer;
      }

      .container {
        text-align: center;
        margin: auto;
        padding-left: 15px;
        padding-right: 15px;
        width: 90%;
      }

      .sub {
        font-size: 13px;
      }
    `}</style>
  </div>
)
