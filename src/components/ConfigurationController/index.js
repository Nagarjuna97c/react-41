import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const changeContent = () => {
        onToggleShowContent()
      }
      const changeLeftnav = () => {
        onToggleShowLeftNavbar()
      }
      const changeRightnav = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controller">
          <h1 className="configuration-heading">Layout</h1>
          <div className="checkbox">
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={changeContent}
            />
            <label htmlFor="content" className="label">
              Content
            </label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="left-nav"
              checked={showLeftNavbar}
              onChange={changeLeftnav}
            />
            <label htmlFor="left-nav" className="label">
              Left Navbar
            </label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="right-nav"
              checked={showRightNavbar}
              onChange={changeRightnav}
            />
            <label htmlFor="right-nav" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
