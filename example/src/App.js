import React, { useState } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Icon from 'tincode-react-icons'
import { ToastContainer, toast } from 'react-toastify'
import Search from './components/Search'
import { ReactComponent as TinCodeLogoIc } from './assets/logo-tincode.svg'
import allIcons from './allIcons'
import './App.scss'

export default function App() {
  const [icons, setIcons] = useState(allIcons)

  const copyIcon = (name) => {
    const el = document.createElement('textarea')
    el.value = `<Icon name="${name}" />`
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)

    toast.success(
      <div style={{ display: 'flex' }}>
        <span style={{ marginRight: 10 }}>Icono</span>
        <Icon name={name} center />
        <span style={{ marginLeft: 5 }}>copiado.</span>
      </div>
    )
  }

  return (
    <>
      <Container className='icons'>
        <div className='icons__logo'>
          <TinCodeLogoIc />
        </div>
        <Search allIcons={allIcons} setIcons={setIcons} />
        <Grid columns={9} divided>
          <Grid.Row>
            {icons.map((icon) => (
              <Grid.Column onClick={() => copyIcon(icon)}>
                <div className='icons__block'>
                  <div className='icons__block-icon'>
                    <Icon name={icon} center />
                  </div>
                  <p>{icon}</p>
                </div>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>

      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}
