import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './index.scss'
import './styles.css'

export default function Icon(props) {
  const { name, className, center } = props

  return (
    <i
      aria-hidden='true'
      className={classNames(`tincode icon icon-${name}`, {
        [className]: className,
        center: center
      })}
    />
  )
}

Icon.defaultProps = {
  className: '',
  center: false
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  center: PropTypes.bool
}
