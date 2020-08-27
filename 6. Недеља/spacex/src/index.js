import { LaunchList } from './components/LaunchList.js'
import { getLaunchesByYear } from './service'

const app = document.querySelector('#app')


// getAllLaunches().then(res => {
//     app.appendChild(LaunchList(res.data.filter(launch => launch.launch_year == 2019)))
// })

if(confirm('Да ли сте сигурни?')){
    getLaunchesByYear(2019).then(res => {
        app.appendChild(LaunchList(res.data))
    })
}
else{
    console.log('Није потврђено')
}


// Уместо свих лансирања, приказати само она из 2019. године


