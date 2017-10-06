export default () => (
  <footer>
    <style jsx>{`
      footer {
        border-top: 1px solid #fff;
        color: #fff;
        height: 95px;
        letter-spacing: 2px;
        margin-top: 24px;
        padding: 24px 0;
      }

      footer a {
        color: #fff;
      }

      footer p {
        font-size: 12px;
      }
    `}</style>

    <div className='container'>
      <p>Trained on a dataset from <a href='https://properati.com.ar'>Properati</a></p>
      <p className='code'>
        Using <a href='https://github.com/zeit/next.js'>next.js</a> + <a href='https://github.com/transcranial/keras-js'>keras.js</a> ❤️ &rsaquo; <a href='https://github.com/abarmat/rendernet'>Code</a>
      </p>
      <p className='author'>
        <a href='https://abarmat.com'>Ariel Barmat</a> - 2017
      </p>
    </div>
  </footer>
)
