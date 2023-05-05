import axios from 'axios'
import React, { useState } from 'react'

function Home() {

    const api_key = "0e14ae90ffd782ef29c36757c0ddd119"
    const[data, setData] = useState('')
    const[value, setValue] = useState('')
    

    function cityName (e){
        setValue(e.target.value)
    }

    function handleWeather(e){
        e.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${api_key}`)
        .then((result) => {
            console.log(result.data)
            setData(result.data)
        })
    }

    // console.log(data)

  return (
    <>
        <div className="container">
            <form onSubmit={handleWeather}>
                <input type='text' value={value} onChange={cityName} />
                <button type='submit'>Submit</button>
            </form>

            {
                typeof(data) === 'object' ? (
                    <div className='weatherData'>
                        <h1>{data.name}
                            <span>
                                <img src={`https://flagcdn.com/16x12/${data.sys.country.toLowerCase()}.png`}/>
                            </span>
                        </h1>
                        <h3>Temp : {data.main.temp}</h3>
                        <h3>Humidity : {data.main.humidity}</h3>
                    </div> 
                ): ""
            }

        </div>
    </>
  )
}

export default Home