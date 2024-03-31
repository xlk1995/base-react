import { Floating } from './components/floating'
import { Header } from './components/header'
import { PcMain } from './components/main'

export const Layout = () => {
  return (
    <div>
      <div className=' h-header'>
        <Header />
      </div>
      <div className=' h-main'>
        <PcMain />
      </div>
      <div className=' fixed bottom-5 right-1'>
        <Floating />
      </div>
    </div>
  )
}
