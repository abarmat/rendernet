export default () => (
  <footer>
    <style jsx>{`
      footer {
        border-top: 1px solid #fff;
        color: #fff;
        height: 95px;
        letter-spacing: 2px;
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
        <a href='https://github.com/abarmat/rendernet'>Code</a>
      </p>
      <p className='author'>
        <a href='https://abarmat.com'>Ariel Barmat</a> - 2007
      </p>
    </div>
  </footer>
)
