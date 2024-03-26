import $styles from './index.module.scss'

const NavFooter = () => {
  return (
    <div className={$styles['nav-footer']}>
      <div className={$styles.top}>
        <a
          href='https://www.bilibili.com'
          target='_blank'
          rel='noreferrer'
        >
          Bilibili
        </a>
        <a
          href='https://www.google.com'
          target='_blank'
          rel='noreferrer'
        >
          Google
        </a>
        <a
          href='https://chat.openai.com/'
          target='_blank'
          rel='noreferrer'
        >
          ChatGPT
        </a>
      </div>
      <div className={$styles.bottom}>
        @copyrihgt author xlk
      </div>
    </div>
  )
}

export default NavFooter
