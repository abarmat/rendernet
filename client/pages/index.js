import Uploader from '../components/uploader'
import Page from '../layouts/main'

export default () => (
  <Page>
    <div className='container'>
      <h1>The RenderNet</h1>

      <p>An experimental Neural Network to classify an image as a render or not.</p>
      <p className='sub'><u>Note 1</u>: The model is trained with real state pictures, it may not work well with other type of images :)</p>
      <p className='sub'><u>Note 2</u>: It works with 200x200 images, any input image will be cropped to this size.</p>

      <section className='predict'>
        <p>Drop an image in the dropzone below to know if it's a render or not.</p>
        <Uploader />
      </section>
    </div>
  </Page>
)
