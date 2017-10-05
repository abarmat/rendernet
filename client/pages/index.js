import Uploader from '../components/uploader'
import Page from '../layouts/main'

export default () => (
  <Page>
    <div className='container'>
      <h1>The RenderNet</h1>
      <p>Drop an image in the dropzone below, I will tell you if it's a render or not.</p>

      <Uploader />
    </div>
  </Page>
)
