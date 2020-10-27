import React, { useState } from 'react'
import styles from './JoinRoom.module.less'
import {useTranslation} from 'react-i18next'
import cn from 'classnames'

const JoinRoom = () => {
  const {t} = useTranslation()
  const [roomName, setRoomName] = useState('')
  const onFocusOut = (e) => e.target.placeholder = t('main.joinRoom')
  const onFocus = (e) => e.target.placeholder = t('main.joinRoomPlaceholder')

  return (
    <div className={cn(styles.inputBox)}>
      <input
        type="text"
        className={cn(styles.input)}
        onChange={(e) => setRoomName(e.target.value)}
        value={roomName}
        placeholder={t('main.joinRoom')}
        onBlur={(e) => onFocusOut(e)}
        onFocus={(e) => onFocus(e)}
      />
    </div>
  )
}

export default JoinRoom
