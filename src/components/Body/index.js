import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body">
          {!showLeftNavbar ? null : (
            <div className="nav-container">
              <h1 className="nav-heading">Left Navbar Menu</h1>
              <ul className="items-list">
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </ul>
            </div>
          )}
          {!showContent ? null : (
            <div className="content">
              <h1 className="content-heading">Content</h1>
              <p className="content-para">
                Lorem ipsum Duis fugiat est in cupidatat sunt. Culpa et anim
                fugiat ipsum Lorem laboris eu adipisicing in do nostrud et
                deserunt ut. Lorem nisi minim nulla esse nisi dolor culpa ut non
                ut est.
              </p>
            </div>
          )}
          {!showRightNavbar ? null : (
            <div className="nav-container">
              <h1 className="nav-heading">Right Navbar Menu</h1>
              <div className="ad">Ad 1</div>
              <div className="ad">Ad 2</div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
