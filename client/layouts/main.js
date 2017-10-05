import Meta from '../components/meta'
import Footer from '../components/footer'

export default ({ children }) => (
  <div>
    <Meta />
    { children }
    <Footer />
  </div>
)
