import { LaunchList } from './components/LaunchList'
import { getAllLaunches, getLaunchesByYear } from './service'

const app = document.querySelector('#app')


// getAllLaunches().then(res => {
//     app.appendChild(LaunchList(res.data.filter(launch => launch.launch_year == 2019)))
// })

getLaunchesByYear(2006).then(res => {
    app.appendChild(LaunchList(res.data))
})


// Уместо свих лансирања, приказати само она из 2019. године


