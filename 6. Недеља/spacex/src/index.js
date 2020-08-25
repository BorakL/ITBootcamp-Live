import { LaunchList } from './components/LaunchList'
import { getAllLaunches } from './service'

const app = document.querySelector('#app')


getAllLaunches().then(res => {
    app.appendChild(LaunchList(res.data))
})

// Уместо свих лансирања, приказати само она из 2019. године


