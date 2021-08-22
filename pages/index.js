import Get from "./get"
import Style from '../styles/get.module.css'
import { useStore } from '../components/state'


export default function Home() {

  const call = useStore(state => state.call)
  const name = useStore(state => state.name)

  const setCall = useStore(state => state.setCall)

  const handleSubmit = () => { setCall(true) }

  return (
    <div className={Style.container} >
      <button className={Style.submit} onClick={handleSubmit} >Get Villas</button>
      {
        call
         ?
          <Get />
          :
          <div className={Style.data} >
            <ul>
              {
                name.map(e =>
                  <li key={e} >
                    {e}
                  </li>
                )
              }
            </ul>
          </div>
      }
    </div>

  )
}